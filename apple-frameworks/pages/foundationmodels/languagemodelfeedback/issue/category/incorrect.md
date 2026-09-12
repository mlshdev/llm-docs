> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelfeedback/issue/category/incorrect](https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category/incorrect)

# LanguageModelFeedback.Issue.Category.incorrect

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The model provided an incorrect response.

## Declaration

```swift
case incorrect
```

## Mentioned In

- [Inspecting session transcripts and reporting model feedback](../../../inspecting-session-transcripts-and-reporting-model-feedback.md)

<a id="discussion"></a>

## Discussion

An incorrect issue might be where you asked how to make a pizza, and the model suggested using glue.

## See Also

### Getting the issue category

- [LanguageModelFeedback.Issue.Category.didNotFollowInstructions](didnotfollowinstructions.md): The model did not follow instructions correctly.
- [LanguageModelFeedback.Issue.Category.stereotypeOrBias](stereotypeorbias.md): The model exhibited bias or perpetuated a stereotype.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](suggestiveorsexual.md): The model produces suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.tooVerbose](tooverbose.md): The response was too verbose.
- [LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly](triggeredguardrailunexpectedly.md): The model throws a guardrail violation when it shouldn’t.
- [LanguageModelFeedback.Issue.Category.unhelpful](unhelpful.md): The response was unhelpful.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](vulgaroroffensive.md): The model produces vulgar or offensive material.
