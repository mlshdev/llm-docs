> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/formattedvalue](https://developer.apple.com/documentation/gamekit/gkscore/formattedvalue)

# formattedValue (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns the player’s score as a localized string.

## Declaration

```swift
var formattedValue: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is invalid on a newly initialized score object. On a score returned from GameKit, it contains a formatted string based on the player’s score. You determine how a score is formatted when you define the leaderboard in App Store Connect.

Never convert the `value` property into a string directly; always use this method to receive the formatted string.

> **Important**

>  You may be tempted to write your own formatting code rather than using the `formattedValue` property. Do not do this. Using the built-in support makes it easy to localize the score value into other languages, and provides a string that is consistent with the presentation of your scores in the Game Center app.

## See Also

### Deprecated Methods and Properties

- [category](category.md): Deprecated. The leaderboard that this score belongs to.
- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](value.md): Deprecated. The score earned by the player.
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [init(leaderboardIdentifier:)](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [init(leaderboardIdentifier:player:)](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [init(category:)](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [init(leaderboardIdentifier:forPlayer:)](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallenge(toPlayers:message:)](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [report(completionHandler:)](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.

# formattedValue (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 14.0) · iPadOS 4.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns the player’s score as a localized string.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * formattedValue;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * formattedValue;
```

<a id="Discussion"></a>

## Discussion

This property is invalid on a newly initialized score object. On a score returned from GameKit, it contains a formatted string based on the player’s score. You determine how a score is formatted when you define the leaderboard in App Store Connect.

Never convert the `value` property into a string directly; always use this method to receive the formatted string.

> **Important**

>  You may be tempted to write your own formatting code rather than using the `formattedValue` property. Do not do this. Using the built-in support makes it easy to localize the score value into other languages, and provides a string that is consistent with the presentation of your scores in the Game Center app.

## See Also

### Deprecated Methods and Properties

- [category](category.md): Deprecated. The leaderboard that this score belongs to.
- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](value.md): Deprecated. The score earned by the player.
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [initWithLeaderboardIdentifier:](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [initWithLeaderboardIdentifier:player:](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [initWithCategory:](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [initWithLeaderboardIdentifier:forPlayer:](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [issueChallengeToPlayers:message:](issuechallenge%28toplayers_message_%29.md): Deprecated. Issues a score challenge to a set of players.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [reportScoreWithCompletionHandler:](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.
