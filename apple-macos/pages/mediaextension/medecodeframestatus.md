> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/medecodeframestatus](https://developer.apple.com/documentation/mediaextension/medecodeframestatus)

# MEDecodeFrameStatus (Swift)

**Framework:** MediaExtension  
**Kind:** Structure  
**Availability:** macOS 14.0+

A type that represents a non-error status related to a frame decode operation.

## Declaration

```swift
struct MEDecodeFrameStatus
```

## Topics

### Creating a status

- [init(rawValue:)](medecodeframestatus/init%28rawvalue_%29.md): Creates a new frame decode operation status with the raw value that you specify.

### Inspecting a status

- [frameDropped](medecodeframestatus/framedropped.md): A frame decode operation status that indicates the system dropped the output of the frame for a reason other than an error.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Decoding frames

- [canAccept(\_:)](mevideodecoder/canaccept%28__%29.md): Asks the extension whether the decoder can decode frames with the format description that you specify.
- [decodeFrame(from:options:completionHandler:)](mevideodecoder/decodeframe%28from_options_completionhandler_%29.md): Requests the extension to decode a video frame.

# MEDecodeFrameStatus (Objective-C)

**Framework:** MediaExtension  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

A type that represents a non-error status related to a frame decode operation.

## Declaration

```objectivec
enum MEDecodeFrameStatus : NSUInteger;
```

## Topics

### Inspecting a status

- [MEDecodeFrameFrameDropped](medecodeframestatus/framedropped.md): A frame decode operation status that indicates the system dropped the output of the frame for a reason other than an error.
- [MEDecodeFrameNoStatus](medecodeframestatus/medecodeframenostatus.md)

## See Also

### Decoding frames

- [canAcceptFormatDescription:](mevideodecoder/canaccept%28__%29.md): Asks the extension whether the decoder can decode frames with the format description that you specify.
- [decodeFrameFromSampleBuffer:options:completionHandler:](mevideodecoder/decodeframe%28from_options_completionhandler_%29.md): Requests the extension to decode a video frame.
