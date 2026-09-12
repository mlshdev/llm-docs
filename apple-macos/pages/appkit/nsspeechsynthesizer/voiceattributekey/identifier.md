> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/voiceattributekey/identifier](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/voiceattributekey/identifier)

# identifier (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
static let identifier: NSSpeechSynthesizer.VoiceAttributeKey
```

## See Also

### Voice Attribute Keys

- [name](name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [age](age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [gender](gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [demoText](demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [localeIdentifier](localeidentifier.md): The language of the voice. An `NSString`
- [supportedCharacters](supportedcharacters.md): A list of Unicode character id ranges that define the Unicode characters supported by this voice.
- [individuallySpokenCharacters](individuallyspokencharacters.md): A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.

# NSVoiceIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 14.0)

A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
extern NSVoiceAttributeKey const NSVoiceIdentifier;
```

## See Also

### Voice Attribute Keys

- [NSVoiceName](name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [NSVoiceAge](age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [NSVoiceGender](gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [NSVoiceDemoText](demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [NSVoiceLocaleIdentifier](localeidentifier.md): The language of the voice. An `NSString`
- [NSVoiceSupportedCharacters](supportedcharacters.md): A list of Unicode character id ranges that define the Unicode characters supported by this voice.
- [NSVoiceIndividuallySpokenCharacters](individuallyspokencharacters.md): A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.
