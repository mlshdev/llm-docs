> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizerdelegate/speechsynthesizer(_:willspeak:utterance:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizerdelegate/speechsynthesizer(_:willspeak:utterance:))

# speechSynthesizer(\_:willSpeak:utterance:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.

## Declaration

```swift
optional func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, willSpeak marker: AVSpeechSynthesisMarker, utterance: AVSpeechUtterance)
```

## Parameters

- `synthesizer`: The speech synthesizer that’s about to speak a marker of an utterance.
- `marker`: The synthesized audio that the speech synthesizer is about to speak.
- `utterance`: The utterance that the speech synthesizer pauses speaking.

## See Also

### Responding to speech synthesis events

- [speechSynthesizer(\_:didStart:)](speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer(\_:willSpeakRangeOfSpeechString:utterance:)](speechsynthesizer%28__willspeakrangeofspeechstring_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.
- [speechSynthesizer(\_:didPause:)](speechsynthesizer%28__didpause_%29.md): Tells the delegate when the synthesizer pauses while speaking an utterance.
- [speechSynthesizer(\_:didContinue:)](speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer(\_:didFinish:)](speechsynthesizer%28__didfinish_%29.md): Tells the delegate when the synthesizer finishes speaking an utterance.
- [speechSynthesizer(\_:didCancel:)](speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.

# speechSynthesizer:willSpeakMarker:utterance: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.

## Declaration

```objectivec
- (void) speechSynthesizer:(AVSpeechSynthesizer *) synthesizer willSpeakMarker:(AVSpeechSynthesisMarker *) marker utterance:(AVSpeechUtterance *) utterance;
```

## Parameters

- `synthesizer`: The speech synthesizer that’s about to speak a marker of an utterance.
- `marker`: The synthesized audio that the speech synthesizer is about to speak.
- `utterance`: The utterance that the speech synthesizer pauses speaking.

## See Also

### Responding to speech synthesis events

- [speechSynthesizer:didStartSpeechUtterance:](speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer:willSpeakRangeOfSpeechString:utterance:](speechsynthesizer%28__willspeakrangeofspeechstring_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.
- [speechSynthesizer:didPauseSpeechUtterance:](speechsynthesizer%28__didpause_%29.md): Tells the delegate when the synthesizer pauses while speaking an utterance.
- [speechSynthesizer:didContinueSpeechUtterance:](speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer:didFinishSpeechUtterance:](speechsynthesizer%28__didfinish_%29.md): Tells the delegate when the synthesizer finishes speaking an utterance.
- [speechSynthesizer:didCancelSpeechUtterance:](speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.
