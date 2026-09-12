> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodel/predictedlabelhypotheses(fortokens:maximumcount:)](https://developer.apple.com/documentation/naturallanguage/nlmodel/predictedlabelhypotheses(fortokens:maximumcount:))

# predictedLabelHypotheses(forTokens:maximumCount:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Predicts multiple possible labels for each string in the given array.

## Declaration

```swift
@nonobjc func predictedLabelHypotheses(forTokens tokens: [String], maximumCount maxCount: Int) -> [[String : Double]]
```

## Parameters

- `tokens`: An array of input tokens for the model to analyze.
- `maxCount`: The maximum number of label predictions to return for each input string.

<a id="return-value"></a>

## Return Value

An array of dictionaries. Each dictionary corresponds to the token at the same index in the input array `tokens`. Within each dictionary, each entry is a predicted label with its associated probability score. These labels are the top candidates proposed as possible labels for the token. Each dictionary contains up to `maxCount` entries.

## See Also

### Making predictions

- [predictedLabel(for:)](predictedlabel%28for_%29.md): Predicts a label for the given input string.
- [predictedLabels(forTokens:)](predictedlabels%28fortokens_%29.md): Predicts a label for each string in the given array.
- [predictedLabelHypotheses(for:maximumCount:)](predictedlabelhypotheses%28for_maximumcount_%29.md): Predicts multiple possible labels for the given input string.
