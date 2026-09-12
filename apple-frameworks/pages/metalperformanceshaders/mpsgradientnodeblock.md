> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsgradientnodeblock](https://developer.apple.com/documentation/metalperformanceshaders/mpsgradientnodeblock)

# MPSGradientNodeBlock (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias MPSGradientNodeBlock = (MPSNNFilterNode, MPSNNFilterNode, MPSNNImageNode, MPSNNImageNode) -> Void
```

## See Also

### Data Types

- [MPSAccelerationStructureCompletionHandler](mpsaccelerationstructurecompletionhandler.md): Deprecated. A block of code that’s invoked when an operation on an acceleration structure has completed.
- [MPSAxisAlignedBoundingBox](mpsaxisalignedboundingbox-swift.typealias.md): An axis-aligned bounding box.
- [MPSDeviceCaps](mpsdevicecaps.md)
- [MPSFunctionConstant](mpsfunctionconstant.md)
- [MPSFunctionConstantInMetal](mpsfunctionconstantinmetal.md)

# MPSGradientNodeBlock (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef void (^)(MPSNNFilterNode *, MPSNNFilterNode *, MPSNNImageNode *, MPSNNImageNode *) MPSGradientNodeBlock;
```

## See Also

### Data Types

- [MPSAccelerationStructureCompletionHandler](mpsaccelerationstructurecompletionhandler.md): Deprecated. A block of code that’s invoked when an operation on an acceleration structure has completed.
- [MPSCNNArithmeticGradientStateBatch](mpscnnarithmeticgradientstatebatch.md): A batch of arithmetic gradient state instances.
- [MPSCNNConvolutionGradientStateBatch](mpscnnconvolutiongradientstatebatch.md): A batch of convolution gradient state instances.
- [MPSCNNConvolutionTransposeGradientStateBatch](mpscnnconvolutiontransposegradientstatebatch.md)
- [MPSCNNDropoutGradientStateBatch](mpscnndropoutgradientstatebatch.md): A batch of dropout gradient state instances.
- [MPSCNNGroupNormalizationGradientStateBatch](mpscnngroupnormalizationgradientstatebatch.md)
- [MPSCNNInstanceNormalizationGradientStateBatch](mpscnninstancenormalizationgradientstatebatch.md): A batch of instance normalization gradient state instances.
- [MPSCNNLossLabelsBatch](mpscnnlosslabelsbatch.md): A batch of loss labels instances.
- [MPSDeviceCaps](mpsdevicecaps.md)
- [MPSFunctionConstant](mpsfunctionconstant.md)
- [MPSFunctionConstantInMetal](mpsfunctionconstantinmetal.md)
- [MPSImageBatch](mpsimagebatch.md): A batch of Metal Performance Shader image instances.
- [MPSNNBinaryGradientStateBatch](mpsnnbinarygradientstatebatch.md): A batch of binary gradient state instances.
- [MPSNNGradientStateBatch](mpsnngradientstatebatch.md): A batch of gradient state instances.
- [MPSNNMultiaryGradientStateBatch](mpsnnmultiarygradientstatebatch.md)
