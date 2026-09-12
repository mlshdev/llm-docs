> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodel/predictedlabelhypotheses(for:maximumcount:)](https://developer.apple.com/documentation/naturallanguage/nlmodel/predictedlabelhypotheses(for:maximumcount:))

# predictedLabelHypotheses(for:maximumCount:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Predicts multiple possible labels for the given input string.

## Declaration

```swift
@nonobjc func predictedLabelHypotheses(for string: String, maximumCount maxCount: Int) -> [String : Double]
```

## Parameters

- `string`: The input string for the model to analyze.
- `maxCount`: The maximum number of label predictions to return.

<a id="return-value"></a>

## Return Value

A dictionary of label hypotheses. Each dictionary entry is a predicted label with its associated probability score. These labels are the top candidates proposed as possible labels for the input string. The dictionary contains up to `maxCount` entries.

## See Also

### Making predictions

- [predictedLabel(for:)](predictedlabel%28for_%29.md): Predicts a label for the given input string.
- [predictedLabels(forTokens:)](predictedlabels%28fortokens_%29.md): Predicts a label for each string in the given array.
- [predictedLabelHypotheses(forTokens:maximumCount:)](predictedlabelhypotheses%28fortokens_maximumcount_%29.md): Predicts multiple possible labels for each string in the given array.
