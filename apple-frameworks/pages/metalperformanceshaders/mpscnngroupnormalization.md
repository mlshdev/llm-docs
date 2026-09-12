> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnngroupnormalization](https://developer.apple.com/documentation/metalperformanceshaders/mpscnngroupnormalization)

# MPSCNNGroupNormalization (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSCNNGroupNormalization
```

## Topics

### Initializers

- [init(coder:device:)](mpscnngroupnormalization/init%28coder_device_%29.md)
- [init(device:dataSource:)](mpscnngroupnormalization/init%28device_datasource_%29.md)

### Instance Properties

- [dataSource](mpscnngroupnormalization/datasource.md)
- [epsilon](mpscnngroupnormalization/epsilon.md)

### Instance Methods

- [reloadGammaAndBeta(with:gammaAndBetaState:)](mpscnngroupnormalization/reloadgammaandbeta%28with_gammaandbetastate_%29.md)
- [reloadGammaAndBetaFromDataSource()](mpscnngroupnormalization/reloadgammaandbetafromdatasource%28%29.md)
- [resultState(sourceImage:sourceStates:destinationImage:)](mpscnngroupnormalization/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnngroupnormalization/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

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

# MPSCNNGroupNormalization (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSCNNGroupNormalization : MPSCNNKernel
```

## Topics

### Instance Properties

- [dataSource](mpscnngroupnormalization/datasource.md)
- [epsilon](mpscnngroupnormalization/epsilon.md)

### Instance Methods

- [initWithCoder:device:](mpscnngroupnormalization/init%28coder_device_%29.md)
- [initWithDevice:dataSource:](mpscnngroupnormalization/init%28device_datasource_%29.md)
- [reloadGammaAndBetaWithCommandBuffer:gammaAndBetaState:](mpscnngroupnormalization/reloadgammaandbeta%28with_gammaandbetastate_%29.md)
- [reloadGammaAndBetaFromDataSource](mpscnngroupnormalization/reloadgammaandbetafromdatasource%28%29.md)
- [resultStateForSourceImage:sourceStates:destinationImage:](mpscnngroupnormalization/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnngroupnormalization/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)
