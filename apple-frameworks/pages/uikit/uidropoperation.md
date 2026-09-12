> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropoperation](https://developer.apple.com/documentation/uikit/uidropoperation)

# UIDropOperation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

## Declaration

```swift
enum UIDropOperation
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

## Topics

### Drop operation types

- [UIDropOperation.cancel](uidropoperation/cancel.md): A drop operation type specifying that no data should be transferred, thereby canceling the drag.
- [UIDropOperation.forbidden](uidropoperation/forbidden.md): A drop operation type specifying that, although a move or copy operation is typically legitimate in this scenario, the drop activity isn’t allowed.
- [UIDropOperation.copy](uidropoperation/copy.md): A drop operation type specifying that the data represented by the drag items should be copied to the destination view.
- [UIDropOperation.move](uidropoperation/move.md): A drop operation type specifying that the data represented by the drag items should be moved, not copied.

### Initializers

- [init(rawValue:)](uidropoperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drop destinations

- [UIDropSession](uidropsession.md): The interface for querying a drop session about its state and associated drag items.
- [UIDropProposal](uidropproposal.md): A configuration for the behavior of a drop interaction, required if a view accepts drop activities.
- [UIDropSessionProgressIndicatorStyle](uidropsessionprogressindicatorstyle.md): The drop-progress indicator styles for the drop session, used while data is moving from the source to the destination.

# UIDropOperation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Operation types that determine how a drag and drop activity resolves when the user drops a drag item.

## Declaration

```objectivec
enum UIDropOperation : NSUInteger;
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

## Topics

### Drop operation types

- [UIDropOperationCancel](uidropoperation/cancel.md): A drop operation type specifying that no data should be transferred, thereby canceling the drag.
- [UIDropOperationForbidden](uidropoperation/forbidden.md): A drop operation type specifying that, although a move or copy operation is typically legitimate in this scenario, the drop activity isn’t allowed.
- [UIDropOperationCopy](uidropoperation/copy.md): A drop operation type specifying that the data represented by the drag items should be copied to the destination view.
- [UIDropOperationMove](uidropoperation/move.md): A drop operation type specifying that the data represented by the drag items should be moved, not copied.

## See Also

### Drop destinations

- [UIDropSession](uidropsession.md): The interface for querying a drop session about its state and associated drag items.
- [UIDropProposal](uidropproposal.md): A configuration for the behavior of a drop interaction, required if a view accepts drop activities.
- [UIDropSessionProgressIndicatorStyle](uidropsessionprogressindicatorstyle.md): The drop-progress indicator styles for the drop session, used while data is moving from the source to the destination.
