> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/insert(phrasecount:)](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/insert(phrasecount:))

# insert(phraseCount:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

Add a sample to the body of training data.

## Declaration

```swift
func insert(phraseCount: SFCustomLanguageModelData.PhraseCount)
```

## Parameters

- `phraseCount`: A sample of text on which to train your custom language model

<a id="discussion"></a>

## Discussion

This class accumulates text data that will later be used to train a language model, which can be provided to an `SFSpeechRecognizer` to improve performance on certain phrases.

## See Also

### Adding phrases

- [SFCustomLanguageModelData.PhraseCount](phrasecount.md): A phrase used to bias the language model, along with a weight influencing the relative strength of the bias.
