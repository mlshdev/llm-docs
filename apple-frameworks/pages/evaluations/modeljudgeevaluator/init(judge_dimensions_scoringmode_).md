> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeevaluator/init(judge:dimensions:scoringmode:)](https://developer.apple.com/documentation/evaluations/modeljudgeevaluator/init(judge:dimensions:scoringmode:))

# init(judge:dimensions:scoringMode:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a multi-metric evaluator with default prompt configuration.

## Declaration

```swift
init(judge: any LanguageModel = SystemLanguageModel(), dimensions: [ScoreDimension], scoringMode: ScoringMode = .discrete)
```

```swift
init(judge: any LanguageModel, dimensions: [ScoreDimension], scoringMode: ScoringMode = .discrete)
```

## Parameters

- `judge`: The language model to use as judge. Defaults to `SystemLanguageModel.default`.
- `dimensions`: The dimensions to score. Each produces a separate DataFrame column.
- `scoringMode`: A value that indicates whether scores are discrete (default) or allow any floating-point value.

## See Also

### Creating a multi-dimension evaluator

- [init(judge:dimensions:scoringMode:prompt:)](init%28judge_dimensions_scoringmode_prompt_%29.md): Creates a multi-metric evaluator with a custom judge prompt.
