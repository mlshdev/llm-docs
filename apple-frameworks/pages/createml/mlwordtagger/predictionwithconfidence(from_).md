> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtagger/predictionwithconfidence(from:)](https://developer.apple.com/documentation/createml/mlwordtagger/predictionwithconfidence(from:))

# predictionWithConfidence(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Predicts tags and confidence scores for the input string. Predicts tags and confidence scores for the input string.

## Declaration

```swift
func predictionWithConfidence(from text: String) throws -> [[String : Double]]
```

## Parameters

- `text`: The string to tag.

<a id="return-value"></a>

## Return Value

An array of dictionaries. Each dictionary corresponds to a token in the input text string. A dictionary entry contains a tag prediction with its associated confidence score.

## See Also

### Testing a word tagger

- [prediction(from:)](prediction%28from_%29.md): Predicts a tag for the input string.
- [predictions(from:)](predictions%28from_%29.md): Predicts sequences of labels, token locations, and token lengths from the input strings.
