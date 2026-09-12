> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/pixelbufferreceiver/sourcepixelbufferattributes](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/pixelbufferreceiver/sourcepixelbufferattributes)

# sourcePixelBufferAttributes

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The pixel buffer attributes of pixel buffers that will be vended by the receiver’s pixel buffer pool.

## Declaration

```swift
var sourcePixelBufferAttributes: CVPixelBufferCreationAttributes? { get }
```

## See Also

### Accessing the pixel buffer pool

- [pixelBufferPool](pixelbufferpool.md): A pixel buffer pool that will vend and efficiently recycle pixel buffer objects that can be appended to the receiver.
