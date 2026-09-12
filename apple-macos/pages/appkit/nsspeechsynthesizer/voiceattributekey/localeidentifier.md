> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/voiceattributekey/localeidentifier](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/voiceattributekey/localeidentifier)

# localeIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The language of the voice.  An `NSString`

## Declaration

```swift
static let localeIdentifier: NSSpeechSynthesizer.VoiceAttributeKey
```

<a id="Discussion"></a>

## Discussion

The canonical locale identifier string describing the voice’s locale. A locale is generally composed of three pieces of ordered information: a language code, a region code, and a variant code. For more information, see [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

## See Also

### Voice Attribute Keys

- [identifier](identifier.md): Deprecated. A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.
- [name](name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [age](age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [gender](gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [demoText](demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [supportedCharacters](supportedcharacters.md): A list of Unicode character id ranges that define the Unicode characters supported by this voice.
- [individuallySpokenCharacters](individuallyspokencharacters.md): A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.

# NSVoiceLocaleIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The language of the voice.  An `NSString`

## Declaration

```objectivec
extern NSVoiceAttributeKey const NSVoiceLocaleIdentifier;
```

<a id="Discussion"></a>

## Discussion

The canonical locale identifier string describing the voice’s locale. A locale is generally composed of three pieces of ordered information: a language code, a region code, and a variant code. For more information, see [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

## See Also

### Voice Attribute Keys

- [NSVoiceIdentifier](identifier.md): Deprecated. A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.
- [NSVoiceName](name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [NSVoiceAge](age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [NSVoiceGender](gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [NSVoiceDemoText](demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [NSVoiceSupportedCharacters](supportedcharacters.md): A list of Unicode character id ranges that define the Unicode characters supported by this voice.
- [NSVoiceIndividuallySpokenCharacters](individuallyspokencharacters.md): A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.
