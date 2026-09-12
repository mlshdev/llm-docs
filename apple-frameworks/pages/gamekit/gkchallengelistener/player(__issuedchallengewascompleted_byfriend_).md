> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengelistener/player(_:issuedchallengewascompleted:byfriend:)](https://developer.apple.com/documentation/gamekit/gkchallengelistener/player(_:issuedchallengewascompleted:byfriend:))

# player(\_:issuedChallengeWasCompleted:byFriend:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when a friend completes a challenge that the local player issues.

## Declaration

```swift
optional func player(_ player: GKPlayer, issuedChallengeWasCompleted challenge: GKChallenge, byFriend friendPlayer: GKPlayer)
```

## Parameters

- `player`: The player who issues the challenge.
- `challenge`: The challenge that the friend completes.
- `friendPlayer`: The player who completes the challenge.

## See Also

### Completing a Challenge

- [player(\_:didComplete:issuedByFriend:)](player%28__didcomplete_issuedbyfriend_%29.md): Deprecated. Handles when the local player completes a challenge that a friend issues.

# player:issuedChallengeWasCompleted:byFriend: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when a friend completes a challenge that the local player issues.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player issuedChallengeWasCompleted:(GKChallenge *) challenge byFriend:(GKPlayer *) friendPlayer;
```

## Parameters

- `player`: The player who issues the challenge.
- `challenge`: The challenge that the friend completes.
- `friendPlayer`: The player who completes the challenge.

## See Also

### Completing a Challenge

- [player:didCompleteChallenge:issuedByFriend:](player%28__didcomplete_issuedbyfriend_%29.md): Deprecated. Handles when the local player completes a challenge that a friend issues.
