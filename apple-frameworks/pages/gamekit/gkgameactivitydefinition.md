> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition)

# GKGameActivityDefinition (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that represents the static metadata you define for the activity.

## Declaration

```swift
class GKGameActivityDefinition
```

## Mentioned In

- [Creating activities for your game](creating-activities-for-your-game.md)

## Topics

### Getting the display properties and image

- [title](gkgameactivitydefinition/title.md): A short title for the game activity.
- [details](gkgameactivitydefinition/details.md): A more detailed description of the game activity.
- [defaultProperties](gkgameactivitydefinition/defaultproperties.md): Default properties defined by the developer for this type of game activity.
- [loadImage(completionHandler:)](gkgameactivitydefinition/loadimage%28completionhandler_%29.md): Asynchronously load the image. Error will be nil on success.

### Getting the activity capabilities

- [supportsPartyCode](gkgameactivitydefinition/supportspartycode.md): Whether the activity can be joined by others via a party code.
- [supportsUnlimitedPlayers](gkgameactivitydefinition/supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [playerRange](gkgameactivitydefinition/playerrange.md): The range of players supported by this type of game activity.
- [playStyle](gkgameactivitydefinition/playstyle.md): The play style of the game activity.
- [GKGameActivityPlayStyle](gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.

### Getting the fallback URL

- [fallbackURL](gkgameactivitydefinition/fallbackurl.md): A fallback URL that can be used to construct a game-specific URL for players to share or join, if the joining device does not support the default URL.

### Getting the release state

- [releaseState](gkgameactivitydefinition/releasestate.md): The release state of the game activity definition in App Store Connect.
- [GKReleaseState](gkreleasestate.md): Describes the release state of an App Store Connect resource, such as an Achievement or Leaderboard.

### Getting the identifier properties

- [identifier](gkgameactivitydefinition/identifier.md): The developer defined identifier for a given game activity.
- [groupIdentifier](gkgameactivitydefinition/groupidentifier.md): The group identifier for the activity, if one exists.

### Loading activity definitions

- [loadGameActivityDefinitions(completionHandler:)](gkgameactivitydefinition/loadgameactivitydefinitions%28completionhandler_%29.md): Loads all the game activity definitions for the current game.
- [loadGameActivityDefinitions(IDs:completionHandler:)](gkgameactivitydefinition/loadgameactivitydefinitions%28ids_completionhandler_%29.md): Loads game activity definitions with the supplied App Store Connect identifiers.

### Loading achievement descriptions

- [loadAchievementDescriptions(completionHandler:)](gkgameactivitydefinition/loadachievementdescriptions%28completionhandler_%29.md): Loads all associated achievements that have defined deep links to this game activity definition.

### Loading leaderboards

- [loadLeaderboards(completionHandler:)](gkgameactivitydefinition/loadleaderboards%28completionhandler_%29.md): Loads all associated leaderboards that have defined deep links to this game activity definition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Activities

- [Creating activities for your game](creating-activities-for-your-game.md): Use activities to surface game content to players and encourage them to connect with each other.
- [GKGameActivity](gkgameactivity.md): An object that represents a single instance of a game activity for the current game.
- [GKGameActivityListener](gkgameactivitylistener.md): An object that responds to activity events.

# GKGameActivityDefinition (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that represents the static metadata you define for the activity.

## Declaration

```objectivec
@interface GKGameActivityDefinition : NSObject
```

## Mentioned In

- [Creating activities for your game](creating-activities-for-your-game.md)

## Topics

### Getting the display properties and image

- [title](gkgameactivitydefinition/title.md): A short title for the game activity.
- [details](gkgameactivitydefinition/details.md): A more detailed description of the game activity.
- [defaultProperties](gkgameactivitydefinition/defaultproperties.md): Default properties defined by the developer for this type of game activity.
- [loadImageWithCompletionHandler:](gkgameactivitydefinition/loadimage%28completionhandler_%29.md): Asynchronously load the image. Error will be nil on success.

### Getting the activity capabilities

- [supportsPartyCode](gkgameactivitydefinition/supportspartycode.md): Whether the activity can be joined by others via a party code.
- [supportsUnlimitedPlayers](gkgameactivitydefinition/supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [playStyle](gkgameactivitydefinition/playstyle.md): The play style of the game activity.
- [GKGameActivityPlayStyle](gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.

### Getting the fallback URL

- [fallbackURL](gkgameactivitydefinition/fallbackurl.md): A fallback URL that can be used to construct a game-specific URL for players to share or join, if the joining device does not support the default URL.

### Getting the release state

- [releaseState](gkgameactivitydefinition/releasestate.md): The release state of the game activity definition in App Store Connect.
- [GKReleaseState](gkreleasestate.md): Describes the release state of an App Store Connect resource, such as an Achievement or Leaderboard.

### Getting the identifier properties

- [identifier](gkgameactivitydefinition/identifier.md): The developer defined identifier for a given game activity.
- [groupIdentifier](gkgameactivitydefinition/groupidentifier.md): The group identifier for the activity, if one exists.

### Loading activity definitions

- [loadGameActivityDefinitionsWithCompletionHandler:](gkgameactivitydefinition/loadgameactivitydefinitions%28completionhandler_%29.md): Loads all the game activity definitions for the current game.
- [loadGameActivityDefinitionsWithIDs:completionHandler:](gkgameactivitydefinition/loadgameactivitydefinitions%28ids_completionhandler_%29.md): Loads game activity definitions with the supplied App Store Connect identifiers.

### Loading achievement descriptions

- [loadAchievementDescriptionsWithCompletionHandler:](gkgameactivitydefinition/loadachievementdescriptions%28completionhandler_%29.md): Loads all associated achievements that have defined deep links to this game activity definition.

### Loading leaderboards

- [loadLeaderboardsWithCompletionHandler:](gkgameactivitydefinition/loadleaderboards%28completionhandler_%29.md): Loads all associated leaderboards that have defined deep links to this game activity definition.

### Instance Properties

- [maxPlayers](gkgameactivitydefinition/maxplayers.md): The maximum number of participants that can join the activity. Returns nil when no maximum is set (unlimited players) or when player range is undefined. When not nil, the value is always greater than or equal to `minPlayers`.
- [minPlayers](gkgameactivitydefinition/minplayers.md): The minimum number of participants that can join the activity.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Activities

- [Creating activities for your game](creating-activities-for-your-game.md): Use activities to surface game content to players and encourage them to connect with each other.
- [GKGameActivity](gkgameactivity.md): An object that represents a single instance of a game activity for the current game.
- [GKGameActivityListener](gkgameactivitylistener.md): An object that responds to activity events.
