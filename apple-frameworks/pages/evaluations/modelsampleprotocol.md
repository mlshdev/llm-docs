> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsampleprotocol](https://developer.apple.com/documentation/evaluations/modelsampleprotocol)

# ModelSampleProtocol

**Framework:** Evaluations  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A type that defines language model evaluation samples with prompt, instructions, and expectations.

## Declaration

```swift
protocol ModelSampleProtocol : SampleProtocol where Self.ExpectedValue : Decodable, Self.ExpectedValue : Encodable, Self.ExpectedValue : Sendable
```

<a id="overview"></a>

## Overview

Extends [SampleProtocol](sampleprotocol.md) with prompt, instructions, and evaluation expectations. Use [ModelSample](modelsample.md) for the common case; create custom conformances when you need additional properties.

```swift
let sample = ModelSample(
    prompt: "What's the weather?",
    expected: "Sunny",
    expectations: TrajectoryExpectation(ordered: [
        ToolExpectation("get_weather")
    ])
)
```

## Topics

### Associated Types

- [Expectation](modelsampleprotocol/expectation.md): The type of evaluation expectations.

### Instance Properties

- [input](modelsampleprotocol/input.md): The bundled language model input, including prompt, instructions, and schema.
- [output](modelsampleprotocol/output.md): The expected output value and evaluation expectations.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [SampleProtocol](sampleprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [ModelSample](modelsample.md)

## See Also

### Protocols

- [SampleProtocol](sampleprotocol.md): A type that defines evaluation samples.
