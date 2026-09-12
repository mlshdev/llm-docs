> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation/run(info:)](https://developer.apple.com/documentation/evaluations/evaluation/run(info:))

# run(info:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Runs the evaluation against the dataset and computes metric results.

## Declaration

```swift
nonisolated(nonsending) func run(info: [String : String] = [:]) async throws -> EvaluationResult
```

## Parameters

- `info`: User-defined key-value pairs attached to the result, such as model name or dataset version.

<a id="return-value"></a>

## Return Value

An [EvaluationResult](../evaluationresult.md) that contains the summary statistics and sample-level results.

<a id="discussion"></a>

## Discussion

This method executes the evaluation by iterating through your dataset, producing subjects, applying evaluators, and producing summary statistics. The evaluation logs and skips inference errors rather than halting the run.

The resulting [EvaluationResult](../evaluationresult.md) contains typed data in its DataFrames:

- The Input column contains the full `Sample` from the dataset.
- The Response column contains the full subject that the system under test produces.
- Metric columns contain [Metric](../metric.md) values directly, preserving pass, fail, and score semantics and rationale.
- The SubjectInferenceError column contains the failure reason for any sample whose subject could not be produced by `subject(from:)` (the same rows whose Response is `nil`). It is present only when at least one subject failed.
- The EvaluatorErrors column contains the failure reason(s), labeled by evaluator type, for any sample whose subject was produced but one or more evaluators threw. It is present only when at least one evaluator failed.

## See Also

### Running an evaluation

- [EvaluationTrait](../evaluationtrait.md): A test trait that runs an evaluation and records the result as attachments.
- [EvaluationContext](../evaluationcontext.md): A context that provides the evaluation result within a test scope.
- [EvaluationResult](../evaluationresult.md): The results of running a model evaluation.
