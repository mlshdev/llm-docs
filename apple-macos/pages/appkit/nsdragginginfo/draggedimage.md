> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/draggedimage](https://developer.apple.com/documentation/appkit/nsdragginginfo/draggedimage)

# draggedImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 11.0)

The image that represents the dragging item.

> Use NSDraggingItem objects instead

## Declaration

```swift
var draggedImage: NSImage? { get }
```

<a id="Discussion"></a>

## Discussion

This image object visually represents the data put on the pasteboard during the drag operation; however, it is the pasteboard data and not this image that is ultimately utilized in the dragging operation.

This method returns non-`nil` for a local drag, but `nil` for a cross-process drag. With the new multi-image dragging capabilities, a cross-process destination may participate and change the drag image. But it still cannot get the current drag image.

## See Also

### Getting image information

- [draggedImageLocation](draggedimagelocation.md): The current location of the dragged image’s origin, in the base coordinate system of the destination object’s window.

# draggedImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 11.0)

The image that represents the dragging item.

> Use NSDraggingItem objects instead

## Declaration

```objectivec
@property (readonly, nullable) NSImage * draggedImage;
```

<a id="Discussion"></a>

## Discussion

This image object visually represents the data put on the pasteboard during the drag operation; however, it is the pasteboard data and not this image that is ultimately utilized in the dragging operation.

This method returns non-`nil` for a local drag, but `nil` for a cross-process drag. With the new multi-image dragging capabilities, a cross-process destination may participate and change the drag image. But it still cannot get the current drag image.

## See Also

### Getting image information

- [draggedImageLocation](draggedimagelocation.md): The current location of the dragged image’s origin, in the base coordinate system of the destination object’s window.
