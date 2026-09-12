> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modeljudgeprompt](https://developer.apple.com/documentation/evaluations/modeljudgeprompt)

# ModelJudgePrompt

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A configuration for how a model evaluator constructs its prompt.

## Declaration

```swift
struct ModelJudgePrompt<Input> where Input : ModelSampleProtocol
```

## Mentioned In

- [Scoring with model-judge evaluators](scoring-with-model-as-judge-evaluators.md)

<a id="overview"></a>

## Overview

```swift
let prompt = ModelJudgePrompt<ModelSample<String>>(
    instructions: "You are a domain expert evaluating product reviews."
)
```

`ModelJudgePrompt` bundles the instructions, response presentation, and reference-data injection into a single composable value. Use it with [ModelJudgeEvaluator](modeljudgeevaluator.md) to customize how the model judge sees the evaluation.

## Topics

### Creating a prompt configuration

- [init(instructions:evaluationTarget:reference:)](modeljudgeprompt/init%28instructions_evaluationtarget_reference_%29.md): Creates a model prompt configuration.
- [defaultInstructions](modeljudgeprompt/defaultinstructions.md): The default system instructions used when no custom instructions are provided.

### Customizing judge input

- [instructions](modeljudgeprompt/instructions.md): The system instructions for the model judge.
- [evaluationTarget](modeljudgeprompt/evaluationtarget.md): An optional closure that converts the model’s response to a string for the model prompt.
- [reference](modeljudgeprompt/reference.md): An optional closure that provides labeled reference data to include in the model prompt.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model-judge evaluations

- [Designing effective model-judge evaluators](designing-effective-model-judges.md): Configure model-judge evaluators that produce scores you correlate with human review.
- [Scoring with model-judge evaluators](scoring-with-model-as-judge-evaluators.md): Score subjective qualities like tone, accuracy, and relevance that programmatic checks cannot measure.
- [ModelJudgeEvaluator](modeljudgeevaluator.md): An evaluator that uses a language model as a judge to score responses.
- [ScoreDimension](scoredimension.md): A named scoring dimension for a model evaluator.
