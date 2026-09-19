> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlwordtagger/predictions(from:)

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Predicts sequences of labels, token locations, and token lengths from the input strings.

## Declaration

```swift
func predictions<S>(from texts: S) throws -> DataFrame where S : Sequence, S.Element == String
```

## Parameters

- `texts`: A sequence of strings to tokenize and tag.

<a id="return-value"></a>

## Return Value

A `DataFrame` containing predicted labels, token locations, and token lengths.

## See Also

### Testing a word tagger

- [prediction(from:)](prediction%28from_%29.md): Predicts a tag for the input string.
- [predictionWithConfidence(from:)](predictionwithconfidence%28from_%29.md): Predicts tags and confidence scores for the input string. Predicts tags and confidence scores for the input string.
