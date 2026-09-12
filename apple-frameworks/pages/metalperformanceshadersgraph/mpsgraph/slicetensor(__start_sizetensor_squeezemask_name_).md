> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/slicetensor(_:start:sizetensor:squeezemask:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/slicetensor(_:start:sizetensor:squeezemask:name:))

# sliceTensor(\_:start:sizeTensor:squeezeMask:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+

Creates a slice operation and returns the result tensor.

## Declaration

```swift
func sliceTensor(_ tensor: MPSGraphTensor, start startTensor: MPSGraphTensor, sizeTensor: MPSGraphTensor, squeezeMask: UInt32, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The Tensor to be sliced.
- `startTensor`: The tensor that specifies the starting points for each dimension.
- `sizeTensor`: The tensor that specifies the size of the result for each dimension.
- `squeezeMask`: A bitmask that indicates dimensions the operation will squeeze out from the result.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Slices a tensor starting from `startTensor`, stopping short before `startTensor + endTensor` stepping a single pace between each value. Semantics based on [TensorFlow Strided Slice Op](https://www.tensorflow.org/api_docs/python/tf/strided_slice).

# sliceTensor:startTensor:sizeTensor:squeezeMask:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+

Creates a slice operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) sliceTensor:(MPSGraphTensor *) tensor startTensor:(MPSGraphTensor *) startTensor sizeTensor:(MPSGraphTensor *) sizeTensor squeezeMask:(uint32_t) squeezeMask name:(NSString *) name;
```

## Parameters

- `tensor`: The Tensor to be sliced.
- `startTensor`: The tensor that specifies the starting points for each dimension.
- `sizeTensor`: The tensor that specifies the size of the result for each dimension.
- `squeezeMask`: A bitmask that indicates dimensions the operation will squeeze out from the result.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Slices a tensor starting from `startTensor`, stopping short before `startTensor + endTensor` stepping a single pace between each value. Semantics based on [TensorFlow Strided Slice Op](https://www.tensorflow.org/api_docs/python/tf/strided_slice).
