> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avrenderedcaptionimage/position](https://developer.apple.com/documentation/avfoundation/avrenderedcaptionimage/position)

# position (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A point that defines the position, in pixels, of the rendered caption image relative to the video frame.

## Declaration

```swift
var position: CGPoint { get }
```

## See Also

### Inspecting the image

- [pixelBuffer](pixelbuffer.md): Deprecated. An object that contains pixel data for the rendered caption.
- [readOnlyPixelBuffer](readonlypixelbuffer.md): A CVReadOnlyPixelBuffer that contains pixel data for the rendered caption

# position (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A point that defines the position, in pixels, of the rendered caption image relative to the video frame.

## Declaration

```objectivec
@property (nonatomic, readonly) CGPoint position;
```

## See Also

### Inspecting the image

- [pixelBuffer](pixelbuffer.md): Deprecated. An object that contains pixel data for the rendered caption.
