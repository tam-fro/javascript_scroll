// JavaScript

// //実行する機能
// const show = (entries) => {
//     // console.log(entries[0].target);
//     const keyframes = {
//         opacity: [0, 1],
//         translate: ['200px 0',0]
//       }
//       entries[0].target.animate(keyframes,600);
//   }

// //監視機能の設置
// const observer = new IntersectionObserver(show);

// //監視対象の指示
// observer.observe(document.querySelector('#img01'));

// //交差しているときだけ
// const show = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting){
//       const keyframes = {
//         opacity: [0, 1],
//         translate: ['200px 0',0]
//       }
//       entry.target.animate(keyframes,600);
//     }
//   });
// }

// //一度表示したら動作を止める
// const show = (entries, obs) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting){
//       const keyframes = {
//         opacity: [0, 1],
//         translate: ['200px 0',0]
//       }
//       entry.target.animate(keyframes,600);

//       //一度表示されたら止める
//       obs.unobserve(entry.target);
//     }
//   });
// }
  
//   const observer = new IntersectionObserver(show);
  
//   //監視対象
//   const images = document.querySelectorAll('.img');
//   images.forEach(img =>{
//     observer.observe(img);
//   }); 

  const show = (entries,obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['200px 0',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
  }
    
  
  const observer = new IntersectionObserver(show);
  observer.observe(document.querySelector('#img01'));
  
  const show2 = (entries,obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['-200px 0',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
   }
    
  
  const observer2 = new IntersectionObserver(show2);
  observer2.observe(document.querySelector('#img02'));
  
  const show3 = (entries,obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['200px 0',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
  }
  
  const observer3 = new IntersectionObserver(show3);
  observer3.observe(document.querySelector('#img03'));

  const show4 = (entries,obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['-200px 0',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
   }
  
  const observer4 = new IntersectionObserver(show4);
  observer4.observe(document.querySelector('#img04'));

  const show5 = (entries,obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['200px 0',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
  }
  
  const observer5 = new IntersectionObserver(show5);
  observer5.observe(document.querySelector('#img05'));

  const show6 = (entries,obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['-200px 0',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
   }
  
  const observer6 = new IntersectionObserver(show6);
  observer6.observe(document.querySelector('#img06'));

  const show7 = (entries,obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
          const keyframes = {
            opacity: [0, 1],
            translate: ['0 200px',0]
          }
          entry.target.animate(keyframes,600);
    
          //一度表示されたら止める
          obs.unobserve(entry.target);
        }
      });
   }
  
  const observer7 = new IntersectionObserver(show7);
  observer7.observe(document.querySelector('#img07'));