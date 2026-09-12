> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/concattensor(_:with:dimension:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/concattensor(_:with:dimension:name:))

# concatTensor(\_:with:dimension:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a concatenation operation and returns the result tensor.

## Declaration

```swift
func concatTensor(_ tensor: MPSGraphTensor, with tensor2: MPSGraphTensor, dimension dimensionIndex: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The first tensor to concatenate.
- `tensor2`: The second tensor to concatenate.
- `dimensionIndex`: The dimension to concatenate across, must be in range: `-rank <= dimension < rank`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Concatenates two input tensors along the specified dimension. Tensors must be broadcast compatible along all other dimensions, and have the same datatype.

# concatTensor:withTensor:dimension:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a concatenation operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) concatTensor:(MPSGraphTensor *) tensor withTensor:(MPSGraphTensor *) tensor2 dimension:(NSInteger) dimensionIndex name:(NSString *) name;
```

## Parameters

- `tensor`: The first tensor to concatenate.
- `tensor2`: The second tensor to concatenate.
- `dimensionIndex`: The dimension to concatenate across, must be in range: `-rank <= dimension < rank`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Concatenates two input tensors along the specified dimension. Tensors must be broadcast compatible along all other dimensions, and have the same datatype.
