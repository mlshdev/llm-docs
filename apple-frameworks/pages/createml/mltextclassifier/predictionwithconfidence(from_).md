> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/predictionwithconfidence(from:)](https://developer.apple.com/documentation/createml/mltextclassifier/predictionwithconfidence(from:))

# predictionWithConfidence(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Predicts multiple possible labels and their confidence scores for the specified string.

## Declaration

```swift
func predictionWithConfidence(from text: String) throws -> [String : Double]
```

## Parameters

- `text`: The string to classify.

<a id="return-value"></a>

## Return Value

A dictionary of label predictions and confidence scores.

## See Also

### Testing a text classifier

- [prediction(from:)](prediction%28from_%29.md): Classifies a string with a label.
- [predictions(from:)](predictions%28from_%29.md): Classifies an array of strings with labels.
- [predictionsWithConfidence(from:)](predictionswithconfidence%28from_%29.md): Predicts multiple possible labels and their confidence scores for each string in the specified array.
