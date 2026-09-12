> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoder/isreadyformoremediadata](https://developer.apple.com/documentation/mediaextension/mevideodecoder/isreadyformoremediadata)

# isReadyForMoreMediaData (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates the readiness of the decoder to accept more sample buffers.

## Declaration

```swift
var isReadyForMoreMediaData: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Video decoders which operate asynchronously often have a fixed capacity for buffers in flight in the decoder. This property allows the decoder to signal to [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) that its internal buffers are full and it can’t accept more samples. The decoder needs to use [MEVideoDecoderReadyForMoreMediaDataDidChangeNotification](../mevideodecoderreadyformoremediadatadidchangenotification.md) to notify Video Toolbox when this property changes.

## See Also

### Inspecting a video decoder

- [contentHasInterframeDependencies](contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [reducedResolution](reducedresolution.md): A request to decode at a lower resolution than full-size.
- [pixelFormatsWithReducedResolutionDecodeSupport](pixelformatswithreducedresolutiondecodesupport.md): Provides a list of output pixel formats where the decoder supports reduced resolution decoding.
- [producesRAWOutput](producesrawoutput.md): Indicates whether the decoder produces RAW output which requires the use of a RAW processor.

# readyForMoreMediaData (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates the readiness of the decoder to accept more sample buffers.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReadyForMoreMediaData) BOOL readyForMoreMediaData;
```

<a id="Discussion"></a>

## Discussion

Video decoders which operate asynchronously often have a fixed capacity for buffers in flight in the decoder. This property allows the decoder to signal to [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) that its internal buffers are full and it can’t accept more samples. The decoder needs to use [MEVideoDecoderReadyForMoreMediaDataDidChangeNotification](../mevideodecoderreadyformoremediadatadidchangenotification.md) to notify Video Toolbox when this property changes.

## See Also

### Inspecting a video decoder

- [contentHasInterframeDependencies](contenthasinterframedependencies.md): A Boolean that specifies whether the content has interframe dependencies, if the decoder knows.
- [recommendedThreadCount](recommendedthreadcount.md): The recommended number of threads for the decoder to use.
- [actualThreadCount](actualthreadcount.md): The actual number of threads the decoder uses.
- [supportedPixelFormatsOrderedByQuality](supportedpixelformatsorderedbyquality.md): Provides hints about quality tradeoffs between pixel formats.
- [reducedResolution](reducedresolution.md): A request to decode at a lower resolution than full-size.
- [pixelFormatsWithReducedResolutionDecodeSupport](pixelformatswithreducedresolutiondecodesupport.md): Provides a list of output pixel formats where the decoder supports reduced resolution decoding.
- [producesRAWOutput](producesrawoutput.md): Indicates whether the decoder produces RAW output which requires the use of a RAW processor.
