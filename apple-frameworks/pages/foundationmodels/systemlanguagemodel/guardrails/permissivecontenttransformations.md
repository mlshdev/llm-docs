> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel/guardrails/permissivecontenttransformations](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/guardrails/permissivecontenttransformations)

# permissiveContentTransformations

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Guardrails that allow for permissively transforming text input, including potentially unsafe content, to text responses.

## Declaration

```swift
static let permissiveContentTransformations: SystemLanguageModel.Guardrails
```

## Mentioned In

- [Improving the safety of generative model output](../../improving-the-safety-of-generative-model-output.md)

<a id="discussion"></a>

## Discussion

The `permissiveContentTransform` guardrail model lets the model handle potentially unsafe content, such as summarizing a news article. In this mode, requests you make to the model that generate a `String` will not throw [LanguageModelError.guardrailViolation(\_:)](../../languagemodelerror/guardrailviolation%28__%29.md) errors. However, the model may still sometimes refuse to respond to a sensitive prompt, in which case it generates a `String` refusal message.

When you generate responses other than `String`, this mode behaves the same way as [default](default.md) mode and throws [LanguageModelError.guardrailViolation(\_:)](../../languagemodelerror/guardrailviolation%28__%29.md) errors.

## See Also

### Getting the guardrail types

- [default](default.md): Guardrails that default to ensuring that the system blocks unsafe content in prompts and responses.
