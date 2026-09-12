> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation](https://developer.apple.com/documentation/evaluations/evaluation)

# Evaluation

**Framework:** Evaluations  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A type that defines an evaluation.

## Declaration

```swift
protocol Evaluation : Sendable
```

## Mentioned In

- [Designing effective evaluations](designing-effective-evaluations.md)

<a id="overview"></a>

## Overview

Implement this protocol to create custom evaluations. The evaluation runs your system under test against a dataset and applies evaluators to measure performance.

```swift
struct MyEvaluation: Evaluation {
    let metric = Metric("Match")

    let dataset = ArrayLoader(samples: [
        ModelSample(prompt: "One plus one is...", expected: "Two.")
    ])

    func subject(from sample: ModelSample<String>) async throws -> ModelSubject<String> {
        ModelSubject(value: "Two.")
    }

    var evaluators: Evaluators {
        Evaluator { sample, subject in
            let metric = Metric("Match")
            guard let expected = sample.expected else { return metric.ignore() }
            return subject.value == expected ? metric.passing() : metric.failing()
        }
    }

    func aggregateMetrics(using aggregator: inout MetricsAggregator) {
        aggregator.computeMean(of: metric)
    }
}
```

## Topics

### Providing data

- [Sample](evaluation/sample.md): The type of input samples in the evaluation dataset.
- [SampleLoader](evaluation/sampleloader.md): The type of the sample loader used to provide the evaluation dataset.
- [dataset](evaluation/dataset.md): The evaluation dataset.

### Testing an intelligent feature

- [Subject](evaluation/subject.md): The type of subject the system under test produces.
- [subject(from:)](evaluation/subject%28from_%29.md): Produces the subject of evaluation from a given sample.
- [EvaluationSubject](evaluationsubject.md): A type that represents the output the system under test produces.
- [ModelSubject](modelsubject.md): The subject type for language model evaluations.
- [name](evaluation/name.md): The default name, taken from the type name.

### Scoring results

- [evaluators](evaluation/evaluators-swift.property.md): The evaluators to apply to each sample and its corresponding subject.
- [Evaluation.Evaluators](evaluation/evaluators-swift.typealias.md): The evaluator array type for this conformance.
- [EvaluatorProtocol](evaluatorprotocol.md): A type that evaluates subjects and produces metrics.
- [EvaluatorsBuilder](evaluatorsbuilder.md): A result builder that enables declarative evaluator lists.
- [aggregateMetrics(using:)](evaluation/aggregatemetrics%28using_%29.md): Aggregates the collected metric results.

### Running an evaluation

- [EvaluationTrait](evaluationtrait.md): A test trait that runs an evaluation and records the result as attachments.
- [EvaluationContext](evaluationcontext.md): A context that provides the evaluation result within a test scope.
- [EvaluationResult](evaluationresult.md): The results of running a model evaluation.
- [run(info:)](evaluation/run%28info_%29.md): Runs the evaluation against the dataset and computes metric results.

### Inspecting detailed results

- [inputColumn](evaluation/inputcolumn.md): A typed column descriptor for the input samples in the detailed DataFrame.
- [responseColumn](evaluation/responsecolumn.md): A typed column descriptor for the model responses in the detailed DataFrame.
- [expectedColumn](evaluation/expectedcolumn.md): A typed column descriptor for the expected values in the detailed DataFrame.

### Errors

- [EvaluationError](evaluationerror.md): Errors thrown during an evaluation run.
- [EvaluatorError](evaluatorerror.md): A value that describes why an evaluator failed while scoring a produced subject.
- [SubjectInferenceError](subjectinferenceerror.md): A value that describes a failure to produce a subject for a sample.
- [EvaluationResultsError](evaluationresultserror.md): Errors the framework throws when parsing evaluation results.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Evaluating language model responses](evaluating-language-model-responses.md): Build an evaluation that runs your intelligence-powered feature against samples and scores each response.
- [Designing effective evaluations](designing-effective-evaluations.md): Design evaluations that tell you how well your feature works, why it fails, and where to focus next.
- [Book Tracker: Using Evaluations to evaluate an intelligent feature](book-tracker-using-evaluations-to-evaluate-an-intelligent-feature.md): Measure and improve the quality of your app’s intelligence-powered features using the Evaluations framework.
- [Evaluating a Core AI model](evaluating-a-core-ai-model.md): Bundle a model with your app and measure how well the model classifies sentiment compared to the default on-device model.
