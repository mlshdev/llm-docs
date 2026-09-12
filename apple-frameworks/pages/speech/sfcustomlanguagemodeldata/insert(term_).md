> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/insert(term:)](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/insert(term:))

# insert(term:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

Add a custom term to the vocabulary.

## Declaration

```swift
func insert(term: SFCustomLanguageModelData.CustomPronunciation)
```

## Parameters

- `term`: A token, paired with an X-SAMPA representation of the token’s pronunciation

<a id="discussion"></a>

## Discussion

This class accumulates vocabulary data (in the form of tokens paired with X-SAMPA representations of the spoken forms of those tokens) which will later be processed and then provided to an `SFSpeechRecognizer`, to enable it to recognize words that are typically out-of-vocabulary.

## See Also

### Adding terms

- [supportedPhonemes(locale:)](supportedphonemes%28locale_%29.md): List the supported subset of X-SAMPA pronunciations supported by this locale for the Speech framework.
- [SFCustomLanguageModelData.CustomPronunciation](custompronunciation.md): A term to be introduced into the speech recognition model’s vocabulary.
