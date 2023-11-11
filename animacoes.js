//Animações para os elementos selecionados com base na biblioteca JavaScript ScrollReveal.

window.sr = ScrollReveal({ reset: true });
sr.reveal(".cabecalho", { duration: 2000 });

window.sr = ScrollReveal({ reset: true });
sr.reveal(".secao__principal__titulo", {duration: 2000});

sr.reveal(".secao__secundaria__titulo", { rotate: { x: 0, y: 90, z: 0 }, duration: 2000 });
sr.reveal(".secao__secundaria__descricao", { reset: true, duration: 2000 });

sr.reveal(".secao__secundaria__imagem", { reset: true, origin: "top", distance: "50px", delay: 300, duration: 2000 });

sr.reveal(".secao__secundaria__modalidades__individual", { reset: true, origin: "top", distance: "50px", delay: 300, duration: 2000 });

sr.reveal(".secao__secundaria__campeas__video", { origin: "top", distance: "50px", delay: 300, duration: 2000 });

sr.reveal(".secao__secundaria__hit", { origin: "top", distance: "50px", delay: 300, duration: 2000 });

sr.reveal(".carousel", { origin: "top", distance: "50px", delay: 300, duration: 2000 });

sr.reveal(".secao__secundaria__entrevistas__container__item", { origin: "top", distance: "50px", delay: 300, duration: 2000 });


