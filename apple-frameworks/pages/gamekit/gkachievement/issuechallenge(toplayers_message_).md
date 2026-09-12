> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/issuechallenge(toplayers:message:)](https://developer.apple.com/documentation/gamekit/gkachievement/issuechallenge(toplayers:message:))

# issueChallenge(toPlayers:message:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Issues an achievement challenge to a list of players.

## Declaration

```swift
func issueChallenge(toPlayers playerIDs: [String]?, message: String?)
```

## Parameters

- `playerIDs`: The identifiers for the players to challenge. Because Game Center limits the number of players in a challenge request to 10, the maximum size of this array is 10.
- `message`: A text message to display to the challenged players.

<a id="Discussion"></a>

## Discussion

Set up your game to issue a challenge request only in direct response to a player action.

If you mark the achievement as hidden, or if the challenged player already earned the achievement and you don’t mark the achievement as replayable in App Store Connect, the local player can’t issue the challenge.

## See Also

### Deprecated Methods

- [report(completionHandler:)](report%28completionhandler_%29.md): Deprecated. Reports the player’s progress to Game Center.
- [selectChallengeablePlayerIDs(\_:withCompletionHandler:)](selectchallengeableplayerids%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.

# issueChallengeToPlayers:message: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Issues an achievement challenge to a list of players.

## Declaration

```objectivec
- (void) issueChallengeToPlayers:(NSArray<NSString *> *) playerIDs message:(NSString *) message;
```

## Parameters

- `playerIDs`: The identifiers for the players to challenge. Because Game Center limits the number of players in a challenge request to 10, the maximum size of this array is 10.
- `message`: A text message to display to the challenged players.

<a id="Discussion"></a>

## Discussion

Set up your game to issue a challenge request only in direct response to a player action.

If you mark the achievement as hidden, or if the challenged player already earned the achievement and you don’t mark the achievement as replayable in App Store Connect, the local player can’t issue the challenge.

## See Also

### Deprecated Methods

- [reportAchievementWithCompletionHandler:](report%28completionhandler_%29.md): Deprecated. Reports the player’s progress to Game Center.
- [selectChallengeablePlayerIDs:withCompletionHandler:](selectchallengeableplayerids%28__withcompletionhandler_%29.md): Deprecated. Finds the subset of players who can earn an achievement.
