> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/game-model-score-limits](https://developer.apple.com/documentation/gameplaykit/game-model-score-limits)

# Game Model Score Limits (Swift)

**Framework:** GameplayKit  
**Kind:** API Collection

Limits to values returned by the [score(for:)](gkgamemodel/score%28for_%29.md) method.

<a id="overview"></a>

## Overview

When you evaluate the state of a game model in the [score(for:)](gkgamemodel/score%28for_%29.md) method, the [GKMinmaxStrategist](gkminmaxstrategist.md) class weights the resulting value by search depth and performs other calculations in its process of selecting an optimal move. To prevent overflow errors in such calculations, keep scores within the range of [GKGameModelMinScore](gkgamemodelminscore.md) to [GKGameModelMaxScore](gkgamemodelmaxscore.md), inclusive.

## Topics

### Constants

- [GKGameModelMaxScore](gkgamemodelmaxscore.md): The maximum return value allowed for the [score(for:)](gkgamemodel/score%28for_%29.md) method.
- [GKGameModelMinScore](gkgamemodelminscore.md): The minimum return value allowed for the [score(for:)](gkgamemodel/score%28for_%29.md) method.

# Game Model Score Limits (Objective-C)

**Framework:** GameplayKit  
**Kind:** API Collection

Limits to values returned by the [scoreForPlayer:](gkgamemodel/score%28for_%29.md) method.

<a id="overview"></a>

## Overview

When you evaluate the state of a game model in the [scoreForPlayer:](gkgamemodel/score%28for_%29.md) method, the [GKMinmaxStrategist](gkminmaxstrategist.md) class weights the resulting value by search depth and performs other calculations in its process of selecting an optimal move. To prevent overflow errors in such calculations, keep scores within the range of [GKGameModelMinScore](gkgamemodelminscore.md) to [GKGameModelMaxScore](gkgamemodelmaxscore.md), inclusive.

## Topics

### Constants

- [GKGameModelMaxScore](gkgamemodelmaxscore.md): The maximum return value allowed for the [scoreForPlayer:](gkgamemodel/score%28for_%29.md) method.
- [GKGameModelMinScore](gkgamemodelminscore.md): The minimum return value allowed for the [scoreForPlayer:](gkgamemodel/score%28for_%29.md) method.
