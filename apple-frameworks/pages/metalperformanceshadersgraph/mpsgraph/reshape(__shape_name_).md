> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reshape(_:shape:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reshape(_:shape:name:))

# reshape(\_:shape:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a reshape operation and returns the result tensor.

## Declaration

```swift
func reshape(_ tensor: MPSGraphTensor, shape: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be reshaped.
- `shape`: The result tensor shape.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

This operation reshapes the input tensor to the target shape. The shape must be compatible with the input tensor shape, specifically the volume of the input tensor has to match the volume defined by the shape. The shape is allowed to contain dynamic dimensions (-1) when the result type can be inferred unambiguously.

# reshapeTensor:withShape:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a reshape operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reshapeTensor:(MPSGraphTensor *) tensor withShape:(MPSShape *) shape name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be reshaped.
- `shape`: The result tensor shape.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

This operation reshapes the input tensor to the target shape. The shape must be compatible with the input tensor shape, specifically the volume of the input tensor has to match the volume defined by the shape. The shape is allowed to contain dynamic dimensions (-1) when the result type can be inferred unambiguously.
