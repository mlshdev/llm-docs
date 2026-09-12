> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsample](https://developer.apple.com/documentation/evaluations/modelsample)

# ModelSample

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A general-purpose language model evaluation sample.

## Declaration

```swift
struct ModelSample<ExpectedValue> where ExpectedValue : Decodable, ExpectedValue : Encodable, ExpectedValue : Sendable
```

## Mentioned In

- [Generating synthetic datasets](generating-synthetic-evaluation-datasets.md)

<a id="overview"></a>

## Overview

Accepts string-based prompts and instructions. For multimodal prompts, create a custom [ModelSampleProtocol](modelsampleprotocol.md) conformance or use the [init(input:expected:expectations:)](modelsample/init%28input_expected_expectations_%29.md) initializer with a prebuilt [ModelSampleInput](modelsampleinput.md).

```swift
let sample = ModelSample(prompt: "The capital of France is...", expected: "Paris.")
```

## Topics

### Creating a sample

- [init(prompt:expected:instructions:generationSchema:expectations:)](modelsample/init%28prompt_expected_instructions_generationschema_expectations_%29-7daed.md): Creates a model sample with string-based prompt and instructions.
- [init(prompt:expected:instructions:generationSchema:expectations:)](modelsample/init%28prompt_expected_instructions_generationschema_expectations_%29-8mni.md): Creates a model sample with a FoundationModels prompt.
- [init(input:expected:expectations:)](modelsample/init%28input_expected_expectations_%29.md): Creates a model sample with a prebuilt input.

### Specifying the query

- [prompt](modelsample/prompt.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. The user’s prompt for this sample.
- [promptDescription](modelsample/promptdescription.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. A text representation of the prompt, synthesized from its segments.
- [instructions](modelsample/instructions.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. Optional instructions providing context to the model for this sample.
- [instructionsDescription](modelsample/instructionsdescription.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. A text representation of the instructions, synthesized from their segments.
- [input](modelsample/input.md): The bundled language model input (prompt, instructions, schema).

### Specifying expected output

- [expected](modelsample/expected.md): The expected output for comparison.
- [output](modelsample/output.md): The expected output value and evaluation expectations.

### Specifying tool expectations

- [expectations](modelsample/expectations.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. The expected pattern of tool calls for this sample.

### Configuring generation

- [generationSchema](modelsample/generationschema.md): Conforms when `ExpectedValue` conforms to `Decodable`, `Encodable`, and `Sendable`. The output schema for the model’s response.

### Bundled input and output

- [ModelSampleInput](modelsampleinput.md): The data a language model receives for evaluation.
- [ModelSampleOutput](modelsampleoutput.md): The expected output value and evaluation expectations for a sample.

### Protocols

- [ModelSampleProtocol](modelsampleprotocol.md): A type that defines language model evaluation samples with prompt, instructions, and expectations.
- [SampleProtocol](sampleprotocol.md): A type that defines evaluation samples.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ModelSampleProtocol](modelsampleprotocol.md)
- [SampleProtocol](sampleprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Datasets

- [Generating synthetic datasets](generating-synthetic-evaluation-datasets.md): Expand a small set of manually written evaluation samples into a larger dataset.
- [Designing datasets to test your feature](designing-evaluation-datasets.md): Build categorized test datasets that reflect the full range of real-world use of your feature.
- [Loader](loader.md): A protocol for types that supply a dataset for evaluation.
- [SampleGenerator](samplegenerator.md): An actor that generates evaluation samples using a language model.
