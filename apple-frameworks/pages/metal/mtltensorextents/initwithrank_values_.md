> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorextents/initwithrank:values:](https://developer.apple.com/documentation/metal/mtltensorextents/initwithrank:values:)

# initWithRank:values:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates an extents object with the rank and values you provide.

## Declaration

```objectivec
- (instancetype) initWithRank:(NSUInteger) rank values:(const NSInteger *) values;
```

## Parameters

- `rank`: The number of values in the extents. Pass `0` to create a scalar (rank-zero) extents.
- `values`: A C array of `rank` integer values, or `nil` when `rank` is `0`. The first element corresponds to the innermost dimension.

<a id="return-value"></a>

## Return Value

A new extents instance, or `nil` if `rank` exceeds 0 and `values` is `nil`, or if `rank` exceeds [MTL_TENSOR_MAX_RANK](../mtl_tensor_max_rank.md).

<a id="discussion"></a>

## Discussion

Zero rank extents represent scalars. `values` can only be `nil` if `rank` is 0.
