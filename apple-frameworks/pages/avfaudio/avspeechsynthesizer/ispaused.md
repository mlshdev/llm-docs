> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/ispaused](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/ispaused)

# isPaused (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether a speech synthesizer is in a paused state.

## Declaration

```swift
var isPaused: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If `true`, the speech synthesizer is in a paused state after beginning to speak an utterance; otherwise, `false`.

## See Also

### Inspecting a speech synthesizer

- [isSpeaking](isspeaking.md): A Boolean value that indicates whether the speech synthesizer is speaking or is in a paused state and has utterances to speak.

# paused (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether a speech synthesizer is in a paused state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPaused) BOOL paused;
```

<a id="Discussion"></a>

## Discussion

If `true`, the speech synthesizer is in a paused state after beginning to speak an utterance; otherwise, `false`.

## See Also

### Inspecting a speech synthesizer

- [speaking](isspeaking.md): A Boolean value that indicates whether the speech synthesizer is speaking or is in a paused state and has utterances to speak.
