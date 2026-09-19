> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/naturallanguage/nlmodel/predictedlabel(for:)

# predictedLabel(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Predicts a label for the given input string.

## Declaration

```swift
func predictedLabel(for string: String) -> String?
```

## Parameters

- `string`: The input text for the model to analyze.

<a id="return-value"></a>

## Return Value

The model’s predicted label for the input string.

## See Also

### Making predictions

- [predictedLabels(forTokens:)](predictedlabels%28fortokens_%29.md): Predicts a label for each string in the given array.
- [predictedLabelHypotheses(for:maximumCount:)](predictedlabelhypotheses%28for_maximumcount_%29.md): Predicts multiple possible labels for the given input string.
- [predictedLabelHypotheses(forTokens:maximumCount:)](predictedlabelhypotheses%28fortokens_maximumcount_%29.md): Predicts multiple possible labels for each string in the given array.

# predictedLabelForString: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Predicts a label for the given input string.

## Declaration

```objectivec
- (NSString *) predictedLabelForString:(NSString *) string;
```

## Parameters

- `string`: The input text for the model to analyze.

<a id="return-value"></a>

## Return Value

The model’s predicted label for the input string.

## See Also

### Making predictions

- [predictedLabelsForTokens:](predictedlabels%28fortokens_%29.md): Predicts a label for each string in the given array.
- [predictedLabelHypothesesForString:maximumCount:](predictedlabelhypothesesforstring_maximumcount_.md): Predicts multiple possible labels for the given input string.
- [predictedLabelHypothesesForTokens:maximumCount:](predictedlabelhypothesesfortokens_maximumcount_.md): Predicts multiple possible labels for each string in the given array.
