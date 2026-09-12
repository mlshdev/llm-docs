> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizerdelegate/speechsynthesizer(_:didpause:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizerdelegate/speechsynthesizer(_:didpause:))

# speechSynthesizer(\_:didPause:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate when the synthesizer pauses while speaking an utterance.

## Declaration

```swift
optional func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didPause utterance: AVSpeechUtterance)
```

## Parameters

- `synthesizer`: The speech synthesizer that pauses speaking the utterance.
- `utterance`: The utterance that the speech synthesizer pauses speaking.

<a id="Discussion"></a>

## Discussion

The system only calls this method if a speech synthesizer is speaking an utterance and the system calls its [pauseSpeaking(at:)](../avspeechsynthesizer/pausespeaking%28at_%29.md) method. The system doesn’t call this method if the synthesizer is in a delay between utterances when speech pauses.

## See Also

### Responding to speech synthesis events

- [speechSynthesizer(\_:didStart:)](speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer(\_:willSpeakRangeOfSpeechString:utterance:)](speechsynthesizer%28__willspeakrangeofspeechstring_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.
- [speechSynthesizer(\_:willSpeak:utterance:)](speechsynthesizer%28__willspeak_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.
- [speechSynthesizer(\_:didContinue:)](speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer(\_:didFinish:)](speechsynthesizer%28__didfinish_%29.md): Tells the delegate when the synthesizer finishes speaking an utterance.
- [speechSynthesizer(\_:didCancel:)](speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.

# speechSynthesizer:didPauseSpeechUtterance: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate when the synthesizer pauses while speaking an utterance.

## Declaration

```objectivec
- (void) speechSynthesizer:(AVSpeechSynthesizer *) synthesizer didPauseSpeechUtterance:(AVSpeechUtterance *) utterance;
```

## Parameters

- `synthesizer`: The speech synthesizer that pauses speaking the utterance.
- `utterance`: The utterance that the speech synthesizer pauses speaking.

<a id="Discussion"></a>

## Discussion

The system only calls this method if a speech synthesizer is speaking an utterance and the system calls its [pauseSpeakingAtBoundary:](../avspeechsynthesizer/pausespeaking%28at_%29.md) method. The system doesn’t call this method if the synthesizer is in a delay between utterances when speech pauses.

## See Also

### Responding to speech synthesis events

- [speechSynthesizer:didStartSpeechUtterance:](speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer:willSpeakRangeOfSpeechString:utterance:](speechsynthesizer%28__willspeakrangeofspeechstring_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.
- [speechSynthesizer:willSpeakMarker:utterance:](speechsynthesizer%28__willspeak_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.
- [speechSynthesizer:didContinueSpeechUtterance:](speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer:didFinishSpeechUtterance:](speechsynthesizer%28__didfinish_%29.md): Tells the delegate when the synthesizer finishes speaking an utterance.
- [speechSynthesizer:didCancelSpeechUtterance:](speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.
