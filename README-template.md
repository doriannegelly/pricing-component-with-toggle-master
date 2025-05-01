# Frontend Mentor - Solution Pricing component with toggle

Ceci est une solution au [défi Pricing component with toggle](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Les défis de Frontend Mentor vous aident à améliorer vos compétences en codage en construisant des projets réalistes.

## Table des matières

- [Aperçu](#aperçu)
  - [Le défi](#le-défi)
  - [Capture d'écran](#capture-décran)
  - [Liens](#liens)
- [Mon processus](#mon-processus)
  - [Construit avec](#construit-avec)
  - [Ce que j'ai appris](#ce-que-jai-appris)
  - [Développement continu](#développement-continu)
  - [Ressources utiles](#ressources-utiles)
- [Auteur](#auteur)
- [Remerciements](#remerciements)

**Note : Supprimez cette note et mettez à jour la table des matières en fonction des sections que vous conservez.**

## Aperçu

### Le défi

Les utilisateurs doivent pouvoir :

- Voir la disposition optimale du composant en fonction de la taille de l'écran de leur appareil.
- Contrôler la bascule avec leur souris/pavé tactile et leur clavier.
- **Bonus** : Réaliser le défi uniquement avec HTML et CSS.

### Capture d'écran

![Interface Table - Monthly](images/interface_tableMonthly.png)

### Liens

- URL de la solution : [URL solution](https://github.com/doriannegelly/pricing-component-with-toggle-master.git)
- URL du site en ligne : [URL site en ligne](https://doriannegelly.github.io/pricing-component-with-toggle-master/)

## Mon processus

### Construit avec

- Balises HTML5 sémantiques
- Propriétés personnalisées CSS
- Flexbox
- Flux de travail mobile-first
- Javascript

### Ce que j'ai appris

- J'ai appris comment modifier l'apparence d'un checkbox complètement et j'en suis très fière.  Pour ce faire, j'ai utilisé ce html:
```html
<label class="pricing" for="pricing">
  <span class="label">Annually</span>

  <span class="switch">
    <input type="checkbox" id="pricing" checked>
    <span class="slider"></span>
  </span>

  <span class="label">Monthly</span>
</label>
```
Et ce CSS:
```css
.switch {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 32px;
    margin: 0 1.5rem;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom right, var(--violet), var(--blue));
    transition: 0.4s;
    border-radius: 34px;
}

.slider::before {
    content: "";
    position: absolute;
    height: 24px;
    width: 24px;
    left: 5px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.4s;
}
```

- Je suis aussi très fière des multiples dégradés que j'ai mis, comme celui-ci:
```css
background: linear-gradient(to right, var(--violet), var(--blue));
```