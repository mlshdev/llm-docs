> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeevaluator/init(_:scale:judge:scoringmode:prompt:)](https://developer.apple.com/documentation/evaluations/modeljudgeevaluator/init(_:scale:judge:scoringmode:prompt:))

# init(\_:scale:judge:scoringMode:prompt:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a single-metric evaluator with a custom judge prompt.

## Declaration

```swift
init(_ name: String, scale: ScoringScale, judge: any LanguageModel, scoringMode: ScoringMode = .discrete, prompt: ModelJudgePrompt<Input>)
```

## Parameters

- `name`: The metric name that corresponds to the DataFrame column.
- `scale`: The scoring scale for this metric.
- `judge`: The language model to use as judge.
- `scoringMode`: A value that indicates whether scores are discrete (default) or allow any floating-point value.
- `prompt`: Configuration for the judge prompt, including instructions, response presentation, and reference.

## See Also

### Creating a single-dimension evaluator

- [init(\_:scale:judge:scoringMode:)](init%28__scale_judge_scoringmode_%29.md): Creates a single-metric evaluator with default prompt configuration.
