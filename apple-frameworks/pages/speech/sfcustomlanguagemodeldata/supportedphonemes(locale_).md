> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/supportedphonemes(locale:)](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/supportedphonemes(locale:))

# supportedPhonemes(locale:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

List the supported subset of X-SAMPA pronunciations supported by this locale for the Speech framework.

## Declaration

```swift
static func supportedPhonemes(locale: Locale) -> [String]
```

## Parameters

- `locale`: The region and language whose supported pronunciations are being queried

<a id="discussion"></a>

## Discussion

SFCustomLanguageModelData accepts custom pronunciations whose phonetic representations are spelled out using an alphabet of pronunciations called the Extended Speech Assessment Methods Public Alphabet, or X-SAMPA. X-SAMPA consists of ASCII characters that, individually or in combination, represents sounds made by people when speaking, and is preferred in this context over the International Phonetic Alphabet (IPA) for ease of typing. Each locale supports only a subset of all possible sounds represented by X-SAMPA symbols, and this method exists to allow developers to query for the set of sounds that can be used for a given locale’s custom pronunciations facility.

## See Also

### Adding terms

- [insert(term:)](insert%28term_%29.md): Add a custom term to the vocabulary.
- [SFCustomLanguageModelData.CustomPronunciation](custompronunciation.md): A term to be introduced into the speech recognition model’s vocabulary.
