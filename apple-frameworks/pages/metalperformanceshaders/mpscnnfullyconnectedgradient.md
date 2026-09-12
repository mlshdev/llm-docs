> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnfullyconnectedgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnfullyconnectedgradient)

# MPSCNNFullyConnectedGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient fully connected convolution layer.

## Declaration

```swift
class MPSCNNFullyConnectedGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnfullyconnectedgradient/init%28coder_device_%29.md)
- [init(device:weights:)](mpscnnfullyconnectedgradient/init%28device_weights_%29.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md)

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

## See Also

### Fully Connected Layers

- [MPSCNNBinaryFullyConnected](mpscnnbinaryfullyconnected.md): A fully connected convolution layer with binary weights and optionally binarized input image.
- [MPSCNNFullyConnected](mpscnnfullyconnected.md): A fully connected convolution layer, also known as an inner product layer.

# MPSCNNFullyConnectedGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient fully connected convolution layer.

## Declaration

```objectivec
@interface MPSCNNFullyConnectedGradient : MPSCNNConvolutionGradient
```

## Topics

### Instance Methods

- [initWithCoder:device:](mpscnnfullyconnectedgradient/init%28coder_device_%29.md)
- [initWithDevice:weights:](mpscnnfullyconnectedgradient/init%28device_weights_%29.md)

## Relationships

### Inherits From

- [MPSCNNConvolutionGradient](mpscnnconvolutiongradient.md)

## See Also

### Fully Connected Layers

- [MPSCNNBinaryFullyConnected](mpscnnbinaryfullyconnected.md): A fully connected convolution layer with binary weights and optionally binarized input image.
- [MPSCNNFullyConnected](mpscnnfullyconnected.md): A fully connected convolution layer, also known as an inner product layer.
