> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizerdelegate/speechsynthesizer(_:willspeakword:of:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizerdelegate/speechsynthesizer(_:willspeakword:of:))

# speechSynthesizer(\_:willSpeakWord:of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Sent just before a synthesized word is spoken through the sound output device.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
@MainActor optional func speechSynthesizer(_ sender: NSSpeechSynthesizer, willSpeakWord characterRange: NSRange, of string: String)
```

## Parameters

- `sender`: An [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object that’s synthesizing text into speech.
- `characterRange`: Word that `sender` is about to speak into the sound output device.
- `string`: Text that is being synthesized by `sender`.

<a id="Discussion"></a>

## Discussion

One use of this method might be to visually highlight the word being spoken.

> **Important**

>  In OS X v10.4 and earlier, the delegate is not sent this message when the `NSSpeechSynthesizer` object is synthesizing speech to a file ([startSpeaking(\_:to:)](../nsspeechsynthesizer/startspeaking%28__to_%29.md)).

## See Also

### Related Documentation

- [startSpeaking(\_:)](../nsspeechsynthesizer/startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.

### Synthesizing Speech

- [speechSynthesizer(\_:willSpeakPhoneme:)](speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer(\_:didEncounterErrorAt:of:message:)](speechsynthesizer%28__didencountererrorat_of_message_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.
- [speechSynthesizer(\_:didEncounterSyncMessage:)](speechsynthesizer%28__didencountersyncmessage_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters a synchronization error.
- [speechSynthesizer(\_:didFinishSpeaking:)](speechsynthesizer%28__didfinishspeaking_%29.md): Deprecated. Sent when an [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object finishes speaking through the sound output device.

# speechSynthesizer:willSpeakWord:ofString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Sent just before a synthesized word is spoken through the sound output device.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
- (void) speechSynthesizer:(NSSpeechSynthesizer *) sender willSpeakWord:(NSRange) characterRange ofString:(NSString *) string;
```

## Parameters

- `sender`: An [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object that’s synthesizing text into speech.
- `characterRange`: Word that `sender` is about to speak into the sound output device.
- `string`: Text that is being synthesized by `sender`.

<a id="Discussion"></a>

## Discussion

One use of this method might be to visually highlight the word being spoken.

> **Important**

>  In OS X v10.4 and earlier, the delegate is not sent this message when the `NSSpeechSynthesizer` object is synthesizing speech to a file ([startSpeakingString:toURL:](../nsspeechsynthesizer/startspeaking%28__to_%29.md)).

## See Also

### Related Documentation

- [startSpeakingString:](../nsspeechsynthesizer/startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.

### Synthesizing Speech

- [speechSynthesizer:willSpeakPhoneme:](speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer:didEncounterErrorAtIndex:ofString:message:](speechsynthesizer%28__didencountererrorat_of_message_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.
- [speechSynthesizer:didEncounterSyncMessage:](speechsynthesizer%28__didencountersyncmessage_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters a synchronization error.
- [speechSynthesizer:didFinishSpeaking:](speechsynthesizer%28__didfinishspeaking_%29.md): Deprecated. Sent when an [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object finishes speaking through the sound output device.
