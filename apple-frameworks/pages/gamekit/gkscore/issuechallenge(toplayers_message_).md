> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkscore/issuechallenge(toplayers:message:)](https://developer.apple.com/documentation/gamekit/gkscore/issuechallenge(toplayers:message:))

# issueChallenge(toPlayers:message:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Issues a score challenge to a set of players.

## Declaration

```swift
func issueChallenge(toPlayers playerIDs: [String]?, message: String?)
```

## Parameters

- `playerIDs`: The identifiers for the players to challenge. Because Game Center limits the number of players in a challenge request to 10, the maximum size of this array is 10.
- `message`: A text message to display to the players.

<a id="Discussion"></a>

## Discussion

Set up your game to issue a challenge request only in direct response to a player action. That is, your game provides a user interface that allows the player to choose to issue a challenge and choose which friends receive the challenge, and only issue a challenge when the player wishes to do so.

## See Also

### Deprecated Methods and Properties

- [category](category.md): Deprecated. The leaderboard that this score belongs to.
- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](value.md): Deprecated. The score earned by the player.
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [init(leaderboardIdentifier:)](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [init(leaderboardIdentifier:player:)](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [init(category:)](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [init(leaderboardIdentifier:forPlayer:)](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [report(completionHandler:)](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.

# issueChallengeToPlayers:message: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Issues a score challenge to a set of players.

## Declaration

```objectivec
- (void) issueChallengeToPlayers:(NSArray<NSString *> *) playerIDs message:(NSString *) message;
```

## Parameters

- `playerIDs`: The identifiers for the players to challenge. Because Game Center limits the number of players in a challenge request to 10, the maximum size of this array is 10.
- `message`: A text message to display to the players.

<a id="Discussion"></a>

## Discussion

Set up your game to issue a challenge request only in direct response to a player action. That is, your game provides a user interface that allows the player to choose to issue a challenge and choose which friends receive the challenge, and only issue a challenge when the player wishes to do so.

## See Also

### Deprecated Methods and Properties

- [category](category.md): Deprecated. The leaderboard that this score belongs to.
- [context](context.md): Deprecated. An integer value used by your game.
- [date](date.md): Deprecated. The date and time when the score was earned.
- [formattedValue](formattedvalue.md): Deprecated. Returns the player’s score as a localized string.
- [leaderboardIdentifier](leaderboardidentifier.md): Deprecated. The identifier for the leaderboard.
- [player](player.md): Deprecated. The player who earned the score.
- [rank](rank.md): Deprecated. The position of the score in the results of a leaderboard search.
- [value](value.md): Deprecated. The score earned by the player.
- [shouldSetDefaultLeaderboard](shouldsetdefaultleaderboard.md): Deprecated. A Boolean value that indicates whether this score should also update the default leaderboard.
- [initWithLeaderboardIdentifier:](init%28leaderboardidentifier_%29.md): Deprecated. Returns an initialized score object using the local player and the current date.
- [initWithLeaderboardIdentifier:player:](init%28leaderboardidentifier_player_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [initWithCategory:](init%28category_%29.md): Deprecated. Returns an initialized score object.
- [initWithLeaderboardIdentifier:forPlayer:](init%28leaderboardidentifier_forplayer_%29.md): Deprecated. Returns an initialized score object for the specified leaderboard and player.
- [playerID](playerid.md): Deprecated. The player identifier for the player that earned the score.
- [reportScoreWithCompletionHandler:](report%28completionhandler_%29.md): Deprecated. Reports a score to Game Center.
