> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category

# LanguageModelFeedback.Issue.Category

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Categories for model response issues.

## Declaration

```swift
enum Category
```

## Mentioned In

- [Inspecting session transcripts and reporting model feedback](../../inspecting-session-transcripts-and-reporting-model-feedback.md)

## Topics

### Getting the issue category

- [LanguageModelFeedback.Issue.Category.didNotFollowInstructions](category/didnotfollowinstructions.md): A response that doesn’t follow instructions correctly.
- [LanguageModelFeedback.Issue.Category.incorrect](category/incorrect.md): An incorrect response.
- [LanguageModelFeedback.Issue.Category.stereotypeOrBias](category/stereotypeorbias.md): A response that exhibits bias or perpetuates a stereotype.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](category/suggestiveorsexual.md): A response with suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.tooVerbose](category/tooverbose.md): An overly verbose response.
- [LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly](category/triggeredguardrailunexpectedly.md): An unexpected guardrail violation.
- [LanguageModelFeedback.Issue.Category.unhelpful](category/unhelpful.md): An unhelpful response.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](category/vulgaroroffensive.md): A response with vulgar or offensive material.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an issue

- [init(category:explanation:)](init%28category_explanation_%29.md): Creates an issue.
