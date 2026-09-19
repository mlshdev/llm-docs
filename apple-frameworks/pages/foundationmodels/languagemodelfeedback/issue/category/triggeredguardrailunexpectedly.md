> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/category/triggeredguardrailunexpectedly

# LanguageModelFeedback.Issue.Category.triggeredGuardrailUnexpectedly

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

An unexpected guardrail violation.

## Declaration

```swift
case triggeredGuardrailUnexpectedly
```

<a id="discussion"></a>

## Discussion

An unexpected guardrail issue might be where you ask for a cake recipe, and the framework throws a guardrail violation error.

## See Also

### Getting the issue category

- [LanguageModelFeedback.Issue.Category.didNotFollowInstructions](didnotfollowinstructions.md): A response that doesn’t follow instructions correctly.
- [LanguageModelFeedback.Issue.Category.incorrect](incorrect.md): An incorrect response.
- [LanguageModelFeedback.Issue.Category.stereotypeOrBias](stereotypeorbias.md): A response that exhibits bias or perpetuates a stereotype.
- [LanguageModelFeedback.Issue.Category.suggestiveOrSexual](suggestiveorsexual.md): A response with suggestive or sexual material.
- [LanguageModelFeedback.Issue.Category.tooVerbose](tooverbose.md): An overly verbose response.
- [LanguageModelFeedback.Issue.Category.unhelpful](unhelpful.md): An unhelpful response.
- [LanguageModelFeedback.Issue.Category.vulgarOrOffensive](vulgaroroffensive.md): A response with vulgar or offensive material.
