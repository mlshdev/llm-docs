> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/isspeaking](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/isspeaking)

# isSpeaking (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the speech synthesizer is speaking or is in a paused state and has utterances to speak.

## Declaration

```swift
var isSpeaking: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If `true`, the synthesizer is speaking or is in a paused state with utterances in its queue. If `false`, the synthesizer isn’t speaking and it doesn’t have any utterances in its queue.

## See Also

### Inspecting a speech synthesizer

- [isPaused](ispaused.md): A Boolean value that indicates whether a speech synthesizer is in a paused state.

# speaking (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the speech synthesizer is speaking or is in a paused state and has utterances to speak.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSpeaking) BOOL speaking;
```

<a id="Discussion"></a>

## Discussion

If `true`, the synthesizer is speaking or is in a paused state with utterances in its queue. If `false`, the synthesizer isn’t speaking and it doesn’t have any utterances in its queue.

## See Also

### Inspecting a speech synthesizer

- [paused](ispaused.md): A Boolean value that indicates whether a speech synthesizer is in a paused state.
