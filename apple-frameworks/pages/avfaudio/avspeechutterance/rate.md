> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/rate](https://developer.apple.com/documentation/avfaudio/avspeechutterance/rate)

# rate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The rate the speech synthesizer uses when speaking the utterance.

## Declaration

```swift
var rate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The speech rate is a decimal representation within the range of [AVSpeechUtteranceMinimumSpeechRate](../avspeechutteranceminimumspeechrate.md) and [AVSpeechUtteranceMaximumSpeechRate](../avspeechutterancemaximumspeechrate.md). Lower values correspond to slower speech, and higher values correspond to faster speech. The default value is [AVSpeechUtteranceDefaultSpeechRate](../avspeechutterancedefaultspeechrate.md). Set this property before enqueing the utterance because setting it afterward has no effect.

## See Also

### Configuring utterance timing

- [AVSpeechUtteranceMinimumSpeechRate](../avspeechutteranceminimumspeechrate.md): The minimum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceMaximumSpeechRate](../avspeechutterancemaximumspeechrate.md): The maximum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceDefaultSpeechRate](../avspeechutterancedefaultspeechrate.md): The default rate the speech synthesizer uses when speaking an utterance.
- [preUtteranceDelay](preutterancedelay.md): The amount of time the speech synthesizer pauses before speaking the utterance.
- [postUtteranceDelay](postutterancedelay.md): The amount of time the speech synthesizer pauses after speaking an utterance before handling the next utterance in the queue.

# rate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The rate the speech synthesizer uses when speaking the utterance.

## Declaration

```objectivec
@property (nonatomic) float rate;
```

<a id="Discussion"></a>

## Discussion

The speech rate is a decimal representation within the range of [AVSpeechUtteranceMinimumSpeechRate](../avspeechutteranceminimumspeechrate.md) and [AVSpeechUtteranceMaximumSpeechRate](../avspeechutterancemaximumspeechrate.md). Lower values correspond to slower speech, and higher values correspond to faster speech. The default value is [AVSpeechUtteranceDefaultSpeechRate](../avspeechutterancedefaultspeechrate.md). Set this property before enqueing the utterance because setting it afterward has no effect.

## See Also

### Configuring utterance timing

- [AVSpeechUtteranceMinimumSpeechRate](../avspeechutteranceminimumspeechrate.md): The minimum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceMaximumSpeechRate](../avspeechutterancemaximumspeechrate.md): The maximum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceDefaultSpeechRate](../avspeechutterancedefaultspeechrate.md): The default rate the speech synthesizer uses when speaking an utterance.
- [preUtteranceDelay](preutterancedelay.md): The amount of time the speech synthesizer pauses before speaking the utterance.
- [postUtteranceDelay](postutterancedelay.md): The amount of time the speech synthesizer pauses after speaking an utterance before handling the next utterance in the queue.
