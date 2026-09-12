> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/scatteralongaxis(_:updates:indices:shape:mode:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/scatteralongaxis(_:updates:indices:shape:mode:name:))

# scatterAlongAxis(\_:updates:indices:shape:mode:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a ScatterAlongAxis operation and returns the result tensor.

## Declaration

```swift
func scatterAlongAxis(_ axis: Int, updates updatesTensor: MPSGraphTensor, indices indicesTensor: MPSGraphTensor, shape: [NSNumber], mode: MPSGraphScatterMode, name: String?) -> MPSGraphTensor
```

## Parameters

- `axis`: The axis to scatter to. Negative values wrap around
- `updatesTensor`: The input tensor to scatter values from
- `indicesTensor`: Int32 or Int64 tensor used to index the result tensor.
- `mode`: The type of update to use
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Scatter values from `updatesTensor` along the specified `axis` at indices in `indicesTensor` into a result tensor. Values are updated following `mode`. See MPSGraphScatterMode. The shape of `updatesTensor` and `indicesTensor` must match. `shape` must match except at `axis`. The shape of the result tensor is equal to `shape` and initialized with an initial value corresponding to `mode`. If an index is out of bounds of `shape` along `axis` the update value is skipped.

# scatterAlongAxis:withUpdatesTensor:indicesTensor:shape:mode:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a ScatterAlongAxis operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) scatterAlongAxis:(NSInteger) axis withUpdatesTensor:(MPSGraphTensor *) updatesTensor indicesTensor:(MPSGraphTensor *) indicesTensor shape:(MPSShape *) shape mode:(MPSGraphScatterMode) mode name:(NSString *) name;
```

## Parameters

- `axis`: The axis to scatter to. Negative values wrap around
- `updatesTensor`: The input tensor to scatter values from
- `indicesTensor`: Int32 or Int64 tensor used to index the result tensor.
- `mode`: The type of update to use
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Scatter values from `updatesTensor` along the specified `axis` at indices in `indicesTensor` into a result tensor. Values are updated following `mode`. See MPSGraphScatterMode. The shape of `updatesTensor` and `indicesTensor` must match. `shape` must match except at `axis`. The shape of the result tensor is equal to `shape` and initialized with an initial value corresponding to `mode`. If an index is out of bounds of `shape` along `axis` the update value is skipped.
