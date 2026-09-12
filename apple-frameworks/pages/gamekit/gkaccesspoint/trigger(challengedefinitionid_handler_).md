> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/trigger(challengedefinitionid:handler:)](https://developer.apple.com/documentation/gamekit/gkaccesspoint/trigger(challengedefinitionid:handler:))

# trigger(challengeDefinitionID:handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the challenge creation view for the provided challenge definition ID.

## Declaration

```swift
func trigger(challengeDefinitionID: String, handler: (@Sendable () -> Void)? = nil)
```

```swift
func trigger(challengeDefinitionID: String) async
```

## Mentioned In

- [Creating engaging challenges from leaderboards](../creating-engaging-challenges-from-leaderboards.md)

# triggerAccessPointWithChallengeDefinitionID:handler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the challenge creation view for the provided challenge definition ID.

## Declaration

```objectivec
- (void) triggerAccessPointWithChallengeDefinitionID:(NSString *) challengeDefinitionID handler:(void (^)()) handler;
```

## Mentioned In

- [Creating engaging challenges from leaderboards](../creating-engaging-challenges-from-leaderboards.md)
