> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoderextension/makevideodecoder(codectype:videoformatdescription:videodecoderspecifications:pixelbuffermanager:)](https://developer.apple.com/documentation/mediaextension/mevideodecoderextension/makevideodecoder(codectype:videoformatdescription:videodecoderspecifications:pixelbuffermanager:))

# makeVideoDecoder(codecType:videoFormatDescription:videoDecoderSpecifications:pixelBufferManager:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new video decoder that matches the codec type, format description, decoder specifications, and pixel buffer manager that you specify.

## Declaration

```swift
func makeVideoDecoder(codecType: CMVideoCodecType, videoFormatDescription: CMVideoFormatDescription, videoDecoderSpecifications: [String : Any], pixelBufferManager extensionDecoderPixelBufferManager: MEVideoDecoderPixelBufferManager) throws -> any MEVideoDecoder
```

## Parameters

- `codecType`: The codec type for the requested decoder.
- `videoFormatDescription`: An object that describes the video data.
- `videoDecoderSpecifications`: A dictionary that contains video decoder specification values, which may be empty. See [Decompression Properties](https://developer.apple.com/documentation/videotoolbox/decompression-properties) for a list of keys to use.
- `extensionDecoderPixelBufferManager`: A pixel buffer manager.

<a id="return-value"></a>

## Return Value

A new [MEVideoDecoder](../mevideodecoder.md).

<a id="Discussion"></a>

## Discussion

The `videoDecoderSpecifications` parameter accepts the following keys:

- [kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder)
- [kVTVideoDecoderSpecification_RequireHardwareAcceleratedVideoDecoder](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_requirehardwareacceleratedvideodecoder)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_requireddecodergpuregistryid)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_preferreddecodergpuregistryid)

If the parameter values aren’t compatible with the video decoder, this method fails with the error [MEError.Code.unsupportedFeature](../meerror-swift.struct/code/unsupportedfeature.md).

The video decoder needs to retain the pixel buffer manager and use it to allocate and configure output pixel buffers.

## See Also

### Creating a video decoder

- [init()](init%28%29.md): Creates a new video decoder factory.

# videoDecoderWithCodecType:videoFormatDescription:videoDecoderSpecifications:extensionDecoderPixelBufferManager:error: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new video decoder that matches the codec type, format description, decoder specifications, and pixel buffer manager that you specify.

## Declaration

```objectivec
- (id<MEVideoDecoder>) videoDecoderWithCodecType:(CMVideoCodecType) codecType videoFormatDescription:(CMVideoFormatDescriptionRef) videoFormatDescription videoDecoderSpecifications:(NSDictionary<NSString *,id> *) videoDecoderSpecifications extensionDecoderPixelBufferManager:(MEVideoDecoderPixelBufferManager *) extensionDecoderPixelBufferManager error:(NSError **) error;
```

## Parameters

- `codecType`: The codec type for the requested decoder.
- `videoFormatDescription`: An object that describes the video data.
- `videoDecoderSpecifications`: A dictionary that contains video decoder specification values, which may be empty. See [Decompression Properties](https://developer.apple.com/documentation/videotoolbox/decompression-properties) for a list of keys to use.
- `extensionDecoderPixelBufferManager`: A pixel buffer manager.
- `error`: An NSError describing the nature of any failure.

<a id="return-value"></a>

## Return Value

A new [MEVideoDecoder](../mevideodecoder.md). On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

The `videoDecoderSpecifications` parameter accepts the following keys:

- [kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder)
- [kVTVideoDecoderSpecification_RequireHardwareAcceleratedVideoDecoder](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_requirehardwareacceleratedvideodecoder)
- [kVTVideoDecoderSpecification_RequiredDecoderGPURegistryID](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_requireddecodergpuregistryid)
- [kVTVideoDecoderSpecification_PreferredDecoderGPURegistryID](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_preferreddecodergpuregistryid)

If the parameter values aren’t compatible with the video decoder, this method fails with the error [MEErrorUnsupportedFeature](../meerror-swift.struct/code/unsupportedfeature.md).

The video decoder needs to retain the pixel buffer manager and use it to allocate and configure output pixel buffers.

## See Also

### Creating a video decoder

- [init](init%28%29.md): Creates a new video decoder factory.
