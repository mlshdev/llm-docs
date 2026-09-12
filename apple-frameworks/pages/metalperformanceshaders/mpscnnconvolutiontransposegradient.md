> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontransposegradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontransposegradient)

# MPSCNNConvolutionTransposeGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSCNNConvolutionTransposeGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnconvolutiontransposegradient/init%28coder_device_%29.md)
- [init(device:weights:)](mpscnnconvolutiontransposegradient/init%28device_weights_%29.md)

### Instance Properties

- [dataSource](mpscnnconvolutiontransposegradient/datasource.md)
- [gradientOption](mpscnnconvolutiontransposegradient/gradientoption.md)
- [groups](mpscnnconvolutiontransposegradient/groups.md)
- [sourceGradientFeatureChannels](mpscnnconvolutiontransposegradient/sourcegradientfeaturechannels.md)
- [sourceImageFeatureChannels](mpscnnconvolutiontransposegradient/sourceimagefeaturechannels.md)

### Instance Methods

- [reloadWeightsAndBiases(with:state:)](mpscnnconvolutiontransposegradient/reloadweightsandbiases%28with_state_%29.md)
- [reloadWeightsAndBiasesFromDataSource()](mpscnnconvolutiontransposegradient/reloadweightsandbiasesfromdatasource%28%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPSCNNConvolutionTransposeGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSCNNConvolutionTransposeGradient : MPSCNNGradientKernel
```

## Topics

### Instance Properties

- [dataSource](mpscnnconvolutiontransposegradient/datasource.md)
- [gradientOption](mpscnnconvolutiontransposegradient/gradientoption.md)
- [groups](mpscnnconvolutiontransposegradient/groups.md)
- [sourceGradientFeatureChannels](mpscnnconvolutiontransposegradient/sourcegradientfeaturechannels.md)
- [sourceImageFeatureChannels](mpscnnconvolutiontransposegradient/sourceimagefeaturechannels.md)

### Instance Methods

- [initWithCoder:device:](mpscnnconvolutiontransposegradient/init%28coder_device_%29.md)
- [initWithDevice:weights:](mpscnnconvolutiontransposegradient/init%28device_weights_%29.md)
- [reloadWeightsAndBiasesWithCommandBuffer:state:](mpscnnconvolutiontransposegradient/reloadweightsandbiases%28with_state_%29.md)
- [reloadWeightsAndBiasesFromDataSource](mpscnnconvolutiontransposegradient/reloadweightsandbiasesfromdatasource%28%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)
