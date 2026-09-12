> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolcallevaluator](https://developer.apple.com/documentation/evaluations/toolcallevaluator)

# ToolCallEvaluator

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

An evaluator that verifies agentic tool calls against an expected trajectory.

## Declaration

```swift
struct ToolCallEvaluator<Input> where Input : ModelSampleProtocol, Input.Expectation == TrajectoryExpectation
```

## Mentioned In

- [Evaluating tool-calling behavior](evaluating-tool-calling-behavior.md)
- [Evaluating language model responses](evaluating-language-model-responses.md)

<a id="overview"></a>

## Overview

This evaluator produces both a strict and partial result from a single evaluation pass. It also supports ordered sequences, unordered expectations, disallowed tool checks, and group steps.

Use the [toolsAllPass](metric/toolsallpass.md) and [toolsPercentagePass](metric/toolspercentagepass.md) conveniences for the standard metrics:

```swift
let evaluator = ToolCallEvaluator<ModelSample<String>>(
    allPass: .toolsAllPass, percentagePass: .toolsPercentagePass
)
```

## Topics

### Initializers

- [init(allPass:percentagePass:)](toolcallevaluator/init%28allpass_percentagepass_%29.md): Creates a new tool-call expectations evaluator.
- [init(allPass:percentagePass:argumentMatchModel:)](toolcallevaluator/init%28allpass_percentagepass_argumentmatchmodel_%29.md): Creates a new tool-call expectations evaluator with a custom language model for semantic matching of natural language argument matchers.

### Instance Properties

- [allPass](toolcallevaluator/allpass.md): The metric for the strict pass or fail result.
- [percentagePass](toolcallevaluator/percentagepass.md): The metric for the partial score result.

### Instance Methods

- [metrics(subject:input:)](toolcallevaluator/metrics%28subject_input_%29.md): Evaluates tool-call expectations against the actual transcript and returns scored metrics.

## Relationships

### Conforms To

- [EvaluatorProtocol](evaluatorprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tool-call evaluation

- [Evaluating tool-calling behavior](evaluating-tool-calling-behavior.md): Analyze your model’s tool calls against expected trajectories, argument values, and call ordering.
- [TrajectoryExpectation](trajectoryexpectation.md): The expected pattern of tool calls for an evaluation.
- [ArgumentMatcher](argumentmatcher.md): The values that define how to validate a tool-call argument.
