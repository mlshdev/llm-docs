> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/voiceattributekey](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/voiceattributekey)

# NSSpeechSynthesizer.VoiceAttributeKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 14.0)

The following constants are keys for the dictionary returned by [attributes(forVoice:)](attributes%28forvoice_%29.md).

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
struct VoiceAttributeKey
```

<a id="overview"></a>

## Overview

The following are the identifiers of the macOS system voices (defined in `/System/Library/Speech/Voices`):

```objc
com.apple.speech.synthesis.voice.Agnes
com.apple.speech.synthesis.voice.Albert
com.apple.speech.synthesis.voice.Alex
com.apple.speech.synthesis.voice.BadNews
com.apple.speech.synthesis.voice.Bahh
com.apple.speech.synthesis.voice.Bells
com.apple.speech.synthesis.voice.Boing
com.apple.speech.synthesis.voice.Bruce
com.apple.speech.synthesis.voice.Bubbles
com.apple.speech.synthesis.voice.Cellos
com.apple.speech.synthesis.voice.Deranged
com.apple.speech.synthesis.voice.Fred
com.apple.speech.synthesis.voice.GoodNews
com.apple.speech.synthesis.voice.Hysterical
com.apple.speech.synthesis.voice.Junior
com.apple.speech.synthesis.voice.Kathy
com.apple.speech.synthesis.voice.Organ
com.apple.speech.synthesis.voice.Princess
com.apple.speech.synthesis.voice.Ralph
com.apple.speech.synthesis.voice.Trinoids
com.apple.speech.synthesis.voice.Vicki
com.apple.speech.synthesis.voice.Victoria
com.apple.speech.synthesis.voice.Whisper
com.apple.speech.synthesis.voice.Zarvox
```

## Topics

### Voice Attribute Keys

- [identifier](voiceattributekey/identifier.md): Deprecated. A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.
- [name](voiceattributekey/name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [age](voiceattributekey/age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [gender](voiceattributekey/gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [demoText](voiceattributekey/demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [localeIdentifier](voiceattributekey/localeidentifier.md): The language of the voice. An `NSString`
- [supportedCharacters](voiceattributekey/supportedcharacters.md): A list of Unicode character id ranges that define the Unicode characters supported by this voice.
- [individuallySpokenCharacters](voiceattributekey/individuallyspokencharacters.md): A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.

### Initializers

- [init(rawValue:)](voiceattributekey/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Speech Synthesizer Information

- [availableVoices](availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
- [attributes(forVoice:)](attributes%28forvoice_%29.md): Deprecated. Provides the attribute dictionary of a voice.
- [defaultVoice](defaultvoice.md): Deprecated. Provides the identifier of the default voice.
- [NSSpeechSynthesizer.VoiceName](voicename.md): Deprecated.

# NSVoiceAttributeKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.3+ (deprecated in 14.0)

The following constants are keys for the dictionary returned by [attributesForVoice:](attributes%28forvoice_%29.md).

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
typedef NSString * NSVoiceAttributeKey;
```

<a id="overview"></a>

## Overview

The following are the identifiers of the macOS system voices (defined in `/System/Library/Speech/Voices`):

```objc
com.apple.speech.synthesis.voice.Agnes
com.apple.speech.synthesis.voice.Albert
com.apple.speech.synthesis.voice.Alex
com.apple.speech.synthesis.voice.BadNews
com.apple.speech.synthesis.voice.Bahh
com.apple.speech.synthesis.voice.Bells
com.apple.speech.synthesis.voice.Boing
com.apple.speech.synthesis.voice.Bruce
com.apple.speech.synthesis.voice.Bubbles
com.apple.speech.synthesis.voice.Cellos
com.apple.speech.synthesis.voice.Deranged
com.apple.speech.synthesis.voice.Fred
com.apple.speech.synthesis.voice.GoodNews
com.apple.speech.synthesis.voice.Hysterical
com.apple.speech.synthesis.voice.Junior
com.apple.speech.synthesis.voice.Kathy
com.apple.speech.synthesis.voice.Organ
com.apple.speech.synthesis.voice.Princess
com.apple.speech.synthesis.voice.Ralph
com.apple.speech.synthesis.voice.Trinoids
com.apple.speech.synthesis.voice.Vicki
com.apple.speech.synthesis.voice.Victoria
com.apple.speech.synthesis.voice.Whisper
com.apple.speech.synthesis.voice.Zarvox
```

## Topics

### Voice Attribute Keys

- [NSVoiceIdentifier](voiceattributekey/identifier.md): Deprecated. A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.
- [NSVoiceName](voiceattributekey/name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [NSVoiceAge](voiceattributekey/age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [NSVoiceGender](voiceattributekey/gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [NSVoiceDemoText](voiceattributekey/demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [NSVoiceLocaleIdentifier](voiceattributekey/localeidentifier.md): The language of the voice. An `NSString`
- [NSVoiceSupportedCharacters](voiceattributekey/supportedcharacters.md): A list of Unicode character id ranges that define the Unicode characters supported by this voice.
- [NSVoiceIndividuallySpokenCharacters](voiceattributekey/individuallyspokencharacters.md): A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.

### Deprecated

- [NSVoiceLanguage](../nsvoicelanguage.md): Deprecated. The language of the voice (currently US English only). An `NSString`

## See Also

### Getting Speech Synthesizer Information

- [availableVoices](availablevoices.md): Deprecated. Provides the identifiers of the voices available on the system.
- [attributesForVoice:](attributes%28forvoice_%29.md): Deprecated. Provides the attribute dictionary of a voice.
- [defaultVoice](defaultvoice.md): Deprecated. Provides the identifier of the default voice.
- [NSSpeechSynthesizerVoiceName](voicename.md): Deprecated.
