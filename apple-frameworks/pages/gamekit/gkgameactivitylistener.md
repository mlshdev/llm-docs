> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitylistener](https://developer.apple.com/documentation/gamekit/gkgameactivitylistener)

# GKGameActivityListener (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that responds to activity events.

## Declaration

```swift
protocol GKGameActivityListener
```

## Mentioned In

- [Creating activities for your game](creating-activities-for-your-game.md)
- [Creating engaging challenges from leaderboards](creating-engaging-challenges-from-leaderboards.md)

## Topics

### Responding to an activity

- [player(\_:wantsToPlay:completionHandler:)](gkgameactivitylistener/player%28__wantstoplay_completionhandler_%29.md): Called when a player intends to play for a specific game activity. A completion handler block is provided to indicate whether the activity was successfully handled.

## Relationships

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

## See Also

### Activities

- [Creating activities for your game](creating-activities-for-your-game.md): Use activities to surface game content to players and encourage them to connect with each other.
- [GKGameActivity](gkgameactivity.md): An object that represents a single instance of a game activity for the current game.
- [GKGameActivityDefinition](gkgameactivitydefinition.md): An object that represents the static metadata you define for the activity.

# GKGameActivityListener (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that responds to activity events.

## Declaration

```objectivec
@protocol GKGameActivityListener
```

## Mentioned In

- [Creating activities for your game](creating-activities-for-your-game.md)
- [Creating engaging challenges from leaderboards](creating-engaging-challenges-from-leaderboards.md)

## Topics

### Responding to an activity

- [player:wantsToPlayGameActivity:completionHandler:](gkgameactivitylistener/player%28__wantstoplay_completionhandler_%29.md): Called when a player intends to play for a specific game activity. A completion handler block is provided to indicate whether the activity was successfully handled.

## Relationships

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

## See Also

### Activities

- [Creating activities for your game](creating-activities-for-your-game.md): Use activities to surface game content to players and encourage them to connect with each other.
- [GKGameActivity](gkgameactivity.md): An object that represents a single instance of a game activity for the current game.
- [GKGameActivityDefinition](gkgameactivitydefinition.md): An object that represents the static metadata you define for the activity.
