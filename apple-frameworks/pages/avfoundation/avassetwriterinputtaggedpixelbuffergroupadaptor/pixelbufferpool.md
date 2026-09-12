> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/pixelbufferpool](https://developer.apple.com/documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/pixelbufferpool)

# pixelBufferPool (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A pixel buffer pool that vends and efficiently recycles the pixel buffers of tagged buffer groups.

> Use AVAssetWriter.inputTaggedPixelBufferGroupReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
var pixelBufferPool: CVPixelBufferPool? { get }
```

<a id="Discussion"></a>

## Discussion

For maximum efficiency, create the pixel buffers of tagged buffer groups using this pool with the [CVPixelBufferPoolCreatePixelBuffer(\_:\_:\_:)](../../corevideo/cvpixelbufferpoolcreatepixelbuffer%28______%29.md) function.

The value of this property is `nil` before you call [startWriting()](../avassetwriter/startwriting%28%29.md) on the associated [AVAssetWriter](../avassetwriter.md) object. Query this property after writing starts to retrieve a `non-nil` value.

This property is not key value observable.

## See Also

### Configuring the buffer pool

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Deprecated. The attributes of buffers that the adaptor’s pixel buffer pool vends.

# pixelBufferPool (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A pixel buffer pool that vends and efficiently recycles the pixel buffers of tagged buffer groups.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CVPixelBufferPoolRef pixelBufferPool;
```

<a id="Discussion"></a>

## Discussion

For maximum efficiency, create the pixel buffers of tagged buffer groups using this pool with the [CVPixelBufferPoolCreatePixelBuffer](../../corevideo/cvpixelbufferpoolcreatepixelbuffer%28______%29.md) function.

The value of this property is `nil` before you call [startWriting](../avassetwriter/startwriting%28%29.md) on the associated [AVAssetWriter](../avassetwriter.md) object. Query this property after writing starts to retrieve a `non-nil` value.

This property is not key value observable.

## See Also

### Configuring the buffer pool

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Deprecated. The attributes of buffers that the adaptor’s pixel buffer pool vends.
