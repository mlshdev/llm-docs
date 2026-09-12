> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/sampleprotocol](https://developer.apple.com/documentation/evaluations/sampleprotocol)

# SampleProtocol

**Framework:** Evaluations  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A type that defines evaluation samples.

## Declaration

```swift
protocol SampleProtocol : Decodable, Encodable, Sendable
```

<a id="overview"></a>

## Overview

```swift
struct MySample: SampleProtocol {
    var input: String
    var expected: String?
}
```

Conform to this protocol to define input samples for your evaluation datasets. Each sample has an input that’s displayed in the DataFrame “Input” column, and an optional expected value for comparison.

For language model evaluations, use [ModelSampleProtocol](modelsampleprotocol.md) which extends this protocol with language-model-specific properties: prompt, instructions, and expectations.

```swift
let samples = [
    ModelSample(prompt: "Classify: I love this!", expected: "positive"),
]
```

## Topics

### Associated Types

- [ExpectedValue](sampleprotocol/expectedvalue.md): The type of the expected output value.
- [Input](sampleprotocol/input-swift.associatedtype.md): The type of the input data.

### Instance Properties

- [expected](sampleprotocol/expected.md): The expected output for comparison.
- [input](sampleprotocol/input-swift.property.md): The input data for this sample, shown in the “Input” DataFrame column.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [ModelSampleProtocol](modelsampleprotocol.md)

### Conforming Types

- [ModelSample](modelsample.md)

## See Also

### Protocols

- [ModelSampleProtocol](modelsampleprotocol.md): A type that defines language model evaluation samples with prompt, instructions, and expectations.
