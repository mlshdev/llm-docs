> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelfeedback/issue/category/tooverbose](https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category/tooverbose)

# LanguageModelFeedback.Issue.Category.tooVerbose

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The response was too verbose.

## Declaration

```swift
case tooVerbose
```

## Mentioned In

- [Inspecting session transcripts and reporting model feedback](../../../inspecting-session-transcripts-and-reporting-model-feedback.md)

<a id="discussion"></a>

## Discussion

A verbose issue might be where you asked for a simple recipe, and the model wrote introductory and conclusion paragraphs.

## See Also

### Getting the issue category

- [LanguageModelFeedback.Issue.Category.didNotFollowInstructions](didnotfollowinstructions.md): The model did not follow instructions correctly.
- [LanguageModelFeedback.Issue.Category.incorrect](incorrect.md): The model provided an incorrect response.
- [LanguageModelFeedback.Issue.Category.stereotypeOrBias](stereotypeorbias.md): The model exhibited bias or perpetuated a stereotype.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](suggestiveorsexual.md): The model produces suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly](triggeredguardrailunexpectedly.md): The model throws a guardrail violation when it shouldn’t.
- [LanguageModelFeedback.Issue.Category.unhelpful](unhelpful.md): The response was unhelpful.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](vulgaroroffensive.md): The model produces vulgar or offensive material.
