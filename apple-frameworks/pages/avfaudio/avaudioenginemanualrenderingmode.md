> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenginemanualrenderingmode](https://developer.apple.com/documentation/avfaudio/avaudioenginemanualrenderingmode)

# AVAudioEngineManualRenderingMode (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The two modes for manual rendering.

## Declaration

```swift
enum AVAudioEngineManualRenderingMode
```

<a id="overview"></a>

## Overview

By default, the engine connects to an audio device and automatically renders in real time. You can configure it to operate in manual rendering mode, where it doesn’t have a connection to an audio device and renders in response to requests from the client.

## Topics

### Constants

- [AVAudioEngineManualRenderingMode.offline](avaudioenginemanualrenderingmode/offline.md): An engine that operates in an offline mode.
- [AVAudioEngineManualRenderingMode.realtime](avaudioenginemanualrenderingmode/realtime.md): An engine that operates under real-time constraints and doesn’t make blocking calls while rendering.

### Initializers

- [init(rawValue:)](avaudioenginemanualrenderingmode/init%28rawvalue_%29.md)

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
- [AVAudioEngineManualRenderingStatus](avaudioenginemanualrenderingstatus.md): Status codes that return from the render call to the engine operating in manual rendering mode.

# AVAudioEngineManualRenderingMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The two modes for manual rendering.

## Declaration

```objectivec
enum AVAudioEngineManualRenderingMode : NSInteger;
```

<a id="overview"></a>

## Overview

By default, the engine connects to an audio device and automatically renders in real time. You can configure it to operate in manual rendering mode, where it doesn’t have a connection to an audio device and renders in response to requests from the client.

## Topics

### Constants

- [AVAudioEngineManualRenderingModeOffline](avaudioenginemanualrenderingmode/offline.md): An engine that operates in an offline mode.
- [AVAudioEngineManualRenderingModeRealtime](avaudioenginemanualrenderingmode/realtime.md): An engine that operates under real-time constraints and doesn’t make blocking calls while rendering.

## See Also

### Constants

- [AVAudioEngineManualRenderingError](avaudioenginemanualrenderingerror.md): Constants that describe error codes that the framework returns from manual rendering mode methods.
- [AVAudioEngineManualRenderingStatus](avaudioenginemanualrenderingstatus.md): Status codes that return from the render call to the engine operating in manual rendering mode.
