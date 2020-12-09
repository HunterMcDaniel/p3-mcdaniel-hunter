class App {
  renderTemplate() {
  import {header} from 'header.js';
  import {footer} from 'footer.js';
  import {lunchGenerator} from 'lunchgenerator.js';
}

// And then create our markup:
const markup = `
 <div class="header">
    <h1>
        ${header.name}
    </h1>
 </div>
 <div class="main">
  <h2>
      ${lunchGenerator.name}
  </h2>
</div>
`;
    }
  }
