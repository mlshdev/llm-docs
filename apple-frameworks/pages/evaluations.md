> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations](https://developer.apple.com/documentation/evaluations)

# Evaluations

**Framework:** Evaluations  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Measure the quality of your app’s intelligence-powered features.

<a id="Overview"></a>

## Overview

Use the Evaluations framework to systematically evaluate your app’s intelligence-powered features. Define datasets, generate model responses, apply metrics, and aggregate results, all with type-safe Swift APIs that integrate directly into your development workflow.

![An illustration of a green and blue clipboard icon showing a line chart and result rows, surrounded by floating cards displaying bar charts and distribution graphs on a dotted grid background.](https://developer.apple.com/images/com.apple.evaluations/evalkit-hero@2x.png)

With the Evaluations framework, you can:

- Compare prompt strategies.
- Track quality over time.
- Catch regressions before they ship.

The framework evaluates your intelligence-powered features against the metrics you define, from simple pass or fail checks to detailed scoring with model-judge patterns. It aggregates the results into summaries that show you which approach performs best and where individual responses fall short. The framework works with any model available through [Foundation Models](foundationmodels.md), including on-device, Private Cloud Compute, and other models.

## Topics

### Essentials

- [Evaluating language model responses](evaluations/evaluating-language-model-responses.md): Build an evaluation that runs your intelligence-powered feature against samples and scores each response.
- [Designing effective evaluations](evaluations/designing-effective-evaluations.md): Design evaluations that tell you how well your feature works, why it fails, and where to focus next.
- [Book Tracker: Using Evaluations to evaluate an intelligent feature](evaluations/book-tracker-using-evaluations-to-evaluate-an-intelligent-feature.md): Measure and improve the quality of your app’s intelligence-powered features using the Evaluations framework.
- [Evaluating a Core AI model](evaluations/evaluating-a-core-ai-model.md): Bundle a model with your app and measure how well the model classifies sentiment compared to the default on-device model.
- [Evaluation](evaluations/evaluation.md): A type that defines an evaluation.

### Datasets

- [Generating synthetic datasets](evaluations/generating-synthetic-evaluation-datasets.md): Expand a small set of manually written evaluation samples into a larger dataset.
- [Designing datasets to test your feature](evaluations/designing-evaluation-datasets.md): Build categorized test datasets that reflect the full range of real-world use of your feature.
- [ModelSample](evaluations/modelsample.md): A general-purpose language model evaluation sample.
- [Loader](evaluations/loader.md): A protocol for types that supply a dataset for evaluation.
- [SampleGenerator](evaluations/samplegenerator.md): An actor that generates evaluation samples using a language model.

### Metrics and evaluators

- [Designing specific, measurable criteria in an evaluation suite](evaluations/designing-evaluation-criteria.md): Define quality for your feature by choosing measurable criteria, scoring approaches, and ground-truth strategies.
- [Metric](evaluations/metric.md): A named metric that carries a result value.
- [Evaluator](evaluations/evaluator.md): A closure-based evaluator.
- [MetricsAggregator](evaluations/metricsaggregator.md): A utility for computing aggregate statistics from evaluation metrics.

### Results

- [EvaluationResult](evaluations/evaluationresult.md): The results of running a model evaluation.
- [ResultColumn](evaluations/resultcolumn.md): A typed descriptor for a column in an evaluation result DataFrame.
- [inputColumn](evaluations/evaluation/inputcolumn.md): A typed column descriptor for the input samples in the detailed DataFrame.
- [responseColumn](evaluations/evaluation/responsecolumn.md): A typed column descriptor for the model responses in the detailed DataFrame.
- [expectedColumn](evaluations/evaluation/expectedcolumn.md): A typed column descriptor for the expected values in the detailed DataFrame.

### Model-judge evaluations

- [Designing effective model-judge evaluators](evaluations/designing-effective-model-judges.md): Configure model-judge evaluators that produce scores you correlate with human review.
- [Scoring with model-judge evaluators](evaluations/scoring-with-model-as-judge-evaluators.md): Score subjective qualities like tone, accuracy, and relevance that programmatic checks cannot measure.
- [ModelJudgeEvaluator](evaluations/modeljudgeevaluator.md): An evaluator that uses a language model as a judge to score responses.
- [ModelJudgePrompt](evaluations/modeljudgeprompt.md): A configuration for how a model evaluator constructs its prompt.
- [ScoreDimension](evaluations/scoredimension.md): A named scoring dimension for a model evaluator.

### Tool-call evaluation

- [Evaluating tool-calling behavior](evaluations/evaluating-tool-calling-behavior.md): Analyze your model’s tool calls against expected trajectories, argument values, and call ordering.
- [ToolCallEvaluator](evaluations/toolcallevaluator.md): An evaluator that verifies agentic tool calls against an expected trajectory.
- [TrajectoryExpectation](evaluations/trajectoryexpectation.md): The expected pattern of tool calls for an evaluation.
- [ArgumentMatcher](evaluations/argumentmatcher.md): The values that define how to validate a tool-call argument.

### Swift Testing integration

- [EvaluationTrait](evaluations/evaluationtrait.md): A test trait that runs an evaluation and records the result as attachments.
- [EvaluationContext](evaluations/evaluationcontext.md): A context that provides the evaluation result within a test scope.

### Structures

- [EvaluationRunErrors](evaluations/evaluationrunerrors.md): A summary of the failures encountered during an evaluation run.
