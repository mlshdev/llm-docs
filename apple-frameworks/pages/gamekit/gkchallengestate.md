> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengestate](https://developer.apple.com/documentation/gamekit/gkchallengestate)

# GKChallengeState (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The state of a challenge.

## Declaration

```swift
enum GKChallengeState
```

## Topics

### Challenge States

- [GKChallengeState.invalid](gkchallengestate/invalid.md): Deprecated. The challenge isn’t valid because an error occurred.
- [GKChallengeState.pending](gkchallengestate/pending.md): Deprecated. The player issued a challenge, but the other player hasn’t accepted or refused it.
- [GKChallengeState.completed](gkchallengestate/completed.md): Deprecated. The player successfully completed the challenge.
- [GKChallengeState.declined](gkchallengestate/declined.md): Deprecated. The player declined the challenge.

### Initializers

- [init(rawValue:)](gkchallengestate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Examining Details about a Challenge

- [issuingPlayer](gkchallenge/issuingplayer.md): Deprecated. The player who issues the challenge.
- [receivingPlayer](gkchallenge/receivingplayer.md): Deprecated. The player who receives the challenge.
- [message](gkchallenge/message.md): Deprecated. A text message that describes the challenge.
- [state](gkchallenge/state.md): Deprecated. The current state of the challenge.
- [issueDate](gkchallenge/issuedate.md): Deprecated. The date the player issued the challenge.
- [completionDate](gkchallenge/completiondate.md): Deprecated. The date the challenged player completed the challenge.

# GKChallengeState (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The state of a challenge.

## Declaration

```objectivec
enum GKChallengeState : NSInteger;
```

## Topics

### Challenge States

- [GKChallengeStateInvalid](gkchallengestate/invalid.md): Deprecated. The challenge isn’t valid because an error occurred.
- [GKChallengeStatePending](gkchallengestate/pending.md): Deprecated. The player issued a challenge, but the other player hasn’t accepted or refused it.
- [GKChallengeStateCompleted](gkchallengestate/completed.md): Deprecated. The player successfully completed the challenge.
- [GKChallengeStateDeclined](gkchallengestate/declined.md): Deprecated. The player declined the challenge.

## See Also

### Examining Details about a Challenge

- [issuingPlayer](gkchallenge/issuingplayer.md): Deprecated. The player who issues the challenge.
- [receivingPlayer](gkchallenge/receivingplayer.md): Deprecated. The player who receives the challenge.
- [message](gkchallenge/message.md): Deprecated. A text message that describes the challenge.
- [state](gkchallenge/state.md): Deprecated. The current state of the challenge.
- [issueDate](gkchallenge/issuedate.md): Deprecated. The date the player issued the challenge.
- [completionDate](gkchallenge/completiondate.md): Deprecated. The date the challenged player completed the challenge.
