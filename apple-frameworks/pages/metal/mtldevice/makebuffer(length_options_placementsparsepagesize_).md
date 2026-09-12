> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makebuffer(length:options:placementsparsepagesize:)](https://developer.apple.com/documentation/metal/mtldevice/makebuffer(length:options:placementsparsepagesize:))

# makeBuffer(length:options:placementSparsePageSize:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new placement sparse buffer of a specific length.

## Declaration

```swift
func makeBuffer(length: Int, options: MTLResourceOptions = [], placementSparsePageSize: MTLSparsePageSize) -> (any MTLBuffer)?
```

## Parameters

- `length`: The size of the [MTLBuffer](../mtlbuffer.md), in bytes.
- `options`: A [MTLResourceOptions](../mtlresourceoptions.md) instance that establishes the buffer’s storage modes.
- `placementSparsePageSize`: [MTLSparsePageSize](../mtlsparsepagesize.md) to use for the placement sparse buffer.

<a id="return-value"></a>

## Return Value

A [MTLBuffer](../mtlbuffer.md) instance, or `nil` if the function failed.

<a id="discussion"></a>

## Discussion

This method creates a new placement sparse [MTLBuffer](../mtlbuffer.md) of a specific length. You assign memory to placement sparse buffers using a [MTLHeap](../mtlheap.md) of type [MTLHeapType.placement](../mtlheaptype/placement.md).

# newBufferWithLength:options:placementSparsePageSize: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new placement sparse buffer of a specific length.

## Declaration

```objectivec
- (id<MTLBuffer>) newBufferWithLength:(NSUInteger) length options:(MTLResourceOptions) options placementSparsePageSize:(MTLSparsePageSize) placementSparsePageSize;
```

## Parameters

- `length`: The size of the [MTLBuffer](../mtlbuffer.md), in bytes.
- `options`: A [MTLResourceOptions](../mtlresourceoptions.md) instance that establishes the buffer’s storage modes.
- `placementSparsePageSize`: [MTLSparsePageSize](../mtlsparsepagesize.md) to use for the placement sparse buffer.

<a id="return-value"></a>

## Return Value

A [MTLBuffer](../mtlbuffer.md) instance, or `nil` if the function failed.

<a id="discussion"></a>

## Discussion

This method creates a new placement sparse [MTLBuffer](../mtlbuffer.md) of a specific length. You assign memory to placement sparse buffers using a [MTLHeap](../mtlheap.md) of type [MTLHeapTypePlacement](../mtlheaptype/placement.md).
