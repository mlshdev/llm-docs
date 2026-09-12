> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/concattensors(_:dimension:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/concattensors(_:dimension:name:))

# concatTensors(\_:dimension:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a concatenation operation and returns the result tensor.

## Declaration

```swift
func concatTensors(_ tensors: [MPSGraphTensor], dimension dimensionIndex: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensors`: The tensors to concatenate.
- `dimensionIndex`: The dimension to concatenate across, must be in range: `-rank <= dimension < rank`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Concatenates all input tensors along the specified dimension. All inputs must be broadcast compatible along all other dimensions, and have the same datatype.

# concatTensors:dimension:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a concatenation operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) concatTensors:(NSArray<MPSGraphTensor *> *) tensors dimension:(NSInteger) dimensionIndex name:(NSString *) name;
```

## Parameters

- `tensors`: The tensors to concatenate.
- `dimensionIndex`: The dimension to concatenate across, must be in range: `-rank <= dimension < rank`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Concatenates all input tensors along the specified dimension. All inputs must be broadcast compatible along all other dimensions, and have the same datatype.
