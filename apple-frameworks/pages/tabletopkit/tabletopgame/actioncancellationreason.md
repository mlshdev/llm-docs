> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/actioncancellationreason](https://developer.apple.com/documentation/tabletopkit/tabletopgame/actioncancellationreason)

# TabletopGame.ActionCancellationReason

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

The possible reasons for cancelling an action or an interaction.

## Declaration

```swift
enum ActionCancellationReason
```

## Topics

### Cancellation reasons

- [TabletopGame.ActionCancellationReason.actionInvalidated](actioncancellationreason/actioninvalidated.md): The action became invalid due to other cancelled actions
- [TabletopGame.ActionCancellationReason.interactionCancelled](actioncancellationreason/interactioncancelled.md): The action was cancelled back because the interaction that generated it got cancelled

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing actions

- [TabletopGame.Observer](observer.md): A protocol for objects that progress gameplay when players take actions.
- [addObserver(\_:)](addobserver%28__%29.md)
- [removeObserver(\_:)](removeobserver%28__%29.md)
