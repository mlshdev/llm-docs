> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/init(voice:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/init(voice:))

# init(voice:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Initializes the receiver with a voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
init?(voice: NSSpeechSynthesizer.VoiceName?)
```

## Parameters

- `voice`: Identifier of the voice to set as the current voice. When `nil`, the default voice is used. Passing in a specific voice means the initial speaking rate is determined by the synthesizer’s default speaking rate; passing `nil` means the speaking rate is automatically set to the rate the user specifies in Speech preferences.

<a id="return-value"></a>

## Return Value

Initialized speech synthesizer or `nil` when the voice identified by `voiceIdentifier` is not available or when there’s an allocation error.

## See Also

### Related Documentation

- [availableVoices](availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.

# initWithVoice: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Initializes the receiver with a voice.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
- (instancetype) initWithVoice:(NSSpeechSynthesizerVoiceName) voice;
```

## Parameters

- `voice`: Identifier of the voice to set as the current voice. When `nil`, the default voice is used. Passing in a specific voice means the initial speaking rate is determined by the synthesizer’s default speaking rate; passing `nil` means the speaking rate is automatically set to the rate the user specifies in Speech preferences.

<a id="return-value"></a>

## Return Value

Initialized speech synthesizer or `nil` when the voice identified by `voiceIdentifier` is not available or when there’s an allocation error.

## See Also

### Related Documentation

- [availableVoices](availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
