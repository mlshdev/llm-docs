> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernodecompletioncallbacktype/datarendered](https://developer.apple.com/documentation/avfaudio/avaudioplayernodecompletioncallbacktype/datarendered)

# AVAudioPlayerNodeCompletionCallbackType.dataRendered (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A completion handler that indicates the player renders the buffer or file data.

## Declaration

```swift
case dataRendered
```

<a id="Discussion"></a>

## Discussion

This case doesn’t account for any signal processing latencies downstream of the player in the engine.

## See Also

### Completion Handler Cases

- [AVAudioPlayerNodeCompletionCallbackType.dataConsumed](dataconsumed.md): A completion handler that indicates the player consumes the buffer or file data.
- [AVAudioPlayerNodeCompletionCallbackType.dataPlayedBack](dataplayedback.md): A completion handler that indicates the player finishes the buffer or file data.

# AVAudioPlayerNodeCompletionDataRendered (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A completion handler that indicates the player renders the buffer or file data.

## Declaration

```objectivec
AVAudioPlayerNodeCompletionDataRendered
```

<a id="Discussion"></a>

## Discussion

This case doesn’t account for any signal processing latencies downstream of the player in the engine.

## See Also

### Completion Handler Cases

- [AVAudioPlayerNodeCompletionDataConsumed](dataconsumed.md): A completion handler that indicates the player consumes the buffer or file data.
- [AVAudioPlayerNodeCompletionDataPlayedBack](dataplayedback.md): A completion handler that indicates the player finishes the buffer or file data.
