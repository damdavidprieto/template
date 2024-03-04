import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../layouts/TemplateLayout';
import '../components/commons/container/Container';
import '../components/commons/container/Panel';
import '../components/composes/Template/panels/ButtonsPanel';
import '../components/composes/Template/panels/InpuntsPanel';
import '../components/commons/icons/Info';
import '../components/composes/Template/panels/IconsPanel';

@customElement('app-home-view')
export class HomeView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                <app-panel-buttons></app-panel-buttons>
                <app-panel-inputs></app-panel-inputs>
                <app-panel-icons></app-panel-icons>
                <my-element>
                    <h1>Vite + Lit</h1>
                </my-element>           
            </app-template-layout>
        `;
    }
}
