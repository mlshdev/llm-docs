> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/phonemeinfokey/symbol](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/phonemeinfokey/symbol)

# symbol (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The symbol used to represent the phoneme.

## Declaration

```swift
static let symbol: NSSpeechSynthesizer.SpeechPropertyKey.PhonemeInfoKey
```

<a id="Discussion"></a>

## Discussion

The symbol does not necessarily have a phonetic connection to the phoneme, but might simply be an abstract textual representation of it.

## See Also

### Phoneme Info Keys

- [example](example.md): An example word that illustrates the use of the phoneme.
- [hiliteEnd](hiliteend.md): The character offset into the example word that identifies the location of the end of the phoneme.
- [hiliteStart](hilitestart.md): The character offset into the example word that identifies the location of the beginning of the phoneme.
- [opcode](opcode.md): NSNumber

# NSSpeechPhonemeInfoSymbol (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The symbol used to represent the phoneme.

## Declaration

```objectivec
extern NSSpeechPhonemeInfoKey const NSSpeechPhonemeInfoSymbol;
```

<a id="Discussion"></a>

## Discussion

The symbol does not necessarily have a phonetic connection to the phoneme, but might simply be an abstract textual representation of it.

## See Also

### Phoneme Info Keys

- [NSSpeechPhonemeInfoExample](example.md): An example word that illustrates the use of the phoneme.
- [NSSpeechPhonemeInfoHiliteEnd](hiliteend.md): The character offset into the example word that identifies the location of the end of the phoneme.
- [NSSpeechPhonemeInfoHiliteStart](hilitestart.md): The character offset into the example word that identifies the location of the beginning of the phoneme.
- [NSSpeechPhonemeInfoOpcode](opcode.md): NSNumber
