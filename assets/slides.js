async function loadSlides(){
    const res = await fetch('slides.json');   // ルートから読み込む
    const slides = await res.json();
    const ac = document.getElementById('logicAccordion');
    ac.innerHTML = '';
  
    slides.forEach((s,i)=>{
      const first = i===0?'show':'';
      ac.insertAdjacentHTML('beforeend',`
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${s.week}">
            <button class="accordion-button ${first?'':'collapsed'}" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapse${s.week}"
                    aria-expanded="${first?'true':'false'}" aria-controls="collapse${s.week}">
              Week ${s.week} － ${s.title}
            </button>
          </h2>
          <div id="collapse${s.week}" class="accordion-collapse collapse ${first}"
               aria-labelledby="heading${s.week}" data-bs-parent="#logicAccordion">
            <div class="accordion-body">
              ${
                s.iframe
                ? `<div class="ratio ratio-16x9 embedded-slide">
                     <iframe src="${s.iframe}" title="Slide Week ${s.week}" allowfullscreen></iframe>
                   </div>`
                : `<p>スライドは準備中です。公開までお待ちください。</p>`
              }
            </div>
          </div>
        </div>
      `);
    });
  }
  loadSlides();
  