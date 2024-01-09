const testimonials = [
{
    image:`https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hello ngab, saya itu Fullstack developer lhoo!!!',
    author:'-Haidarjf07'
},{
    image:`https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hay gesss, saya frontEnd Dev lhoo!!!',
    author:'-Zhakayak'
},{
    image:`https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    content:'Hi, saya backEnd Dev nih, senggol dong!!!',
    author:'-Letum'
}
]

let testimonialsHTML = '';

testimonials.forEach(x => 
    testimonialsHTML += `<div class="card_testimonial">
                         <img src="${x.image}">
                         <p>"${x.content}."</p>
                         <p id="name">~ ${x.author}</p>
                         </div>                   
                        `)

document.getElementById('mantap').innerHTML = testimonialsHTML