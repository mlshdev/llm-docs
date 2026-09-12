> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnupsamplingbilineargradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnupsamplingbilineargradientnode)

# MPSCNNUpsamplingBilinearGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient bilinear spatial upsampling filter.

## Declaration

```swift
class MPSCNNUpsamplingBilinearGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:scaleFactorX:scaleFactorY:)](mpscnnupsamplingbilineargradientnode/init%28sourcegradient_sourceimage_gradientstate_scalefactorx_scalefactory_%29.md)

### Instance Properties

- [scaleFactorX](mpscnnupsamplingbilineargradientnode/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplingbilineargradientnode/scalefactory.md)

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
- [MPSCNNUpsamplingNearestGradientNode](mpscnnupsamplingnearestgradientnode.md): A representation of a gradient nearest spatial upsampling filter.

# MPSCNNUpsamplingBilinearGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient bilinear spatial upsampling filter.

## Declaration

```objectivec
@interface MPSCNNUpsamplingBilinearGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [scaleFactorX](mpscnnupsamplingbilineargradientnode/scalefactorx.md)
- [scaleFactorY](mpscnnupsamplingbilineargradientnode/scalefactory.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:scaleFactorX:scaleFactorY:](mpscnnupsamplingbilineargradientnode/init%28sourcegradient_sourceimage_gradientstate_scalefactorx_scalefactory_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:scaleFactorX:scaleFactorY:](mpscnnupsamplingbilineargradientnode/nodewithsourcegradient_sourceimage_gradientstate_scalefactorx_scalefactory_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

## See Also

### Upsampling Layer Nodes

- [MPSCNNUpsamplingBilinearNode](mpscnnupsamplingbilinearnode.md): A representation of a bilinear spatial upsampling filter.
- [MPSCNNUpsamplingNearestNode](mpscnnupsamplingnearestnode.md): A representation of a nearest spatial upsampling filter.
- [MPSCNNUpsamplingNearestGradientNode](mpscnnupsamplingnearestgradientnode.md): A representation of a gradient nearest spatial upsampling filter.
