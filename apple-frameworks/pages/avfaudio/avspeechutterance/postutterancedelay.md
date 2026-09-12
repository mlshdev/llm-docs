> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/postutterancedelay](https://developer.apple.com/documentation/avfaudio/avspeechutterance/postutterancedelay)

# postUtteranceDelay (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The amount of time the speech synthesizer pauses after speaking an utterance before handling the next utterance in the queue.

## Declaration

```swift
var postUtteranceDelay: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

When multiple utterances exist in the queue, the speech synthesizer pauses a minimum amount of time equal to the sum of the current utterance’s `postUtteranceDelay` and the next utterance’s [preUtteranceDelay](preutterancedelay.md).

## See Also

### Configuring utterance timing

- [rate](rate.md): The rate the speech synthesizer uses when speaking the utterance.
- [AVSpeechUtteranceMinimumSpeechRate](../avspeechutteranceminimumspeechrate.md): The minimum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceMaximumSpeechRate](../avspeechutterancemaximumspeechrate.md): The maximum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceDefaultSpeechRate](../avspeechutterancedefaultspeechrate.md): The default rate the speech synthesizer uses when speaking an utterance.
- [preUtteranceDelay](preutterancedelay.md): The amount of time the speech synthesizer pauses before speaking the utterance.

# postUtteranceDelay (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The amount of time the speech synthesizer pauses after speaking an utterance before handling the next utterance in the queue.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval postUtteranceDelay;
```

<a id="Discussion"></a>

## Discussion

When multiple utterances exist in the queue, the speech synthesizer pauses a minimum amount of time equal to the sum of the current utterance’s `postUtteranceDelay` and the next utterance’s [preUtteranceDelay](preutterancedelay.md).

## See Also

### Configuring utterance timing

- [rate](rate.md): The rate the speech synthesizer uses when speaking the utterance.
- [AVSpeechUtteranceMinimumSpeechRate](../avspeechutteranceminimumspeechrate.md): The minimum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceMaximumSpeechRate](../avspeechutterancemaximumspeechrate.md): The maximum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceDefaultSpeechRate](../avspeechutterancedefaultspeechrate.md): The default rate the speech synthesizer uses when speaking an utterance.
- [preUtteranceDelay](preutterancedelay.md): The amount of time the speech synthesizer pauses before speaking the utterance.
