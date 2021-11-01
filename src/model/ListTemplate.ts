import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement){}

    render(item: HasFormatter, heading: string, position: 'start' | 'end') {
        const li = document.createElement('li');
        
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}


/* 
    1. Register a list container (ul) in the constructor
    2. Create a render method to render a new 'li' to the container
        -- Accepts arguments: invoice or payment, a heading and position
        -- Create the HTML template (li, h4, p)
        -- Add the 'li' template to the start / end of the list
*/