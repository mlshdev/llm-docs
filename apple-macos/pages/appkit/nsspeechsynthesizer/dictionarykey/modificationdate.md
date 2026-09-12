> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/dictionarykey/modificationdate](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/dictionarykey/modificationdate)

# modificationDate (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A string representation of the dictionary’s last modification date in the international format (YYYY-MM-DD HH:MM:SS ±HHMM). If the same word appears across multiple dictionaries, the one from the dictionary with the most recent date will be used.

## Declaration

```swift
static let modificationDate: NSSpeechSynthesizer.DictionaryKey
```

## See Also

### Type Properties

- [abbreviations](abbreviations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
- [entryPhonemes](entryphonemes.md): The phonemic representation of an entry. An `NSString`.
- [entrySpelling](entryspelling.md): The spelling of an entry. An `NSString`.
- [localeIdentifier](localeidentifier.md): The canonical locale identifier string describing the dictionary’s locale.
- [pronunciations](pronunciations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.

# NSSpeechDictionaryModificationDate (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

A string representation of the dictionary’s last modification date in the international format (YYYY-MM-DD HH:MM:SS ±HHMM). If the same word appears across multiple dictionaries, the one from the dictionary with the most recent date will be used.

## Declaration

```objectivec
extern NSSpeechDictionaryKey const NSSpeechDictionaryModificationDate;
```

## See Also

### Type Properties

- [NSSpeechDictionaryAbbreviations](abbreviations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
- [NSSpeechDictionaryEntryPhonemes](entryphonemes.md): The phonemic representation of an entry. An `NSString`.
- [NSSpeechDictionaryEntrySpelling](entryspelling.md): The spelling of an entry. An `NSString`.
- [NSSpeechDictionaryLocaleIdentifier](localeidentifier.md): The canonical locale identifier string describing the dictionary’s locale.
- [NSSpeechDictionaryPronunciations](pronunciations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
