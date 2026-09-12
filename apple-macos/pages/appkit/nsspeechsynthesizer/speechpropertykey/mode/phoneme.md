> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/mode/phoneme](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/mode/phoneme)

# phoneme (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.

## Declaration

```swift
static let phoneme: NSSpeechSynthesizer.SpeechPropertyKey.Mode
```

## See Also

### Type Properties

- [literal](literal.md): Indicates that each digit or character is spoken literally (so that 12 is spoken as “one, two”, or the word “cat” is spoken as “C A T”).
- [normal](normal.md): Indicates that the synthesizer assembles digits into numbers (so that 12 is spoken as “twelve”) and text into words.
- [text](text.md): Indicates that the synthesizer is in text-processing mode.

# NSSpeechModePhoneme (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.

## Declaration

```objectivec
extern NSSpeechMode const NSSpeechModePhoneme;
```

## See Also

### Type Properties

- [NSSpeechModeLiteral](literal.md): Indicates that each digit or character is spoken literally (so that 12 is spoken as “one, two”, or the word “cat” is spoken as “C A T”).
- [NSSpeechModeNormal](normal.md): Indicates that the synthesizer assembles digits into numbers (so that 12 is spoken as “twelve”) and text into words.
- [NSSpeechModeText](text.md): Indicates that the synthesizer is in text-processing mode.
