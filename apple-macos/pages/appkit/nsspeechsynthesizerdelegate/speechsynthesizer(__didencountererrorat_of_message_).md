> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizerdelegate/speechsynthesizer(_:didencountererrorat:of:message:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizerdelegate/speechsynthesizer(_:didencountererrorat:of:message:))

# speechSynthesizer(\_:didEncounterErrorAt:of:message:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.

## Declaration

```swift
@MainActor optional func speechSynthesizer(_ sender: NSSpeechSynthesizer, didEncounterErrorAt characterIndex: Int, of string: String, message: String)
```

## Parameters

- `sender`: Speech synthesizer informing its delegate of an error.
- `characterIndex`: Location in text where the receiver encountered the error.
- `string`: Text the receiver was synthesizing when the error occurred.
- `message`: Error message.

<a id="Discussion"></a>

## Discussion

The synthesizer sends an error delegate message whenever it encounters a syntax error within a command embedded in the string it is processing. This can be useful during application debugging, to detect problems with commands that you have embedded in strings that your application speaks. It can also be useful if your application allows users to embed commands within strings. Your application might display an alert indicating that the synthesizer encountered a problem in processing an embedded command.

If your application needs information about errors that occurred prior to calling your error delegate method, the application (including the error delegate method) can call the sender’s [object(forProperty:)](../nsspeechsynthesizer/object%28forproperty_%29.md) method with the [errors](../nsspeechsynthesizer/speechpropertykey/errors.md) constant.

## See Also

### Synthesizing Speech

- [speechSynthesizer(\_:willSpeakWord:of:)](speechsynthesizer%28__willspeakword_of_%29.md): Deprecated. Sent just before a synthesized word is spoken through the sound output device.
- [speechSynthesizer(\_:willSpeakPhoneme:)](speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer(\_:didEncounterSyncMessage:)](speechsynthesizer%28__didencountersyncmessage_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters a synchronization error.
- [speechSynthesizer(\_:didFinishSpeaking:)](speechsynthesizer%28__didfinishspeaking_%29.md): Deprecated. Sent when an [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object finishes speaking through the sound output device.

# speechSynthesizer:didEncounterErrorAtIndex:ofString:message: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 14.0)

Sent to the delegate when a speech synthesizer encounters an error in text being synthesized.

## Declaration

```objectivec
- (void) speechSynthesizer:(NSSpeechSynthesizer *) sender didEncounterErrorAtIndex:(NSUInteger) characterIndex ofString:(NSString *) string message:(NSString *) message;
```

## Parameters

- `sender`: Speech synthesizer informing its delegate of an error.
- `characterIndex`: Location in text where the receiver encountered the error.
- `string`: Text the receiver was synthesizing when the error occurred.
- `message`: Error message.

<a id="Discussion"></a>

## Discussion

The synthesizer sends an error delegate message whenever it encounters a syntax error within a command embedded in the string it is processing. This can be useful during application debugging, to detect problems with commands that you have embedded in strings that your application speaks. It can also be useful if your application allows users to embed commands within strings. Your application might display an alert indicating that the synthesizer encountered a problem in processing an embedded command.

If your application needs information about errors that occurred prior to calling your error delegate method, the application (including the error delegate method) can call the sender’s [objectForProperty:error:](../nsspeechsynthesizer/object%28forproperty_%29.md) method with the [NSSpeechErrorsProperty](../nsspeechsynthesizer/speechpropertykey/errors.md) constant.

## See Also

### Synthesizing Speech

- [speechSynthesizer:willSpeakWord:ofString:](speechsynthesizer%28__willspeakword_of_%29.md): Deprecated. Sent just before a synthesized word is spoken through the sound output device.
- [speechSynthesizer:willSpeakPhoneme:](speechsynthesizer%28__willspeakphoneme_%29.md): Deprecated. Sent just before a synthesized phoneme is spoken through the sound output device.
- [speechSynthesizer:didEncounterSyncMessage:](speechsynthesizer%28__didencountersyncmessage_%29.md): Deprecated. Sent to the delegate when a speech synthesizer encounters a synchronization error.
- [speechSynthesizer:didFinishSpeaking:](speechsynthesizer%28__didfinishspeaking_%29.md): Deprecated. Sent when an [NSSpeechSynthesizer](../nsspeechsynthesizer.md) object finishes speaking through the sound output device.
