> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeevaluator/pairwise(judge:dimensions:scoringmode:evaluationtarget:)](https://developer.apple.com/documentation/evaluations/modeljudgeevaluator/pairwise(judge:dimensions:scoringmode:evaluationtarget:))

# pairwise(judge:dimensions:scoringMode:evaluationTarget:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a multi-metric pairwise comparison evaluator.

## Declaration

```swift
static func pairwise(judge: any LanguageModel, dimensions: [ScoreDimension], scoringMode: ScoringMode = .discrete, evaluationTarget: (@Sendable (Input.ExpectedValue) -> String)? = nil) -> ModelJudgeEvaluator<Input>
```

## Parameters

- `judge`: The language model to use as judge.
- `dimensions`: The dimensions to score for the comparison.
- `scoringMode`: A value that indicates whether scores are discrete (default) or allow any floating-point value.
- `evaluationTarget`: An optional closure that converts the value to a string. Both responses use this target.

## See Also

### Creating a pairwise evaluator

- [pairwise(\_:scale:judge:scoringMode:evaluationTarget:)](pairwise%28__scale_judge_scoringmode_evaluationtarget_%29.md): Creates a pairwise comparison evaluator that compares the model’s response against the sample’s expected value.
