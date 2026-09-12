> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodel/predictedlabels(fortokens:)](https://developer.apple.com/documentation/naturallanguage/nlmodel/predictedlabels(fortokens:))

# predictedLabels(forTokens:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Predicts a label for each string in the given array.

## Declaration

```swift
func predictedLabels(forTokens tokens: [String]) -> [String]
```

## Parameters

- `tokens`: An array of input strings for the model to analyze.

<a id="return-value"></a>

## Return Value

The model’s predicted labels for each of the input strings.

## See Also

### Making predictions

- [predictedLabel(for:)](predictedlabel%28for_%29.md): Predicts a label for the given input string.
- [predictedLabelHypotheses(for:maximumCount:)](predictedlabelhypotheses%28for_maximumcount_%29.md): Predicts multiple possible labels for the given input string.
- [predictedLabelHypotheses(forTokens:maximumCount:)](predictedlabelhypotheses%28fortokens_maximumcount_%29.md): Predicts multiple possible labels for each string in the given array.

# predictedLabelsForTokens: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Predicts a label for each string in the given array.

## Declaration

```objectivec
- (NSArray<NSString *> *) predictedLabelsForTokens:(NSArray<NSString *> *) tokens;
```

## Parameters

- `tokens`: An array of input strings for the model to analyze.

<a id="return-value"></a>

## Return Value

The model’s predicted labels for each of the input strings.

## See Also

### Making predictions

- [predictedLabelForString:](predictedlabel%28for_%29.md): Predicts a label for the given input string.
- [predictedLabelHypothesesForString:maximumCount:](predictedlabelhypothesesforstring_maximumcount_.md): Predicts multiple possible labels for the given input string.
- [predictedLabelHypothesesForTokens:maximumCount:](predictedlabelhypothesesfortokens_maximumcount_.md): Predicts multiple possible labels for each string in the given array.
