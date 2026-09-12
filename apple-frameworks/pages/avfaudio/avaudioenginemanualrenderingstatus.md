> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenginemanualrenderingstatus](https://developer.apple.com/documentation/avfaudio/avaudioenginemanualrenderingstatus)

# AVAudioEngineManualRenderingStatus (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Status codes that return from the render call to the engine operating in manual rendering mode.

## Declaration

```swift
enum AVAudioEngineManualRenderingStatus
```

## Topics

### Constants

- [AVAudioEngineManualRenderingStatus.error](avaudioenginemanualrenderingstatus/error.md): A problem that occurs during rendering and results in no data returning.
- [AVAudioEngineManualRenderingStatus.success](avaudioenginemanualrenderingstatus/success.md): A status that indicates the successful return of the requested data.
- [AVAudioEngineManualRenderingStatus.insufficientDataFromInputNode](avaudioenginemanualrenderingstatus/insufficientdatafrominputnode.md): A condition that occurs when the input node doesn’t return enough input data to satisfy the render request at the time of the request.
- [AVAudioEngineManualRenderingStatus.cannotDoInCurrentContext](avaudioenginemanualrenderingstatus/cannotdoincurrentcontext.md): An operation that the system can’t perform under the current conditions.

### Initializers

- [init(rawValue:)](avaudioenginemanualrenderingstatus/init%28rawvalue_%29.md)

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

- [AVAudioEngineManualRenderingError](avaudioenginemanualrenderingerror.md): Constants that describe error codes that the framework returns from manual rendering mode methods.
- [AVAudioEngineManualRenderingMode](avaudioenginemanualrenderingmode.md): The two modes for manual rendering.

# AVAudioEngineManualRenderingStatus (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Status codes that return from the render call to the engine operating in manual rendering mode.

## Declaration

```objectivec
enum AVAudioEngineManualRenderingStatus : NSInteger;
```

## Topics

### Constants

- [AVAudioEngineManualRenderingStatusError](avaudioenginemanualrenderingstatus/error.md): A problem that occurs during rendering and results in no data returning.
- [AVAudioEngineManualRenderingStatusSuccess](avaudioenginemanualrenderingstatus/success.md): A status that indicates the successful return of the requested data.
- [AVAudioEngineManualRenderingStatusInsufficientDataFromInputNode](avaudioenginemanualrenderingstatus/insufficientdatafrominputnode.md): A condition that occurs when the input node doesn’t return enough input data to satisfy the render request at the time of the request.
- [AVAudioEngineManualRenderingStatusCannotDoInCurrentContext](avaudioenginemanualrenderingstatus/cannotdoincurrentcontext.md): An operation that the system can’t perform under the current conditions.

## See Also

### Constants

- [AVAudioEngineManualRenderingError](avaudioenginemanualrenderingerror.md): Constants that describe error codes that the framework returns from manual rendering mode methods.
- [AVAudioEngineManualRenderingMode](avaudioenginemanualrenderingmode.md): The two modes for manual rendering.
