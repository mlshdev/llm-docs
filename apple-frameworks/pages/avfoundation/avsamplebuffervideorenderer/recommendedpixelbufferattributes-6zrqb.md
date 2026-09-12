> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/recommendedpixelbufferattributes-6zrqb](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/recommendedpixelbufferattributes-6zrqb)

# recommendedPixelBufferAttributes

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 17.4+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Recommended pixel buffer attributes for optimal performance when using CMSampleBuffers containing CVPixelbuffers.

## Declaration

```swift
var recommendedPixelBufferAttributes: CVPixelBufferAttributes { get }
```

<a id="discussion"></a>

## Discussion

The returned attributes are not sufficient for pixel buffer creation. Use `CVPixelBufferAttributes/init?(merging:)` to merge these with other required attributes.

## See Also

### Accessing the pixel buffer

- [displayedPixelBuffer()](displayedpixelbuffer%28%29.md)
