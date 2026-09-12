> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/prediction(from:)](https://developer.apple.com/documentation/createml/mltextclassifier/prediction(from:))

# prediction(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Classifies a string with a label.

## Declaration

```swift
func prediction(from text: String) throws -> String
```

## Parameters

- `text`: The string to be classified.

<a id="return-value"></a>

## Return Value

The label for the given string.

## See Also

### Testing a text classifier

- [predictions(from:)](predictions%28from_%29.md): Classifies an array of strings with labels.
- [predictionWithConfidence(from:)](predictionwithconfidence%28from_%29.md): Predicts multiple possible labels and their confidence scores for the specified string.
- [predictionsWithConfidence(from:)](predictionswithconfidence%28from_%29.md): Predicts multiple possible labels and their confidence scores for each string in the specified array.
