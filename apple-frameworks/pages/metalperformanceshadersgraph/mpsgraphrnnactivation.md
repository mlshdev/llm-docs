> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrnnactivation](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrnnactivation)

# MPSGraphRNNActivation (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The activation modes for RNN operations.

## Declaration

```swift
enum MPSGraphRNNActivation
```

## Topics

### Enumeration Cases

- [MPSGraphRNNActivation.hardSigmoid](mpsgraphrnnactivation/hardsigmoid.md): Defines a Hard sigmoid activation.
- [MPSGraphRNNActivation.none](mpsgraphrnnactivation/none.md): Defines a pass through activation.
- [MPSGraphRNNActivation.relu](mpsgraphrnnactivation/relu.md): Defines a ReLU activation.
- [MPSGraphRNNActivation.sigmoid](mpsgraphrnnactivation/sigmoid.md): Defines a Sigmoid activation.
- [MPSGraphRNNActivation.tanh](mpsgraphrnnactivation/tanh.md): Defines a Tanh activation.

### Initializers

- [init(rawValue:)](mpsgraphrnnactivation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphRNNActivation (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The activation modes for RNN operations.

## Declaration

```objectivec
enum MPSGraphRNNActivation : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSGraphRNNActivationHardSigmoid](mpsgraphrnnactivation/hardsigmoid.md): Defines a Hard sigmoid activation.
- [MPSGraphRNNActivationNone](mpsgraphrnnactivation/none.md): Defines a pass through activation.
- [MPSGraphRNNActivationRelu](mpsgraphrnnactivation/relu.md): Defines a ReLU activation.
- [MPSGraphRNNActivationSigmoid](mpsgraphrnnactivation/sigmoid.md): Defines a Sigmoid activation.
- [MPSGraphRNNActivationTanh](mpsgraphrnnactivation/tanh.md): Defines a Tanh activation.
