> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingimagecomponent/frame](https://developer.apple.com/documentation/appkit/nsdraggingimagecomponent/frame)

# frame (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The coordinate space is the bounds of the parent dragging item.

## Declaration

```swift
var frame: NSRect { get set }
```

<a id="Discussion"></a>

## Discussion

The frame is {{0,0}, {`draggingFrame.size.width`, `draggingFrame.size.height`}}.

The coordinate space is the bounds of the parent [NSDraggingItem](../nsdraggingitem.md) instance’s [draggingFrame](../nsdraggingitem/draggingframe.md).

## See Also

### Related Documentation

- [draggingFrame](../nsdraggingitem/draggingframe.md): The frame of the dragging item.

### Dragging Image Contents

- [contents](contents.md): An object providing the image contents of the component.

# frame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The coordinate space is the bounds of the parent dragging item.

## Declaration

```objectivec
@property NSRect frame;
```

<a id="Discussion"></a>

## Discussion

The frame is {{0,0}, {`draggingFrame.size.width`, `draggingFrame.size.height`}}.

The coordinate space is the bounds of the parent [NSDraggingItem](../nsdraggingitem.md) instance’s [draggingFrame](../nsdraggingitem/draggingframe.md).

## See Also

### Related Documentation

- [draggingFrame](../nsdraggingitem/draggingframe.md): The frame of the dragging item.

### Dragging Image Contents

- [contents](contents.md): An object providing the image contents of the component.
