> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice/init(identifier:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/init(identifier:))

# init(identifier:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves a voice for the identifier you specify.

## Declaration

```swift
init?(identifier: String)
```

## Parameters

- `identifier`: The unique identifier for a voice.

<a id="return-value"></a>

## Return Value

A voice for the specified identifier if the identifier is valid and the voice is available on the device; otherwise, `nil`.

## See Also

### Obtaining voices

- [init(language:)](init%28language_%29.md): Retrieves a voice for the BCP 47 code language code you specify.
- [speechVoices()](speechvoices%28%29.md): Retrieves all available voices on the device.
- [AVSpeechSynthesisVoiceIdentifierAlex](../avspeechsynthesisvoiceidentifieralex.md): The voice that the system identifies as Alex.

# voiceWithIdentifier: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves a voice for the identifier you specify.

## Declaration

```objectivec
+ (AVSpeechSynthesisVoice *) voiceWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The unique identifier for a voice.

<a id="return-value"></a>

## Return Value

A voice for the specified identifier if the identifier is valid and the voice is available on the device; otherwise, `nil`.

## See Also

### Obtaining voices

- [voiceWithLanguage:](init%28language_%29.md): Retrieves a voice for the BCP 47 code language code you specify.
- [speechVoices](speechvoices%28%29.md): Retrieves all available voices on the device.
- [AVSpeechSynthesisVoiceIdentifierAlex](../avspeechsynthesisvoiceidentifieralex.md): The voice that the system identifies as Alex.
