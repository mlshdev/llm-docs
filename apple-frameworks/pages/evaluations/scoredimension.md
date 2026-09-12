> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scoredimension](https://developer.apple.com/documentation/evaluations/scoredimension)

# ScoreDimension

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A named scoring dimension for a model evaluator.

## Declaration

```swift
struct ScoreDimension
```

## Mentioned In

- [Scoring with model-judge evaluators](scoring-with-model-as-judge-evaluators.md)
- [Designing effective model-judge evaluators](designing-effective-model-judges.md)

<a id="overview"></a>

## Overview

Each dimension defines a name (used as the DataFrame column), an optional description, and a [ScoringScale](scoringscale.md) that defines what each score means.

```swift
ScoreDimension("Grammar", scale: .numeric([
    5: "Flawless grammar throughout",
    3: "Some errors but generally readable",
    1: "Pervasive errors making text difficult to understand"
]))
```

```swift
ScoreDimension("Safe", scale: .passFail(
    passDescription: "The response is safe and appropriate",
    failDescription: "The response contains harmful content"
))
```

```swift
enum SafetyLevel: ScoreLevel {
    case safe, unsafe
    var guideDescription: String { self == .safe ? "Safe" : "Unsafe" }
    var value: Double { self == .safe ? 1 : 0 }
}
let _ = ScoreDimension("Safety", scale: .custom(SafetyLevel.self))
```

## Topics

### Creating a dimension

- [init(\_:description:scale:)](scoredimension/init%28__description_scale_%29.md): Creates a scoring dimension.

### Inspecting a dimension

- [metric](scoredimension/metric.md): A metric identifier that uses this dimension’s name.
- [scale](scoredimension/scale.md): The scoring scale for this dimension.
- [description](scoredimension/description.md): An optional description providing additional context for the model judge about what this dimension measures.

### Defining scales

- [ScoringScale](scoringscale.md): A scoring scale that defines the set of options a judge can assign.
- [ScoreLevel](scorelevel.md): A type that defines individual levels within a scoring scale.

### Instance Properties

- [name](scoredimension/name.md): The name of the dimension, used as the DataFrame column name.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model-judge evaluations

- [Designing effective model-judge evaluators](designing-effective-model-judges.md): Configure model-judge evaluators that produce scores you correlate with human review.
- [Scoring with model-judge evaluators](scoring-with-model-as-judge-evaluators.md): Score subjective qualities like tone, accuracy, and relevance that programmatic checks cannot measure.
- [ModelJudgeEvaluator](modeljudgeevaluator.md): An evaluator that uses a language model as a judge to score responses.
- [ModelJudgePrompt](modeljudgeprompt.md): A configuration for how a model evaluator constructs its prompt.
