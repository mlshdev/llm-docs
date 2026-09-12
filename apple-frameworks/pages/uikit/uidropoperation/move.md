> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropoperation/move](https://developer.apple.com/documentation/uikit/uidropoperation/move)

# UIDropOperation.move (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A drop operation type specifying that the data represented by the drag items should be moved, not copied.

## Declaration

```swift
case move
```

<a id="Discussion"></a>

## Discussion

You may use this operation only if the drop session’s [allowsMoveOperation](../uidragdropsession/allowsmoveoperation.md) property is [true](https://developer.apple.com/documentation/swift/true); otherwise, it’s treated as a [UIDropOperation.cancel](cancel.md) operation. A move operation is allowed only within same app. Data shared with another app must be copied.

The system gives no special meaning to this operation. The [UIDragInteractionDelegate](../uidraginteractiondelegate.md) object and the [UIDropInteractionDelegate](../uidropinteractiondelegate.md) object must cooperate to produce the correct move results. For instance, the drop interaction delegate might insert the data in a new location while the drag interaction delegate removes the data from the old location.

## See Also

### Drop operation types

- [UIDropOperation.cancel](cancel.md): A drop operation type specifying that no data should be transferred, thereby canceling the drag.
- [UIDropOperation.forbidden](forbidden.md): A drop operation type specifying that, although a move or copy operation is typically legitimate in this scenario, the drop activity isn’t allowed.
- [UIDropOperation.copy](copy.md): A drop operation type specifying that the data represented by the drag items should be copied to the destination view.

# UIDropOperationMove (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A drop operation type specifying that the data represented by the drag items should be moved, not copied.

## Declaration

```objectivec
UIDropOperationMove
```

<a id="Discussion"></a>

## Discussion

You may use this operation only if the drop session’s [allowsMoveOperation](../uidragdropsession/allowsmoveoperation.md) property is [true](https://developer.apple.com/documentation/swift/true); otherwise, it’s treated as a [UIDropOperationCancel](cancel.md) operation. A move operation is allowed only within same app. Data shared with another app must be copied.

The system gives no special meaning to this operation. The [UIDragInteractionDelegate](../uidraginteractiondelegate.md) object and the [UIDropInteractionDelegate](../uidropinteractiondelegate.md) object must cooperate to produce the correct move results. For instance, the drop interaction delegate might insert the data in a new location while the drag interaction delegate removes the data from the old location.

## See Also

### Drop operation types

- [UIDropOperationCancel](cancel.md): A drop operation type specifying that no data should be transferred, thereby canceling the drag.
- [UIDropOperationForbidden](forbidden.md): A drop operation type specifying that, although a move or copy operation is typically legitimate in this scenario, the drop activity isn’t allowed.
- [UIDropOperationCopy](copy.md): A drop operation type specifying that the data represented by the drag items should be copied to the destination view.
