const template = document.createElement('template');
template.innerHTML = `
    <style>
        .nav-bar{
            z-index: 11;
            position: fixed;
            font-weight: 700;
            background-color: #FB8B53;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50vw;
            overflow: hidden;
            padding: 10px; 20px;
            margin: 20px 0px;
        }

        .nav-bar *{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        a {
            color: antiquewhite;
            text-decoration: none;
            padding: 10px;
        }

        a:hover{
            background-color: #252729;
        }

        ul{
            list-style: none;
            display: flex;
        }

    </style>
    <div class="nav-bar">
        <a href="./index.html">Etusivu</a>
            <ul>
                <li><a href="./fixing.html">Korjaaminen</a></li>
                <li><a href="./safety.html">Turvallisuus/varusteet</a></li>
                <li><a href="./law.html">Lakiasiat</a></li>
            </ul>
        <a href="./contact.html">Ota yhteyttä</a>
            
    </div>
    
`;

class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

window.customElements.define('nav-bar', NavBar);