> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengelistener/player(_:didreceive:)](https://developer.apple.com/documentation/gamekit/gkchallengelistener/player(_:didreceive:))

# player(\_:didReceive:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when the local player issues a challenge but the other player doesn’t want to respond immediately.

## Declaration

```swift
optional func player(_ player: GKPlayer, didReceive challenge: GKChallenge)
```

## Parameters

- `player`: The player who receives the challenge.
- `challenge`: The challenge that the player issues to another player.

## See Also

### Responding to a Challenge

- [player(\_:wantsToPlay:)](player%28__wantstoplay_%29.md): Deprecated. Handles when the local player issues a challenge and the other player accepts.

# player:didReceiveChallenge: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when the local player issues a challenge but the other player doesn’t want to respond immediately.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player didReceiveChallenge:(GKChallenge *) challenge;
```

## Parameters

- `player`: The player who receives the challenge.
- `challenge`: The challenge that the player issues to another player.

## See Also

### Responding to a Challenge

- [player:wantsToPlayChallenge:](player%28__wantstoplay_%29.md): Deprecated. Handles when the local player issues a challenge and the other player accepts.
