> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkchallengecomposecompletionblock](https://developer.apple.com/documentation/gamekit/gkchallengecomposecompletionblock)

# GKChallengeComposeCompletionBlock (Swift)

**Framework:** GameKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

A completion block that provides information about the player who issues a challenge and the players who receive it.

## Declaration

```swift
typealias GKChallengeComposeCompletionBlock = (UIViewController, Bool, [String]?) -> Void
```

```swift
typealias GKChallengeComposeCompletionBlock = (NSViewController, Bool, [String]?) -> Void
```

## Parameters

- `composeController`: View controller for the challenge.
- `didIssueChallenge`: A Boolean value that indicates whether the player issues the challenge.
- `sentPlayerIDs`: The identifiers for the players that receive the challenge.

## See Also

### Deprecated symbols

- [issuingPlayerID](gkchallenge/issuingplayerid.md): Deprecated. The player who issues the challenge.
- [receivingPlayerID](gkchallenge/receivingplayerid.md): Deprecated. The player who receives the challenge.

# GKChallengeComposeCompletionBlock (Objective-C)

**Framework:** GameKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.10+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

A completion block that provides information about the player who issues a challenge and the players who receive it.

## Declaration

```objectivec
typedef void (^)(UIViewController *, _Bool, NSArray<NSString *> *) GKChallengeComposeCompletionBlock;
```

```objectivec
typedef void (^)(NSViewController *, _Bool, NSArray<NSString *> *) GKChallengeComposeCompletionBlock;
```

## Parameters

- `composeController`: View controller for the challenge.
- `didIssueChallenge`: A Boolean value that indicates whether the player issues the challenge.
- `sentPlayerIDs`: The identifiers for the players that receive the challenge.

## See Also

### Deprecated symbols

- [issuingPlayerID](gkchallenge/issuingplayerid.md): Deprecated. The player who issues the challenge.
- [receivingPlayerID](gkchallenge/receivingplayerid.md): Deprecated. The player who receives the challenge.
