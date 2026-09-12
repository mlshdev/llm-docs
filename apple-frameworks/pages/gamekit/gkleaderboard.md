> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard](https://developer.apple.com/documentation/gamekit/gkleaderboard)

# GKLeaderboard (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A leaderboard for a game that Game Center stores.

## Declaration

```swift
class GKLeaderboard
```

## Mentioned In

- [Creating recurring leaderboards](creating-recurring-leaderboards.md)

<a id="overview"></a>

## Overview

Leaderboards allow players to compare their scores against other players in your game. You configure a classic or recurring leaderboard in App Store Connect and then access the localized information for a leaderboard in your code using [GKLeaderboard](gkleaderboard.md) objects.

A *classic leaderboard* is persistent, that is, the scores never reset unless you delete the leaderboard. A *recurring leaderboard* contains scores for a period of time useful for competitions and encouraging players to try for higher scores. You configure the duration, frequency, and delay between occurrences that Game Center uses to automatically restart the leaderboard in App Store Connect.

In your code, you use the identifier you set for the leaderboard in App Store Connect to submit scores or load leaderboards. Use the [submitScore(\_:context:player:leaderboardIDs:completionHandler:)](gkleaderboard/submitscore%28__context_player_leaderboardids_completionhandler_%29.md) class method to submit a score to one or more leaderboards. Alternatively, load a recurring leaderboard using the [loadLeaderboards(IDs:completionHandler:)](gkleaderboard/loadleaderboards%28ids_completionhandler_%29.md) class method and then submit a score using the [submitScore(\_:context:player:completionHandler:)](gkleaderboard/submitscore%28__context_player_completionhandler_%29.md) method. To learn more about recurring leaderboards, see [Creating recurring leaderboards](creating-recurring-leaderboards.md).

To retrieve information about all leaderboards in your game, use the [loadLeaderboards(IDs:completionHandler:)](gkleaderboard/loadleaderboards%28ids_completionhandler_%29.md) class method. To fetch the scores for a leaderboard, use the [loadEntries(for:timeScope:range:completionHandler:)](gkleaderboard/loadentries%28for_timescope_range_completionhandler_%29.md) or [loadEntries(for:timeScope:completionHandler:)](gkleaderboard/loadentries%28for_timescope_completionhandler_%29.md) method. Use the parameters of these methods to filter the scores to the player’s friends, a rank, and time period when the score occurs.

You must create leaderboard objects using one of the load methods above. If the request is successful, GameKit passes corresponding [GKLeaderboard](gkleaderboard.md) objects to the handler. GameKit doesn’t load the images you add to App Store Connect when it loads the leaderboards. Use the [loadImage(completionHandler:)](gkleaderboard/loadimage%28completionhandler_%29.md) method to get the image for a leaderboard.

## Topics

### Accessing Identifier and Type Properties

- [baseLeaderboardID](gkleaderboard/baseleaderboardid.md): The ID that Game Center uses to identify this leaderboard.
- [title](gkleaderboard/title.md): The localized title for the leaderboard.
- [type](gkleaderboard/type.md): The type of leaderboard, classic or recurring.
- [GKLeaderboard.LeaderboardType](gkleaderboard/leaderboardtype.md): Specifies whether a leaderboard is recurring.
- [groupIdentifier](gkleaderboard/groupidentifier.md): The identifier for the group the leaderboard belongs to.

### Accessing Recurring Leaderboard Properties

- [startDate](gkleaderboard/startdate.md): The date and time a recurring leaderboard occurrence starts accepting scores.
- [nextStartDate](gkleaderboard/nextstartdate.md): The date and time the next recurring leaderboard occurrence starts accepting scores.
- [duration](gkleaderboard/duration.md): The duration from the start date that a recurring leaderboard occurrence accepts scores.

### Loading Leaderboards

- [loadLeaderboards(IDs:completionHandler:)](gkleaderboard/loadleaderboards%28ids_completionhandler_%29.md): Loads leaderboards for the specified leaderboard IDs that Game Center uses.
- [loadPreviousOccurrence(completionHandler:)](gkleaderboard/loadpreviousoccurrence%28completionhandler_%29.md): Loads the previous recurring leaderboard occurrence that the player submits a score to.

### Loading Leaderboard Images

- [loadImage(completionHandler:)](gkleaderboard/loadimage%28completionhandler_%29.md): Loads the image for the leaderboard.

### Submitting Scores

- [submitScore(\_:context:player:leaderboardIDs:completionHandler:)](gkleaderboard/submitscore%28__context_player_leaderboardids_completionhandler_%29.md): Submits a score to multiple leaderboards.
- [submitScore(\_:context:player:completionHandler:)](gkleaderboard/submitscore%28__context_player_completionhandler_%29.md): Submits a score to the leaderboard.

### Loading Scores

- [loadEntries(for:timeScope:range:completionHandler:)](gkleaderboard/loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [loadEntries(for:timeScope:completionHandler:)](gkleaderboard/loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboard.PlayerScope](gkleaderboard/playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboard.TimeScope](gkleaderboard/timescope-swift.enum.md): Specifies the time period for filtering data.
- [GKLeaderboard.Entry](gkleaderboard/entry.md): Information about a single score by a player on a leaderboard.

### Deprecated

- [Deprecated symbols](gkleaderboard-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [activityIdentifier](gkleaderboard/activityidentifier.md): The identifier of the game activity associated with this leaderboard, as configured by the developer in App Store Connect.
- [activityProperties](gkleaderboard/activityproperties.md): The properties when associating this leaderboard with a game activity, as configured by the developer in App Store Connect.
- [isHidden](gkleaderboard/ishidden.md): A Boolean value that indicates whether the current leaderboard isn’t visible in Game Center views.
- [leaderboardDescription](gkleaderboard/leaderboarddescription.md): The description of this Leaderboard as configured by the developer in App Store Connect.
- [releaseState](gkleaderboard/releasestate.md): The release state of the leaderboard in App Store Connect.

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

## See Also

### Leaderboards

- [Encourage progress and competition with leaderboards](encourage-progress-and-competition-with-leaderboards.md): Let players measure their own progress and compare their skills with friends and others.
- [Creating recurring leaderboards](creating-recurring-leaderboards.md): Create a leaderboard for your game that ranks player scores based on a schedule.
- [Adding Recurring Leaderboards to Your Game](adding-recurring-leaderboards-to-your-game.md): Encourage competition in your games by adding leaderboards that have a duration and repeat.
- [GKLeaderboardSet](gkleaderboardset.md): Organizes leaderboards into logical and coherent groups.
- [GKLeaderboardScore](gkleaderboardscore.md): Information about a player’s score on a leaderboard.

# GKLeaderboard (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A leaderboard for a game that Game Center stores.

## Declaration

```objectivec
@interface GKLeaderboard : NSObject
```

## Mentioned In

- [Creating recurring leaderboards](creating-recurring-leaderboards.md)

<a id="overview"></a>

## Overview

Leaderboards allow players to compare their scores against other players in your game. You configure a classic or recurring leaderboard in App Store Connect and then access the localized information for a leaderboard in your code using [GKLeaderboard](gkleaderboard.md) objects.

A *classic leaderboard* is persistent, that is, the scores never reset unless you delete the leaderboard. A *recurring leaderboard* contains scores for a period of time useful for competitions and encouraging players to try for higher scores. You configure the duration, frequency, and delay between occurrences that Game Center uses to automatically restart the leaderboard in App Store Connect.

In your code, you use the identifier you set for the leaderboard in App Store Connect to submit scores or load leaderboards. Use the [submitScore:context:player:leaderboardIDs:completionHandler:](gkleaderboard/submitscore%28__context_player_leaderboardids_completionhandler_%29.md) class method to submit a score to one or more leaderboards. Alternatively, load a recurring leaderboard using the [loadLeaderboardsWithIDs:completionHandler:](gkleaderboard/loadleaderboards%28ids_completionhandler_%29.md) class method and then submit a score using the [submitScore:context:player:completionHandler:](gkleaderboard/submitscore%28__context_player_completionhandler_%29.md) method. To learn more about recurring leaderboards, see [Creating recurring leaderboards](creating-recurring-leaderboards.md).

To retrieve information about all leaderboards in your game, use the [loadLeaderboardsWithIDs:completionHandler:](gkleaderboard/loadleaderboards%28ids_completionhandler_%29.md) class method. To fetch the scores for a leaderboard, use the [loadEntriesForPlayerScope:timeScope:range:completionHandler:](gkleaderboard/loadentries%28for_timescope_range_completionhandler_%29.md) or [loadEntriesForPlayers:timeScope:completionHandler:](gkleaderboard/loadentries%28for_timescope_completionhandler_%29.md) method. Use the parameters of these methods to filter the scores to the player’s friends, a rank, and time period when the score occurs.

You must create leaderboard objects using one of the load methods above. If the request is successful, GameKit passes corresponding [GKLeaderboard](gkleaderboard.md) objects to the handler. GameKit doesn’t load the images you add to App Store Connect when it loads the leaderboards. Use the [loadImageWithCompletionHandler:](gkleaderboard/loadimage%28completionhandler_%29.md) method to get the image for a leaderboard.

## Topics

### Accessing Identifier and Type Properties

- [baseLeaderboardID](gkleaderboard/baseleaderboardid.md): The ID that Game Center uses to identify this leaderboard.
- [title](gkleaderboard/title.md): The localized title for the leaderboard.
- [type](gkleaderboard/type.md): The type of leaderboard, classic or recurring.
- [GKLeaderboardType](gkleaderboard/leaderboardtype.md): Specifies whether a leaderboard is recurring.
- [groupIdentifier](gkleaderboard/groupidentifier.md): The identifier for the group the leaderboard belongs to.

### Accessing Recurring Leaderboard Properties

- [startDate](gkleaderboard/startdate.md): The date and time a recurring leaderboard occurrence starts accepting scores.
- [nextStartDate](gkleaderboard/nextstartdate.md): The date and time the next recurring leaderboard occurrence starts accepting scores.
- [duration](gkleaderboard/duration.md): The duration from the start date that a recurring leaderboard occurrence accepts scores.

### Loading Leaderboards

- [loadLeaderboardsWithIDs:completionHandler:](gkleaderboard/loadleaderboards%28ids_completionhandler_%29.md): Loads leaderboards for the specified leaderboard IDs that Game Center uses.
- [loadPreviousOccurrenceWithCompletionHandler:](gkleaderboard/loadpreviousoccurrence%28completionhandler_%29.md): Loads the previous recurring leaderboard occurrence that the player submits a score to.

### Loading Leaderboard Images

- [loadImageWithCompletionHandler:](gkleaderboard/loadimage%28completionhandler_%29.md): Loads the image for the leaderboard.

### Submitting Scores

- [submitScore:context:player:leaderboardIDs:completionHandler:](gkleaderboard/submitscore%28__context_player_leaderboardids_completionhandler_%29.md): Submits a score to multiple leaderboards.
- [submitScore:context:player:completionHandler:](gkleaderboard/submitscore%28__context_player_completionhandler_%29.md): Submits a score to the leaderboard.

### Loading Scores

- [loadEntriesForPlayerScope:timeScope:range:completionHandler:](gkleaderboard/loadentries%28for_timescope_range_completionhandler_%29.md): Returns the scores for the local player and other players for the specified type of player, time period, and ranks.
- [loadEntriesForPlayers:timeScope:completionHandler:](gkleaderboard/loadentries%28for_timescope_completionhandler_%29.md): Returns the scores for the local player and other players for the specified time period.
- [GKLeaderboardPlayerScope](gkleaderboard/playerscope-swift.enum.md): Specifies the type of players for filtering data.
- [GKLeaderboardTimeScope](gkleaderboard/timescope-swift.enum.md): Specifies the time period for filtering data.
- [GKLeaderboardEntry](gkleaderboard/entry.md): Information about a single score by a player on a leaderboard.

### Deprecated

- [Deprecated symbols](gkleaderboard-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [activityIdentifier](gkleaderboard/activityidentifier.md): The identifier of the game activity associated with this leaderboard, as configured by the developer in App Store Connect.
- [activityProperties](gkleaderboard/activityproperties.md): The properties when associating this leaderboard with a game activity, as configured by the developer in App Store Connect.
- [isHidden](gkleaderboard/ishidden.md): A Boolean value that indicates whether the current leaderboard isn’t visible in Game Center views.
- [leaderboardDescription](gkleaderboard/leaderboarddescription.md): The description of this Leaderboard as configured by the developer in App Store Connect.
- [releaseState](gkleaderboard/releasestate.md): The release state of the leaderboard in App Store Connect.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Leaderboards

- [Encourage progress and competition with leaderboards](encourage-progress-and-competition-with-leaderboards.md): Let players measure their own progress and compare their skills with friends and others.
- [Creating recurring leaderboards](creating-recurring-leaderboards.md): Create a leaderboard for your game that ranks player scores based on a schedule.
- [Adding Recurring Leaderboards to Your Game](adding-recurring-leaderboards-to-your-game.md): Encourage competition in your games by adding leaderboards that have a duration and repeat.
- [GKLeaderboardSet](gkleaderboardset.md): Organizes leaderboards into logical and coherent groups.
- [GKLeaderboardScore](gkleaderboardscore.md): Information about a player’s score on a leaderboard.
