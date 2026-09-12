> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnfilternode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnfilternode)

# MPSNNFilterNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A placeholder node denoting a neural network filter stage.

## Declaration

```swift
class MPSNNFilterNode
```

## Topics

### Instance Properties

- [label](mpsnnfilternode/label.md)
- [paddingPolicy](mpsnnfilternode/paddingpolicy.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [resultImage](mpsnnfilternode/resultimage.md)
- [resultState](mpsnnfilternode/resultstate.md)
- [resultStates](mpsnnfilternode/resultstates.md)
- [MPSNNStateNode](mpsnnstatenode.md): A placeholder node denoting the position in the graph of a state object.
- [MPSNNBinaryGradientStateNode](mpsnnbinarygradientstatenode.md): A representation of the state created to record the properties of a binary gradient kernel.
- [MPSNNGradientStateNode](mpsnngradientstatenode.md): A representation of the state created to record the properties of a gradient kernel at the time it was encoded.

### Instance Methods

- [gradientFilter(withSource:)](mpsnnfilternode/gradientfilter%28withsource_%29.md)
- [gradientFilter(withSources:)](mpsnnfilternode/gradientfilter%28withsources_%29.md)
- [gradientFilters(withSource:)](mpsnnfilternode/gradientfilters%28withsource_%29.md)
- [gradientFilters(withSources:)](mpsnnfilternode/gradientfilters%28withsources_%29.md)
- [trainingGraph(withSourceGradient:nodeHandler:)](mpsnnfilternode/traininggraph%28withsourcegradient_nodehandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md)
- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md)
- [MPSCNNDilatedPoolingMaxNode](mpscnndilatedpoolingmaxnode.md)
- [MPSCNNDropoutNode](mpscnndropoutnode.md)
- [MPSCNNGroupNormalizationNode](mpscnngroupnormalizationnode.md)
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md)
- [MPSCNNLogSoftMaxNode](mpscnnlogsoftmaxnode.md)
- [MPSCNNLossNode](mpscnnlossnode.md)
- [MPSCNNNeuronNode](mpscnnneuronnode.md)
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md)
- [MPSCNNPoolingNode](mpscnnpoolingnode.md)
- [MPSCNNSoftMaxNode](mpscnnsoftmaxnode.md)
- [MPSCNNUpsamplingBilinearNode](mpscnnupsamplingbilinearnode.md)
- [MPSCNNUpsamplingNearestNode](mpscnnupsamplingnearestnode.md)
- [MPSCNNYOLOLossNode](mpscnnyololossnode.md)
- [MPSNNBinaryArithmeticNode](mpsnnbinaryarithmeticnode.md)
- [MPSNNConcatenationNode](mpsnnconcatenationnode.md)
- [MPSNNForwardLossNode](mpsnnforwardlossnode.md)
- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)
- [MPSNNGramMatrixCalculationNode](mpsnngrammatrixcalculationnode.md)
- [MPSNNInitialGradientNode](mpsnninitialgradientnode.md)
- [MPSNNPadNode](mpsnnpadnode.md)
- [MPSNNReshapeNode](mpsnnreshapenode.md)
- [MPSNNScaleNode](mpsnnscalenode.md)
- [MPSNNUnaryReductionNode](mpsnnunaryreductionnode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Filter Node Base Classes

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md): A representation of a gradient filter.

# MPSNNFilterNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A placeholder node denoting a neural network filter stage.

## Declaration

```objectivec
@interface MPSNNFilterNode : NSObject
```

## Topics

### Instance Properties

- [label](mpsnnfilternode/label.md)
- [paddingPolicy](mpsnnfilternode/paddingpolicy.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [resultImage](mpsnnfilternode/resultimage.md)
- [resultState](mpsnnfilternode/resultstate.md)
- [resultStates](mpsnnfilternode/resultstates.md)
- [MPSNNStateNode](mpsnnstatenode.md): A placeholder node denoting the position in the graph of a state object.
- [MPSNNBinaryGradientStateNode](mpsnnbinarygradientstatenode.md): A representation of the state created to record the properties of a binary gradient kernel.
- [MPSNNGradientStateNode](mpsnngradientstatenode.md): A representation of the state created to record the properties of a gradient kernel at the time it was encoded.

### Instance Methods

- [gradientFilterWithSource:](mpsnnfilternode/gradientfilter%28withsource_%29.md)
- [gradientFilterWithSources:](mpsnnfilternode/gradientfilter%28withsources_%29.md)
- [gradientFiltersWithSource:](mpsnnfilternode/gradientfilters%28withsource_%29.md)
- [gradientFiltersWithSources:](mpsnnfilternode/gradientfilters%28withsources_%29.md)
- [trainingGraphWithSourceGradient:nodeHandler:](mpsnnfilternode/traininggraph%28withsourcegradient_nodehandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSCNNBatchNormalizationNode](mpscnnbatchnormalizationnode.md)
- [MPSCNNConvolutionNode](mpscnnconvolutionnode.md)
- [MPSCNNDilatedPoolingMaxNode](mpscnndilatedpoolingmaxnode.md)
- [MPSCNNDropoutNode](mpscnndropoutnode.md)
- [MPSCNNGroupNormalizationNode](mpscnngroupnormalizationnode.md)
- [MPSCNNInstanceNormalizationNode](mpscnninstancenormalizationnode.md)
- [MPSCNNLogSoftMaxNode](mpscnnlogsoftmaxnode.md)
- [MPSCNNLossNode](mpscnnlossnode.md)
- [MPSCNNNeuronNode](mpscnnneuronnode.md)
- [MPSCNNNormalizationNode](mpscnnnormalizationnode.md)
- [MPSCNNPoolingNode](mpscnnpoolingnode.md)
- [MPSCNNSoftMaxNode](mpscnnsoftmaxnode.md)
- [MPSCNNUpsamplingBilinearNode](mpscnnupsamplingbilinearnode.md)
- [MPSCNNUpsamplingNearestNode](mpscnnupsamplingnearestnode.md)
- [MPSCNNYOLOLossNode](mpscnnyololossnode.md)
- [MPSNNBinaryArithmeticNode](mpsnnbinaryarithmeticnode.md)
- [MPSNNConcatenationNode](mpsnnconcatenationnode.md)
- [MPSNNForwardLossNode](mpsnnforwardlossnode.md)
- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)
- [MPSNNGramMatrixCalculationNode](mpsnngrammatrixcalculationnode.md)
- [MPSNNInitialGradientNode](mpsnninitialgradientnode.md)
- [MPSNNPadNode](mpsnnpadnode.md)
- [MPSNNReshapeNode](mpsnnreshapenode.md)
- [MPSNNScaleNode](mpsnnscalenode.md)
- [MPSNNUnaryReductionNode](mpsnnunaryreductionnode.md)

## See Also

### Filter Node Base Classes

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md): A representation of a gradient filter.
