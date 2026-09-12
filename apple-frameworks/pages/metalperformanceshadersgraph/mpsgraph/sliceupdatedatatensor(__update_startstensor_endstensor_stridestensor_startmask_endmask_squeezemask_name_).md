> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/sliceupdatedatatensor(_:update:startstensor:endstensor:stridestensor:startmask:endmask:squeezemask:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/sliceupdatedatatensor(_:update:startstensor:endstensor:stridestensor:startmask:endmask:squeezemask:name:))

# sliceUpdateDataTensor(\_:update:startsTensor:endsTensor:stridesTensor:startMask:endMask:squeezeMask:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

Creates a strided-slice update operation and returns the result tensor.

## Declaration

```swift
func sliceUpdateDataTensor(_ dataTensor: MPSGraphTensor, update updateTensor: MPSGraphTensor, startsTensor: MPSGraphTensor, endsTensor: MPSGraphTensor, stridesTensor: MPSGraphTensor, startMask: UInt32, endMask: UInt32, squeezeMask: UInt32, name: String?) -> MPSGraphTensor
```

## Parameters

- `dataTensor`: The large tensor that will receive the update.
- `updateTensor`: The tensor with the new values that will replace values in the dataTensor.
- `startsTensor`: A Tensor that contains an array of numbers that specify the starting points for each dimension.
- `endsTensor`: A Tensor that contains an array of numbers that specify the ending points for each dimension.
- `stridesTensor`: A Tensor that contains an array of numbers that specify the strides for each dimension.
- `startMask`: A bitmask that indicates dimensions whose `starts` values the operation should ignore.
- `endMask`: A bitmask that indicates dimensions whose `ends` values the operation should ignore.
- `squeezeMask`: A bitmask that indicates dimensions the operation will squeeze out from the result.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# sliceUpdateDataTensor:updateTensor:startsTensor:endsTensor:stridesTensor:startMask:endMask:squeezeMask:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

Creates a strided-slice update operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) sliceUpdateDataTensor:(MPSGraphTensor *) dataTensor updateTensor:(MPSGraphTensor *) updateTensor startsTensor:(MPSGraphTensor *) startsTensor endsTensor:(MPSGraphTensor *) endsTensor stridesTensor:(MPSGraphTensor *) stridesTensor startMask:(uint32_t) startMask endMask:(uint32_t) endMask squeezeMask:(uint32_t) squeezeMask name:(NSString *) name;
```

## Parameters

- `dataTensor`: The large tensor that will receive the update.
- `updateTensor`: The tensor with the new values that will replace values in the dataTensor.
- `startsTensor`: A Tensor that contains an array of numbers that specify the starting points for each dimension.
- `endsTensor`: A Tensor that contains an array of numbers that specify the ending points for each dimension.
- `stridesTensor`: A Tensor that contains an array of numbers that specify the strides for each dimension.
- `startMask`: A bitmask that indicates dimensions whose `starts` values the operation should ignore.
- `endMask`: A bitmask that indicates dimensions whose `ends` values the operation should ignore.
- `squeezeMask`: A bitmask that indicates dimensions the operation will squeeze out from the result.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
