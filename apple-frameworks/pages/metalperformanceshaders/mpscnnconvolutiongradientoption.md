> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiongradientoption](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiongradientoption)

# MPSCNNConvolutionGradientOption (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that control which gradient to compute during backward propagation.

## Declaration

```swift
struct MPSCNNConvolutionGradientOption
```

## Topics

### Initializers

- [init(rawValue:)](mpscnnconvolutiongradientoption/init%28rawvalue_%29.md)

### Type Properties

- [all](mpscnnconvolutiongradientoption/all.md)
- [gradientWithData](mpscnnconvolutiongradientoption/gradientwithdata.md)
- [gradientWithWeightsAndBias](mpscnnconvolutiongradientoption/gradientwithweightsandbias.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# MPSCNNConvolutionGradientOption (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that control which gradient to compute during backward propagation.

## Declaration

```objectivec
enum MPSCNNConvolutionGradientOption : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSCNNConvolutionGradientOptionAll](mpscnnconvolutiongradientoption/all.md)
- [MPSCNNConvolutionGradientOptionGradientWithData](mpscnnconvolutiongradientoption/gradientwithdata.md)
- [MPSCNNConvolutionGradientOptionGradientWithWeightsAndBias](mpscnnconvolutiongradientoption/gradientwithweightsandbias.md)
