> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboardset](https://developer.apple.com/documentation/gamekit/gkleaderboardset)

# GKLeaderboardSet (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Organizes leaderboards into logical and coherent groups.

## Declaration

```swift
class GKLeaderboardSet
```

<a id="overview"></a>

## Overview

A [GKLeaderboardSet](gkleaderboardset.md) object represents a group of leaderboards that you configure in App Store Connect. For example, if your game has different worlds or levels, you can organize the leaderboards into sets for each world or level. In the Game Center dashboard, players navigate from the leaderboard sets to the individual leaderboards. If you use leaderboard sets, you must have one or more leaderboards and then place each leaderboard in a set, which can be a mix of classic and recurring leaderboards.

To load all the leaderboard sets for your game, use the [loadLeaderboardSets(completionHandler:)](gkleaderboardset/loadleaderboardsets%28completionhandler_%29.md) class method. Then use the `title`, `identifier`, and `groupIdentifier` properties to access the data for each leaderboard set. If you localize the leaderboard set in App Store Connect, the `title` property localizes. GameKit only sets the `groupIdentifier` property when your game is in a game group. To load the images you add to App Store Connect for each set, use the [loadImage(completionHandler:)](gkleaderboardset/loadimage%28completionhandler_%29.md) method. Then use the [loadLeaderboards(handler:)](gkleaderboardset/loadleaderboards%28handler_%29.md) method to get the leaderboards in each set.

To organize leaderboards into sets, see [Configure leaderboard sets](https://developer.apple.com/help/app-store-connect/configure-game-center/configure-leaderboard-sets) in App Store Connect Help.

## Topics

### Accessing Properties

- [title](gkleaderboardset/title.md): The localized title for the leaderboard set.
- [identifier](gkleaderboardset/identifier.md): The identifier for the leaderboard set.
- [groupIdentifier](gkleaderboardset/groupidentifier.md): The identifier for the group that the leaderboard set belongs to.

### Loading Leaderboard Sets

- [loadImage(completionHandler:)](gkleaderboardset/loadimage%28completionhandler_%29.md): Loads the localized image that you associate with the leaderboard set.
- [loadLeaderboardSets(completionHandler:)](gkleaderboardset/loadleaderboardsets%28completionhandler_%29.md): Loads all of the leaderboard sets you configure for your game.
- [loadLeaderboards(handler:)](gkleaderboardset/loadleaderboards%28handler_%29.md): Loads the leaderboards in the leaderboard set.
- [loadLeaderboards(completionHandler:)](gkleaderboardset/loadleaderboards%28completionhandler_%29.md): Deprecated. Loads all of the leaderboards for the current leaderboard set.

### Initializers

- [init(coder:)](gkleaderboardset/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Leaderboards

- [Encourage progress and competition with leaderboards](encourage-progress-and-competition-with-leaderboards.md): Let players measure their own progress and compare their skills with friends and others.
- [Creating recurring leaderboards](creating-recurring-leaderboards.md): Create a leaderboard for your game that ranks player scores based on a schedule.
- [Adding Recurring Leaderboards to Your Game](adding-recurring-leaderboards-to-your-game.md): Encourage competition in your games by adding leaderboards that have a duration and repeat.
- [GKLeaderboard](gkleaderboard.md): A leaderboard for a game that Game Center stores.
- [GKLeaderboardScore](gkleaderboardscore.md): Information about a player’s score on a leaderboard.

# GKLeaderboardSet (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Organizes leaderboards into logical and coherent groups.

## Declaration

```objectivec
@interface GKLeaderboardSet : NSObject
```

<a id="overview"></a>

## Overview

A [GKLeaderboardSet](gkleaderboardset.md) object represents a group of leaderboards that you configure in App Store Connect. For example, if your game has different worlds or levels, you can organize the leaderboards into sets for each world or level. In the Game Center dashboard, players navigate from the leaderboard sets to the individual leaderboards. If you use leaderboard sets, you must have one or more leaderboards and then place each leaderboard in a set, which can be a mix of classic and recurring leaderboards.

To load all the leaderboard sets for your game, use the [loadLeaderboardSetsWithCompletionHandler:](gkleaderboardset/loadleaderboardsets%28completionhandler_%29.md) class method. Then use the `title`, `identifier`, and `groupIdentifier` properties to access the data for each leaderboard set. If you localize the leaderboard set in App Store Connect, the `title` property localizes. GameKit only sets the `groupIdentifier` property when your game is in a game group. To load the images you add to App Store Connect for each set, use the [loadImageWithCompletionHandler:](gkleaderboardset/loadimage%28completionhandler_%29.md) method. Then use the [loadLeaderboardsWithHandler:](gkleaderboardset/loadleaderboards%28handler_%29.md) method to get the leaderboards in each set.

To organize leaderboards into sets, see [Configure leaderboard sets](https://developer.apple.com/help/app-store-connect/configure-game-center/configure-leaderboard-sets) in App Store Connect Help.

## Topics

### Accessing Properties

- [title](gkleaderboardset/title.md): The localized title for the leaderboard set.
- [identifier](gkleaderboardset/identifier.md): The identifier for the leaderboard set.
- [groupIdentifier](gkleaderboardset/groupidentifier.md): The identifier for the group that the leaderboard set belongs to.

### Loading Leaderboard Sets

- [loadImageWithCompletionHandler:](gkleaderboardset/loadimage%28completionhandler_%29.md): Loads the localized image that you associate with the leaderboard set.
- [loadLeaderboardSetsWithCompletionHandler:](gkleaderboardset/loadleaderboardsets%28completionhandler_%29.md): Loads all of the leaderboard sets you configure for your game.
- [loadLeaderboardsWithHandler:](gkleaderboardset/loadleaderboards%28handler_%29.md): Loads the leaderboards in the leaderboard set.
- [loadLeaderboardsWithCompletionHandler:](gkleaderboardset/loadleaderboards%28completionhandler_%29.md): Deprecated. Loads all of the leaderboards for the current leaderboard set.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Leaderboards

- [Encourage progress and competition with leaderboards](encourage-progress-and-competition-with-leaderboards.md): Let players measure their own progress and compare their skills with friends and others.
- [Creating recurring leaderboards](creating-recurring-leaderboards.md): Create a leaderboard for your game that ranks player scores based on a schedule.
- [Adding Recurring Leaderboards to Your Game](adding-recurring-leaderboards-to-your-game.md): Encourage competition in your games by adding leaderboards that have a duration and repeat.
- [GKLeaderboard](gkleaderboard.md): A leaderboard for a game that Game Center stores.
- [GKLeaderboardScore](gkleaderboardscore.md): Information about a player’s score on a leaderboard.
