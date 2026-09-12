> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/medecodeframeoptions](https://developer.apple.com/documentation/mediaextension/medecodeframeoptions)

# MEDecodeFrameOptions (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that guides the video decoder operation on a per-frame basis.

## Declaration

```swift
class MEDecodeFrameOptions
```

## Topics

### Inspecting frame decoding options

- [doNotOutputFrame](medecodeframeoptions/donotoutputframe.md): A Boolean value that hints to the decoder whether or not it should emit an image buffer for the frame.
- [realTimePlayback](medecodeframeoptions/realtimeplayback.md): A Boolean value that hints to the decoder to use a low-power mode that can’t decode faster than 1x real-time.

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
- [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.

# MEDecodeFrameOptions (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that guides the video decoder operation on a per-frame basis.

## Declaration

```objectivec
@interface MEDecodeFrameOptions : NSObject
```

## Topics

### Inspecting frame decoding options

- [doNotOutputFrame](medecodeframeoptions/donotoutputframe.md): A Boolean value that hints to the decoder whether or not it should emit an image buffer for the frame.
- [realTimePlayback](medecodeframeoptions/realtimeplayback.md): A Boolean value that hints to the decoder to use a low-power mode that can’t decode faster than 1x real-time.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Video decoders

- [MEVideoDecoder](mevideodecoder.md): A protocol that defines the requirements for a video decoder.
- [MEVideoDecoderExtension](mevideodecoderextension.md): A protocol that defines a factory to create new video decoders for a codec type that the extension implements.
- [MEVideoDecoderPixelBufferManager](mevideodecoderpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [Video decoder property list dictionary](video-decoder-property-list-dictionary.md): Include a property list dictionary to describe a video decoder.
- [Video decoder entitlement](video-decoder-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension video decoder.
