> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/onehot(withindicestensor:depth:axis:datatype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/onehot(withindicestensor:depth:axis:datatype:name:))

# oneHot(withIndicesTensor:depth:axis:dataType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a oneHot operation and returns the result tensor.

## Declaration

```swift
func oneHot(withIndicesTensor indicesTensor: MPSGraphTensor, depth: Int, axis: Int, dataType: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `indicesTensor`: Tensor of indices for on values
- `depth`: Depth of the oneHot vector along the axis
- `axis`: The axis to insert the new oneHot vector at
- `dataType`: MPSDataType of the result tensor.
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Creates a tensor of rank equal to the rank of `indicesTensor` \+ 1. Inserts a new axis at the axis specified, or the minor axis if `axis` is -1. The values at the indices in the indicesTensor will be set to 1, and all other values will be set to 0.

# oneHotWithIndicesTensor:depth:axis:dataType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a oneHot operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) oneHotWithIndicesTensor:(MPSGraphTensor *) indicesTensor depth:(NSUInteger) depth axis:(NSUInteger) axis dataType:(MPSDataType) dataType name:(NSString *) name;
```

## Parameters

- `indicesTensor`: Tensor of indices for on values
- `depth`: Depth of the oneHot vector along the axis
- `axis`: The axis to insert the new oneHot vector at
- `dataType`: MPSDataType of the result tensor.
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Creates a tensor of rank equal to the rank of `indicesTensor` \+ 1. Inserts a new axis at the axis specified, or the minor axis if `axis` is -1. The values at the indices in the indicesTensor will be set to 1, and all other values will be set to 0.
