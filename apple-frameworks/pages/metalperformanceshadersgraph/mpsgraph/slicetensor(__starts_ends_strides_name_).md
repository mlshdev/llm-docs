> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/slicetensor(_:starts:ends:strides:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/slicetensor(_:starts:ends:strides:name:))

# sliceTensor(\_:starts:ends:strides:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a strided-slice operation and returns the result tensor.

## Declaration

```swift
func sliceTensor(_ tensor: MPSGraphTensor, starts: [NSNumber], ends: [NSNumber], strides: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be sliced.
- `starts`: An array of numbers that specify the starting points for each dimension.
- `ends`: An array of numbers that specify the ending points for each dimension.
- `strides`: An array of numbers that specify the strides for each dimension.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Slices a tensor starting from `starts`, stopping short before `ends` stepping `strides` paces between each value. Semantics based on [TensorFlow Strided Slice Op](https://www.tensorflow.org/api_docs/python/tf/strided_slice).

# sliceTensor:starts:ends:strides:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a strided-slice operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) sliceTensor:(MPSGraphTensor *) tensor starts:(NSArray<NSNumber *> *) starts ends:(NSArray<NSNumber *> *) ends strides:(NSArray<NSNumber *> *) strides name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be sliced.
- `starts`: An array of numbers that specify the starting points for each dimension.
- `ends`: An array of numbers that specify the ending points for each dimension.
- `strides`: An array of numbers that specify the strides for each dimension.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Slices a tensor starting from `starts`, stopping short before `ends` stepping `strides` paces between each value. Semantics based on [TensorFlow Strided Slice Op](https://www.tensorflow.org/api_docs/python/tf/strided_slice).
