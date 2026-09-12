> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/transpose(_:permutation:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/transpose(_:permutation:name:))

# transpose(\_:permutation:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a permutation operation and returns the result tensor.

## Declaration

```swift
func transpose(_ tensor: MPSGraphTensor, permutation: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be permuted.
- `permutation`: An array of numbers defining the permutation, must be of length `rank(tensor)` and define a valid permutation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Permutes the dimensions of the input tensor according to values in `permutation`.

# transposeTensor:permutation:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a permutation operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) transposeTensor:(MPSGraphTensor *) tensor permutation:(NSArray<NSNumber *> *) permutation name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be permuted.
- `permutation`: An array of numbers defining the permutation, must be of length `rank(tensor)` and define a valid permutation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Permutes the dimensions of the input tensor according to values in `permutation`.
