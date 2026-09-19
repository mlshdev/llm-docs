> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/insert(phrasecountgenerator:)

# insert(phraseCountGenerator:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

Add a stream of samples to the body of training data.

## Declaration

```swift
func insert(phraseCountGenerator: SFCustomLanguageModelData.PhraseCountGenerator)
```

## Parameters

- `phraseCountGenerator`: A generator of phrase counts

<a id="discussion"></a>

## Discussion

This class accumulates text data that will later be used to train a language model, which can be provided to an `SFSpeechRecognizer` to improve performance on certain phrases.

## See Also

### Adding parameterized sample data with a generator

- [SFCustomLanguageModelData.TemplatePhraseCountGenerator](templatephrasecountgenerator.md): A `PhraseCountGenerator` that produces `PhraseCount` values based on templates.
- [SFCustomLanguageModelData.PhraseCountGenerator](phrasecountgenerator.md): Abstract base class defining the interface for classes that generate `PhraseCount` via an iterator.
