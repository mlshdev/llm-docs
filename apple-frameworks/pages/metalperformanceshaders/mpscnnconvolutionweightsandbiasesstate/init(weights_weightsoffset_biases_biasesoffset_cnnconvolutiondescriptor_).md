> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutionweightsandbiasesstate/init(weights:weightsoffset:biases:biasesoffset:cnnconvolutiondescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutionweightsandbiasesstate/init(weights:weightsoffset:biases:biasesoffset:cnnconvolutiondescriptor:))

# init(weights:weightsOffset:biases:biasesOffset:cnnConvolutionDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
init(weights: any MTLBuffer, weightsOffset: Int, biases: (any MTLBuffer)?, biasesOffset: Int, cnnConvolutionDescriptor descriptor: MPSCNNConvolutionDescriptor)
```

# initWithWeights:weightsOffset:biases:biasesOffset:cnnConvolutionDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithWeights:(id<MTLBuffer>) weights weightsOffset:(NSUInteger) weightsOffset biases:(id<MTLBuffer>) biases biasesOffset:(NSUInteger) biasesOffset cnnConvolutionDescriptor:(MPSCNNConvolutionDescriptor *) descriptor;
```
