> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/iotype/aggregated](https://developer.apple.com/documentation/avfaudio/avaudiosession/iotype/aggregated)

# AVAudioSession.IOType.aggregated (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

An I/O type that indicates if audio input and output should be presented in the same realtime I/O callback.

## Declaration

```swift
case aggregated
```

<a id="Discussion"></a>

## Discussion

Use this value if your session uses [playAndRecord](../category-swift.struct/playandrecord.md) and requires input and output audio to be presented in the same realtime I/O callback. For example, if your app uses a Remote I/O with both input and output enabled.

An audio session’s preference to use aggregated I/O won’t be honored if it specifies the [mixWithOthers](../categoryoptions-swift.struct/mixwithothers.md) option and another app’s audio session was already active with nonmixable, nonaggregated I/O.

## See Also

### I/O Types

- [AVAudioSession.IOType.notSpecified](notspecified.md): The default audio session I/O type.

# AVAudioSessionIOTypeAggregated (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An I/O type that indicates if audio input and output should be presented in the same realtime I/O callback.

## Declaration

```objectivec
AVAudioSessionIOTypeAggregated
```

<a id="Discussion"></a>

## Discussion

Use this value if your session uses [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) and requires input and output audio to be presented in the same realtime I/O callback. For example, if your app uses a Remote I/O with both input and output enabled.

An audio session’s preference to use aggregated I/O won’t be honored if it specifies the [AVAudioSessionCategoryOptionMixWithOthers](../categoryoptions-swift.struct/mixwithothers.md) option and another app’s audio session was already active with nonmixable, nonaggregated I/O.

## See Also

### I/O Types

- [AVAudioSessionIOTypeNotSpecified](notspecified.md): The default audio session I/O type.
