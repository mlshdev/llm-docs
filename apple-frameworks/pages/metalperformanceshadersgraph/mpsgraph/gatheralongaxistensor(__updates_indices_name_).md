> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/gatheralongaxistensor(_:updates:indices:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/gatheralongaxistensor(_:updates:indices:name:))

# gatherAlongAxisTensor(\_:updates:indices:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a GatherAlongAxis operation and returns the result tensor.

## Declaration

```swift
func gatherAlongAxisTensor(_ axisTensor: MPSGraphTensor, updates updatesTensor: MPSGraphTensor, indices indicesTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `axisTensor`: Scalar Int32 tensor. The axis to gather from. Negative values wrap around
- `updatesTensor`: The input tensor to gather values from
- `indicesTensor`: Int32 or Int64 tensor used to index `updatesTensor`
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Gather values from `updatesTensor` along the specified `axis` at indices in `indicesTensor`. The shape of `updatesTensor` and `indicesTensor` must match except at `axis`. The shape of the result tensor is equal to the shape of `indicesTensor`. If an index is out of bounds of the `updatesTensor` along `axis` a 0 is inserted.

# gatherAlongAxisTensor:withUpdatesTensor:indicesTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a GatherAlongAxis operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) gatherAlongAxisTensor:(MPSGraphTensor *) axisTensor withUpdatesTensor:(MPSGraphTensor *) updatesTensor indicesTensor:(MPSGraphTensor *) indicesTensor name:(NSString *) name;
```

## Parameters

- `axisTensor`: Scalar Int32 tensor. The axis to gather from. Negative values wrap around
- `updatesTensor`: The input tensor to gather values from
- `indicesTensor`: Int32 or Int64 tensor used to index `updatesTensor`
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Gather values from `updatesTensor` along the specified `axis` at indices in `indicesTensor`. The shape of `updatesTensor` and `indicesTensor` must match except at `axis`. The shape of the result tensor is equal to the shape of `indicesTensor`. If an index is out of bounds of the `updatesTensor` along `axis` a 0 is inserted.
