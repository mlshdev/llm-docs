> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnreshape](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnreshape)

# MPSNNReshape (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for reshape operations.

## Declaration

```swift
class MPSNNReshape
```

## Topics

### Initializers

- [init(coder:device:)](mpsnnreshape/init%28coder_device_%29.md)
- [init(device:)](mpsnnreshape/init%28device_%29.md)

### Instance Methods

- [encode(commandBuffer:sourceImage:destinationState:destinationStateIsTemporary:reshapedWidth:reshapedHeight:reshapedFeatureChannels:)](mpsnnreshape/encode%28commandbuffer_sourceimage_destinationstate_destinationstateistemporary_reshapedwidth_reshapedheight_reshapedfeaturechannels_%29.md)
- [encode(commandBuffer:sourceImage:reshapedWidth:reshapedHeight:reshapedFeatureChannels:)](mpsnnreshape/encode%28commandbuffer_sourceimage_reshapedwidth_reshapedheight_reshapedfeaturechannels_%29.md)
- [encodeBatch(commandBuffer:sourceImages:destinationStates:destinationStateIsTemporary:reshapedWidth:reshapedHeight:reshapedFeatureChannels:)](mpsnnreshape/encodebatch%28commandbuffer_sourceimages_destinationstates_destinationstateistemporary_reshapedwidth_reshapedheight_reshapedfeaturechannels_%29.md)
- [encodeBatch(commandBuffer:sourceImages:reshapedWidth:reshapedHeight:reshapedFeatureChannels:)](mpsnnreshape/encodebatch%28commandbuffer_sourceimages_reshapedwidth_reshapedheight_reshapedfeaturechannels_%29.md)

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

# MPSNNReshape (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for reshape operations.

## Declaration

```objectivec
@interface MPSNNReshape : MPSCNNKernel
```

## Topics

### Instance Methods

- [encodeToCommandBuffer:sourceImage:destinationState:destinationStateIsTemporary:reshapedWidth:reshapedHeight:reshapedFeatureChannels:](mpsnnreshape/encode%28commandbuffer_sourceimage_destinationstate_destinationstateistemporary_reshapedwidth_reshapedheight_reshapedfeaturechannels_%29.md)
- [encodeToCommandBuffer:sourceImage:reshapedWidth:reshapedHeight:reshapedFeatureChannels:](mpsnnreshape/encode%28commandbuffer_sourceimage_reshapedwidth_reshapedheight_reshapedfeaturechannels_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:destinationStates:destinationStateIsTemporary:reshapedWidth:reshapedHeight:reshapedFeatureChannels:](mpsnnreshape/encodebatch%28commandbuffer_sourceimages_destinationstates_destinationstateistemporary_reshapedwidth_reshapedheight_reshapedfeaturechannels_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:reshapedWidth:reshapedHeight:reshapedFeatureChannels:](mpsnnreshape/encodebatch%28commandbuffer_sourceimages_reshapedwidth_reshapedheight_reshapedfeaturechannels_%29.md)
- [initWithCoder:device:](mpsnnreshape/init%28coder_device_%29.md)
- [initWithDevice:](mpsnnreshape/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)
