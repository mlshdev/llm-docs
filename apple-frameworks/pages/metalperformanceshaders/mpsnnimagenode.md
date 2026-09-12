> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnimagenode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnimagenode)

# MPSNNImageNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A placeholder node denoting the position of a neural network image in a graph.

## Declaration

```swift
class MPSNNImageNode
```

## Topics

### Initializers

- [init(handle:)](mpsnnimagenode/init%28handle_%29.md)

### Instance Properties

- [exportFromGraph](mpsnnimagenode/exportfromgraph.md)
- [format](mpsnnimagenode/format.md)
- [MPSImageFeatureChannelFormat](mpsimagefeaturechannelformat.md): Encodes the representation of a single channel within an image.
- [handle](mpsnnimagenode/handle.md)
- [imageAllocator](mpsnnimagenode/imageallocator.md)
- [stopGradient](mpsnnimagenode/stopgradient.md)
- [synchronizeResource](mpsnnimagenode/synchronizeresource.md)

### Type Methods

- [exportedNode(with:)](mpsnnimagenode/exportednode%28with_%29.md)

### Supporting Types

- [MPSHandle](mpshandle.md): The protocol that provides resource identification.
- [MPSImageFeatureChannelFormat](mpsimagefeaturechannelformat.md): Encodes the representation of a single channel within an image.
- [MPSImageAllocator](mpsimageallocator.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Neural Network Graphs

- [MPSNNGraph](mpsnngraph.md): An optimized representation of a graph of neural network image and filter nodes.
- [MPSHandle](mpshandle.md): The protocol that provides resource identification.

# MPSNNImageNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A placeholder node denoting the position of a neural network image in a graph.

## Declaration

```objectivec
@interface MPSNNImageNode : NSObject
```

## Topics

### Initializers

- [initWithHandle:](mpsnnimagenode/init%28handle_%29.md)

### Instance Properties

- [exportFromGraph](mpsnnimagenode/exportfromgraph.md)
- [format](mpsnnimagenode/format.md)
- [MPSImageFeatureChannelFormat](mpsimagefeaturechannelformat.md): Encodes the representation of a single channel within an image.
- [handle](mpsnnimagenode/handle.md)
- [imageAllocator](mpsnnimagenode/imageallocator.md)
- [stopGradient](mpsnnimagenode/stopgradient.md)
- [synchronizeResource](mpsnnimagenode/synchronizeresource.md)

### Type Methods

- [exportedNodeWithHandle:](mpsnnimagenode/exportednode%28with_%29.md)
- [nodeWithHandle:](mpsnnimagenode/nodewithhandle_.md)

### Supporting Types

- [MPSHandle](mpshandle.md): The protocol that provides resource identification.
- [MPSImageFeatureChannelFormat](mpsimagefeaturechannelformat.md): Encodes the representation of a single channel within an image.
- [MPSImageAllocator](mpsimageallocator.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Neural Network Graphs

- [MPSNNGraph](mpsnngraph.md): An optimized representation of a graph of neural network image and filter nodes.
- [MPSHandle](mpshandle.md): The protocol that provides resource identification.
