> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/onehot(withindicestensor:depth:datatype:onvalue:offvalue:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/onehot(withindicestensor:depth:datatype:onvalue:offvalue:name:))

# oneHot(withIndicesTensor:depth:dataType:onValue:offValue:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a oneHot operation and returns the result tensor.

## Declaration

```swift
func oneHot(withIndicesTensor indicesTensor: MPSGraphTensor, depth: Int, dataType: MPSDataType, onValue: Double, offValue: Double, name: String?) -> MPSGraphTensor
```

## Parameters

- `indicesTensor`: Tensor of indices for on values
- `depth`: Depth of the oneHot vector along the axis
- `dataType`: MPSDataType of the result tensor.
- `onValue`: The value for indices designated by the indicesTensor. This value must match the specified data type.
- `offValue`: The value for indices not designated by the indicesTensor. This value must match the specified data type.
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Creates a tensor of rank equal to the rank of `indicesTensor` \+ 1. Inserts a new axis at the minor dimension. The values at the indices in the indicesTensor will have the onValue, and all other values will be set to the offValue.

# oneHotWithIndicesTensor:depth:dataType:onValue:offValue:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a oneHot operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) oneHotWithIndicesTensor:(MPSGraphTensor *) indicesTensor depth:(NSUInteger) depth dataType:(MPSDataType) dataType onValue:(double) onValue offValue:(double) offValue name:(NSString *) name;
```

## Parameters

- `indicesTensor`: Tensor of indices for on values
- `depth`: Depth of the oneHot vector along the axis
- `dataType`: MPSDataType of the result tensor.
- `onValue`: The value for indices designated by the indicesTensor. This value must match the specified data type.
- `offValue`: The value for indices not designated by the indicesTensor. This value must match the specified data type.
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Creates a tensor of rank equal to the rank of `indicesTensor` \+ 1. Inserts a new axis at the minor dimension. The values at the indices in the indicesTensor will have the onValue, and all other values will be set to the offValue.
