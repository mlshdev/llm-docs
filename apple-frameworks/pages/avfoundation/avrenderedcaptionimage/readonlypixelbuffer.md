> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avrenderedcaptionimage/readonlypixelbuffer](https://developer.apple.com/documentation/avfoundation/avrenderedcaptionimage/readonlypixelbuffer)

# readOnlyPixelBuffer

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A CVReadOnlyPixelBuffer that contains pixel data for the rendered caption

## Declaration

```swift
var readOnlyPixelBuffer: CVReadOnlyPixelBuffer { get }
```

<a id="discussion"></a>

## Discussion

The pixel format is fixed to `kCVPixelFormatType_32BGRA` defined in \<CoreVideo/CVPixelBuffer.h\>

## See Also

### Inspecting the image

- [pixelBuffer](pixelbuffer.md): Deprecated. An object that contains pixel data for the rendered caption.
- [position](position.md): A point that defines the position, in pixels, of the rendered caption image relative to the video frame.
