> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeevaluator/pairwise(_:scale:judge:scoringmode:evaluationtarget:)](https://developer.apple.com/documentation/evaluations/modeljudgeevaluator/pairwise(_:scale:judge:scoringmode:evaluationtarget:))

# pairwise(\_:scale:judge:scoringMode:evaluationTarget:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a pairwise comparison evaluator that compares the model’s response against the sample’s expected value.

## Declaration

```swift
static func pairwise(_ name: String, scale: ScoringScale, judge: any LanguageModel, scoringMode: ScoringMode = .discrete, evaluationTarget: (@Sendable (Input.ExpectedValue) -> String)? = nil) -> ModelJudgeEvaluator<Input>
```

## Parameters

- `name`: The metric name that corresponds to the DataFrame column.
- `scale`: Scoring scale for the comparison.
- `judge`: The language model to use as judge.
- `scoringMode`: A value that indicates whether scores are discrete (default) or allow any floating-point value.
- `evaluationTarget`: An optional closure that converts the value to a string. Both responses use this target.

## Mentioned In

- [Scoring with model-judge evaluators](../scoring-with-model-as-judge-evaluators.md)

<a id="discussion"></a>

## Discussion

The judge sees the model’s output under “Response” and the expected value from `input.expected` under “Baseline Response” in the Context section.

## See Also

### Creating a pairwise evaluator

- [pairwise(judge:dimensions:scoringMode:evaluationTarget:)](pairwise%28judge_dimensions_scoringmode_evaluationtarget_%29.md): Creates a multi-metric pairwise comparison evaluator.
