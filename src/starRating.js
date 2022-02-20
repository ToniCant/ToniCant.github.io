const starTemplate = document.createElement('template');
starTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>

    a{
        color: grey;
        cursor: pointer;
        font-size: 30px;
    }

    </style>

    <div id="stars-container">
        <a id="star" onclick="setRating(this)"><i class="fa fa-star"></i></a>
        <a class="star" onclick="setRating(this)"><i class="fa fa-star"></i></a>
        <a class="star" onclick="setRating(this)"><i class="fa fa-star"></i></a>
        <a class="star" onclick="setRating(this)"><i class="fa fa-star"></i></a>
        <a class="star" onclick="setRating(this)"><i class="fa fa-star"></i></a>
    </div>
`;



class StarRating extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(starTemplate.content.cloneNode(true));

    }
    
}

window.customElements.define('star-rating', StarRating);