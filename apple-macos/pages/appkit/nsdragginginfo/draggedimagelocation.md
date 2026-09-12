> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/draggedimagelocation](https://developer.apple.com/documentation/appkit/nsdragginginfo/draggedimagelocation)

# draggedImageLocation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current location of the dragged image’s origin, in the base coordinate system of the destination object’s window.

## Declaration

```swift
@MainActor var draggedImageLocation: NSPoint { get }
```

<a id="Discussion"></a>

## Discussion

The image moves along with the mouse pointer (the position of which is given by [draggingLocation](dragginglocation.md)) but may be positioned at some offset.

## See Also

### Getting image information

- [draggedImage](draggedimage.md): Deprecated. The image that represents the dragging item.

# draggedImageLocation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current location of the dragged image’s origin, in the base coordinate system of the destination object’s window.

## Declaration

```objectivec
@property (readonly) NSPoint draggedImageLocation;
```

<a id="Discussion"></a>

## Discussion

The image moves along with the mouse pointer (the position of which is given by [draggingLocation](dragginglocation.md)) but may be positioned at some offset.

## See Also

### Getting image information

- [draggedImage](draggedimage.md): Deprecated. The image that represents the dragging item.
