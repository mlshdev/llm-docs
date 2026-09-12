> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessiongetpixelbufferpool(_:)](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessiongetpixelbufferpool(_:))

# VTCompressionSessionGetPixelBufferPool(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Returns a pool that provides ideal source pixel buffers for a compression session.

## Declaration

```swift
func VTCompressionSessionGetPixelBufferPool(_ session: VTCompressionSession) -> CVPixelBufferPool?
```

## Parameters

- `session`: The compression session.

<a id="return-value"></a>

## Return Value

A configured pixel buffer pool.

<a id="Discussion"></a>

## Discussion

The compression session creates this pixel buffer pool based on the compressor’s pixel buffer attributes and any pixel buffer attributes passed in to [VTCompressionSessionCreate(allocator:width:height:codecType:encoderSpecification:imageBufferAttributes:compressedDataAllocator:outputCallback:refcon:compressionSessionOut:)](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md).  If the source pixel buffer attributes and the compressor pixel buffer attributes cannot be reconciled, the pool is based on the source pixel buffer attributes, and VideoToolbox converts each [CVImageBuffer](../corevideo/cvimagebuffer.md) internally.

> **Note**

>  Clients can call this function once and retain the resulting pool, but the call is cheap enough that it’s ok to call it once per frame.  If a change of session properties causes the compressor’s pixel buffer attributes to change, it’s possible that this function might return a different pool.

## See Also

### Encoding Frames

- [VTCompressionSessionPrepareToEncodeFrames(\_:)](vtcompressionsessionpreparetoencodeframes%28__%29.md): Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md): Presents frames to the compression session.
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:infoFlagsOut:outputHandler:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
- [VTCompressionSessionCompleteFrames(\_:untilPresentationTimeStamp:)](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md): Forces the compression session to complete the encoding of frames.

# VTCompressionSessionGetPixelBufferPool (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Returns a pool that provides ideal source pixel buffers for a compression session.

## Declaration

```objectivec
extern CVPixelBufferPoolRefVTCompressionSessionGetPixelBufferPool(VTCompressionSessionRef session);
```

## Parameters

- `session`: The compression session.

<a id="return-value"></a>

## Return Value

A configured pixel buffer pool.

<a id="Discussion"></a>

## Discussion

The compression session creates this pixel buffer pool based on the compressor’s pixel buffer attributes and any pixel buffer attributes passed in to [VTCompressionSessionCreate](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md).  If the source pixel buffer attributes and the compressor pixel buffer attributes cannot be reconciled, the pool is based on the source pixel buffer attributes, and VideoToolbox converts each [CVImageBufferRef](../corevideo/cvimagebuffer.md) internally.

> **Note**

>  Clients can call this function once and retain the resulting pool, but the call is cheap enough that it’s ok to call it once per frame.  If a change of session properties causes the compressor’s pixel buffer attributes to change, it’s possible that this function might return a different pool.

## See Also

### Encoding Frames

- [VTCompressionSessionPrepareToEncodeFrames](vtcompressionsessionpreparetoencodeframes%28__%29.md): Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).
- [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md): Presents frames to the compression session.
- [VTCompressionSessionEncodeFrameWithOutputHandler](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
- [VTCompressionSessionCompleteFrames](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md): Forces the compression session to complete the encoding of frames.
