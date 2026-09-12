> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnngradientstatenode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnngradientstatenode)

# MPSNNGradientStateNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of the state created to record the properties of a gradient kernel at the time it was encoded.

## Declaration

```swift
class MPSNNGradientStateNode
```

## Relationships

### Inherits From

- [MPSNNStateNode](mpsnnstatenode.md)

### Inherited By

- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Instance Properties

- [label](mpsnnfilternode/label.md)
- [paddingPolicy](mpsnnfilternode/paddingpolicy.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [resultImage](mpsnnfilternode/resultimage.md)
- [resultState](mpsnnfilternode/resultstate.md)
- [resultStates](mpsnnfilternode/resultstates.md)
- [MPSNNStateNode](mpsnnstatenode.md): A placeholder node denoting the position in the graph of a state object.
- [MPSNNBinaryGradientStateNode](mpsnnbinarygradientstatenode.md): A representation of the state created to record the properties of a binary gradient kernel.

# MPSNNGradientStateNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of the state created to record the properties of a gradient kernel at the time it was encoded.

## Declaration

```objectivec
@interface MPSNNGradientStateNode : MPSNNStateNode
```

## Relationships

### Inherits From

- [MPSNNStateNode](mpsnnstatenode.md)

### Inherited By

- [MPSCNNConvolutionGradientStateNode](mpscnnconvolutiongradientstatenode.md)

## See Also

### Instance Properties

- [label](mpsnnfilternode/label.md)
- [paddingPolicy](mpsnnfilternode/paddingpolicy.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [resultImage](mpsnnfilternode/resultimage.md)
- [resultState](mpsnnfilternode/resultstate.md)
- [resultStates](mpsnnfilternode/resultstates.md)
- [MPSNNStateNode](mpsnnstatenode.md): A placeholder node denoting the position in the graph of a state object.
- [MPSNNBinaryGradientStateNode](mpsnnbinarygradientstatenode.md): A representation of the state created to record the properties of a binary gradient kernel.
