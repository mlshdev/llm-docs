> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/mode/normal](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/mode/normal)

# normal (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Indicates that the synthesizer assembles digits into numbers (so that 12 is spoken as “twelve”) and text into words.

## Declaration

```swift
static let normal: NSSpeechSynthesizer.SpeechPropertyKey.Mode
```

## See Also

### Type Properties

- [literal](literal.md): Indicates that each digit or character is spoken literally (so that 12 is spoken as “one, two”, or the word “cat” is spoken as “C A T”).
- [phoneme](phoneme.md): Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.
- [text](text.md): Indicates that the synthesizer is in text-processing mode.

# NSSpeechModeNormal (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Indicates that the synthesizer assembles digits into numbers (so that 12 is spoken as “twelve”) and text into words.

## Declaration

```objectivec
extern NSSpeechMode const NSSpeechModeNormal;
```

## See Also

### Type Properties

- [NSSpeechModeLiteral](literal.md): Indicates that each digit or character is spoken literally (so that 12 is spoken as “one, two”, or the word “cat” is spoken as “C A T”).
- [NSSpeechModePhoneme](phoneme.md): Indicates that the synthesizer is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.
- [NSSpeechModeText](text.md): Indicates that the synthesizer is in text-processing mode.
