> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice/init(language:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/init(language:))

# init(language:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves a voice for the BCP 47 code language code you specify.

## Declaration

```swift
init?(language languageCode: String?)
```

<a id="return-value"></a>

## Return Value

A voice for the specified language and locale code if the code is valid; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

- languageCode: A BCP 47 code that identifies the language and locale for a voice.

<a id="Discussion"></a>

## Discussion

Pass `nil` for `languageCode` to receive the default voice for the system’s language and region.

## See Also

### Obtaining voices

- [init(identifier:)](init%28identifier_%29.md): Retrieves a voice for the identifier you specify.
- [speechVoices()](speechvoices%28%29.md): Retrieves all available voices on the device.
- [AVSpeechSynthesisVoiceIdentifierAlex](../avspeechsynthesisvoiceidentifieralex.md): The voice that the system identifies as Alex.

# voiceWithLanguage: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves a voice for the BCP 47 code language code you specify.

## Declaration

```objectivec
+ (AVSpeechSynthesisVoice *) voiceWithLanguage:(NSString *) languageCode;
```

<a id="return-value"></a>

## Return Value

A voice for the specified language and locale code if the code is valid; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

- languageCode: A BCP 47 code that identifies the language and locale for a voice.

<a id="Discussion"></a>

## Discussion

Pass `nil` for `languageCode` to receive the default voice for the system’s language and region.

## See Also

### Obtaining voices

- [voiceWithIdentifier:](init%28identifier_%29.md): Retrieves a voice for the identifier you specify.
- [speechVoices](speechvoices%28%29.md): Retrieves all available voices on the device.
- [AVSpeechSynthesisVoiceIdentifierAlex](../avspeechsynthesisvoiceidentifieralex.md): The voice that the system identifies as Alex.
