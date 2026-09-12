> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/dictionarykey/entryphonemes](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/dictionarykey/entryphonemes)

# entryPhonemes (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The phonemic representation of an entry. An `NSString`.

## Declaration

```swift
static let entryPhonemes: NSSpeechSynthesizer.DictionaryKey
```

## See Also

### Type Properties

- [abbreviations](abbreviations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
- [entrySpelling](entryspelling.md): The spelling of an entry. An `NSString`.
- [localeIdentifier](localeidentifier.md): The canonical locale identifier string describing the dictionary’s locale.
- [modificationDate](modificationdate.md): A string representation of the dictionary’s last modification date in the international format (YYYY-MM-DD HH:MM:SS ±HHMM). If the same word appears across multiple dictionaries, the one from the dictionary with the most recent date will be used.
- [pronunciations](pronunciations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.

# NSSpeechDictionaryEntryPhonemes (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The phonemic representation of an entry. An `NSString`.

## Declaration

```objectivec
extern NSSpeechDictionaryKey const NSSpeechDictionaryEntryPhonemes;
```

## See Also

### Type Properties

- [NSSpeechDictionaryAbbreviations](abbreviations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
- [NSSpeechDictionaryEntrySpelling](entryspelling.md): The spelling of an entry. An `NSString`.
- [NSSpeechDictionaryLocaleIdentifier](localeidentifier.md): The canonical locale identifier string describing the dictionary’s locale.
- [NSSpeechDictionaryModificationDate](modificationdate.md): A string representation of the dictionary’s last modification date in the international format (YYYY-MM-DD HH:MM:SS ±HHMM). If the same word appears across multiple dictionaries, the one from the dictionary with the most recent date will be used.
- [NSSpeechDictionaryPronunciations](pronunciations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
