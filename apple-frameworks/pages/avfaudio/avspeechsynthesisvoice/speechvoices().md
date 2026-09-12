> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice/speechvoices()](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/speechvoices())

# speechVoices() (Swift)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves all available voices on the device.

## Declaration

```swift
class func speechVoices() -> [AVSpeechSynthesisVoice]
```

<a id="return-value"></a>

## Return Value

An array of voices.

<a id="Discussion"></a>

## Discussion

Use the [language](language.md) property to identify each voice by its language and locale.

## See Also

### Obtaining voices

- [init(identifier:)](init%28identifier_%29.md): Retrieves a voice for the identifier you specify.
- [init(language:)](init%28language_%29.md): Retrieves a voice for the BCP 47 code language code you specify.
- [AVSpeechSynthesisVoiceIdentifierAlex](../avspeechsynthesisvoiceidentifieralex.md): The voice that the system identifies as Alex.

# speechVoices (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves all available voices on the device.

## Declaration

```objectivec
+ (NSArray<AVSpeechSynthesisVoice *> *) speechVoices;
```

<a id="return-value"></a>

## Return Value

An array of voices.

<a id="Discussion"></a>

## Discussion

Use the [language](language.md) property to identify each voice by its language and locale.

## See Also

### Obtaining voices

- [voiceWithIdentifier:](init%28identifier_%29.md): Retrieves a voice for the identifier you specify.
- [voiceWithLanguage:](init%28language_%29.md): Retrieves a voice for the BCP 47 code language code you specify.
- [AVSpeechSynthesisVoiceIdentifierAlex](../avspeechsynthesisvoiceidentifieralex.md): The voice that the system identifies as Alex.
