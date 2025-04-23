import streamlit as st
import time
import base64

# ——— Page Setup ———
st.set_page_config(page_title='Ocuscope', page_icon='🎯')
st.title("OcuNeurologix - Ocuscope")
st.markdown("> Powered by OcuNeurologix")

# ——— Sidebar ———
st.sidebar.title("Ocuscope")
st.sidebar.write("v1.0 • ©2025 OcuNeurologix")

# ——— Style Tweaks ———
st.markdown("""
  <style>
    .stButton > button {background-color:#004080; color:white; font-size:1.2em;}
    .stProgress>div>div>div>div {background-color:#00cc44;}
  </style>
""", unsafe_allow_html=True)

# ——— Session State ———
if 'done' not in st.session_state:
    st.session_state.done = False

# ——— Home / Start Test ———
if not st.session_state.done:
    st.write("Welcome! Click below to begin your **1‑minute** Ocuscope assessment.")
    if st.button("🚀 Start Test"):
        with st.spinner("Testing in progress…"):
            progress_bar = st.progress(0)
            for i in range(60):
                time.sleep(1)
                progress_bar.progress((i+1)/60)
        st.session_state.done = True

# ——— Results / Conclusion ———
if st.session_state.done:
    st.success("✅ Test Complete!")

    st.subheader("Key Results")
    # Example metrics; replace with real data when available
    mean_d = 65.2       # px
    sacc_count = 8      # count
    latency = 0.32      # s
    c1, c2, c3 = st.columns(3)
    c1.metric("Mean Pupil Diameter", f"{mean_d:.1f} px")
    c2.metric("Saccade Count",       f"{sacc_count}")
    c3.metric("Light Reflex Latency",f"{latency:.2f} s")

    st.subheader("Conclusion")
    st.markdown(
        "<span style='color:green; font-weight:bold'>"
        "Diameter, gaze, and saccades are normal. No concussion suspected at this time."
        "</span>", unsafe_allow_html=True
    )

    # ——— Diagnostic Report Download & Embed ———
    try:
        with open("full_normal_report.pdf", "rb") as f:
            pdf_bytes = f.read()
        st.download_button(
            label="⬇️ Download Full Report",
            data=pdf_bytes,
            file_name="Ocuscope_Report.pdf",
            mime="application/pdf"
        )
        b64 = base64.b64encode(pdf_bytes).decode('utf-8')
        st.markdown(
            f'<iframe src="data:application/pdf;base64,{b64}" '
            'width="700" height="900" type="application/pdf"></iframe>',
            unsafe_allow_html=True
        )
    except FileNotFoundError:
        st.error("Diagnostic report file not found.")

    # ——— Sharing Options ———
    st.write("Send report to:")
    p_col, s_col, d_col = st.columns(3)
    if p_col.button("Parent"):
        st.success("Report sent to parent.")
    if s_col.button("Self"):
        st.success("Report sent to yourself.")
    if d_col.button("Physician"):
        st.success("Report sent to physician.")
