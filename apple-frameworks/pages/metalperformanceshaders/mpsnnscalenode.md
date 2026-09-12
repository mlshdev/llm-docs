> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnscalenode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnscalenode)

# MPSNNScaleNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Abstract node representing an image resampling filter.

## Declaration

```swift
class MPSNNScaleNode
```

## Topics

### Initializers

- [init(source:outputSize:)](mpsnnscalenode/init%28source_outputsize_%29.md)
- [init(source:transformProvider:outputSize:)](mpsnnscalenode/init%28source_transformprovider_outputsize_%29.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSNNBilinearScaleNode](mpsnnbilinearscalenode.md)
- [MPSNNLanczosScaleNode](mpsnnlanczosscalenode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resampling Nodes

- [MPSNNBilinearScaleNode](mpsnnbilinearscalenode.md): A representation of a bilinear resampling filter.
- [MPSNNLanczosScaleNode](mpsnnlanczosscalenode.md): A representation of a Lanczos resampling filter.
- [MPSImageTransformProvider](mpsimagetransformprovider.md): A general interface for objects that provide image resampling.

# MPSNNScaleNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Abstract node representing an image resampling filter.

## Declaration

```objectivec
@interface MPSNNScaleNode : MPSNNFilterNode
```

## Topics

### Instance Methods

- [initWithSource:outputSize:](mpsnnscalenode/init%28source_outputsize_%29.md)
- [initWithSource:transformProvider:outputSize:](mpsnnscalenode/init%28source_transformprovider_outputsize_%29.md)

### Type Methods

- [nodeWithSource:outputSize:](mpsnnscalenode/nodewithsource_outputsize_.md)
- [nodeWithSource:transformProvider:outputSize:](mpsnnscalenode/nodewithsource_transformprovider_outputsize_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSNNBilinearScaleNode](mpsnnbilinearscalenode.md)
- [MPSNNLanczosScaleNode](mpsnnlanczosscalenode.md)

## See Also

### Resampling Nodes

- [MPSNNBilinearScaleNode](mpsnnbilinearscalenode.md): A representation of a bilinear resampling filter.
- [MPSNNLanczosScaleNode](mpsnnlanczosscalenode.md): A representation of a Lanczos resampling filter.
- [MPSImageTransformProvider](mpsimagetransformprovider.md): A general interface for objects that provide image resampling.
