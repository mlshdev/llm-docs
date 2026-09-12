> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/reinterpretcast(_:to:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/reinterpretcast(_:to:name:))

# reinterpretCast(\_:to:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Creates a reinterpret cast operation and returns the result tensor.

## Declaration

```swift
func reinterpretCast(_ tensor: MPSGraphTensor, to type: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The input tensor.
- `type`: The element type of the returned tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Returns input tensor (with element type `tensor_type`) reinterpreted to element type passed in with the last dimension scaled by `sizeof(tensor_type) / sizeof(type)`. This operation is endianness agnostic and MPSGraph reinterprets the data with the endianness of the system.

# reinterpretCastTensor:toType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Creates a reinterpret cast operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) reinterpretCastTensor:(MPSGraphTensor *) tensor toType:(MPSDataType) type name:(NSString *) name;
```

## Parameters

- `tensor`: The input tensor.
- `type`: The element type of the returned tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Returns input tensor (with element type `tensor_type`) reinterpreted to element type passed in with the last dimension scaled by `sizeof(tensor_type) / sizeof(type)`. This operation is endianness agnostic and MPSGraph reinterprets the data with the endianness of the system.
