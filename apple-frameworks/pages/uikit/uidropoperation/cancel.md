> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropoperation/cancel](https://developer.apple.com/documentation/uikit/uidropoperation/cancel)

# UIDropOperation.cancel (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A drop operation type specifying that no data should be transferred, thereby canceling the drag.

## Declaration

```swift
case cancel
```

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

<a id="Discussion"></a>

## Discussion

If the user attempts a drop activity, the drag operation is canceled and the [dropInteraction(\_:performDrop:)](../uidropinteractiondelegate/dropinteraction%28__performdrop_%29.md) delegate method isn’t called.

## See Also

### Drop operation types

- [UIDropOperation.forbidden](forbidden.md): A drop operation type specifying that, although a move or copy operation is typically legitimate in this scenario, the drop activity isn’t allowed.
- [UIDropOperation.copy](copy.md): A drop operation type specifying that the data represented by the drag items should be copied to the destination view.
- [UIDropOperation.move](move.md): A drop operation type specifying that the data represented by the drag items should be moved, not copied.

# UIDropOperationCancel (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A drop operation type specifying that no data should be transferred, thereby canceling the drag.

## Declaration

```objectivec
UIDropOperationCancel
```

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

<a id="Discussion"></a>

## Discussion

If the user attempts a drop activity, the drag operation is canceled and the [dropInteraction:performDrop:](../uidropinteractiondelegate/dropinteraction%28__performdrop_%29.md) delegate method isn’t called.

## See Also

### Drop operation types

- [UIDropOperationForbidden](forbidden.md): A drop operation type specifying that, although a move or copy operation is typically legitimate in this scenario, the drop activity isn’t allowed.
- [UIDropOperationCopy](copy.md): A drop operation type specifying that the data represented by the drag items should be copied to the destination view.
- [UIDropOperationMove](move.md): A drop operation type specifying that the data represented by the drag items should be moved, not copied.
