> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/bottomk(_:axistensor:ktensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/bottomk(_:axistensor:ktensor:name:))

# bottomK(\_:axisTensor:kTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a BottomK operation and returns the result tensor.

## Declaration

```swift
func bottomK(_ source: MPSGraphTensor, axisTensor: MPSGraphTensor, kTensor: MPSGraphTensor, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `source`: Tensor containing source data.
- `axisTensor`: Tensor containing the dimension along which to compute the BottomK values.
- `kTensor`: Tensor of the number of largest values to return.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of size 2.

<a id="discussion"></a>

## Discussion

Finds the k smallest values along the minor dimension of the input. The source must have at least k elements along its minor dimension. The first element of the result array corresponds to the bottom values, and the second array corresponds to the indices of the bottom values.

# bottomKWithSourceTensor:axisTensor:kTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a BottomK operation and returns the result tensor.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) bottomKWithSourceTensor:(MPSGraphTensor *) source axisTensor:(MPSGraphTensor *) axisTensor kTensor:(MPSGraphTensor *) kTensor name:(NSString *) name;
```

## Parameters

- `source`: Tensor containing source data.
- `axisTensor`: Tensor containing the dimension along which to compute the BottomK values.
- `kTensor`: Tensor of the number of largest values to return.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of size 2.

<a id="discussion"></a>

## Discussion

Finds the k smallest values along the minor dimension of the input. The source must have at least k elements along its minor dimension. The first element of the result array corresponds to the bottom values, and the second array corresponds to the indices of the bottom values.
