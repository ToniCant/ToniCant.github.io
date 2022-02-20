const starTemplate = document.createElement('template');
starTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>

    a{
        cursor: pointer;
        font-size: 30px;
    }

    </style>

    <div>
        <a><i class="fa fa-star"></i></a>
        <a><i class="fa fa-star"></i></a>
        <a><i class="fa fa-star"></i></a>
        <a><i class="fa fa-star"></i></a>
        <a><i class="fa fa-star"></i></a>
    </div>
`;

class StarRating extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(starTemplate.content.cloneNode(true));

        const stars = document.querySelectorAll("a");

        stars.addEventListener("click", changeRating);

        function changeRating() {
            
        }
    }
    
}

window.customElements.define('star-rating', StarRating);