> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnupsamplingnearestnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnupsamplingnearestnode)

# MPSCNNUpsamplingNearestNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a nearest spatial upsampling filter.

## Declaration

```swift
class MPSCNNUpsamplingNearestNode
```

## Topics

### Initializers

- [init(source:integerScaleFactorX:integerScaleFactorY:)](mpscnnupsamplingnearestnode/init%28source_integerscalefactorx_integerscalefactory_%29.md)

### Instance Properties

- [scaleFactorX](mpscnnupsamplingnearestnode/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplingnearestnode/scalefactory.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Upsampling Layer Nodes

- [MPSCNNUpsamplingBilinearNode](mpscnnupsamplingbilinearnode.md): A representation of a bilinear spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradientNode](mpscnnupsamplingbilineargradientnode.md): A representation of a gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestGradientNode](mpscnnupsamplingnearestgradientnode.md): A representation of a gradient nearest spatial upsampling filter.

# MPSCNNUpsamplingNearestNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a nearest spatial upsampling filter.

## Declaration

```objectivec
@interface MPSCNNUpsamplingNearestNode : MPSNNFilterNode
```

## Topics

### Initializers

- [initWithSource:integerScaleFactorX:integerScaleFactorY:](mpscnnupsamplingnearestnode/init%28source_integerscalefactorx_integerscalefactory_%29.md)

### Instance Properties

- [scaleFactorX](mpscnnupsamplingnearestnode/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplingnearestnode/scalefactory.md)

### Type Methods

- [nodeWithSource:integerScaleFactorX:integerScaleFactorY:](mpscnnupsamplingnearestnode/nodewithsource_integerscalefactorx_integerscalefactory_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

## See Also

### Upsampling Layer Nodes

- [MPSCNNUpsamplingBilinearNode](mpscnnupsamplingbilinearnode.md): A representation of a bilinear spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradientNode](mpscnnupsamplingbilineargradientnode.md): A representation of a gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestGradientNode](mpscnnupsamplingnearestgradientnode.md): A representation of a gradient nearest spatial upsampling filter.
