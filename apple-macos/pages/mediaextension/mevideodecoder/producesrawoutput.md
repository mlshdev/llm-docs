> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoder/producesrawoutput](https://developer.apple.com/documentation/mediaextension/mevideodecoder/producesrawoutput)

# producesRAWOutput (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Indicates whether the decoder produces RAW output which requires the use of a RAW processor.

## Declaration

```swift
optional var producesRAWOutput: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The extension should implement this property returning [YES](https://developer.apple.com/documentation/objectivec/yes) if the decoder produces RAW output which requires the use of an [MERAWProcessor](../merawprocessor.md) for post-decode processing to produce renderable output.

This optional property is queried on the extension when a Video Toolbox client queries the [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_decoderproducesrawoutput) property on the hosting [VTDecompressionSession](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession).

## See Also

### Inspecting a video decoder

- [contentHasInterframeDependencies](contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [reducedResolution](reducedresolution.md): A request to decode at a lower resolution than full-size.
- [pixelFormatsWithReducedResolutionDecodeSupport](pixelformatswithreducedresolutiondecodesupport.md): Provides a list of output pixel formats where the decoder supports reduced resolution decoding.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): A Boolean value that indicates the readiness of the decoder to accept more sample buffers.

# producesRAWOutput (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Indicates whether the decoder produces RAW output which requires the use of a RAW processor.

## Declaration

```objectivec
@property (readonly) BOOL producesRAWOutput;
```

<a id="Discussion"></a>

## Discussion

The extension should implement this property returning [YES](https://developer.apple.com/documentation/objectivec/yes) if the decoder produces RAW output which requires the use of an [MERAWProcessor](../merawprocessor.md) for post-decode processing to produce renderable output.

This optional property is queried on the extension when a Video Toolbox client queries the [kVTDecompressionPropertyKey_DecoderProducesRAWOutput](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_decoderproducesrawoutput) property on the hosting [VTDecompressionSessionRef](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession).

## See Also

### Inspecting a video decoder

- [contentHasInterframeDependencies](contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [reducedResolution](reducedresolution.md): A request to decode at a lower resolution than full-size.
- [pixelFormatsWithReducedResolutionDecodeSupport](pixelformatswithreducedresolutiondecodesupport.md): Provides a list of output pixel formats where the decoder supports reduced resolution decoding.
- [readyForMoreMediaData](isreadyformoremediadata.md): A Boolean value that indicates the readiness of the decoder to accept more sample buffers.
