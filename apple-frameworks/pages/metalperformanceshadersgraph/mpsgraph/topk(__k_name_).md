> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/topk(_:k:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/topk(_:k:name:))

# topK(\_:k:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a TopK operation and returns the value and indices tensors

## Declaration

```swift
func topK(_ source: MPSGraphTensor, k: Int, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `source`: Tensor containing source data
- `k`: The number of largest values to return
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of size 2

<a id="discussion"></a>

## Discussion

Finds the k largest values along the minor dimension of the input. The source must have at least k elements along its minor dimension. The first element of the result array corresponds to the top values, and the second element of the result array corresponds to the indices of the top values.

# topKWithSourceTensor:k:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a TopK operation and returns the value and indices tensors

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) topKWithSourceTensor:(MPSGraphTensor *) source k:(NSUInteger) k name:(NSString *) name;
```

## Parameters

- `source`: Tensor containing source data
- `k`: The number of largest values to return
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of size 2

<a id="discussion"></a>

## Discussion

Finds the k largest values along the minor dimension of the input. The source must have at least k elements along its minor dimension. The first element of the result array corresponds to the top values, and the second element of the result array corresponds to the indices of the top values.
