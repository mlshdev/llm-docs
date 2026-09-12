> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/dispatchthreadgroups(_:threadsperthreadgroup:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/dispatchthreadgroups(_:threadsperthreadgroup:))

# dispatchThreadgroups(\_:threadsPerThreadgroup:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a compute dispatch command using a grid aligned to threadgroup boundaries.

## Declaration

```swift
func dispatchThreadgroups(_ threadgroupsPerGrid: MTLSize, threadsPerThreadgroup: MTLSize)
```

## Parameters

- `threadgroupsPerGrid`: An [MTLSize](../mtlsize.md) instance that represents the number of threads for each grid dimension.
- `threadsPerThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in a threadgroup.

## Mentioned In

- [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md)

<a id="discussion"></a>

## Discussion

> **Tip**

>  Prefer using dispatchThreads for your kernel calls on `Apple4` and later Apple GPUs. See [Metal Feature Set Tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for information on hardware support.

Metal calculates the number of threads in a grid by multiplying `threadsPerThreadgroup` by `threadgroupsPerGrid`.

If the size of your data doesn’t match the size of the grid, perform boundary checks in your compute function to avoid accessing data out of bounds. See [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md) for an example.

## See Also

### Dispatching kernel calls directly

- [dispatchThreads(\_:threadsPerThreadgroup:)](dispatchthreads%28__threadsperthreadgroup_%29.md): Encodes a compute command using an arbitrarily sized grid.

# dispatchThreadgroups:threadsPerThreadgroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a compute dispatch command using a grid aligned to threadgroup boundaries.

## Declaration

```objectivec
- (void) dispatchThreadgroups:(MTLSize) threadgroupsPerGrid threadsPerThreadgroup:(MTLSize) threadsPerThreadgroup;
```

## Parameters

- `threadgroupsPerGrid`: An [MTLSize](../mtlsize.md) instance that represents the number of threads for each grid dimension.
- `threadsPerThreadgroup`: An [MTLSize](../mtlsize.md) instance that represents the number of threads in a threadgroup.

## Mentioned In

- [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md)

<a id="discussion"></a>

## Discussion

> **Tip**

>  Prefer using dispatchThreads for your kernel calls on `Apple4` and later Apple GPUs. See [Metal Feature Set Tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for information on hardware support.

Metal calculates the number of threads in a grid by multiplying `threadsPerThreadgroup` by `threadgroupsPerGrid`.

If the size of your data doesn’t match the size of the grid, perform boundary checks in your compute function to avoid accessing data out of bounds. See [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md) for an example.

## See Also

### Dispatching kernel calls directly

- [dispatchThreads:threadsPerThreadgroup:](dispatchthreads%28__threadsperthreadgroup_%29.md): Encodes a compute command using an arbitrarily sized grid.
