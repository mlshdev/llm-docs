> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reshape(_:shapetensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reshape(_:shapetensor:name:))

# reshape(\_:shapeTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a reshape operation and returns the result tensor.

## Declaration

```swift
func reshape(_ tensor: MPSGraphTensor, shapeTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be reshaped.
- `shapeTensor`: A 1D tensor of type `MPSDataTypeInt32` or `MPSDataTypeInt64`, that contains the target shape values.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

This operation reshapes the input tensor to the target shape. The shape tensor must be compatible with the input tensor shape, specifically the volume of the input tensor has to match the volume defined by the shape tensor. The shape tensor is allowed to contain dynamic dimensions (-1) when the result type can be inferred unambiguously.

# reshapeTensor:withShapeTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a reshape operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reshapeTensor:(MPSGraphTensor *) tensor withShapeTensor:(MPSGraphTensor *) shapeTensor name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be reshaped.
- `shapeTensor`: A 1D tensor of type `MPSDataTypeInt32` or `MPSDataTypeInt64`, that contains the target shape values.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

This operation reshapes the input tensor to the target shape. The shape tensor must be compatible with the input tensor shape, specifically the volume of the input tensor has to match the volume defined by the shape tensor. The shape tensor is allowed to contain dynamic dimensions (-1) when the result type can be inferred unambiguously.
