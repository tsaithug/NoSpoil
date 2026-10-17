# No Spoil Duration

Extension Chrome / Opera qui cache la barre de progression et la durée des vidéos YouTube et des rediffusions Twitch, pour regarder des replays sans spoiler.

![Manifest V3](https://img.shields.io/badge/Manifest-V3-4285F4?style=flat-square)
![Chrome](https://img.shields.io/badge/Chrome-compatible-34A853?style=flat-square&logo=googlechrome&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-compatible-FF1B2D?style=flat-square&logo=opera&logoColor=white)
![Licence MIT](https://img.shields.io/badge/licence-MIT-lightgrey?style=flat-square)

## Ce qui est masqué

| Élément | YouTube | Twitch |
|---|:---:|:---:|
| Barre de progression | ✅ | ✅ |
| Temps écoulé et durée totale | ✅ | ✅ |
| Durée sur les miniatures | ✅ | ✅ |
| Chapitres | ✅ | — |
| Lecteurs intégrés sur d'autres sites | ✅ | ✅ |

## Installation

1. Cliquez sur le bouton vert **`<> Code`** en haut de cette page, puis sur **Download ZIP**.
2. Extrayez le ZIP (Windows : clic droit → **Extraire tout**, Mac : double-clic). Rangez le dossier obtenu dans un endroit où il ne bougera plus, par exemple **Documents**.
3. Dans la barre d'adresse du navigateur, tapez `chrome://extensions` (ou `opera://extensions`) et appuyez sur Entrée.
4. Activez le **Mode développeur** en haut à droite.
5. Cliquez sur **Charger l'extension non empaquetée** et sélectionnez le dossier qui contient `manifest.json`.

C'est installé. Pour garder l'icône visible, cliquez sur 🧩 en haut à droite du navigateur, puis sur 📌 à côté de No Spoil Duration.

> ⚠️ Ne supprimez pas et ne déplacez pas le dossier après l'installation, sinon l'extension s'arrête.

Fonctionne aussi sur Edge (`edge://extensions`) et Brave (`brave://extensions`).

## Utilisation

- **Icône de l'extension** : activer / désactiver, globalement ou par site.
- **`Alt` + `Shift` + `S`** : activer / désactiver d'un coup.

Pour se déplacer dans la vidéo sans la barre, cliquez dessus puis utilisez le clavier :

| Site | Touches | Effet |
|---|---|---|
| YouTube | `←` / `→` | -5 s / +5 s |
| YouTube | `J` / `L` | -10 s / +10 s |
| Twitch | `←` / `→` | Recule / avance |

## Problèmes fréquents

- **« Manifeste introuvable »** : vous avez sélectionné le mauvais dossier. Choisissez celui qui contient directement `manifest.json` (le ZIP crée parfois un dossier dans un dossier).
- **Pas de bouton « Charger l'extension non empaquetée »** : le mode développeur n'est pas activé.
- **La durée est encore visible** : rechargez la page (`F5`). Si ça persiste, [ouvrez une issue](../../issues) avec une capture.
- **Mise à jour** : remplacez le dossier par la nouvelle version, puis cliquez sur ↻ sous l'extension dans la page des extensions.

## Vie privée

- Aucune donnée collectée ou envoyée.
- Active uniquement sur YouTube et Twitch.
- Une seule permission, `storage`, pour mémoriser vos réglages.

Si vous récupérez l'extension ailleurs que sur ce dépôt, vérifiez que `manifest.json` ne demande que la permission `storage`.

## Limites

- Les horodatages écrits dans la description d'une vidéo ne sont pas masqués.
- Sur Twitch, les vues et la date des cartes de vidéos sont masquées avec la durée.
- Si YouTube ou Twitch changent leur site, un élément peut réapparaître : signalez-le dans les [issues](../../issues).

## Structure

```
manifest.json   Configuration (Manifest V3)
content.js      Active ou désactive le masquage
youtube.css     Éléments masqués sur YouTube
twitch.css      Éléments masqués sur Twitch
background.js   Raccourci clavier
popup.html/js   Menu de réglages
```

## Licence

MIT
