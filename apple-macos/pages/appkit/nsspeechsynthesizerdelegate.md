> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizerdelegate](https://developer.apple.com/documentation/appkit/nsspeechsynthesizerdelegate)

# NSSpeechSynthesizerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 14.0)

A set of optional methods implemented by delegates of [NSSpeechSynthesizer](nsspeechsynthesizer.md) objects.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
protocol NSSpeechSynthesizerDelegate : NSObjectProtocol
```

## Topics

### Synthesizing Speech

- [speechSynthesizer(\_:willSpeakWord:of:)](nsspeechsynthesizerdelegate/speechsynthesizer%28__willspeakword_of_%29.md): Deprecated. Sent just before a synthesized word is spoken through the sound output device.
- [speechSynthesizer(\_:willSpeakPhoneme:)](nsspeechsynthesizerdelegate/speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer(\_:didEncounterErrorAt:of:message:)](nsspeechsynthesizerdelegate/speechsynthesizer%28__didencountererrorat_of_message_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.
- [speechSynthesizer(\_:didEncounterSyncMessage:)](nsspeechsynthesizerdelegate/speechsynthesizer%28__didencountersyncmessage_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters a synchronization error.
- [speechSynthesizer(\_:didFinishSpeaking:)](nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md): Deprecated. Sent when an [NSSpeechSynthesizer](nsspeechsynthesizer.md) object finishes speaking through the sound output device.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Customizing the Speech Synthesizer Behavior

- [delegate](nsspeechsynthesizer/delegate.md): Deprecated. The synthesizer’s delegate.

# NSSpeechSynthesizerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 14.0)

A set of optional methods implemented by delegates of [NSSpeechSynthesizer](nsspeechsynthesizer.md) objects.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
@protocol NSSpeechSynthesizerDelegate <NSObject>
```

## Topics

### Synthesizing Speech

- [speechSynthesizer:willSpeakWord:ofString:](nsspeechsynthesizerdelegate/speechsynthesizer%28__willspeakword_of_%29.md): Deprecated. Sent just before a synthesized word is spoken through the sound output device.
- [speechSynthesizer:willSpeakPhoneme:](nsspeechsynthesizerdelegate/speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer:didEncounterErrorAtIndex:ofString:message:](nsspeechsynthesizerdelegate/speechsynthesizer%28__didencountererrorat_of_message_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.
- [speechSynthesizer:didEncounterSyncMessage:](nsspeechsynthesizerdelegate/speechsynthesizer%28__didencountersyncmessage_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters a synchronization error.
- [speechSynthesizer:didFinishSpeaking:](nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md): Deprecated. Sent when an [NSSpeechSynthesizer](nsspeechsynthesizer.md) object finishes speaking through the sound output device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Customizing the Speech Synthesizer Behavior

- [delegate](nsspeechsynthesizer/delegate.md): Deprecated. The synthesizer’s delegate.
