> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category/didnotfollowinstructions

# LanguageModelFeedback.Issue.Category.didNotFollowInstructions

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A response that doesn’t follow instructions correctly.

## Declaration

```swift
case didNotFollowInstructions
```

<a id="discussion"></a>

## Discussion

An instruction issue might be where you asked for a recipe in numbered steps, and the model provided a recipe but didn’t number the steps.

## See Also

### Getting the issue category

- [LanguageModelFeedback.Issue.Category.incorrect](incorrect.md): An incorrect response.
- [LanguageModelFeedback.Issue.Category.stereotypeOrBias](stereotypeorbias.md): A response that exhibits bias or perpetuates a stereotype.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](suggestiveorsexual.md): A response with suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.tooVerbose](tooverbose.md): An overly verbose response.
- [LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly](triggeredguardrailunexpectedly.md): An unexpected guardrail violation.
- [LanguageModelFeedback.Issue.Category.unhelpful](unhelpful.md): An unhelpful response.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](vulgaroroffensive.md): A response with vulgar or offensive material.
