> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenginemanualrenderingerror](https://developer.apple.com/documentation/avfaudio/avaudioenginemanualrenderingerror)

# AVAudioEngineManualRenderingError (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Constants that describe error codes that the framework returns from manual rendering mode methods.

## Declaration

```swift
enum AVAudioEngineManualRenderingError
```

## Topics

### Manual Rendering Errors

- [AVAudioEngineManualRenderingError.initialized](avaudioenginemanualrenderingerror/initialized.md): An operation that the system can’t perform because the engine is still running.
- [AVAudioEngineManualRenderingError.invalidMode](avaudioenginemanualrenderingerror/invalidmode.md): An operation the system can’t perform because the engine isn’t in manual rendering mode or the right variant of it.
- [AVAudioEngineManualRenderingError.notRunning](avaudioenginemanualrenderingerror/notrunning.md): An operation the system can’t perform because the engine isn’t running.

### Initializers

- [init(rawValue:)](avaudioenginemanualrenderingerror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [AVAudioEngineManualRenderingMode](avaudioenginemanualrenderingmode.md): The two modes for manual rendering.
- [AVAudioEngineManualRenderingStatus](avaudioenginemanualrenderingstatus.md): Status codes that return from the render call to the engine operating in manual rendering mode.

# AVAudioEngineManualRenderingError (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Constants that describe error codes that the framework returns from manual rendering mode methods.

## Declaration

```objectivec
enum AVAudioEngineManualRenderingError : OSStatus;
```

## Topics

### Manual Rendering Errors

- [AVAudioEngineManualRenderingErrorInitialized](avaudioenginemanualrenderingerror/initialized.md): An operation that the system can’t perform because the engine is still running.
- [AVAudioEngineManualRenderingErrorInvalidMode](avaudioenginemanualrenderingerror/invalidmode.md): An operation the system can’t perform because the engine isn’t in manual rendering mode or the right variant of it.
- [AVAudioEngineManualRenderingErrorNotRunning](avaudioenginemanualrenderingerror/notrunning.md): An operation the system can’t perform because the engine isn’t running.

## See Also

### Constants

- [AVAudioEngineManualRenderingMode](avaudioenginemanualrenderingmode.md): The two modes for manual rendering.
- [AVAudioEngineManualRenderingStatus](avaudioenginemanualrenderingstatus.md): Status codes that return from the render call to the engine operating in manual rendering mode.
