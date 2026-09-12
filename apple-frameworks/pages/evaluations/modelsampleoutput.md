> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/modelsampleoutput](https://developer.apple.com/documentation/evaluations/modelsampleoutput)

# ModelSampleOutput

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The expected output value and evaluation expectations for a sample.

## Declaration

```swift
struct ModelSampleOutput<Value, Expectation> where Value : Decodable, Value : Encodable, Value : Sendable, Expectation : Decodable, Expectation : Encodable, Expectation : Sendable
```

## Topics

### Initializers

- [init(value:expectations:)](modelsampleoutput/init%28value_expectations_%29.md): Creates a model sample output with an optional expected value and expectations.

### Instance Properties

- [expectations](modelsampleoutput/expectations.md): The expected behavior, for example, tool-call trajectory.
- [value](modelsampleoutput/value.md): The expected output value for comparison.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bundled input and output

- [ModelSampleInput](modelsampleinput.md): The data a language model receives for evaluation.
