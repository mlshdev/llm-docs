> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoder/pixelformatswithreducedresolutiondecodesupport](https://developer.apple.com/documentation/mediaextension/mevideodecoder/pixelformatswithreducedresolutiondecodesupport)

# pixelFormatsWithReducedResolutionDecodeSupport (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Provides a list of output pixel formats where the decoder supports reduced resolution decoding.

## Declaration

```swift
optional var pixelFormatsWithReducedResolutionDecodeSupport: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

This array contains [CMPixelFormatType](https://developer.apple.com/documentation/coremedia/cmpixelformattype) values. The system queries this property on the extension when [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) queries the [kVTDecompressionPropertyKey_PixelFormatsWithReducedResolutionSupport](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_pixelformatswithreducedresolutionsupport) on the hosting [VTDecompressionSession](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession).

## See Also

### Inspecting a video decoder

- [contentHasInterframeDependencies](contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [reducedResolution](reducedresolution.md): A request to decode at a lower resolution than full-size.
- [producesRAWOutput](producesrawoutput.md): Indicates whether the decoder produces RAW output which requires the use of a RAW processor.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): A Boolean value that indicates the readiness of the decoder to accept more sample buffers.

# pixelFormatsWithReducedResolutionDecodeSupport (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Provides a list of output pixel formats where the decoder supports reduced resolution decoding.

## Declaration

```objectivec
@property (readonly) NSArray<NSNumber *> * pixelFormatsWithReducedResolutionDecodeSupport;
```

<a id="Discussion"></a>

## Discussion

This array contains [CMPixelFormatType](https://developer.apple.com/documentation/coremedia/cmpixelformattype) values. The system queries this property on the extension when [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) queries the [kVTDecompressionPropertyKey_PixelFormatsWithReducedResolutionSupport](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_pixelformatswithreducedresolutionsupport) on the hosting [VTDecompressionSessionRef](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession).

## See Also

### Inspecting a video decoder

- [contentHasInterframeDependencies](contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [reducedResolution](reducedresolution.md): A request to decode at a lower resolution than full-size.
- [producesRAWOutput](producesrawoutput.md): Indicates whether the decoder produces RAW output which requires the use of a RAW processor.
- [readyForMoreMediaData](isreadyformoremediadata.md): A Boolean value that indicates the readiness of the decoder to accept more sample buffers.
