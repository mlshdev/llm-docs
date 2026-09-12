> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputpixelbufferadaptor/pixelbufferpool](https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/pixelbufferpool)

# pixelBufferPool (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A pool of pixel buffers to append to the adaptor’s input.

> Use AVAssetWriter.inputPixelBufferReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
var pixelBufferPool: CVPixelBufferPool? { get }
```

<a id="Discussion"></a>

## Discussion

For maximum efficiency, you should create [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) objects for [append(\_:withPresentationTime:)](append%28__withpresentationtime_%29.md) by using this pool with the [CVPixelBufferPoolCreatePixelBuffer(\_:\_:\_:)](../../corevideo/cvpixelbufferpoolcreatepixelbuffer%28______%29.md) function.

This value is `nil` prior to calling [startSession(atSourceTime:)](../avassetwriter/startsession%28atsourcetime_%29.md)on the associated [AVAssetWriter](../avassetwriter.md) object.

This property is key-value observable.

## See Also

### Accessing the pool

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Deprecated. The attributes of the pixel buffers that the pool contains.

# pixelBufferPool (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A pool of pixel buffers to append to the adaptor’s input.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CVPixelBufferPoolRef pixelBufferPool;
```

<a id="Discussion"></a>

## Discussion

For maximum efficiency, you should create [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) objects for [appendPixelBuffer:withPresentationTime:](append%28__withpresentationtime_%29.md) by using this pool with the [CVPixelBufferPoolCreatePixelBuffer](../../corevideo/cvpixelbufferpoolcreatepixelbuffer%28______%29.md) function.

This value is `nil` prior to calling [startSessionAtSourceTime:](../avassetwriter/startsession%28atsourcetime_%29.md)on the associated [AVAssetWriter](../avassetwriter.md) object.

This property is key-value observable.

## See Also

### Accessing the pool

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): Deprecated. The attributes of the pixel buffers that the pool contains.
