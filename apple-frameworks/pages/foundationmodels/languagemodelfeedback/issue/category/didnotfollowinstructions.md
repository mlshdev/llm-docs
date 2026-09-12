> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelfeedback/issue/category/didnotfollowinstructions](https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category/didnotfollowinstructions)

# LanguageModelFeedback.Issue.Category.didNotFollowInstructions

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The model did not follow instructions correctly.

## Declaration

```swift
case didNotFollowInstructions
```

<a id="discussion"></a>

## Discussion

An instruction issue might be where you asked for a recipe in numbered steps, and the model provided a recipe but didn’t number the steps.

## See Also

### Getting the issue category

- [LanguageModelFeedback.Issue.Category.incorrect](incorrect.md): The model provided an incorrect response.
- [LanguageModelFeedback.Issue.Category.stereotypeOrBias](stereotypeorbias.md): The model exhibited bias or perpetuated a stereotype.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](suggestiveorsexual.md): The model produces suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.tooVerbose](tooverbose.md): The response was too verbose.
- [LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly](triggeredguardrailunexpectedly.md): The model throws a guardrail violation when it shouldn’t.
- [LanguageModelFeedback.Issue.Category.unhelpful](unhelpful.md): The response was unhelpful.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](vulgaroroffensive.md): The model produces vulgar or offensive material.
