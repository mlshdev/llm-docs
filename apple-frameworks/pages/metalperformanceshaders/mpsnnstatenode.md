> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnstatenode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnstatenode)

# MPSNNStateNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A placeholder node denoting the position in the graph of a state object.

## Declaration

```swift
class MPSNNStateNode
```

## Topics

### Instance Properties

- [handle](mpsnnstatenode/handle.md)
- [exportFromGraph](mpsnnstatenode/exportfromgraph.md)
- [synchronizeResource](mpsnnstatenode/synchronizeresource.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSNNBinaryGradientStateNode](mpsnnbinarygradientstatenode.md)
- [MPSNNGradientStateNode](mpsnngradientstatenode.md)
- [MPSNNLabelsNode](mpsnnlabelsnode.md)
- [MPSNNMultiaryGradientStateNode](mpsnnmultiarygradientstatenode.md)

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
- [MPSNNBinaryGradientStateNode](mpsnnbinarygradientstatenode.md): A representation of the state created to record the properties of a binary gradient kernel.
- [MPSNNGradientStateNode](mpsnngradientstatenode.md): A representation of the state created to record the properties of a gradient kernel at the time it was encoded.

# MPSNNStateNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A placeholder node denoting the position in the graph of a state object.

## Declaration

```objectivec
@interface MPSNNStateNode : NSObject
```

## Topics

### Instance Properties

- [handle](mpsnnstatenode/handle.md)
- [exportFromGraph](mpsnnstatenode/exportfromgraph.md)
- [synchronizeResource](mpsnnstatenode/synchronizeresource.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSNNBinaryGradientStateNode](mpsnnbinarygradientstatenode.md)
- [MPSNNGradientStateNode](mpsnngradientstatenode.md)
- [MPSNNLabelsNode](mpsnnlabelsnode.md)
- [MPSNNMultiaryGradientStateNode](mpsnnmultiarygradientstatenode.md)

## See Also

### Instance Properties

- [label](mpsnnfilternode/label.md)
- [paddingPolicy](mpsnnfilternode/paddingpolicy.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [resultImage](mpsnnfilternode/resultimage.md)
- [resultState](mpsnnfilternode/resultstate.md)
- [resultStates](mpsnnfilternode/resultstates.md)
- [MPSNNBinaryGradientStateNode](mpsnnbinarygradientstatenode.md): A representation of the state created to record the properties of a binary gradient kernel.
- [MPSNNGradientStateNode](mpsnngradientstatenode.md): A representation of the state created to record the properties of a gradient kernel at the time it was encoded.
