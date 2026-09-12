> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizerdelegate/speechsynthesizer(_:didfinish:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizerdelegate/speechsynthesizer(_:didfinish:))

# speechSynthesizer(\_:didFinish:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate when the synthesizer finishes speaking an utterance.

## Declaration

```swift
optional func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didFinish utterance: AVSpeechUtterance)
```

## Parameters

- `synthesizer`: The speech synthesizer that finishes speaking the utterance.
- `utterance`: The utterance that the speech synthesizer finishes speaking.

<a id="Discussion"></a>

## Discussion

The system ignores the final utterance’s [postUtteranceDelay](../avspeechutterance/postutterancedelay.md) and calls this method immediately when speech ends.

## See Also

### Responding to speech synthesis events

- [speechSynthesizer(\_:didStart:)](speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer(\_:willSpeakRangeOfSpeechString:utterance:)](speechsynthesizer%28__willspeakrangeofspeechstring_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.
- [speechSynthesizer(\_:willSpeak:utterance:)](speechsynthesizer%28__willspeak_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.
- [speechSynthesizer(\_:didPause:)](speechsynthesizer%28__didpause_%29.md): Tells the delegate when the synthesizer pauses while speaking an utterance.
- [speechSynthesizer(\_:didContinue:)](speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer(\_:didCancel:)](speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.

# speechSynthesizer:didFinishSpeechUtterance: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate when the synthesizer finishes speaking an utterance.

## Declaration

```objectivec
- (void) speechSynthesizer:(AVSpeechSynthesizer *) synthesizer didFinishSpeechUtterance:(AVSpeechUtterance *) utterance;
```

## Parameters

- `synthesizer`: The speech synthesizer that finishes speaking the utterance.
- `utterance`: The utterance that the speech synthesizer finishes speaking.

<a id="Discussion"></a>

## Discussion

The system ignores the final utterance’s [postUtteranceDelay](../avspeechutterance/postutterancedelay.md) and calls this method immediately when speech ends.

## See Also

### Responding to speech synthesis events

- [speechSynthesizer:didStartSpeechUtterance:](speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer:willSpeakRangeOfSpeechString:utterance:](speechsynthesizer%28__willspeakrangeofspeechstring_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.
- [speechSynthesizer:willSpeakMarker:utterance:](speechsynthesizer%28__willspeak_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.
- [speechSynthesizer:didPauseSpeechUtterance:](speechsynthesizer%28__didpause_%29.md): Tells the delegate when the synthesizer pauses while speaking an utterance.
- [speechSynthesizer:didContinueSpeechUtterance:](speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer:didCancelSpeechUtterance:](speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.
