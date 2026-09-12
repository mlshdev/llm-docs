> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputpixelbufferadaptor/sourcepixelbufferattributes](https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/sourcepixelbufferattributes)

# sourcePixelBufferAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The attributes of the pixel buffers that the pool contains.

> Use AVAssetWriter.inputPixelBufferReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
var sourcePixelBufferAttributes: [String : any Sendable]? { get }
```

## See Also

### Accessing the pool

- [pixelBufferPool](pixelbufferpool.md): Deprecated. A pool of pixel buffers to append to the adaptor’s input.

# sourcePixelBufferAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The attributes of the pixel buffers that the pool contains.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * sourcePixelBufferAttributes;
```

## See Also

### Accessing the pool

- [pixelBufferPool](pixelbufferpool.md): Deprecated. A pool of pixel buffers to append to the adaptor’s input.
