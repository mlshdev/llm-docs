> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/animatestodestination](https://developer.apple.com/documentation/appkit/nsdragginginfo/animatestodestination)

# animatesToDestination (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the dragging formation animates while the drag is over the destination.

## Declaration

```swift
@MainActor var animatesToDestination: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

During the conclusion of an accepted drag, if this property is set to [true](https://developer.apple.com/documentation/swift/true), the drag manager will animate each dragging image to their [NSDraggingFormation.none](../nsdraggingformation/none.md) locations. Otherwise, the drag images are removed without any animation.

This property is inspected between prepareForDragOperation: and performDragOperation:. You should enumerate through the dragging items during performDragOperation: to set the item’s [draggingFrame](../nsdraggingitem/draggingframe.md) to the correct destinations.

## See Also

### Sliding the image

- [slideDraggedImage(to:)](slidedraggedimage%28to_%29.md): Slides the image to a specified location.
- [draggingFormation](draggingformation.md): The formation of the dragging items while the drag is over the destination.

# animatesToDestination (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the dragging formation animates while the drag is over the destination.

## Declaration

```objectivec
@property BOOL animatesToDestination;
```

<a id="Discussion"></a>

## Discussion

During the conclusion of an accepted drag, if this property is set to [true](https://developer.apple.com/documentation/swift/true), the drag manager will animate each dragging image to their [NSDraggingFormationNone](../nsdraggingformation/none.md) locations. Otherwise, the drag images are removed without any animation.

This property is inspected between prepareForDragOperation: and performDragOperation:. You should enumerate through the dragging items during performDragOperation: to set the item’s [draggingFrame](../nsdraggingitem/draggingframe.md) to the correct destinations.

## See Also

### Sliding the image

- [slideDraggedImageTo:](slidedraggedimage%28to_%29.md): Slides the image to a specified location.
- [draggingFormation](draggingformation.md): The formation of the dragging items while the drag is over the destination.
