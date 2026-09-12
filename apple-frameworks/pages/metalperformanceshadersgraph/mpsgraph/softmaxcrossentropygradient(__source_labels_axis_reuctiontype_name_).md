> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/softmaxcrossentropygradient(_:source:labels:axis:reuctiontype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/softmaxcrossentropygradient(_:source:labels:axis:reuctiontype:name:))

# softMaxCrossEntropyGradient(\_:source:labels:axis:reuctionType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates the gradient of a softmax cross-entropy loss operation and returns the result tensor.

## Declaration

```swift
func softMaxCrossEntropyGradient(_ gradientTensor: MPSGraphTensor, source sourceTensor: MPSGraphTensor, labels labelsTensor: MPSGraphTensor, axis: Int, reuctionType reductionType: MPSGraphLossReductionType, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradientTensor`: The input gradientTensor. Note: in most cases this is the initial gradient tensor, which is a constant tensor with value one.
- `sourceTensor`: The source tensor.
- `labelsTensor`: The labels tensor.
- `axis`: The axis over which the operation computes the softmax reduction.
- `reductionType`: The type of reduction MPSGraph uses to reduce across all other axes than `axis`. See: [MPSGraphLossReductionType](../mpsgraphlossreductiontype.md).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# softMaxCrossEntropyGradientWithIncomingGradientTensor:sourceTensor:labelsTensor:axis:reductionType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates the gradient of a softmax cross-entropy loss operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) softMaxCrossEntropyGradientWithIncomingGradientTensor:(MPSGraphTensor *) gradientTensor sourceTensor:(MPSGraphTensor *) sourceTensor labelsTensor:(MPSGraphTensor *) labelsTensor axis:(NSInteger) axis reductionType:(MPSGraphLossReductionType) reductionType name:(NSString *) name;
```

## Parameters

- `gradientTensor`: The input gradientTensor. Note: in most cases this is the initial gradient tensor, which is a constant tensor with value one.
- `sourceTensor`: The source tensor.
- `labelsTensor`: The labels tensor.
- `axis`: The axis over which the operation computes the softmax reduction.
- `reductionType`: The type of reduction MPSGraph uses to reduce across all other axes than `axis`. See: [MPSGraphLossReductionType](../mpsgraphlossreductiontype.md).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
