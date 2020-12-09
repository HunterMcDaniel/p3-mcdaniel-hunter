import {header} from './modules/header.js';
import {footer} from './modules/footer.js';
import {lunchGenerator} from './modules/lunchgenerator.js';

class App {

  constructor{

    this.renderTemplate();
}



// And then create our markup:
const template = `
 <div class="header">
    <h1>
        ${Header.name}
    </h1>
 </div>
 <div class="main">
  <h2>
      ${lunchGenerator.name}
  </h2>
</div>
`;

      document.body.innerHTML = template;
    }
  }

new App;
