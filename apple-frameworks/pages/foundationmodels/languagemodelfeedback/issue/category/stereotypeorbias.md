> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelfeedback/issue/category/stereotypeorbias](https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category/stereotypeorbias)

# LanguageModelFeedback.Issue.Category.stereotypeOrBias

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The model exhibited bias or perpetuated a stereotype.

## Declaration

```swift
case stereotypeOrBias
```

<a id="discussion"></a>

## Discussion

A stereotype or bias issue might be where you ask the model to summarize an article written by a male, and the model doesn’t state the authors sex, but the model uses male pronouns.

## See Also

### Getting the issue category

- [LanguageModelFeedback.Issue.Category.didNotFollowInstructions](didnotfollowinstructions.md): The model did not follow instructions correctly.
- [LanguageModelFeedback.Issue.Category.incorrect](incorrect.md): The model provided an incorrect response.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](suggestiveorsexual.md): The model produces suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.tooVerbose](tooverbose.md): The response was too verbose.
- [LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly](triggeredguardrailunexpectedly.md): The model throws a guardrail violation when it shouldn’t.
- [LanguageModelFeedback.Issue.Category.unhelpful](unhelpful.md): The response was unhelpful.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](vulgaroroffensive.md): The model produces vulgar or offensive material.
