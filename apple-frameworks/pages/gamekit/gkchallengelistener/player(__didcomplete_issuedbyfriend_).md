> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengelistener/player(_:didcomplete:issuedbyfriend:)](https://developer.apple.com/documentation/gamekit/gkchallengelistener/player(_:didcomplete:issuedbyfriend:))

# player(\_:didComplete:issuedByFriend:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when the local player completes a challenge that a friend issues.

## Declaration

```swift
optional func player(_ player: GKPlayer, didComplete challenge: GKChallenge, issuedByFriend friendPlayer: GKPlayer)
```

## Parameters

- `player`: The player who completes the challenge.
- `challenge`: The challenge that the player completes.
- `friendPlayer`: The friend who issues the challenge.

## See Also

### Completing a Challenge

- [player(\_:issuedChallengeWasCompleted:byFriend:)](player%28__issuedchallengewascompleted_byfriend_%29.md): Deprecated. Handles when a friend completes a challenge that the local player issues.

# player:didCompleteChallenge:issuedByFriend: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when the local player completes a challenge that a friend issues.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player didCompleteChallenge:(GKChallenge *) challenge issuedByFriend:(GKPlayer *) friendPlayer;
```

## Parameters

- `player`: The player who completes the challenge.
- `challenge`: The challenge that the player completes.
- `friendPlayer`: The friend who issues the challenge.

## See Also

### Completing a Challenge

- [player:issuedChallengeWasCompleted:byFriend:](player%28__issuedchallengewascompleted_byfriend_%29.md): Deprecated. Handles when a friend completes a challenge that the local player issues.
