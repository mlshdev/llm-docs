> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelfeedback/issue/category](https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category)

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

- [LanguageModelFeedback.Issue.Category.didNotFollowInstructions](category/didnotfollowinstructions.md): The model did not follow instructions correctly.
- [LanguageModelFeedback.Issue.Category.incorrect](category/incorrect.md): The model provided an incorrect response.
- [LanguageModelFeedback.Issue.Category.stereotypeOrBias](category/stereotypeorbias.md): The model exhibited bias or perpetuated a stereotype.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](category/suggestiveorsexual.md): The model produces suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.tooVerbose](category/tooverbose.md): The response was too verbose.
- [LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly](category/triggeredguardrailunexpectedly.md): The model throws a guardrail violation when it shouldn’t.
- [LanguageModelFeedback.Issue.Category.unhelpful](category/unhelpful.md): The response was unhelpful.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](category/vulgaroroffensive.md): The model produces vulgar or offensive material.

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
