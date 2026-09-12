> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitem/setdraggingframe(_:contents:)](https://developer.apple.com/documentation/appkit/nsdraggingitem/setdraggingframe(_:contents:))

# setDraggingFrame(\_:contents:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the item’s dragging frame and contents.

## Declaration

```swift
func setDraggingFrame(_ frame: NSRect, contents: Any?)
```

## Parameters

- `frame`: The item content frame, which is in the same coordinate space as the value of [draggingFrame](draggingframe.md).
- `contents`: The item contents to display when dragging. Typically this is an `NSImage`, but a `CGImageRef` will also work.

<a id="Discussion"></a>

## Discussion

Alternate single image component setter.

This convenience method simplifies modifying the components of an `NSDraggingItem` when there is only one component. It sets the [draggingFrame](draggingframe.md) and creates a single [NSDraggingImageComponent](../nsdraggingimagecomponent.md) instance with one image corresponding to the [icon](imagecomponentkey/icon.md) key. You should use this method only under the following conditions: the drag image for this item is composed of a single image, or there are a reasonable number of dragging item instances being created or enumerated.

If your application requires the dragging of hundreds of items this method would create a instance for each item when it is called. Compare this to the [imageComponentsProvider](imagecomponentsprovider.md) block which is much faster to define and allows AppKit to create only a subset of the items using [imageComponentsProvider](imagecomponentsprovider.md).

This method sets the [draggingFrame](draggingframe.md) and [imageComponents](imagecomponents.md) properties.

## See Also

### Related Documentation

- [imageComponentsProvider](imagecomponentsprovider.md): An array of blocks that provide the dragging image components.

### Dragging frame

- [draggingFrame](draggingframe.md): The frame of the dragging item.

# setDraggingFrame:contents: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the item’s dragging frame and contents.

## Declaration

```objectivec
- (void) setDraggingFrame:(NSRect) frame contents:(id) contents;
```

## Parameters

- `frame`: The item content frame, which is in the same coordinate space as the value of [draggingFrame](draggingframe.md).
- `contents`: The item contents to display when dragging. Typically this is an `NSImage`, but a `CGImageRef` will also work.

<a id="Discussion"></a>

## Discussion

Alternate single image component setter.

This convenience method simplifies modifying the components of an `NSDraggingItem` when there is only one component. It sets the [draggingFrame](draggingframe.md) and creates a single [NSDraggingImageComponent](../nsdraggingimagecomponent.md) instance with one image corresponding to the [NSDraggingImageComponentIconKey](imagecomponentkey/icon.md) key. You should use this method only under the following conditions: the drag image for this item is composed of a single image, or there are a reasonable number of dragging item instances being created or enumerated.

If your application requires the dragging of hundreds of items this method would create a instance for each item when it is called. Compare this to the [imageComponentsProvider](imagecomponentsprovider.md) block which is much faster to define and allows AppKit to create only a subset of the items using [imageComponentsProvider](imagecomponentsprovider.md).

This method sets the [draggingFrame](draggingframe.md) and [imageComponents](imagecomponents.md) properties.

## See Also

### Related Documentation

- [imageComponentsProvider](imagecomponentsprovider.md): An array of blocks that provide the dragging image components.

### Dragging frame

- [draggingFrame](draggingframe.md): The frame of the dragging item.
