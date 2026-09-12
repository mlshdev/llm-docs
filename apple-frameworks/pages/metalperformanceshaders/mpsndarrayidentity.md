> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarrayidentity](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayidentity)

# MPSNDArrayIdentity (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
class MPSNDArrayIdentity
```

## Topics

### Initializers

- [init(device:)](mpsndarrayidentity/init%28device_%29.md)

### Instance Methods

- [reshape(with:commandBuffer:sourceArray:dimensionCount:dimensionSizes:destinationArray:)](mpsndarrayidentity/reshape%28with_commandbuffer_sourcearray_dimensioncount_dimensionsizes_destinationarray_%29.md)
- [reshape(with:commandBuffer:sourceArray:shape:destinationArray:)](mpsndarrayidentity/reshape%28with_commandbuffer_sourcearray_shape_destinationarray_%29.md)
- [reshape(with:sourceArray:dimensionCount:dimensionSizes:destinationArray:)](mpsndarrayidentity/reshape%28with_sourcearray_dimensioncount_dimensionsizes_destinationarray_%29.md)
- [reshape(with:sourceArray:shape:destinationArray:)](mpsndarrayidentity/reshape%28with_sourcearray_shape_destinationarray_%29.md)
- [reshape(withMTL4CommandEncoder:sourceArray:dimensionCount:dimensionSizes:destinationArray:)](mpsndarrayidentity/reshape%28withmtl4commandencoder_sourcearray_dimensioncount_dimensionsizes_destinationarray_%29.md)
- [reshape(withMTL4CommandEncoder:sourceArray:shape:destinationArray:)](mpsndarrayidentity/reshape%28withmtl4commandencoder_sourcearray_shape_destinationarray_%29.md)
- [reshape(withSourceArray:shape:)](mpsndarrayidentity/reshape%28withsourcearray_shape_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayUnaryKernel](mpsndarrayunarykernel.md)

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

# MPSNDArrayIdentity (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
@interface MPSNDArrayIdentity : MPSNDArrayUnaryKernel
```

## Topics

### Instance Methods

- [initWithDevice:](mpsndarrayidentity/init%28device_%29.md)
- [reshapeWithCommandEncoder:commandBuffer:sourceArray:dimensionCount:dimensionSizes:destinationArray:](mpsndarrayidentity/reshape%28with_commandbuffer_sourcearray_dimensioncount_dimensionsizes_destinationarray_%29.md)
- [reshapeWithCommandEncoder:commandBuffer:sourceArray:shape:destinationArray:](mpsndarrayidentity/reshape%28with_commandbuffer_sourcearray_shape_destinationarray_%29.md)
- [reshapeWithCommandBuffer:sourceArray:dimensionCount:dimensionSizes:destinationArray:](mpsndarrayidentity/reshape%28with_sourcearray_dimensioncount_dimensionsizes_destinationarray_%29.md)
- [reshapeWithCommandBuffer:sourceArray:shape:destinationArray:](mpsndarrayidentity/reshape%28with_sourcearray_shape_destinationarray_%29.md)
- [reshapeWithMTL4CommandEncoder:sourceArray:dimensionCount:dimensionSizes:destinationArray:](mpsndarrayidentity/reshape%28withmtl4commandencoder_sourcearray_dimensioncount_dimensionsizes_destinationarray_%29.md)
- [reshapeWithMTL4CommandEncoder:sourceArray:shape:destinationArray:](mpsndarrayidentity/reshape%28withmtl4commandencoder_sourcearray_shape_destinationarray_%29.md)
- [reshapeWithSourceArray:shape:](mpsndarrayidentity/reshape%28withsourcearray_shape_%29.md)

## Relationships

### Inherits From

- [MPSNDArrayUnaryKernel](mpsndarrayunarykernel.md)
