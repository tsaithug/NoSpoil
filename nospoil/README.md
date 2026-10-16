# No Spoil Duration

Extension Chrome / Opera qui masque la barre de progression et la durée des vidéos YouTube et des rediffusions Twitch, pour regarder des replays (esport, sport…) sans se faire spoiler le résultat.

## Le problème

Quand on regarde un match en replay, la durée de la vidéo trahit souvent le score final. Une rediff de 3h avec des games d'environ 1h, et une première game gagnée : on sait déjà que ça ne finira pas en 3-2. Même chose avec la position du curseur sur la barre, ou les chapitres "Game 1, Game 2, Game 3…".

Cette extension cache tout ce qui permet de deviner la durée.

## Ce qui est masqué

**YouTube**
- Barre de progression du lecteur
- Temps écoulé et durée totale
- Durée affichée sur les miniatures
- Chapitres et moments clés

**Twitch (rediffusions)**
- Barre de lecture
- Temps écoulé et durée totale
- Durée sur les cartes de l'onglet Vidéos

Fonctionne aussi sur les lecteurs YouTube et Twitch intégrés dans d'autres sites (Liquipedia, sites de tournois…).

Le masquage est appliqué dès le chargement de la page : la durée n'apparaît jamais, même brièvement.

## Installation

1. Télécharger ou cloner ce repo.
2. Ouvrir `chrome://extensions` (ou `opera://extensions`).
3. Activer le **mode développeur**.
4. Cliquer sur **Charger l'extension non empaquetée** et sélectionner le dossier du repo.

## Utilisation

- **Icône de l'extension** : activer / désactiver le masquage globalement ou site par site.
- **Alt+Shift+S** : activer / désactiver le masquage d'un coup (modifiable dans `chrome://extensions/shortcuts`).

Pour naviguer sans barre, utiliser le clavier :

| Site    | Touches              | Saut   |
|---------|----------------------|--------|
| YouTube | ← / →                | 5 s    |
| YouTube | J / L                | 10 s   |
| Twitch  | ← / →                | 10 s   |

## Limites

- YouTube et Twitch modifient régulièrement leur interface. Si une durée réapparaît quelque part, ouvrez une issue avec une capture d'écran.
- Les horodatages écrits à la main dans la description d'une vidéo (ex. `1:02:00 Game 3`) ne sont pas masqués.
- Sur Twitch, les vues et la date des cartes de vidéos sont masquées avec la durée, car elles partagent le même élément.

## Structure

```
manifest.json   Configuration de l'extension (Manifest V3)
content.js      Applique ou retire le masquage selon les réglages
youtube.css     Sélecteurs masqués sur YouTube
twitch.css      Sélecteurs masqués sur Twitch
background.js   Raccourci clavier
popup.html/js   Menu de réglages
```

## Licence

MIT
