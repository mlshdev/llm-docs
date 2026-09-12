> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/bottomkgradient(_:source:axistensor:ktensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/bottomkgradient(_:source:axistensor:ktensor:name:))

# bottomKGradient(\_:source:axisTensor:kTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a BottomKGradient operation and returns the result tensor.

## Declaration

```swift
func bottomKGradient(_ gradient: MPSGraphTensor, source: MPSGraphTensor, axisTensor: MPSGraphTensor, kTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: Tensor containing the incoming gradient.
- `source`: Tensor containing source data.
- `axisTensor`: Tensor containing the dimension along which to compute the BottomK values.
- `kTensor`: Tensor of the number of largest values to return.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Finds the K smallest values along the minor dimension of the input. The input must have at least K elements along its minor dimension.

# bottomKWithGradientTensor:source:axisTensor:kTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a BottomKGradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) bottomKWithGradientTensor:(MPSGraphTensor *) gradient source:(MPSGraphTensor *) source axisTensor:(MPSGraphTensor *) axisTensor kTensor:(MPSGraphTensor *) kTensor name:(NSString *) name;
```

## Parameters

- `gradient`: Tensor containing the incoming gradient.
- `source`: Tensor containing source data.
- `axisTensor`: Tensor containing the dimension along which to compute the BottomK values.
- `kTensor`: Tensor of the number of largest values to return.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Finds the K smallest values along the minor dimension of the input. The input must have at least K elements along its minor dimension.
