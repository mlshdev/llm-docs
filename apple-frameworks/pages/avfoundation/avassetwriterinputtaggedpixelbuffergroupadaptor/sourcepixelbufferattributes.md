> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/sourcepixelbufferattributes](https://developer.apple.com/documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/sourcepixelbufferattributes)

# sourcePixelBufferAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The attributes of buffers that the adaptor’s pixel buffer pool vends.

> Use AVAssetWriter.inputTaggedPixelBufferGroupReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
var sourcePixelBufferAttributes: [String : any Sendable]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a dictionary containing pixel buffer attribute keys defined in `<CoreVideo/CVPixelBuffer.h>`.

## See Also

### Configuring the buffer pool

- [pixelBufferPool](pixelbufferpool.md): Deprecated. A pixel buffer pool that vends and efficiently recycles the pixel buffers of tagged buffer groups.

# sourcePixelBufferAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The attributes of buffers that the adaptor’s pixel buffer pool vends.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * sourcePixelBufferAttributes;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a dictionary containing pixel buffer attribute keys defined in `<CoreVideo/CVPixelBuffer.h>`.

## See Also

### Configuring the buffer pool

- [pixelBufferPool](pixelbufferpool.md): Deprecated. A pixel buffer pool that vends and efficiently recycles the pixel buffers of tagged buffer groups.
