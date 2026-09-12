> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamoutputtype](https://developer.apple.com/documentation/screencapturekit/scstreamoutputtype)

# SCStreamOutputType (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Constants that represent output types for a stream frame.

## Declaration

```swift
enum SCStreamOutputType
```

## Topics

### Output types

- [SCStreamOutputType.screen](scstreamoutputtype/screen.md): An output type that represents a screen capture sample buffer.
- [SCStreamOutputType.audio](scstreamoutputtype/audio.md): An output type that represents an audio capture sample buffer.

### Enumeration Cases

- [SCStreamOutputType.microphone](scstreamoutputtype/microphone.md)

### Initializers

- [init(rawValue:)](scstreamoutputtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Output processing

- [SCStreamOutput](scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamFrameInfo](scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCFrameStatus](scframestatus.md): Status values for a frame from a stream.
- [SCClipBufferingOutput](scclipbufferingoutput.md)

# SCStreamOutputType (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Constants that represent output types for a stream frame.

## Declaration

```objectivec
enum SCStreamOutputType : NSInteger;
```

## Topics

### Output types

- [SCStreamOutputTypeScreen](scstreamoutputtype/screen.md): An output type that represents a screen capture sample buffer.
- [SCStreamOutputTypeAudio](scstreamoutputtype/audio.md): An output type that represents an audio capture sample buffer.

### Enumeration Cases

- [SCStreamOutputTypeMicrophone](scstreamoutputtype/microphone.md)

## See Also

### Output processing

- [SCStreamOutput](scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamFrameInfo](scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCFrameStatus](scframestatus.md): Status values for a frame from a stream.
- [SCClipBufferingOutput](scclipbufferingoutput.md)
