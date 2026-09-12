> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/pixelbufferreceiver/pixelbufferpool](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/pixelbufferreceiver/pixelbufferpool)

# pixelBufferPool

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A pixel buffer pool that will vend and efficiently recycle pixel buffer objects that can be appended to the receiver.

## Declaration

```swift
var pixelBufferPool: CVMutablePixelBuffer.Pool? { get }
```

## See Also

### Accessing the pixel buffer pool

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): The pixel buffer attributes of pixel buffers that will be vended by the receiver’s pixel buffer pool.
