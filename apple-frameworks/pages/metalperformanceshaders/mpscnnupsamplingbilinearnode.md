> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnupsamplingbilinearnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnupsamplingbilinearnode)

# MPSCNNUpsamplingBilinearNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a bilinear spatial upsampling filter.

## Declaration

```swift
class MPSCNNUpsamplingBilinearNode
```

## Topics

### Initializers

- [init(source:integerScaleFactorX:integerScaleFactorY:)](mpscnnupsamplingbilinearnode/init%28source_integerscalefactorx_integerscalefactory_%29.md)
- [init(source:integerScaleFactorX:integerScaleFactorY:alignCorners:)](mpscnnupsamplingbilinearnode/init%28source_integerscalefactorx_integerscalefactory_aligncorners_%29.md)

### Instance Properties

- [scaleFactorX](mpscnnupsamplingbilinearnode/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplingbilinearnode/scalefactory.md)
- [alignCorners](mpscnnupsamplingbilinearnode/aligncorners.md)

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

- [MPSCNNUpsamplingNearestNode](mpscnnupsamplingnearestnode.md): A representation of a nearest spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradientNode](mpscnnupsamplingbilineargradientnode.md): A representation of a gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestGradientNode](mpscnnupsamplingnearestgradientnode.md): A representation of a gradient nearest spatial upsampling filter.

# MPSCNNUpsamplingBilinearNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A representation of a bilinear spatial upsampling filter.

## Declaration

```objectivec
@interface MPSCNNUpsamplingBilinearNode : MPSNNFilterNode
```

## Topics

### Initializers

- [initWithSource:integerScaleFactorX:integerScaleFactorY:](mpscnnupsamplingbilinearnode/init%28source_integerscalefactorx_integerscalefactory_%29.md)
- [initWithSource:integerScaleFactorX:integerScaleFactorY:alignCorners:](mpscnnupsamplingbilinearnode/init%28source_integerscalefactorx_integerscalefactory_aligncorners_%29.md)

### Instance Properties

- [scaleFactorX](mpscnnupsamplingbilinearnode/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplingbilinearnode/scalefactory.md)
- [alignCorners](mpscnnupsamplingbilinearnode/aligncorners.md)

### Type Methods

- [nodeWithSource:integerScaleFactorX:integerScaleFactorY:](mpscnnupsamplingbilinearnode/nodewithsource_integerscalefactorx_integerscalefactory_.md)
- [nodeWithSource:integerScaleFactorX:integerScaleFactorY:alignCorners:](mpscnnupsamplingbilinearnode/nodewithsource_integerscalefactorx_integerscalefactory_aligncorners_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

## See Also

### Upsampling Layer Nodes

- [MPSCNNUpsamplingNearestNode](mpscnnupsamplingnearestnode.md): A representation of a nearest spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradientNode](mpscnnupsamplingbilineargradientnode.md): A representation of a gradient bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestGradientNode](mpscnnupsamplingnearestgradientnode.md): A representation of a gradient nearest spatial upsampling filter.
