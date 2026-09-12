> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropoperation/forbidden](https://developer.apple.com/documentation/uikit/uidropoperation/forbidden)

# UIDropOperation.forbidden (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A drop operation type specifying that, although a move or copy operation is typically legitimate in this scenario, the drop activity isn’t allowed.

## Declaration

```swift
case forbidden
```

<a id="Discussion"></a>

## Discussion

You use this operation to signal that the drop activity isn’t allowed at this specific time and place. The drag operation is canceled.

## See Also

### Drop operation types

- [UIDropOperation.cancel](cancel.md): A drop operation type specifying that no data should be transferred, thereby canceling the drag.
- [UIDropOperation.copy](copy.md): A drop operation type specifying that the data represented by the drag items should be copied to the destination view.
- [UIDropOperation.move](move.md): A drop operation type specifying that the data represented by the drag items should be moved, not copied.

# UIDropOperationForbidden (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A drop operation type specifying that, although a move or copy operation is typically legitimate in this scenario, the drop activity isn’t allowed.

## Declaration

```objectivec
UIDropOperationForbidden
```

<a id="Discussion"></a>

## Discussion

You use this operation to signal that the drop activity isn’t allowed at this specific time and place. The drag operation is canceled.

## See Also

### Drop operation types

- [UIDropOperationCancel](cancel.md): A drop operation type specifying that no data should be transferred, thereby canceling the drag.
- [UIDropOperationCopy](copy.md): A drop operation type specifying that the data represented by the drag items should be copied to the destination view.
- [UIDropOperationMove](move.md): A drop operation type specifying that the data represented by the drag items should be moved, not copied.
