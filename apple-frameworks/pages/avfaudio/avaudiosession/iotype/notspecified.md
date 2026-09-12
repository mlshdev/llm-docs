> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/iotype/notspecified](https://developer.apple.com/documentation/avfaudio/avaudiosession/iotype/notspecified)

# AVAudioSession.IOType.notSpecified (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The default audio session I/O type.

## Declaration

```swift
case notSpecified
```

<a id="Discussion"></a>

## Discussion

Use this I/O type if your app doesn’t use [AVCaptureSession](../../../avfoundation/avcapturesession.md), or doesn’t have any specific requirements for aggregating input and output audio in the same realtime I/O callback. If your app doesn’t use a capture session, it gets aggregated I/O when using the [playAndRecord](../category-swift.struct/playandrecord.md) category.

If your app uses a capture session, specifying this value allows the session to start recording without causing glitches in the already running output audio. It also allows the system to use power-saving optimizations.

## See Also

### I/O Types

- [AVAudioSession.IOType.aggregated](aggregated.md): An I/O type that indicates if audio input and output should be presented in the same realtime I/O callback.

# AVAudioSessionIOTypeNotSpecified (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The default audio session I/O type.

## Declaration

```objectivec
AVAudioSessionIOTypeNotSpecified
```

<a id="Discussion"></a>

## Discussion

Use this I/O type if your app doesn’t use [AVCaptureSession](../../../avfoundation/avcapturesession.md), or doesn’t have any specific requirements for aggregating input and output audio in the same realtime I/O callback. If your app doesn’t use a capture session, it gets aggregated I/O when using the [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) category.

If your app uses a capture session, specifying this value allows the session to start recording without causing glitches in the already running output audio. It also allows the system to use power-saving optimizations.

## See Also

### I/O Types

- [AVAudioSessionIOTypeAggregated](aggregated.md): An I/O type that indicates if audio input and output should be presented in the same realtime I/O callback.
