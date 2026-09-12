> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/slidedraggedimage(to:)](https://developer.apple.com/documentation/appkit/nsdragginginfo/slidedraggedimage(to:))

# slideDraggedImage(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Slides the image to a specified location.

## Declaration

```swift
@MainActor func slideDraggedImage(to screenPoint: NSPoint)
```

## Parameters

- `screenPoint`: A point that specifies a location in the screen coordinate system.

<a id="Discussion"></a>

## Discussion

This method can be used to adjust the location to which the dragged image will slide back if the drag is rejected.

It should only be invoked from within the destination’s implementation of prepareForDragOperation:, and will only have effect if the destination rejects the drag.

This method is invoked after the user has released the image but before it is removed from the screen.

<a id="Special-Considerations"></a>

### Special Considerations

This method has been available since OS X v 10.0, however it was not implemented until OS X v 10.5. Previous to that version, it did nothing.

## See Also

### Sliding the image

- [animatesToDestination](animatestodestination.md): A Boolean value that indicates whether the dragging formation animates while the drag is over the destination.
- [draggingFormation](draggingformation.md): The formation of the dragging items while the drag is over the destination.

# slideDraggedImageTo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Slides the image to a specified location.

## Declaration

```objectivec
- (void) slideDraggedImageTo:(NSPoint) screenPoint;
```

## Parameters

- `screenPoint`: A point that specifies a location in the screen coordinate system.

<a id="Discussion"></a>

## Discussion

This method can be used to adjust the location to which the dragged image will slide back if the drag is rejected.

It should only be invoked from within the destination’s implementation of prepareForDragOperation:, and will only have effect if the destination rejects the drag.

This method is invoked after the user has released the image but before it is removed from the screen.

<a id="Special-Considerations"></a>

### Special Considerations

This method has been available since OS X v 10.0, however it was not implemented until OS X v 10.5. Previous to that version, it did nothing.

## See Also

### Sliding the image

- [animatesToDestination](animatestodestination.md): A Boolean value that indicates whether the dragging formation animates while the drag is over the destination.
- [draggingFormation](draggingformation.md): The formation of the dragging items while the drag is over the destination.
