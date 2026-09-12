> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnsinglegatedescriptor/recurrentweights](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnsinglegatedescriptor/recurrentweights)

# recurrentWeights (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
var recurrentWeights: (any MPSCNNConvolutionDataSource)? { get set }
```

## See Also

### Instance Properties

- [inputWeights](inputweights.md)
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

# recurrentWeights (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, retain, readwrite, nullable) id<MPSCNNConvolutionDataSource> recurrentWeights;
```

## See Also

### Instance Properties

- [inputWeights](inputweights.md)
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
