> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationrunerrors](https://developer.apple.com/documentation/evaluations/evaluationrunerrors)

# EvaluationRunErrors

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A summary of the failures encountered during an evaluation run.

## Declaration

```swift
struct EvaluationRunErrors
```

<a id="overview"></a>

## Overview

Retrieved via [errors](evaluationresult/errors.md).

## Topics

### Instance Properties

- [anyInferenceProduced](evaluationrunerrors/anyinferenceproduced.md): Whether any sample produced a subject.
- [evaluatorFailureCount](evaluationrunerrors/evaluatorfailurecount.md): The total number of evaluator invocations that threw.
- [failingEvaluatorTypes](evaluationrunerrors/failingevaluatortypes.md): The set of evaluator type names that threw at least once.
- [hasFailures](evaluationrunerrors/hasfailures.md): Whether this represents any failure worth persisting.
- [inferenceFailureCount](evaluationrunerrors/inferencefailurecount.md): The number of samples whose subject failed to be produced.
- [metricsNotFound](evaluationrunerrors/metricsnotfound.md): Metric names referenced by `MetricsAggregator` that no evaluator produced.

### Type Properties

- [clean](evaluationrunerrors/clean.md): Used as the default when loading a file that carries no `runErrors`.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
