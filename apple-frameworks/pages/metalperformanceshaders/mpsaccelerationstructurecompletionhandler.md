> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsaccelerationstructurecompletionhandler](https://developer.apple.com/documentation/metalperformanceshaders/mpsaccelerationstructurecompletionhandler)

# MPSAccelerationStructureCompletionHandler (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

A block of code that’s invoked when an operation on an acceleration structure has completed.

## Declaration

```swift
typealias MPSAccelerationStructureCompletionHandler = (MPSAccelerationStructure?) -> Void
```

## See Also

### Data Types

- [MPSAxisAlignedBoundingBox](mpsaxisalignedboundingbox-swift.typealias.md): An axis-aligned bounding box.
- [MPSDeviceCaps](mpsdevicecaps.md)
- [MPSFunctionConstant](mpsfunctionconstant.md)
- [MPSFunctionConstantInMetal](mpsfunctionconstantinmetal.md)
- [MPSGradientNodeBlock](mpsgradientnodeblock.md)

# MPSAccelerationStructureCompletionHandler (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

A block of code that’s invoked when an operation on an acceleration structure has completed.

## Declaration

```objectivec
typedef void (^)(MPSAccelerationStructure *) MPSAccelerationStructureCompletionHandler;
```

## See Also

### Data Types

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
- [MPSGradientNodeBlock](mpsgradientnodeblock.md)
- [MPSImageBatch](mpsimagebatch.md): A batch of Metal Performance Shader image instances.
- [MPSNNBinaryGradientStateBatch](mpsnnbinarygradientstatebatch.md): A batch of binary gradient state instances.
- [MPSNNGradientStateBatch](mpsnngradientstatebatch.md): A batch of gradient state instances.
- [MPSNNMultiaryGradientStateBatch](mpsnnmultiarygradientstatebatch.md)
