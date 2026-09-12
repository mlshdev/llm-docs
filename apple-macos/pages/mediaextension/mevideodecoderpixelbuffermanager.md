> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoderpixelbuffermanager](https://developer.apple.com/documentation/mediaextension/mevideodecoderpixelbuffermanager)

# MEVideoDecoderPixelBufferManager (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

Describes pixel buffer requirements and creates new pixel buffers.

## Declaration

```swift
class MEVideoDecoderPixelBufferManager
```

<a id="Discussion"></a>

## Discussion

Contains the interfaces that the [MEVideoDecoder](mevideodecoder.md) uses for two tasks. First, to declare its set of requirements for output `CVPixelBuffer` objects in the form of a [pixelBufferAttributes](mevideodecoderpixelbuffermanager/pixelbufferattributes.md) dictionary. Second, to create pixel buffers that match decoder output requirements but also satisfy [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) and client requirements.

## Topics

### Creating a pixel buffer

- [pixelBufferAttributes](mevideodecoderpixelbuffermanager/pixelbufferattributes.md): A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the decoder.
- [makePixelBuffer()](mevideodecoderpixelbuffermanager/makepixelbuffer%28%29.md): Generates a pixel buffer using the session’s pixel buffer pool.

### Registering Custom Pixel Formats

- [registerCustomPixelFormat(\_:)](mevideodecoderpixelbuffermanager/registercustompixelformat%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Video decoders

- [MEVideoDecoder](mevideodecoder.md): A protocol that defines the requirements for a video decoder.
- [MEVideoDecoderExtension](mevideodecoderextension.md): A protocol that defines a factory to create new video decoders for a codec type that the extension implements.
- [MEDecodeFrameOptions](medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.

# MEVideoDecoderPixelBufferManager (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

Describes pixel buffer requirements and creates new pixel buffers.

## Declaration

```objectivec
@interface MEVideoDecoderPixelBufferManager : NSObject
```

<a id="Discussion"></a>

## Discussion

Contains the interfaces that the [MEVideoDecoder](mevideodecoder.md) uses for two tasks. First, to declare its set of requirements for output `CVPixelBuffer` objects in the form of a [pixelBufferAttributes](mevideodecoderpixelbuffermanager/pixelbufferattributes.md) dictionary. Second, to create pixel buffers that match decoder output requirements but also satisfy [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) and client requirements.

## Topics

### Creating a pixel buffer

- [pixelBufferAttributes](mevideodecoderpixelbuffermanager/pixelbufferattributes.md): A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the decoder.
- [createPixelBufferAndReturnError:](mevideodecoderpixelbuffermanager/makepixelbuffer%28%29.md): Generates a pixel buffer using the session’s pixel buffer pool.

### Registering Custom Pixel Formats

- [registerCustomPixelFormat:](mevideodecoderpixelbuffermanager/registercustompixelformat%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Video decoders

- [MEVideoDecoder](mevideodecoder.md): A protocol that defines the requirements for a video decoder.
- [MEVideoDecoderExtension](mevideodecoderextension.md): A protocol that defines a factory to create new video decoders for a codec type that the extension implements.
- [MEDecodeFrameOptions](medecodeframeoptions.md): An object that guides the video decoder operation on a per-frame basis.
- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.
