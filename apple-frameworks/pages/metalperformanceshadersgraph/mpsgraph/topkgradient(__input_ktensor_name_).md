> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/topkgradient(_:input:ktensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/topkgradient(_:input:ktensor:name:))

# topKGradient(\_:input:kTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a TopKGradient operation and returns the result tensor.

## Declaration

```swift
func topKGradient(_ gradient: MPSGraphTensor, input source: MPSGraphTensor, kTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: Tensor containing the incoming gradient.
- `source`: Tensor containing source data.
- `kTensor`: Tensor of the number of largest values to return.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Finds the K largest values along the minor dimension of the input. The input must have at least K elements along its minor dimension.

# topKWithGradientTensor:source:kTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a TopKGradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) topKWithGradientTensor:(MPSGraphTensor *) gradient source:(MPSGraphTensor *) source kTensor:(MPSGraphTensor *) kTensor name:(NSString *) name;
```

## Parameters

- `gradient`: Tensor containing the incoming gradient.
- `source`: Tensor containing source data.
- `kTensor`: Tensor of the number of largest values to return.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Finds the K largest values along the minor dimension of the input. The input must have at least K elements along its minor dimension.
