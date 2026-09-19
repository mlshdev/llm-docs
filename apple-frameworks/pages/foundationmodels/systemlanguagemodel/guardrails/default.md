> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/guardrails/default

# default

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Guardrails that default to ensuring that the system blocks unsafe content in prompts and responses.

## Declaration

```swift
static let `default`: SystemLanguageModel.Guardrails
```

<a id="discussion"></a>

## Discussion

The `default` guardrail level means that all guardrails are turned on. When the guardrails block unsafe content from either the prompt input or model response, the framework throws a [LanguageModelError.guardrailViolation(\_:)](../../languagemodelerror/guardrailviolation%28__%29.md) error.

## See Also

### Getting the guardrail types

- [permissiveContentTransformations](permissivecontenttransformations.md): Guardrails that allow for permissively transforming text input, including potentially unsafe content, to text responses.
