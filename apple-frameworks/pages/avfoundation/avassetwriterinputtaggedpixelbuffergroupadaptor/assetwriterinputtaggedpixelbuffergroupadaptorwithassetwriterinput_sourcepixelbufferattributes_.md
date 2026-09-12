> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/assetwriterinputtaggedpixelbuffergroupadaptorwithassetwriterinput:sourcepixelbufferattributes:](https://developer.apple.com/documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/assetwriterinputtaggedpixelbuffergroupadaptorwithassetwriterinput:sourcepixelbufferattributes:)

# assetWriterInputTaggedPixelBufferGroupAdaptorWithAssetWriterInput:sourcePixelBufferAttributes:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Returns a new object that appends tagged buffer groups to an asset writer input.

## Declaration

```objectivec
+ (instancetype) assetWriterInputTaggedPixelBufferGroupAdaptorWithAssetWriterInput:(AVAssetWriterInput *) input sourcePixelBufferAttributes:(NSDictionary<NSString *,id> *) sourcePixelBufferAttributes;
```

## Parameters

- `input`: An asset writer input, that handles media data of type [AVMediaTypeVideo](../avmediatype/video.md), to use for appending tagged buffer groups.

  It’s an error to initialize an adaptor with an asset writer input that is already attached to another instance of tagged pixel buffer group adaptor, or to one th that progresses beyond its [AVAssetWriterStatusUnknown](../avassetwriter/status-swift.enum/unknown.md) state.
- `sourcePixelBufferAttributes`: Specifies the attributes of pixel buffers that the adaptor’s pixel buffer pool vends. If your app doesn’t require a pixel buffer pool, this this value to `nil`.

<a id="return-value"></a>

## Return Value

A new adaptor instance.

<a id="Discussion"></a>

## Discussion

To take advantage of the improved efficiency of appending buffers created from the adaptor’s pixel buffer pool, specify pixel buffer attributes that most closely accommodate the source format of the video frames of tagged buffer groups to append.

Pixel buffer attributes keys for the pixel buffer pool are defined in `<CoreVideo/CVPixelBuffer.h>`. To specify the pixel format type, the pixel buffer attributes dictionary should contain a value for [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md). For example, specify a format of [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) for 8-bit-per-channel BGRA. See [appendPixelBuffer:withPresentationTime:](../avassetwriterinputpixelbufferadaptor/append%28__withpresentationtime_%29.md) in [AVAssetWriterInputPixelBufferAdaptor](../avassetwriterinputpixelbufferadaptor.md) for more information on choosing a pixel format.

## See Also

### Creating an adaptor

- [initWithAssetWriterInput:sourcePixelBufferAttributes:](init%28assetwriterinput_sourcepixelbufferattributes_%29.md): Deprecated. Creates an object that appends tagged buffer groups to an asset writer input.
