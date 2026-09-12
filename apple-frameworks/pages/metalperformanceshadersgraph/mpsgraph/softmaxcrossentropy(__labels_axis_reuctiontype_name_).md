> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/softmaxcrossentropy(_:labels:axis:reuctiontype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/softmaxcrossentropy(_:labels:axis:reuctiontype:name:))

# softMaxCrossEntropy(\_:labels:axis:reuctionType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a softmax cross-entropy loss operation and returns the result tensor.

## Declaration

```swift
func softMaxCrossEntropy(_ sourceTensor: MPSGraphTensor, labels labelsTensor: MPSGraphTensor, axis: Int, reuctionType reductionType: MPSGraphLossReductionType, name: String?) -> MPSGraphTensor
```

## Parameters

- `sourceTensor`: The source tensor.
- `labelsTensor`: The labels tensor.
- `axis`: The axis over which the operation computes the softmax reduction.
- `reductionType`: The type of reduction MPSGraph uses to reduce across all other axes than `axis`. See: [MPSGraphLossReductionType](../mpsgraphlossreductiontype.md).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

The softmax cross-entropy operation computes:

```md
    loss = reduction( - labels*ln( softmax(source) )), where
    sotfmax(source) = exp(source) / sum( exp(source) ), and
```

the operation performs the reduction over the `axis` dimension.

# softMaxCrossEntropyWithSourceTensor:labelsTensor:axis:reductionType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a softmax cross-entropy loss operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) softMaxCrossEntropyWithSourceTensor:(MPSGraphTensor *) sourceTensor labelsTensor:(MPSGraphTensor *) labelsTensor axis:(NSInteger) axis reductionType:(MPSGraphLossReductionType) reductionType name:(NSString *) name;
```

## Parameters

- `sourceTensor`: The source tensor.
- `labelsTensor`: The labels tensor.
- `axis`: The axis over which the operation computes the softmax reduction.
- `reductionType`: The type of reduction MPSGraph uses to reduce across all other axes than `axis`. See: [MPSGraphLossReductionType](../mpsgraphlossreductiontype.md).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

The softmax cross-entropy operation computes:

```md
    loss = reduction( - labels*ln( softmax(source) )), where
    sotfmax(source) = exp(source) / sum( exp(source) ), and
```

the operation performs the reduction over the `axis` dimension.
