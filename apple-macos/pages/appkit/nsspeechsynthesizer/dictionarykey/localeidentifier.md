> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/dictionarykey/localeidentifier](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/dictionarykey/localeidentifier)

# localeIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The canonical locale identifier string describing the dictionary’s locale.

## Declaration

```swift
static let localeIdentifier: NSSpeechSynthesizer.DictionaryKey
```

<a id="discussion"></a>

## Discussion

A locale is generally composed of three pieces of ordered information: a language code, a region code, and a variant code. For more information, see [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

## See Also

### Type Properties

- [abbreviations](abbreviations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
- [entryPhonemes](entryphonemes.md): The phonemic representation of an entry. An `NSString`.
- [entrySpelling](entryspelling.md): The spelling of an entry. An `NSString`.
- [modificationDate](modificationdate.md): A string representation of the dictionary’s last modification date in the international format (YYYY-MM-DD HH:MM:SS ±HHMM). If the same word appears across multiple dictionaries, the one from the dictionary with the most recent date will be used.
- [pronunciations](pronunciations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.

# NSSpeechDictionaryLocaleIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The canonical locale identifier string describing the dictionary’s locale.

## Declaration

```objectivec
extern NSSpeechDictionaryKey const NSSpeechDictionaryLocaleIdentifier;
```

<a id="discussion"></a>

## Discussion

A locale is generally composed of three pieces of ordered information: a language code, a region code, and a variant code. For more information, see [NSLocale](https://developer.apple.com/documentation/foundation/nslocale).

## See Also

### Type Properties

- [NSSpeechDictionaryAbbreviations](abbreviations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
- [NSSpeechDictionaryEntryPhonemes](entryphonemes.md): The phonemic representation of an entry. An `NSString`.
- [NSSpeechDictionaryEntrySpelling](entryspelling.md): The spelling of an entry. An `NSString`.
- [NSSpeechDictionaryModificationDate](modificationdate.md): A string representation of the dictionary’s last modification date in the international format (YYYY-MM-DD HH:MM:SS ±HHMM). If the same word appears across multiple dictionaries, the one from the dictionary with the most recent date will be used.
- [NSSpeechDictionaryPronunciations](pronunciations.md): An array of dictionary objects containing the keys `NSSpeechDictionaryEntrySpelling` and `NSSpeechDictionaryEntryPhonemes`.
