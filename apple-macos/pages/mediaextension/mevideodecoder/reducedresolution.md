> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoder/reducedresolution](https://developer.apple.com/documentation/mediaextension/mevideodecoder/reducedresolution)

# reducedResolution (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A request to decode at a lower resolution than full-size.

## Declaration

```swift
optional var reducedResolution: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

This optional property conveys a request for reduced resolution for decoding. Decoders that only support a fixed set of resolutions should pick the smallest resolution greater than or equal to the requested width and height. If the output [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) is not in a format where reduced resolution decoding is supported, this setting should be disregarded. This property is set on the extension when a Video Toolbox client sets the [kVTDecompressionPropertyKey_ReducedResolutionDecode](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_reducedresolutiondecode) property on the hosting [VTDecompressionSession](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession).

## See Also

### Inspecting a video decoder

- [contentHasInterframeDependencies](contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [pixelFormatsWithReducedResolutionDecodeSupport](pixelformatswithreducedresolutiondecodesupport.md): Provides a list of output pixel formats where the decoder supports reduced resolution decoding.
- [producesRAWOutput](producesrawoutput.md): Indicates whether the decoder produces RAW output which requires the use of a RAW processor.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): A Boolean value that indicates the readiness of the decoder to accept more sample buffers.

# reducedResolution (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A request to decode at a lower resolution than full-size.

## Declaration

```objectivec
@property (readwrite) CGSize reducedResolution;
```

<a id="Discussion"></a>

## Discussion

This optional property conveys a request for reduced resolution for decoding. Decoders that only support a fixed set of resolutions should pick the smallest resolution greater than or equal to the requested width and height. If the output [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) is not in a format where reduced resolution decoding is supported, this setting should be disregarded. This property is set on the extension when a Video Toolbox client sets the [kVTDecompressionPropertyKey_ReducedResolutionDecode](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_reducedresolutiondecode) property on the hosting [VTDecompressionSessionRef](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession).

## See Also

### Inspecting a video decoder

- [contentHasInterframeDependencies](contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [pixelFormatsWithReducedResolutionDecodeSupport](pixelformatswithreducedresolutiondecodesupport.md): Provides a list of output pixel formats where the decoder supports reduced resolution decoding.
- [producesRAWOutput](producesrawoutput.md): Indicates whether the decoder produces RAW output which requires the use of a RAW processor.
- [readyForMoreMediaData](isreadyformoremediadata.md): A Boolean value that indicates the readiness of the decoder to accept more sample buffers.
