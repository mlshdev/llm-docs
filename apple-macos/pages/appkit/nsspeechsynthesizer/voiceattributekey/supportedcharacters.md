> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/voiceattributekey/supportedcharacters](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/voiceattributekey/supportedcharacters)

# supportedCharacters (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A list of Unicode character id ranges that define the Unicode characters supported by this voice.

## Declaration

```swift
static let supportedCharacters: NSSpeechSynthesizer.VoiceAttributeKey
```

<a id="Discussion"></a>

## Discussion

A dictionary containing two keys: “UnicodeCharBegin”, an integer value containing the beginning Unicode id of this range; and “UnicodeCharBegin”, an integer value containing the ending Unicode id of this range. The synthesizer converts or ignores any characters not contained in the range of supported characters.

Some voices may not provide this attribute.

## See Also

### Voice Attribute Keys

- [identifier](identifier.md): Deprecated. A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.
- [name](name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [age](age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [gender](gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [demoText](demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [localeIdentifier](localeidentifier.md): The language of the voice. An `NSString`
- [individuallySpokenCharacters](individuallyspokencharacters.md): A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.

# NSVoiceSupportedCharacters (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

A list of Unicode character id ranges that define the Unicode characters supported by this voice.

## Declaration

```objectivec
extern NSVoiceAttributeKey const NSVoiceSupportedCharacters;
```

<a id="Discussion"></a>

## Discussion

A dictionary containing two keys: “UnicodeCharBegin”, an integer value containing the beginning Unicode id of this range; and “UnicodeCharBegin”, an integer value containing the ending Unicode id of this range. The synthesizer converts or ignores any characters not contained in the range of supported characters.

Some voices may not provide this attribute.

## See Also

### Voice Attribute Keys

- [NSVoiceIdentifier](identifier.md): Deprecated. A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.
- [NSVoiceName](name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [NSVoiceAge](age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [NSVoiceGender](gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [NSVoiceDemoText](demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [NSVoiceLocaleIdentifier](localeidentifier.md): The language of the voice. An `NSString`
- [NSVoiceIndividuallySpokenCharacters](individuallyspokencharacters.md): A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.
