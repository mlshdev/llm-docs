> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingimagecomponent/contents](https://developer.apple.com/documentation/appkit/nsdraggingimagecomponent/contents)

# contents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An object providing the image contents of the component.

## Declaration

```swift
var contents: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically you set an [NSImage](../nsimage.md) instance or a [CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) as content.

## See Also

### Dragging Image Contents

- [frame](frame.md): The coordinate space is the bounds of the parent dragging item.

# contents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An object providing the image contents of the component.

## Declaration

```objectivec
@property (strong, nullable) id contents;
```

<a id="Discussion"></a>

## Discussion

Typically you set an [NSImage](../nsimage.md) instance or a [CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) as content.

## See Also

### Dragging Image Contents

- [frame](frame.md): The coordinate space is the bounds of the parent dragging item.
