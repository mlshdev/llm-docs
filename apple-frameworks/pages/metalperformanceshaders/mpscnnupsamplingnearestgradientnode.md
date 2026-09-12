> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnupsamplingnearestgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnupsamplingnearestgradientnode)

# MPSCNNUpsamplingNearestGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient nearest spatial upsampling filter.

## Declaration

```swift
class MPSCNNUpsamplingNearestGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:scaleFactorX:scaleFactorY:)](mpscnnupsamplingnearestgradientnode/init%28sourcegradient_sourceimage_gradientstate_scalefactorx_scalefactory_%29.md)

### Instance Properties

- [scaleFactorX](mpscnnupsamplingnearestgradientnode/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplingnearestgradientnode/scalefactory.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

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
- [MPSCNNUpsamplingNearestNode](mpscnnupsamplingnearestnode.md): A representation of a nearest spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradientNode](mpscnnupsamplingbilineargradientnode.md): A representation of a gradient bilinear spatial upsampling filter.

# MPSCNNUpsamplingNearestGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient nearest spatial upsampling filter.

## Declaration

```objectivec
@interface MPSCNNUpsamplingNearestGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [scaleFactorX](mpscnnupsamplingnearestgradientnode/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplingnearestgradientnode/scalefactory.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:scaleFactorX:scaleFactorY:](mpscnnupsamplingnearestgradientnode/init%28sourcegradient_sourceimage_gradientstate_scalefactorx_scalefactory_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:scaleFactorX:scaleFactorY:](mpscnnupsamplingnearestgradientnode/nodewithsourcegradient_sourceimage_gradientstate_scalefactorx_scalefactory_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

## See Also

### Upsampling Layer Nodes

- [MPSCNNUpsamplingBilinearNode](mpscnnupsamplingbilinearnode.md): A representation of a bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestNode](mpscnnupsamplingnearestnode.md): A representation of a nearest spatial upsampling filter.
- [MPSCNNUpsamplingBilinearGradientNode](mpscnnupsamplingbilineargradientnode.md): A representation of a gradient bilinear spatial upsampling filter.
