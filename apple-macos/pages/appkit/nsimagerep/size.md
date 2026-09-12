> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/size](https://developer.apple.com/documentation/appkit/nsimagerep/size)

# size (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the image representation, measured in points in the user coordinate space.

## Declaration

```swift
var size: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

This size is the size of the image representation when it’s rendered. It is not necessarily the same as the width and height of the image in pixels as specified by the image data, nor must it be equal to the size set for the `NSImage` object that wraps this image representation.

The size of an image representation combined with the physical dimensions of the image data determine the resolution of the image.

## See Also

### Related Documentation

- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [draw()](draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.

# size (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the image representation, measured in points in the user coordinate space.

## Declaration

```objectivec
@property NSSize size;
```

<a id="Discussion"></a>

## Discussion

This size is the size of the image representation when it’s rendered. It is not necessarily the same as the width and height of the image in pixels as specified by the image data, nor must it be equal to the size set for the `NSImage` object that wraps this image representation.

The size of an image representation combined with the physical dimensions of the image data determine the resolution of the image.

## See Also

### Related Documentation

- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [draw](draw%28%29.md): Implemented by subclasses to draw the image in the current coordinate system.
