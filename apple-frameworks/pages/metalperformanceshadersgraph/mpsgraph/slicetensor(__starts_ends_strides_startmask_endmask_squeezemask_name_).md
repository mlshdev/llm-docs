> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/slicetensor(_:starts:ends:strides:startmask:endmask:squeezemask:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/slicetensor(_:starts:ends:strides:startmask:endmask:squeezemask:name:))

# sliceTensor(\_:starts:ends:strides:startMask:endMask:squeezeMask:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a strided-slice operation and returns the result tensor.

## Declaration

```swift
func sliceTensor(_ tensor: MPSGraphTensor, starts: [NSNumber], ends: [NSNumber], strides: [NSNumber], startMask: UInt32, endMask: UInt32, squeezeMask: UInt32, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The Tensor to be sliced.
- `starts`: An array of numbers that specify the starting points for each dimension.
- `ends`: An array of numbers that specify the ending points for each dimension.
- `strides`: An array of numbers that specify the strides for each dimension.
- `startMask`: A bitmask that indicates dimensions whose `starts` values the operation should ignore.
- `endMask`: A bitmask that indicates dimensions whose `ends` values the operation should ignore.
- `squeezeMask`: A bitmask that indicates dimensions the operation will squeeze out from the result.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Slices a tensor starting from `starts`, stopping short before `ends` stepping `strides` paces between each value. Semantics based on [TensorFlow Strided Slice Op](https://www.tensorflow.org/api_docs/python/tf/strided_slice).

# sliceTensor:starts:ends:strides:startMask:endMask:squeezeMask:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a strided-slice operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) sliceTensor:(MPSGraphTensor *) tensor starts:(NSArray<NSNumber *> *) starts ends:(NSArray<NSNumber *> *) ends strides:(NSArray<NSNumber *> *) strides startMask:(uint32_t) startMask endMask:(uint32_t) endMask squeezeMask:(uint32_t) squeezeMask name:(NSString *) name;
```

## Parameters

- `tensor`: The Tensor to be sliced.
- `starts`: An array of numbers that specify the starting points for each dimension.
- `ends`: An array of numbers that specify the ending points for each dimension.
- `strides`: An array of numbers that specify the strides for each dimension.
- `startMask`: A bitmask that indicates dimensions whose `starts` values the operation should ignore.
- `endMask`: A bitmask that indicates dimensions whose `ends` values the operation should ignore.
- `squeezeMask`: A bitmask that indicates dimensions the operation will squeeze out from the result.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Slices a tensor starting from `starts`, stopping short before `ends` stepping `strides` paces between each value. Semantics based on [TensorFlow Strided Slice Op](https://www.tensorflow.org/api_docs/python/tf/strided_slice).
