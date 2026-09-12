> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/topkgradient(_:source:axistensor:ktensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/topkgradient(_:source:axistensor:ktensor:name:))

# topKGradient(\_:source:axisTensor:kTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a TopKGradient operation and returns the result tensor.

## Declaration

```swift
func topKGradient(_ gradient: MPSGraphTensor, source: MPSGraphTensor, axisTensor: MPSGraphTensor, kTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: Tensor containing the incoming gradient.
- `source`: Tensor containing source data.
- `axisTensor`: Tensor containing the dimension along which to compute the TopK values.
- `kTensor`: Tensor of the number of largest values to return.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Finds the K largest values along the minor dimension of the input. The input must have at least K elements along its minor dimension.

# topKWithGradientTensor:source:axisTensor:kTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a TopKGradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) topKWithGradientTensor:(MPSGraphTensor *) gradient source:(MPSGraphTensor *) source axisTensor:(MPSGraphTensor *) axisTensor kTensor:(MPSGraphTensor *) kTensor name:(NSString *) name;
```

## Parameters

- `gradient`: Tensor containing the incoming gradient.
- `source`: Tensor containing source data.
- `axisTensor`: Tensor containing the dimension along which to compute the TopK values.
- `kTensor`: Tensor of the number of largest values to return.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Finds the K largest values along the minor dimension of the input. The input must have at least K elements along its minor dimension.
