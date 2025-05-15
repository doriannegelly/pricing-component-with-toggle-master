# Guide de finalisation et autoévaluation pour P2 - Défi de Front-End Mentors

Barème : 
A = 100%, (Tout les sous-critères respectés, réussite complète)
B = 85%, (Presque tous les critères respectés)
C = 75%, (Quelques lacunes)
D = 65%, (Atteinte minimale du critère)
E = 55% (Lacunes majeures)

**Pour chaque critère, attribuer selon le barème une note entre A et E; puis multiplier par le nombre de points du critère.**

Exemple:
Au critère 1, je coche tous les sous-critères sauf le dernier. J'obtiens donc un B soit 85%. Comme le critère vaut 2 points : 85% de 2 = __1.7__ / 2

## Critère 1 : HTML SÉMANTIQUE ET ACCESSIBLE (2 points)
- [x] le code a été validé et ne comporte aucune erreur
- [x] j'ai utilisé des balises sémantiques chaque fois que c'était possible; je n'ai pas de div ou de span ajouté juste pour recevoir une `background-img`
- [ ] les images sont réactives; au moins une utilisation de `picture`, avec des sources différentes
- [x] les éléments d'entête h1-h6 forment une table des matières représentative des contenus de la page (vérifier avec `view document outline` de la barre d'outils de développement)
- [x] Les attributs `role` ont été ajoutés sur les zones d'entête, de pied de page, de contenu principal 
- [x] le texte alternatif des images est pertinent; il transmet les mêmes informations que l'image. 
- [ ] accessibilité des svg
Une balise title est présente dans le svg. Le id du title est la valeur de l'attribut aria-labelledby de la balise svg
 
__Commentaire__: Je n'avais pas de SVG dans mon html chasse et j'ai seulement utilisé img puisque les seules images dans ma page se trouve dans des encadré qui bougent peu 
__Note (A-E)__: B
__Pointage__: 1.4 / 2

 
## Critère 2: Styles CSS (4 points) 
- [x] Le fichier maître *style* importe dans l'ordre `normalize`, `utilitaires` et `typo`. Des fichiers complémentaires ont été ajoutés au besoin (par exemple pour les grilles, les animations...)
- [x] les tailles de polices sont réactives (plus grandes sur écran large)
- [X] les styles sont présentés Mobile First (aucune requête media max-width sauf exception justifiable)  
- [x] les requêtes medias suivent immédiatement les règles pour l'écran étroit. Les variantes sont définies au fur et à la mesure il n'y a donc qu'un seul sélecteur dans chaque requête media
- [x] il y a au moins un point de rupture et au moins 2 variantes de mise en page (écran étroit et écran large)
- [x] utilisation contrôlée des flexbox
- [ ] utilisation contrôlée des grilles css
- [x] la feuille de style est subdivisée avec des commentaires pour identifier les segments
- [x] une table des matières répète ces commentaires pour permettre de les naviguer avec la fonction Find de l'éditeur de code
- [x] présence avant la table des matières de l'identité du codeur ou de la codeuse __@author Prénom Nom__


__Commentaire__: 
__Note (A-E)__: A
__Pointage__: 4 / 4 
 
## Critère 3 :  Interactivité riche (1 point) 
- [x] les hyperliens et les boutons d'action ont plusieurs états (désactivé, normal, survol, focus)
- [x] des transitions sont utilisées pour donner de l'effet aux changements d'état des éléments interactifs

__Commentaire__: Ils n'ont pas tous des transitions, mais si besoin oui
__Note (A-E)__: A 
__Pointage__: 1 / 1
 

## Critère 4 :  Versionnage (1 point) 
- [x] utilisation régulière du versionnage
- [x] historique agréable à lire 🫣

__Commentaire__: Je n'avais pas compris au début, mais maintenant ils sont fait et lisibles
__Note (A-E)__: B
__Pointage__: 0.5 / 1

## Critère 5 :  Finalisation (2 points) 
- [x] Minification des styles
`./dart-sass/sass --watch scss:assets/css --style compressed`
__RENOMMER ET RELIER AU HTML__ : "style.min.css"
- [x] Créer le favicon à l'aide du service en ligne https://realfavicongenerator.net/
- [x] Compléter le README-template.md et renommer README
- [x] Activer Github Pages et mettre le lien vers github.io dans le README 
- [x] Déposer l'archive zippée sur Léa dans __P2 - Défi de Front-End Mentors__
 

__Commentaire__: 
__Note (A-E)__: A
__Pointage__: 2 / 2


__Note compilée__: 10.6 / 12
 