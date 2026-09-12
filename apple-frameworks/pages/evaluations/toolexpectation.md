> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolexpectation](https://developer.apple.com/documentation/evaluations/toolexpectation)

# ToolExpectation

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A specification for an expected tool call, or a group of expectations that can be satisfied in any order.

## Declaration

```swift
struct ToolExpectation
```

## Mentioned In

- [Evaluating language model responses](evaluating-language-model-responses.md)
- [Evaluating tool-calling behavior](evaluating-tool-calling-behavior.md)

<a id="overview"></a>

## Overview

Most commonly, a `ToolExpectation` identifies a single tool by name and optionally validates its arguments:

```swift
ToolExpectation("getWeather", arguments: [
    .exact(argumentName: "location", value: "Paris, France")
])
```

For ordered sequences where multiple tools must all be called at the same position but their relative order doesn’t matter, use [anyOrder(\_:)](toolexpectation/anyorder%28__%29.md):

```swift
ToolExpectation.anyOrder([
    ToolExpectation("fetchData"),
    ToolExpectation("fetchMetadata"),
])
```

## Topics

### Creating an expectation

- [init(\_:arguments:)](toolexpectation/init%28__arguments_%29.md): Creates a new tool expectation.

### Creating any-order groups

- [anyOrder(\_:)](toolexpectation/anyorder%28__%29.md): Creates a group of expectations that must all be satisfied at the same sequential position, but can occur in any relative order.

### Accessing expectation details

- [name](toolexpectation/name.md): The name of the tool that the evaluation expects the model to call.
- [arguments](toolexpectation/arguments.md): The argument matchers to validate against the tool call.
- [isAnyOrderGroup](toolexpectation/isanyordergroup.md): A Boolean value that indicates whether this expectation represents a group of expectations that can be satisfied in any order.

### Matching arguments

- [ArgumentMatcher](argumentmatcher.md): The values that define how to validate a tool-call argument.

### Initializers

- [init(from:)](toolexpectation/init%28from_%29.md): Creates a tool expectation by decoding from the given decoder.

### Instance Properties

- [generatedContent](toolexpectation/generatedcontent.md): The generated content representation of this tool expectation.

### Instance Methods

- [encode(to:)](toolexpectation/encode%28to_%29.md): Encodes this tool expectation into the given encoder.

### Type Properties

- [generationSchema](toolexpectation/generationschema.md): The generation schema for this tool expectation.

### Enumerations

- [ToolExpectation.PartiallyGenerated](toolexpectation/partiallygenerated.md): A partially generated form of a tool expectation.

### Default Implementations

- [ConvertibleFromGeneratedContent Implementations](toolexpectation/convertiblefromgeneratedcontent-implementations.md)

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

### Creating a single-tool expectation

- [init(expected:arguments:)](trajectoryexpectation/init%28expected_arguments_%29.md): Creates a trajectory expectation for a single expected tool call.
