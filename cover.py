from pathlib import Path

# Create an HTML cover that matches the user's specification
html = """<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Cover - Hobiku adalah Hidupku</title>
<style>
  /* A5 cover size in CSS when printed: 148mm x 210mm.
     For screen, we size it to a comfortable pixel dimension and center it. */
  :root{
    --bg:#F4F8FF;
    --blue:#1E5AC8;
    --text:#0A1428;
  }
  html,body{height:100%;margin:0;background:#f0f4f8;display:flex;align-items:center;justify-content:center;font-family: Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial;}
  .cover {
    width: 1123px; /* scaled A5 width for screen */
    height: 1587px; /* scaled A5 height for screen */
    background: linear-gradient(180deg,var(--bg),#ffffff);
    border: 1px solid rgba(30,90,200,0.06);
    box-shadow: 0 10px 30px rgba(10,20,40,0.08);
    padding:48px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    gap:20px;
    color:var(--text);
  }
  .top{
    flex:0 0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    margin-top:20px;
  }
  .title{
    font-size:54px;
    color:var(--blue);
    font-weight:700;
    margin:0 0 8px 0;
    letter-spacing:0.2px;
  }
  .subtitle{
    font-size:20px;
    color:var(--text);
    opacity:0.85;
    margin:0;
  }
  .visual{
    flex:1 1 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
  }
  /* laptop box */
  .laptop{
    width:68%;
    max-width:760px;
    aspect-ratio: 16 / 9;
    border-radius:12px;
    background: linear-gradient(180deg,#ffffff, #f6fbff);
    box-shadow: 0 8px 24px rgba(30,90,200,0.08);
    border:2px solid rgba(30,90,200,0.12);
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:36px;
  }
  .screen {
    width:100%;
    height:100%;
    background: linear-gradient(135deg, rgba(30,90,200,0.08), transparent 40%);
    border-radius:8px;
    position:relative;
    overflow:hidden;
    display:flex;
    gap:18px;
    align-items:flex-start;
    padding:26px;
  }
  .code-block{
    width:55%;
    height:70%;
    background:rgba(10,20,40,0.03);
    border-radius:8px;
    padding:18px;
    box-sizing:border-box;
    font-family: "Source Code Pro", "Courier New", monospace;
    color:var(--blue);
    font-size:18px;
    line-height:1.5;
    overflow:hidden;
  }
  .code-line{height:18px;}
  .code-line span {display:inline-block;}
  .editor{
    width:35%;
    height:70%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:12px;
  }
  .davinci {
    width:86px;height:86px;border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    border:4px solid rgba(30,90,200,0.16);
    background:linear-gradient(180deg, rgba(30,90,200,0.06), rgba(30,90,200,0.01));
  }
  .davinci svg {width:56px;height:56px;display:block;}
  .caption {font-size:14px;color:var(--text);opacity:0.8;}
  .footer {
    flex:0 0 auto;
    display:flex;
    justify-content:center;
    gap:12px;
    margin-bottom:10px;
  }
  .author{
    font-size:16px;color:var(--text);opacity:0.9;
  }

  /* responsive small screens */
  @media (max-width:1200px){
    .cover{transform:scale(0.85);transform-origin:center;}
  }
  @media (max-width:900px){
    .cover{transform:scale(0.65);}
  }
</style>
</head>
<body>
  <div class="cover" role="main" aria-label="Cover cerpen Hobiku adalah Hidupku">
    <div class="top">
      <h1 class="title">Hobiku adalah Hidupku</h1>
      <p class="subtitle">Cerpen karya Heka — coding & editing sebagai jalan masa depan</p>
    </div>

    <div class="visual" aria-hidden="true">
      <div class="laptop" role="img" aria-label="Ilustrasi laptop dengan kode dan editor video">
        <div class="screen">
          <div class="code-block" aria-hidden="true">
            <div class="code-line"><span style="color:#7DA6FF;">const</span> <span style="color:#1E5AC8;">dream</span> = <span style="color:#2B8F7A;">&quot;programmer&quot;</span>;</div>
            <div class="code-line"><span style="color:#7DA6FF;">function</span> <span style="color:#1E5AC8;">build</span>() {</div>
            <div class="code-line">&nbsp;&nbsp;<span style="color:#F08A5D;">// belajar terus</span></div>
            <div class="code-line">&nbsp;&nbsp;<span style="color:#7DA6FF;">return</span> <span style="color:#2B8F7A;">path</span>;</div>
            <div class="code-line">}</div>
            <div style="height:12px;"></div>
            <div class="code-line"><span style="color:#A7B9FF;">// editor: DaVinci-like</span></div>
          </div>

          <div class="editor" aria-hidden="true">
            <div class="davinci" title="Simbol aplikasi editing">
              <!-- simple Davinci-like icon using SVG -->
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs><linearGradient id="g1" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#4D8BFF"/><stop offset="1" stop-color="#1E5AC8"/></linearGradient></defs>
                <circle cx="50" cy="50" r="44" fill="url(#g1)" opacity="0.95"/>
                <g transform="translate(50,50)">
                  <polygon points="0,-22 -17,18 17,18" fill="#FFF" opacity="0.95"/>
                  <circle cx="0" cy="0" r="6" fill="#1E5AC8"/>
                </g>
              </svg>
            </div>
            <div class="caption">Edit video — cerita dalam frame</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="author">Cerpen karya Heka</div>
    </div>
  </div>
</body>
</html>
"""

# Save HTML to file
out_path = Path("/mnt/data/cover_cerpen_hobiku_adalah_hidupku.html")
out_path.write_text(html, encoding="utf-8")

str(out_path)
