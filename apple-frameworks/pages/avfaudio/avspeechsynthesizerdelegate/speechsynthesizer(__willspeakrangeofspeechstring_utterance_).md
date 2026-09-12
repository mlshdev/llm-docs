> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizerdelegate/speechsynthesizer(_:willspeakrangeofspeechstring:utterance:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizerdelegate/speechsynthesizer(_:willspeakrangeofspeechstring:utterance:))

# speechSynthesizer(\_:willSpeakRangeOfSpeechString:utterance:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.

## Declaration

```swift
optional func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, willSpeakRangeOfSpeechString characterRange: NSRange, utterance: AVSpeechUtterance)
```

## Parameters

- `synthesizer`: The speech synthesizer that’s about to speak an utterance.
- `characterRange`: The range of characters in the utterance’s [speechString](../avspeechutterance/speechstring.md) that correspond to the unit of speech the synthesizer is about to speak.
- `utterance`: The utterance that the speech synthesizer is about to speak.

<a id="Discussion"></a>

## Discussion

The system calls this method once for each unit of speech in the utterance’s text, which is generally a word.

> **Tip**

>  Implement this method if you want to provide a user interface to visually highlight each word as the synthesizer speaks it.

## See Also

### Responding to speech synthesis events

- [speechSynthesizer(\_:didStart:)](speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer(\_:willSpeak:utterance:)](speechsynthesizer%28__willspeak_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.
- [speechSynthesizer(\_:didPause:)](speechsynthesizer%28__didpause_%29.md): Tells the delegate when the synthesizer pauses while speaking an utterance.
- [speechSynthesizer(\_:didContinue:)](speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer(\_:didFinish:)](speechsynthesizer%28__didfinish_%29.md): Tells the delegate when the synthesizer finishes speaking an utterance.
- [speechSynthesizer(\_:didCancel:)](speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.

# speechSynthesizer:willSpeakRangeOfSpeechString:utterance: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.

## Declaration

```objectivec
- (void) speechSynthesizer:(AVSpeechSynthesizer *) synthesizer willSpeakRangeOfSpeechString:(NSRange) characterRange utterance:(AVSpeechUtterance *) utterance;
```

## Parameters

- `synthesizer`: The speech synthesizer that’s about to speak an utterance.
- `characterRange`: The range of characters in the utterance’s [speechString](../avspeechutterance/speechstring.md) that correspond to the unit of speech the synthesizer is about to speak.
- `utterance`: The utterance that the speech synthesizer is about to speak.

<a id="Discussion"></a>

## Discussion

The system calls this method once for each unit of speech in the utterance’s text, which is generally a word.

> **Tip**

>  Implement this method if you want to provide a user interface to visually highlight each word as the synthesizer speaks it.

## See Also

### Responding to speech synthesis events

- [speechSynthesizer:didStartSpeechUtterance:](speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer:willSpeakMarker:utterance:](speechsynthesizer%28__willspeak_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.
- [speechSynthesizer:didPauseSpeechUtterance:](speechsynthesizer%28__didpause_%29.md): Tells the delegate when the synthesizer pauses while speaking an utterance.
- [speechSynthesizer:didContinueSpeechUtterance:](speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer:didFinishSpeechUtterance:](speechsynthesizer%28__didfinish_%29.md): Tells the delegate when the synthesizer finishes speaking an utterance.
- [speechSynthesizer:didCancelSpeechUtterance:](speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.
