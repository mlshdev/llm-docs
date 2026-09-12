> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/voiceattributekey/individuallyspokencharacters](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/voiceattributekey/individuallyspokencharacters)

# individuallySpokenCharacters (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.

## Declaration

```swift
static let individuallySpokenCharacters: NSSpeechSynthesizer.VoiceAttributeKey
```

<a id="Discussion"></a>

## Discussion

Each list entry is a dictionary containing two keys: “UnicodeCharBegin”, an integer value containing the beginning Unicode id of this range; and “UnicodeCharEnd”, an integer value containing the ending Unicode id of this range. Your application can use these ranges to determine if the voice can speak the name of an individual character when spoken in character-by-character mode.

Some voices may not provide this attribute.

## See Also

### Voice Attribute Keys

- [identifier](identifier.md): Deprecated. A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.
- [name](name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [age](age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [gender](gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [demoText](demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [localeIdentifier](localeidentifier.md): The language of the voice. An `NSString`
- [supportedCharacters](supportedcharacters.md): A list of Unicode character id ranges that define the Unicode characters supported by this voice.

# NSVoiceIndividuallySpokenCharacters (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

A list of Unicode character id ranges that define the Unicode characters that can be spoken in character-by-character mode by this voice.

## Declaration

```objectivec
extern NSVoiceAttributeKey const NSVoiceIndividuallySpokenCharacters;
```

<a id="Discussion"></a>

## Discussion

Each list entry is a dictionary containing two keys: “UnicodeCharBegin”, an integer value containing the beginning Unicode id of this range; and “UnicodeCharEnd”, an integer value containing the ending Unicode id of this range. Your application can use these ranges to determine if the voice can speak the name of an individual character when spoken in character-by-character mode.

Some voices may not provide this attribute.

## See Also

### Voice Attribute Keys

- [NSVoiceIdentifier](identifier.md): Deprecated. A unique string identifying the voice. The identifiers of the system voices are listed in `Listing 1`.
- [NSVoiceName](name.md): Deprecated. The name of the voice suitable for display. An `NSString`.
- [NSVoiceAge](age.md): Deprecated. The perceived age (in years) of the voice. An `NSString`
- [NSVoiceGender](gender.md): Deprecated. The perceived gender of the voice. The supported values are listed in `Voice Gender Keys`. An `NSString`
- [NSVoiceDemoText](demotext.md): Deprecated. A demonstration string to speak. An `NSString`
- [NSVoiceLocaleIdentifier](localeidentifier.md): The language of the voice. An `NSString`
- [NSVoiceSupportedCharacters](supportedcharacters.md): A list of Unicode character id ranges that define the Unicode characters supported by this voice.
