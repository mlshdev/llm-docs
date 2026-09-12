> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelfeedback/issue/category/triggeredguardrailunexpectedly](https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category/triggeredguardrailunexpectedly)

# LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The model throws a guardrail violation when it shouldn’t.

## Declaration

```swift
case triggeredGuardrailUnexpectedly
```

<a id="discussion"></a>

## Discussion

An unexpected guardrail issue might be where you ask for a cake recipe, and the framework throws a guardrail violation error.

## See Also

### Getting the issue category

- [LanguageModelFeedback.Issue.Category.didNotFollowInstructions](didnotfollowinstructions.md): The model did not follow instructions correctly.
- [LanguageModelFeedback.Issue.Category.incorrect](incorrect.md): The model provided an incorrect response.
- [LanguageModelFeedback.Issue.Category.stereotypeOrBias](stereotypeorbias.md): The model exhibited bias or perpetuated a stereotype.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](suggestiveorsexual.md): The model produces suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.tooVerbose](tooverbose.md): The response was too verbose.
- [LanguageModelFeedback.Issue.Category.unhelpful](unhelpful.md): The response was unhelpful.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](vulgaroroffensive.md): The model produces vulgar or offensive material.
