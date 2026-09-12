> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoderextension](https://developer.apple.com/documentation/mediaextension/mevideodecoderextension)

# MEVideoDecoderExtension (Swift)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 14.0+

A protocol that defines a factory to create new video decoders for a codec type that the extension implements.

## Declaration

```swift
protocol MEVideoDecoderExtension : NSObjectProtocol
```

<a id="Discussion"></a>

## Discussion

This protocol provides a factory method to create a new [MEVideoDecoder](mevideodecoder.md) instance for a codecType implemented by the extension. A single [MEVideoDecoderExtension](mevideodecoderextension.md) is instantiated by the `VideoToolbox`, and will be called to create individual [MEVideoDecoder](mevideodecoder.md) instances as needed. If the codecType or `FormatDescription` passed to [makeVideoDecoder(codecType:videoFormatDescription:videoDecoderSpecifications:pixelBufferManager:)](mevideodecoderextension/makevideodecoder%28codectype_videoformatdescription_videodecoderspecifications_pixelbuffermanager_%29.md) is not compatible with the [MEVideoDecoder](mevideodecoder.md) implementation, the factory call should fail and return [MEError.Code.unsupportedFeature](meerror-swift.struct/code/unsupportedfeature.md).

## Topics

### Creating a video decoder

- [init()](mevideodecoderextension/init%28%29.md): Creates a new video decoder factory.
- [makeVideoDecoder(codecType:videoFormatDescription:videoDecoderSpecifications:pixelBufferManager:)](mevideodecoderextension/makevideodecoder%28codectype_videoformatdescription_videodecoderspecifications_pixelbuffermanager_%29.md): Creates a new video decoder that matches the codec type, format description, decoder specifications, and pixel buffer manager that you specify.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Video decoders

- [MEVideoDecoder](mevideodecoder.md): A protocol that defines the requirements for a video decoder.
- [MEDecodeFrameOptions](medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.

# MEVideoDecoderExtension (Objective-C)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 14.0+

A protocol that defines a factory to create new video decoders for a codec type that the extension implements.

## Declaration

```objectivec
@protocol MEVideoDecoderExtension <NSObject>
```

<a id="Discussion"></a>

## Discussion

This protocol provides a factory method to create a new [MEVideoDecoder](mevideodecoder.md) instance for a codecType implemented by the extension. A single [MEVideoDecoderExtension](mevideodecoderextension.md) is instantiated by the `VideoToolbox`, and will be called to create individual [MEVideoDecoder](mevideodecoder.md) instances as needed. If the codecType or `FormatDescription` passed to [videoDecoderWithCodecType:videoFormatDescription:videoDecoderSpecifications:extensionDecoderPixelBufferManager:error:](mevideodecoderextension/makevideodecoder%28codectype_videoformatdescription_videodecoderspecifications_pixelbuffermanager_%29.md) is not compatible with the [MEVideoDecoder](mevideodecoder.md) implementation, the factory call should fail and return [MEErrorUnsupportedFeature](meerror-swift.struct/code/unsupportedfeature.md).

## Topics

### Creating a video decoder

- [init](mevideodecoderextension/init%28%29.md): Creates a new video decoder factory.
- [videoDecoderWithCodecType:videoFormatDescription:videoDecoderSpecifications:extensionDecoderPixelBufferManager:error:](mevideodecoderextension/makevideodecoder%28codectype_videoformatdescription_videodecoderspecifications_pixelbuffermanager_%29.md): Creates a new video decoder that matches the codec type, format description, decoder specifications, and pixel buffer manager that you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Video decoders

- [MEVideoDecoder](mevideodecoder.md): A protocol that defines the requirements for a video decoder.
- [MEDecodeFrameOptions](medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.
