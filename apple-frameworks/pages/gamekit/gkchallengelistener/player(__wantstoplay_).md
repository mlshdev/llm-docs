> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkchallengelistener/player(_:wantstoplay:)

# player(\_:wantsToPlay:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when the local player issues a challenge and the other player accepts.

## Declaration

```swift
optional func player(_ player: GKPlayer, wantsToPlay challenge: GKChallenge)
```

## Parameters

- `player`: The player who accepts the challenge.
- `challenge`: The challenge that the player issues to another player.

## See Also

### Responding to a Challenge

- [player(\_:didReceive:)](player%28__didreceive_%29.md): Deprecated. Handles when the local player issues a challenge but the other player doesn’t want to respond immediately.

# player:wantsToPlayChallenge: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.10+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when the local player issues a challenge and the other player accepts.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player wantsToPlayChallenge:(GKChallenge *) challenge;
```

## Parameters

- `player`: The player who accepts the challenge.
- `challenge`: The challenge that the player issues to another player.

## See Also

### Responding to a Challenge

- [player:didReceiveChallenge:](player%28__didreceive_%29.md): Deprecated. Handles when the local player issues a challenge but the other player doesn’t want to respond immediately.
