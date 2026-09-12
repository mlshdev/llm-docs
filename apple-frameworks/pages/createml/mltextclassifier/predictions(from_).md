> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/predictions(from:)](https://developer.apple.com/documentation/createml/mltextclassifier/predictions(from:))

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Classifies an array of strings with labels.

## Declaration

```swift
func predictions(from texts: [String]) throws -> [String]
```

## Parameters

- `texts`: The array of strings to be classified.

<a id="return-value"></a>

## Return Value

An array of labels for the given strings.

## See Also

### Testing a text classifier

- [prediction(from:)](prediction%28from_%29.md): Classifies a string with a label.
- [predictionWithConfidence(from:)](predictionwithconfidence%28from_%29.md): Predicts multiple possible labels and their confidence scores for the specified string.
- [predictionsWithConfidence(from:)](predictionswithconfidence%28from_%29.md): Predicts multiple possible labels and their confidence scores for each string in the specified array.
