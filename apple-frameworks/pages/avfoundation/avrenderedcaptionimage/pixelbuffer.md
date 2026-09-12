> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avrenderedcaptionimage/pixelbuffer](https://developer.apple.com/documentation/avfoundation/avrenderedcaptionimage/pixelbuffer)

# pixelBuffer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 18.0+ (deprecated in 27.0) · macOS 15.0+ (deprecated in 27.0)

An object that contains pixel data for the rendered caption.

> Use readOnlyPixelBuffer instead

## Declaration

```swift
var pixelBuffer: CVPixelBuffer { get }
```

## See Also

### Inspecting the image

- [readOnlyPixelBuffer](readonlypixelbuffer.md): A CVReadOnlyPixelBuffer that contains pixel data for the rendered caption
- [position](position.md): A point that defines the position, in pixels, of the rendered caption image relative to the video frame.

# pixelBuffer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

An object that contains pixel data for the rendered caption.

## Declaration

```objectivec
@property (nonatomic, readonly) CVPixelBufferRef pixelBuffer;
```

## See Also

### Inspecting the image

- [position](position.md): A point that defines the position, in pixels, of the rendered caption image relative to the video frame.
