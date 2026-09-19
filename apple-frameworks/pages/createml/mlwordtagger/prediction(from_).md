> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlwordtagger/prediction(from:)

# prediction(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Predicts a tag for the input string.

## Declaration

```swift
func prediction(from text: String) throws -> [String]
```

## Parameters

- `text`: The string to tag.

<a id="return-value"></a>

## Return Value

An array of tags for the tokens in the string.

## See Also

### Testing a word tagger

- [predictions(from:)](predictions%28from_%29.md): Predicts sequences of labels, token locations, and token lengths from the input strings.
- [predictionWithConfidence(from:)](predictionwithconfidence%28from_%29.md): Predicts tags and confidence scores for the input string. Predicts tags and confidence scores for the input string.
