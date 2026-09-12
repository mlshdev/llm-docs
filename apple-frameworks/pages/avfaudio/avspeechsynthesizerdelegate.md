> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizerdelegate](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizerdelegate)

# AVSpeechSynthesizerDelegate (Swift)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A delegate protocol that contains optional methods you can implement to respond to events that occur during speech synthesis.

## Declaration

```swift
protocol AVSpeechSynthesizerDelegate : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

A speech synthesizer sends messages to its delegate for three categories of events:

- The synthesizer starts or finishes speaking an utterance.
- Speech pauses or resumes.
- The synthesizer produces each individual unit of speech, which is generally a word.

## Topics

### Responding to speech synthesis events

- [speechSynthesizer(\_:didStart:)](avspeechsynthesizerdelegate/speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer(\_:willSpeakRangeOfSpeechString:utterance:)](avspeechsynthesizerdelegate/speechsynthesizer%28__willspeakrangeofspeechstring_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.
- [speechSynthesizer(\_:willSpeak:utterance:)](avspeechsynthesizerdelegate/speechsynthesizer%28__willspeak_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.
- [speechSynthesizer(\_:didPause:)](avspeechsynthesizerdelegate/speechsynthesizer%28__didpause_%29.md): Tells the delegate when the synthesizer pauses while speaking an utterance.
- [speechSynthesizer(\_:didContinue:)](avspeechsynthesizerdelegate/speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer(\_:didFinish:)](avspeechsynthesizerdelegate/speechsynthesizer%28__didfinish_%29.md): Tells the delegate when the synthesizer finishes speaking an utterance.
- [speechSynthesizer(\_:didCancel:)](avspeechsynthesizerdelegate/speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the delegate

- [delegate](avspeechsynthesizer/delegate.md): The delegate object for the speech synthesizer.

# AVSpeechSynthesizerDelegate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A delegate protocol that contains optional methods you can implement to respond to events that occur during speech synthesis.

## Declaration

```objectivec
@protocol AVSpeechSynthesizerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

A speech synthesizer sends messages to its delegate for three categories of events:

- The synthesizer starts or finishes speaking an utterance.
- Speech pauses or resumes.
- The synthesizer produces each individual unit of speech, which is generally a word.

## Topics

### Responding to speech synthesis events

- [speechSynthesizer:didStartSpeechUtterance:](avspeechsynthesizerdelegate/speechsynthesizer%28__didstart_%29.md): Tells the delegate when the synthesizer begins speaking an utterance.
- [speechSynthesizer:willSpeakRangeOfSpeechString:utterance:](avspeechsynthesizerdelegate/speechsynthesizer%28__willspeakrangeofspeechstring_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a portion of an utterance’s text.
- [speechSynthesizer:willSpeakMarker:utterance:](avspeechsynthesizerdelegate/speechsynthesizer%28__willspeak_utterance_%29.md): Tells the delegate when the synthesizer is about to speak a marker of an utterance’s text.
- [speechSynthesizer:didPauseSpeechUtterance:](avspeechsynthesizerdelegate/speechsynthesizer%28__didpause_%29.md): Tells the delegate when the synthesizer pauses while speaking an utterance.
- [speechSynthesizer:didContinueSpeechUtterance:](avspeechsynthesizerdelegate/speechsynthesizer%28__didcontinue_%29.md): Tells the delegate when the synthesizer resumes speaking an utterance after pausing.
- [speechSynthesizer:didFinishSpeechUtterance:](avspeechsynthesizerdelegate/speechsynthesizer%28__didfinish_%29.md): Tells the delegate when the synthesizer finishes speaking an utterance.
- [speechSynthesizer:didCancelSpeechUtterance:](avspeechsynthesizerdelegate/speechsynthesizer%28__didcancel_%29.md): Tells the delegate when the synthesizer cancels speaking an utterance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the delegate

- [delegate](avspeechsynthesizer/delegate.md): The delegate object for the speech synthesizer.
