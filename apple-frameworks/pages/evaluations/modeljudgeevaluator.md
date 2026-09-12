> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeevaluator](https://developer.apple.com/documentation/evaluations/modeljudgeevaluator)

# ModelJudgeEvaluator

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

An evaluator that uses a language model as a judge to score responses.

## Declaration

```swift
struct ModelJudgeEvaluator<Input> where Input : ModelSampleProtocol
```

## Mentioned In

- [Scoring with model-judge evaluators](scoring-with-model-as-judge-evaluators.md)
- [Designing effective model-judge evaluators](designing-effective-model-judges.md)
- [Designing specific, measurable criteria in an evaluation suite](designing-evaluation-criteria.md)
- [Evaluating language model responses](evaluating-language-model-responses.md)

<a id="overview"></a>

## Overview

`ModelJudgeEvaluator` sends the query, response, and optional reference data to a model judge, which returns scores for one or more dimensions. The response is automatically serialized as JSON, because `OutputType` is `Codable`, or is customizable via [ModelJudgePrompt](modeljudgeprompt.md).

## Topics

### Creating a single-dimension evaluator

- [init(\_:scale:judge:scoringMode:)](modeljudgeevaluator/init%28__scale_judge_scoringmode_%29.md): Creates a single-metric evaluator with default prompt configuration.
- [init(\_:scale:judge:scoringMode:prompt:)](modeljudgeevaluator/init%28__scale_judge_scoringmode_prompt_%29.md): Creates a single-metric evaluator with a custom judge prompt.

### Creating a multi-dimension evaluator

- [init(judge:dimensions:scoringMode:)](modeljudgeevaluator/init%28judge_dimensions_scoringmode_%29.md): Creates a multi-metric evaluator with default prompt configuration.
- [init(judge:dimensions:scoringMode:prompt:)](modeljudgeevaluator/init%28judge_dimensions_scoringmode_prompt_%29.md): Creates a multi-metric evaluator with a custom judge prompt.

### Creating a pairwise evaluator

- [pairwise(\_:scale:judge:scoringMode:evaluationTarget:)](modeljudgeevaluator/pairwise%28__scale_judge_scoringmode_evaluationtarget_%29.md): Creates a pairwise comparison evaluator that compares the model’s response against the sample’s expected value.
- [pairwise(judge:dimensions:scoringMode:evaluationTarget:)](modeljudgeevaluator/pairwise%28judge_dimensions_scoringmode_evaluationtarget_%29.md): Creates a multi-metric pairwise comparison evaluator.

### Configuring the judge prompt

- [defaultInstructions](modeljudgeevaluator/defaultinstructions.md): The default system instructions the model uses when no custom instructions are provided.
- [judgePrompt(for:output:)](modeljudgeevaluator/judgeprompt%28for_output_%29.md): Builds and returns the full judge prompt for inspection, debugging, or logging.

### Inspecting the evaluator

- [dimensions](modeljudgeevaluator/dimensions.md): The dimensions this evaluator scores.
- [scoringMode](modeljudgeevaluator/scoringmode.md): The scoring constraint mode. See [ScoringMode](scoringmode.md).
- [ScoringMode](scoringmode.md): The scoring constraint mode for a model evaluator.

### Errors

- [ModelJudgeError](modeljudgeerror.md)

## Relationships

### Conforms To

- [EvaluatorProtocol](evaluatorprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model-judge evaluations

- [Designing effective model-judge evaluators](designing-effective-model-judges.md): Configure model-judge evaluators that produce scores you correlate with human review.
- [Scoring with model-judge evaluators](scoring-with-model-as-judge-evaluators.md): Score subjective qualities like tone, accuracy, and relevance that programmatic checks cannot measure.
- [ModelJudgePrompt](modeljudgeprompt.md): A configuration for how a model evaluator constructs its prompt.
- [ScoreDimension](scoredimension.md): A named scoring dimension for a model evaluator.
