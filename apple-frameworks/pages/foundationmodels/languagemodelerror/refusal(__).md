> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelerror/refusal(_:)](https://developer.apple.com/documentation/foundationmodels/languagemodelerror/refusal(_:))

# LanguageModelError.refusal(\_:)

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model refused to answer.

## Declaration

```swift
case refusal(LanguageModelError.Refusal)
```

## Mentioned In

- [Improving the safety of generative model output](../improving-the-safety-of-generative-model-output.md)

<a id="discussion"></a>

## Discussion

This failure can happen for prompts that do not violate any guardrail policy, but the model isn’t able to provide the kind of response you requested. You can choose to handle this by showing a predetermined message of your choice.

## See Also

### Model refusal error

- [LanguageModelError.Refusal](refusal.md): Information about a model refusal.
