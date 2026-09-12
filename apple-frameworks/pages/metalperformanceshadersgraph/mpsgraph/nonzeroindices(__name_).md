> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/nonzeroindices(_:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/nonzeroindices(_:name:))

# nonZeroIndices(\_:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Computes the indices of the non-zero elements of the input tensor.

## Declaration

```swift
func nonZeroIndices(_ tensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: An MPSGraphTensor of which to compute the non-zero indices.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor containing indices in signed int32 data type.

<a id="discussion"></a>

## Discussion

The indices are returned as a two-dimensional tensor of size `[number_of_nonzeros, input_rank]`. Each row in the result contains indices of a nonzero elements in input. For example:

```md
tensor = [[ 1,  0, 3],
          [ 0, 10, 0]]
indices = [[ 0, 0],
           [ 0, 2],
           [ 1, 1]]
```

# nonZeroIndicesOfTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Computes the indices of the non-zero elements of the input tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) nonZeroIndicesOfTensor:(MPSGraphTensor *) tensor name:(NSString *) name;
```

## Parameters

- `tensor`: An MPSGraphTensor of which to compute the non-zero indices.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor containing indices in signed int32 data type.

<a id="discussion"></a>

## Discussion

The indices are returned as a two-dimensional tensor of size `[number_of_nonzeros, input_rank]`. Each row in the result contains indices of a nonzero elements in input. For example:

```md
tensor = [[ 1,  0, 3],
          [ 0, 10, 0]]
indices = [[ 0, 0],
           [ 0, 2],
           [ 1, 1]]
```
