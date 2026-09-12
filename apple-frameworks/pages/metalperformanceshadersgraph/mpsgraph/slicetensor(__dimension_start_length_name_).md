> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/slicetensor(_:dimension:start:length:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/slicetensor(_:dimension:start:length:name:))

# sliceTensor(\_:dimension:start:length:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a slice operation and returns the result tensor.

## Declaration

```swift
func sliceTensor(_ tensor: MPSGraphTensor, dimension dimensionIndex: Int, start: Int, length: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be sliced.
- `dimensionIndex`: The dimension to slice.
- `start`: The starting index of the slice, can be negative to count from the end of the tensor dimension.
- `length`: The length of the slice.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# sliceTensor:dimension:start:length:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a slice operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) sliceTensor:(MPSGraphTensor *) tensor dimension:(NSUInteger) dimensionIndex start:(NSInteger) start length:(NSInteger) length name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be sliced.
- `dimensionIndex`: The dimension to slice.
- `start`: The starting index of the slice, can be negative to count from the end of the tensor dimension.
- `length`: The length of the slice.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
