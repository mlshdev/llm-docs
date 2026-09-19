> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback/issue/init(category:explanation:)

# init(category:explanation:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates an issue.

## Declaration

```swift
init(category: LanguageModelFeedback.Issue.Category, explanation: String? = nil)
```

## Parameters

- `category`: A category for this issue.
- `explanation`: An optional explanation of this issue.

## See Also

### Creating an issue

- [LanguageModelFeedback.Issue.Category](category.md): Categories for model response issues.
