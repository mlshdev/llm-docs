> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernodecompletioncallbacktype/dataplayedback](https://developer.apple.com/documentation/avfaudio/avaudioplayernodecompletioncallbacktype/dataplayedback)

# AVAudioPlayerNodeCompletionCallbackType.dataPlayedBack (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A completion handler that indicates the player finishes the buffer or file data.

## Declaration

```swift
case dataPlayedBack
```

<a id="Discussion"></a>

## Discussion

The completion handler is applicable when the engine is rendering to or from an audio device.

It accounts for both signal processing latencies downstream of the player in the engine, and (possibly significant) latency in the audio playback device.

## See Also

### Completion Handler Cases

- [AVAudioPlayerNodeCompletionCallbackType.dataConsumed](dataconsumed.md): A completion handler that indicates the player consumes the buffer or file data.
- [AVAudioPlayerNodeCompletionCallbackType.dataRendered](datarendered.md): A completion handler that indicates the player renders the buffer or file data.

# AVAudioPlayerNodeCompletionDataPlayedBack (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A completion handler that indicates the player finishes the buffer or file data.

## Declaration

```objectivec
AVAudioPlayerNodeCompletionDataPlayedBack
```

<a id="Discussion"></a>

## Discussion

The completion handler is applicable when the engine is rendering to or from an audio device.

It accounts for both signal processing latencies downstream of the player in the engine, and (possibly significant) latency in the audio playback device.

## See Also

### Completion Handler Cases

- [AVAudioPlayerNodeCompletionDataConsumed](dataconsumed.md): A completion handler that indicates the player consumes the buffer or file data.
- [AVAudioPlayerNodeCompletionDataRendered](datarendered.md): A completion handler that indicates the player renders the buffer or file data.
