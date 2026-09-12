> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodel/predictedlabelhypothesesfortokens:maximumcount:](https://developer.apple.com/documentation/naturallanguage/nlmodel/predictedlabelhypothesesfortokens:maximumcount:)

# predictedLabelHypothesesForTokens:maximumCount:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Predicts multiple possible labels for each string in the given array.

## Declaration

```objectivec
- (NSArray<NSDictionary<NSString *,NSNumber *> *> *) predictedLabelHypothesesForTokens:(NSArray<NSString *> *) tokens maximumCount:(NSUInteger) maximumCount;
```

## Parameters

- `tokens`: An array of input tokens for the model to analyze.
- `maximumCount`: The maximum number of label predictions to return for each input string.

<a id="return-value"></a>

## Return Value

An array of dictionaries. Each dictionary corresponds to the token at the same index in the input array `tokens`. Within each dictionary, each entry is a predicted label with its associated probability score. These labels are the top candidates proposed as possible labels for the token. Each dictionary contains up to `maximumCount` entries.

## See Also

### Making predictions

- [predictedLabelForString:](predictedlabel%28for_%29.md): Predicts a label for the given input string.
- [predictedLabelsForTokens:](predictedlabels%28fortokens_%29.md): Predicts a label for each string in the given array.
- [predictedLabelHypothesesForString:maximumCount:](predictedlabelhypothesesforstring_maximumcount_.md): Predicts multiple possible labels for the given input string.
