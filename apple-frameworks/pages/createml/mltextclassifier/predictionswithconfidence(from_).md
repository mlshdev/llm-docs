> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/predictionswithconfidence(from:)](https://developer.apple.com/documentation/createml/mltextclassifier/predictionswithconfidence(from:))

# predictionsWithConfidence(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Predicts multiple possible labels and their confidence scores for each string in the specified array.

## Declaration

```swift
func predictionsWithConfidence(from texts: [String]) throws -> [[String : Double]]
```

## Parameters

- `texts`: The array of strings to classify.

<a id="return-value"></a>

## Return Value

An array of dictionaries. Each dictionary corresponds to a string in the input array. A dictionary entry contains a label prediction with its associated confidence score.

## See Also

### Testing a text classifier

- [prediction(from:)](prediction%28from_%29.md): Classifies a string with a label.
- [predictions(from:)](predictions%28from_%29.md): Classifies an array of strings with labels.
- [predictionWithConfidence(from:)](predictionwithconfidence%28from_%29.md): Predicts multiple possible labels and their confidence scores for the specified string.
