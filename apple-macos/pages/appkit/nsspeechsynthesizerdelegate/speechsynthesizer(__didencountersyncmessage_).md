> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizerdelegate/speechsynthesizer(_:didencountersyncmessage:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizerdelegate/speechsynthesizer(_:didencountersyncmessage:))

# speechSynthesizer(\_:didEncounterSyncMessage:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Sent to the delegate when a speech synthesizer encounters a synchronization error.

## Declaration

```swift
@MainActor optional func speechSynthesizer(_ sender: NSSpeechSynthesizer, didEncounterSyncMessage message: String)
```

## Parameters

- `sender`: Speech synthesizer informing its delegate of an error.
- `message`: Error message.

<a id="Discussion"></a>

## Discussion

The synthesizer calls your synchronization delegate method whenever it encounters a synchronization command embedded in a string. You might use the synchronization delegate method to provide a callback not ordinarily provided.

For example, you might insert synchronization commands at the end of every sentence in a string, or you might enter synchronization commands after every numeric value in the text.

However, to synchronize your application with phonemes or words, it makes more sense to use the built-in phoneme and word delegate methods: [speechSynthesizer(\_:willSpeakPhoneme:)](speechsynthesizer%28__willspeakphoneme_%29.md) and [speechSynthesizer(\_:willSpeakWord:of:)](speechsynthesizer%28__willspeakword_of_%29.md).

## See Also

### Synthesizing Speech

- [speechSynthesizer(\_:willSpeakWord:of:)](speechsynthesizer%28__willspeakword_of_%29.md): Deprecated. Sent just before a synthesized word is spoken through the sound output device.
- [speechSynthesizer(\_:willSpeakPhoneme:)](speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer(\_:didEncounterErrorAt:of:message:)](speechsynthesizer%28__didencountererrorat_of_message_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.
- [speechSynthesizer(\_:didFinishSpeaking:)](speechsynthesizer%28__didfinishspeaking_%29.md): Deprecated. Sent when an [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object finishes speaking through the sound output device.

# speechSynthesizer:didEncounterSyncMessage: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Sent to the delegate when a speech synthesizer encounters a synchronization error.

## Declaration

```objectivec
- (void) speechSynthesizer:(NSSpeechSynthesizer *) sender didEncounterSyncMessage:(NSString *) message;
```

## Parameters

- `sender`: Speech synthesizer informing its delegate of an error.
- `message`: Error message.

<a id="Discussion"></a>

## Discussion

The synthesizer calls your synchronization delegate method whenever it encounters a synchronization command embedded in a string. You might use the synchronization delegate method to provide a callback not ordinarily provided.

For example, you might insert synchronization commands at the end of every sentence in a string, or you might enter synchronization commands after every numeric value in the text.

However, to synchronize your application with phonemes or words, it makes more sense to use the built-in phoneme and word delegate methods: [speechSynthesizer:willSpeakPhoneme:](speechsynthesizer%28__willspeakphoneme_%29.md) and [speechSynthesizer:willSpeakWord:ofString:](speechsynthesizer%28__willspeakword_of_%29.md).

## See Also

### Synthesizing Speech

- [speechSynthesizer:willSpeakWord:ofString:](speechsynthesizer%28__willspeakword_of_%29.md): Deprecated. Sent just before a synthesized word is spoken through the sound output device.
- [speechSynthesizer:willSpeakPhoneme:](speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer:didEncounterErrorAtIndex:ofString:message:](speechsynthesizer%28__didencountererrorat_of_message_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.
- [speechSynthesizer:didFinishSpeaking:](speechsynthesizer%28__didfinishspeaking_%29.md): Deprecated. Sent when an [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object finishes speaking through the sound output device.
