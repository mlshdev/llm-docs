> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher](https://developer.apple.com/documentation/evaluations/argumentmatcher)

# ArgumentMatcher

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The values that define how to validate a tool-call argument.

## Declaration

```swift
enum ArgumentMatcher
```

## Mentioned In

- [Evaluating tool-calling behavior](evaluating-tool-calling-behavior.md)

<a id="overview"></a>

## Overview

Use argument matchers to specify validation rules for tool-call arguments. You can require exact values, verify key presence, check ranges, match patterns, or use a language model for semantic matching.

For example:

```swift
let matchers: [ArgumentMatcher] = [
    .exact(argumentName: "city", value: "San Francisco"),
    .keyOnly(argumentName: "units"),
    .naturalLanguage(argumentName: "prompt", criteria: "A weather-related question")
]
```

| Validation Strategy | Rules |
| --- | --- |
| [ArgumentMatcher.exact(argumentName:value:)](argumentmatcher/exact%28argumentname_value_%29.md) | Value must equal the expected value exactly. Use for identifiers, enum values, and precise inputs. |
| [ArgumentMatcher.keyOnly(argumentName:)](argumentmatcher/keyonly%28argumentname_%29.md) | Argument must be present with any value. Use when you care that the model provides the parameter but any value is acceptable. |
| [ArgumentMatcher.oneOf(argumentName:allowedValues:)](argumentmatcher/oneof%28argumentname_allowedvalues_%29.md) | Value must be one of the allowed options. Use for ambiguous prompts with multiple valid interpretations. |
| [ArgumentMatcher.range(argumentName:minimum:maximum:)](argumentmatcher/range%28argumentname_minimum_maximum_%29.md) | Numeric value must fall within bounds (inclusive). Use for quantities where a range is acceptable. |
| [ArgumentMatcher.pattern(argumentName:regex:)](argumentmatcher/pattern%28argumentname_regex_%29.md) | String must match a regular expression. Use for structured formats: emails, dates, IDs. |
| [ArgumentMatcher.contains(argumentName:substring:)](argumentmatcher/contains%28argumentname_substring_%29.md) | String must contain a substring. Use when the argument references a concept but phrasing varies. |
| [ArgumentMatcher.hasPrefix(argumentName:prefix:)](argumentmatcher/hasprefix%28argumentname_prefix_%29.md) | String must start with a prefix. Use for paths, URLs, or namespaced values. |
| [ArgumentMatcher.hasSuffix(argumentName:suffix:)](argumentmatcher/hassuffix%28argumentname_suffix_%29.md) | String must end with a suffix. Use for file extensions or domain-specific endings. |
| [ArgumentMatcher.naturalLanguage(argumentName:criteria:)](argumentmatcher/naturallanguage%28argumentname_criteria_%29.md) | A language model judges whether the value satisfies the criteria. Use when correctness is subjective or hard to express with string operations, for example, validating that a query argument is “a weather-related question”. |

## Topics

### Exact matching

- [ArgumentMatcher.exact(argumentName:value:)](argumentmatcher/exact%28argumentname_value_%29.md): A value that indicates that the argument must be present with this exact key and value.
- [ArgumentMatcher.keyOnly(argumentName:)](argumentmatcher/keyonly%28argumentname_%29.md): A value that indicates that the argument must be present with this key and no specific value.

### Set and range matching

- [ArgumentMatcher.oneOf(argumentName:allowedValues:)](argumentmatcher/oneof%28argumentname_allowedvalues_%29.md): A value that indicates the argument must be present with a value that matches one of the allowed values.
- [ArgumentMatcher.range(argumentName:minimum:maximum:)](argumentmatcher/range%28argumentname_minimum_maximum_%29.md): A value that indicates that the argument must be present and its numeric value must be within the specified range.

### String matching

- [ArgumentMatcher.pattern(argumentName:regex:)](argumentmatcher/pattern%28argumentname_regex_%29.md): A value that indicates that the argument must be present and its string value must match the specified regex pattern.
- [ArgumentMatcher.contains(argumentName:substring:)](argumentmatcher/contains%28argumentname_substring_%29.md): A value that indicates that the argument must be present and its string value must contain the specified substring.
- [ArgumentMatcher.hasPrefix(argumentName:prefix:)](argumentmatcher/hasprefix%28argumentname_prefix_%29.md): A value that indicates that the argument must be present and its string value must start with the specified prefix.
- [ArgumentMatcher.hasSuffix(argumentName:suffix:)](argumentmatcher/hassuffix%28argumentname_suffix_%29.md): A value that indicates that the argument must be present and its string value must end with the specified suffix.

### Semantic matching

- [ArgumentMatcher.naturalLanguage(argumentName:criteria:)](argumentmatcher/naturallanguage%28argumentname_criteria_%29.md): A value that indicates that the argument must be present and semantically match the given criteria.

### Supporting types

- [ArgumentValue](argumentvalue.md): A primitive, generable value type for argument specifications.
- [StructuredValue](structuredvalue.md): A type-safe representation of JSON values.

### Initializers

- [init(from:)](argumentmatcher/init%28from_%29.md): Creates an argument matcher from the given decoder.

### Instance Properties

- [generatedContent](argumentmatcher/generatedcontent.md): The generated content representation of this argument matcher.

### Instance Methods

- [encode(to:)](argumentmatcher/encode%28to_%29.md): Encodes this argument matcher into the given encoder.

### Type Properties

- [generationSchema](argumentmatcher/generationschema.md): The generation schema for this partially generated argument matcher.

### Enumerations

- [ArgumentMatcher.PartiallyGenerated](argumentmatcher/partiallygenerated.md): A partially generated form of an argument matcher.

### Default Implementations

- [ConvertibleFromGeneratedContent Implementations](argumentmatcher/convertiblefromgeneratedcontent-implementations.md)

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
- [TrajectoryExpectation](trajectoryexpectation.md): The expected pattern of tool calls for an evaluation.
