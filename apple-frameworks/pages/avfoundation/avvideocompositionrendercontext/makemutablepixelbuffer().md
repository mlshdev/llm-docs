> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionrendercontext/makemutablepixelbuffer()](https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/makemutablepixelbuffer())

# makeMutablePixelBuffer()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Vends a CVMutablePixelBuffer to use for rendering. The buffer will have its kCVImageBufferCleanApertureKey and kCVImageBufferPixelAspectRatioKey attachments set to match the current composition processor properties.

## Declaration

```swift
func makeMutablePixelBuffer() throws -> CVMutablePixelBuffer
```

<a id="return-value"></a>

## Return Value

A CVMutablePixelBuffer to use for rendering.

<a id="discussion"></a>

## Discussion

> **Throws**

> Insufficient memory or other system error.

## See Also

### Creating the pixel buffer

- [newPixelBuffer()](newpixelbuffer%28%29.md): Deprecated. Returns a pixel buffer to use for rendering.
