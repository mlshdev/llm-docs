> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizerdelegate/speechsynthesizer(_:didfinishspeaking:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizerdelegate/speechsynthesizer(_:didfinishspeaking:))

# speechSynthesizer(\_:didFinishSpeaking:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Sent when an [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object finishes speaking through the sound output device.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
@MainActor optional func speechSynthesizer(_ sender: NSSpeechSynthesizer, didFinishSpeaking finishedSpeaking: Bool)
```

## Parameters

- `sender`: An [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object that has stopped speaking into the sound output device.
- `finishedSpeaking`: [true](https://developer.apple.com/documentation/swift/true) when speaking completed normally, [false](https://developer.apple.com/documentation/swift/false) if speaking is stopped prematurely for any reason.

## See Also

### Related Documentation

- [startSpeaking(\_:)](../nsspeechsynthesizer/startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [stopSpeaking()](../nsspeechsynthesizer/stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.

### Synthesizing Speech

- [speechSynthesizer(\_:willSpeakWord:of:)](speechsynthesizer%28__willspeakword_of_%29.md): Deprecated. Sent just before a synthesized word is spoken through the sound output device.
- [speechSynthesizer(\_:willSpeakPhoneme:)](speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer(\_:didEncounterErrorAt:of:message:)](speechsynthesizer%28__didencountererrorat_of_message_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.
- [speechSynthesizer(\_:didEncounterSyncMessage:)](speechsynthesizer%28__didencountersyncmessage_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters a synchronization error.

# speechSynthesizer:didFinishSpeaking: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Sent when an [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object finishes speaking through the sound output device.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
- (void) speechSynthesizer:(NSSpeechSynthesizer *) sender didFinishSpeaking:(BOOL) finishedSpeaking;
```

## Parameters

- `sender`: An [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object that has stopped speaking into the sound output device.
- `finishedSpeaking`: [true](https://developer.apple.com/documentation/swift/true) when speaking completed normally, [false](https://developer.apple.com/documentation/swift/false) if speaking is stopped prematurely for any reason.

## See Also

### Related Documentation

- [startSpeakingString:](../nsspeechsynthesizer/startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [stopSpeaking](../nsspeechsynthesizer/stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.

### Synthesizing Speech

- [speechSynthesizer:willSpeakWord:ofString:](speechsynthesizer%28__willspeakword_of_%29.md): Deprecated. Sent just before a synthesized word is spoken through the sound output device.
- [speechSynthesizer:willSpeakPhoneme:](speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer:didEncounterErrorAtIndex:ofString:message:](speechsynthesizer%28__didencountererrorat_of_message_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.
- [speechSynthesizer:didEncounterSyncMessage:](speechsynthesizer%28__didencountersyncmessage_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters a synchronization error.
