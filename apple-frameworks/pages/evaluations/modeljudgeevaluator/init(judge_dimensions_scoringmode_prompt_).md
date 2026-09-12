> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeevaluator/init(judge:dimensions:scoringmode:prompt:)](https://developer.apple.com/documentation/evaluations/modeljudgeevaluator/init(judge:dimensions:scoringmode:prompt:))

# init(judge:dimensions:scoringMode:prompt:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a multi-metric evaluator with a custom judge prompt.

## Declaration

```swift
init(judge: any LanguageModel, dimensions: [ScoreDimension], scoringMode: ScoringMode = .discrete, prompt: ModelJudgePrompt<Input>)
```

## Parameters

- `judge`: The language model to use as judge.
- `dimensions`: The dimensions to score. Each produces a separate DataFrame column.
- `scoringMode`: A value that indicates whether scores are discrete (default) or allow any floating-point value.
- `prompt`: Configuration for the judge prompt, including instructions, response presentation, and reference.

## See Also

### Creating a multi-dimension evaluator

- [init(judge:dimensions:scoringMode:)](init%28judge_dimensions_scoringmode_%29.md): Creates a multi-metric evaluator with default prompt configuration.
