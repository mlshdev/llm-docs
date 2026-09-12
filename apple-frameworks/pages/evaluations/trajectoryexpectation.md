> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation](https://developer.apple.com/documentation/evaluations/trajectoryexpectation)

# TrajectoryExpectation

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The expected pattern of tool calls for an evaluation.

## Declaration

```swift
struct TrajectoryExpectation
```

## Mentioned In

- [Evaluating tool-calling behavior](evaluating-tool-calling-behavior.md)
- [Evaluating language model responses](evaluating-language-model-responses.md)

<a id="overview"></a>

## Overview

```swift
TrajectoryExpectation(ordered: [
    ToolExpectation("authenticate"),
    ToolExpectation("processResults"),
])
```

`TrajectoryExpectation` specifies expected tool-calling behavior across three axes:

- **Ordered**: Tool calls that must occur in a specific sequence. Use [ToolExpectation](toolexpectation.md) for single sequential steps, or [anyOrder(\_:)](toolexpectation/anyorder%28__%29.md) when multiple tools must all be called at a given position but their relative order doesn’t matter.
- **Unordered**: Tool calls that must occur at some point, regardless of when.
- **Disallowed**: Tool calls that must NOT occur.

```swift
TrajectoryExpectation(ordered: [
    ToolExpectation("authenticate"),
    ToolExpectation("processResults"),
])
```

```swift
TrajectoryExpectation(ordered: [
    ToolExpectation("authenticate"),
    .anyOrder([
        ToolExpectation("fetchData"),
        ToolExpectation("fetchMetadata"),
    ]),
    ToolExpectation("processResults"),
], allowsAdditionalToolCalls: false)
```

```swift
TrajectoryExpectation(
    ordered: [
        ToolExpectation("findActivities"),
        ToolExpectation("estimateTravelTime"),
    ],
    unordered: [ToolExpectation("getWeather")],
    disallowed: [ToolExpectation("deleteData")]
)
```

```swift
TrajectoryExpectation(expected: "getWeather", arguments: [
    .exact(argumentName: "location", value: "Paris, France")
])
```

## Topics

### Creating a single-tool expectation

- [init(expected:arguments:)](trajectoryexpectation/init%28expected_arguments_%29.md): Creates a trajectory expectation for a single expected tool call.
- [ToolExpectation](toolexpectation.md): A specification for an expected tool call, or a group of expectations that can be satisfied in any order.

### Creating multi-tool expectations

- [init(ordered:unordered:allowsAdditionalToolCalls:)](trajectoryexpectation/init%28ordered_unordered_allowsadditionaltoolcalls_%29.md): Creates a trajectory expectation with ordered and unordered requirements, and controls whether unmatched tool calls are permitted.
- [init(ordered:unordered:disallowed:)](trajectoryexpectation/init%28ordered_unordered_disallowed_%29.md): Creates a trajectory expectation with ordered and unordered requirements, plus specific tools that the model must not call.
- [init(unordered:)](trajectoryexpectation/init%28unordered_%29.md): Creates a trajectory expectation with only unordered requirements.

### Combining expectations

- [ordered](trajectoryexpectation/ordered.md): Tool call steps that must be satisfied in sequential order.
- [unordered](trajectoryexpectation/unordered.md): Tool calls that must occur at some point, regardless of position.
- [disallowed](trajectoryexpectation/disallowed.md): Tools that the model must NOT call.
- [allowsAdditionalCalls](trajectoryexpectation/allowsadditionalcalls.md): A Boolean value that indicates whether to allow tool calls that don’t match any expectation.

### Instance Properties

- [generatedContent](trajectoryexpectation/generatedcontent.md): The generated content representation of this trajectory expectation.

### Type Properties

- [generationSchema](trajectoryexpectation/generationschema.md): The generation schema for this trajectory expectation.

### Default Implementations

- [ConvertibleFromGeneratedContent Implementations](trajectoryexpectation/convertiblefromgeneratedcontent-implementations.md)

## Relationships

### Conforms To

- [ConvertibleFromGeneratedContent](../foundationmodels/convertiblefromgeneratedcontent.md)
- [ConvertibleToGeneratedContent](../foundationmodels/convertibletogeneratedcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Generable](../foundationmodels/generable.md)
- [InstructionsRepresentable](../foundationmodels/instructionsrepresentable.md)
- [PromptRepresentable](../foundationmodels/promptrepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tool-call evaluation

- [Evaluating tool-calling behavior](evaluating-tool-calling-behavior.md): Analyze your model’s tool calls against expected trajectories, argument values, and call ordering.
- [ToolCallEvaluator](toolcallevaluator.md): An evaluator that verifies agentic tool calls against an expected trajectory.
- [ArgumentMatcher](argumentmatcher.md): The values that define how to validate a tool-call argument.
