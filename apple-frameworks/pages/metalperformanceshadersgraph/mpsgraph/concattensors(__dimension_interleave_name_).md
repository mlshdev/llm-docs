> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/concattensors(_:dimension:interleave:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/concattensors(_:dimension:interleave:name:))

# concatTensors(\_:dimension:interleave:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a concatenation operation and returns the result tensor.

## Declaration

```swift
func concatTensors(_ tensors: [MPSGraphTensor], dimension dimensionIndex: Int, interleave: Bool, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensors`: The tensors to concatenate.
- `dimensionIndex`: The dimension to concatenate across, must be in range: `-rank <= dimension < rank`.
- `interleave`: A boolean value that specifies whether the operation interleaves input tensors.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Concatenates all input tensors along specified dimension. All inputs must be broadcast compatible along all other dimensions, and have the same type. When interleave is specified, all tensors will be interleaved. To interleave, make sure to provide broadcast compatible inputs along the specified dimension as well. For example:

```md
  operand0 = [1, 2, 3]
  operand1 = [4, 5, 6]
  concat([operand0, operand1], axis = 0, interleave = YES) = [1, 4, 2, 5, 3, 6]
```

# concatTensors:dimension:interleave:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a concatenation operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) concatTensors:(NSArray<MPSGraphTensor *> *) tensors dimension:(NSInteger) dimensionIndex interleave:(BOOL) interleave name:(NSString *) name;
```

## Parameters

- `tensors`: The tensors to concatenate.
- `dimensionIndex`: The dimension to concatenate across, must be in range: `-rank <= dimension < rank`.
- `interleave`: A boolean value that specifies whether the operation interleaves input tensors.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Concatenates all input tensors along specified dimension. All inputs must be broadcast compatible along all other dimensions, and have the same type. When interleave is specified, all tensors will be interleaved. To interleave, make sure to provide broadcast compatible inputs along the specified dimension as well. For example:

```md
  operand0 = [1, 2, 3]
  operand1 = [4, 5, 6]
  concat([operand0, operand1], axis = 0, interleave = YES) = [1, 4, 2, 5, 3, 6]
```
