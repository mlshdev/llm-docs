> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/makebuffer(length:options:offset:)](https://developer.apple.com/documentation/metal/mtlheap/makebuffer(length:options:offset:))

# makeBuffer(length:options:offset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a buffer at a specified offset on the heap.

## Declaration

```swift
func makeBuffer(length: Int, options: MTLResourceOptions = [], offset: Int) -> (any MTLBuffer)?
```

## Parameters

- `length`: The size of the buffer, in bytes.
- `options`: Options that describe the properties of the buffer.
- `offset`: The distance, in bytes, to place the buffer relative to the start of the heap.

<a id="return-value"></a>

## Return Value

A new buffer, or `nil` if the heap is not a placement heap.

<a id="discussion"></a>

## Discussion

You can call the method with the following restrictions:

- The heap’s type needs to be [MTLHeapType.placement](../mtlheaptype/placement.md)
- The buffer’s storage mode option needs to match the heap’s [storageMode](storagemode.md) property
- The buffer’s CPU cache mode option needs to match the heap’s [cpuCacheMode](cpucachemode.md) property

Use the [heapBufferSizeAndAlign(length:options:)](../mtldevice/heapbuffersizeandalign%28length_options_%29.md) method to determine the required size and alignment. If you don’t align the buffer correctly or it extends past the end of the heap, the behavior is undefined.

> **Note**

>  The new buffer can implicitly alias the underlying memory of other resources already in the heap within the overlapping half-open range of `[offset, offset + requiredSize)`.

## See Also

### Creating buffers from a heap

- [makeBuffer(length:options:)](makebuffer%28length_options_%29.md): Creates a buffer on the heap.

# newBufferWithLength:options:offset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a buffer at a specified offset on the heap.

## Declaration

```objectivec
- (id<MTLBuffer>) newBufferWithLength:(NSUInteger) length options:(MTLResourceOptions) options offset:(NSUInteger) offset;
```

## Parameters

- `length`: The size of the buffer, in bytes.
- `options`: Options that describe the properties of the buffer.
- `offset`: The distance, in bytes, to place the buffer relative to the start of the heap.

<a id="return-value"></a>

## Return Value

A new buffer, or `nil` if the heap is not a placement heap.

<a id="discussion"></a>

## Discussion

You can call the method with the following restrictions:

- The heap’s type needs to be [MTLHeapTypePlacement](../mtlheaptype/placement.md)
- The buffer’s storage mode option needs to match the heap’s [storageMode](storagemode.md) property
- The buffer’s CPU cache mode option needs to match the heap’s [cpuCacheMode](cpucachemode.md) property

Use the [heapBufferSizeAndAlignWithLength:options:](../mtldevice/heapbuffersizeandalign%28length_options_%29.md) method to determine the required size and alignment. If you don’t align the buffer correctly or it extends past the end of the heap, the behavior is undefined.

> **Note**

>  The new buffer can implicitly alias the underlying memory of other resources already in the heap within the overlapping half-open range of `[offset, offset + requiredSize)`.

## See Also

### Creating buffers from a heap

- [newBufferWithLength:options:](makebuffer%28length_options_%29.md): Creates a buffer on the heap.
