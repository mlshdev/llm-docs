> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/makebuffer(length:options:)](https://developer.apple.com/documentation/metal/mtlheap/makebuffer(length:options:))

# makeBuffer(length:options:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a buffer on the heap.

## Declaration

```swift
func makeBuffer(length: Int, options: MTLResourceOptions = []) -> (any MTLBuffer)?
```

## Parameters

- `length`: The size, in bytes, of the buffer.
- `options`: Options that describe the properties of the buffer.

<a id="return-value"></a>

## Return Value

A new buffer object backed by heap memory, or `nil` if the heap memory is full.

<a id="discussion"></a>

## Discussion

You can call the method with the following restrictions:

- The heap’s type needs to be [MTLHeapType.automatic](../mtlheaptype/automatic.md)
- The buffer’s storage mode option needs to match the heap’s [storageMode](storagemode.md) property
- The buffer’s CPU cache mode option needs to match the heap’s [cpuCacheMode](cpucachemode.md) property

## See Also

### Creating buffers from a heap

- [makeBuffer(length:options:offset:)](makebuffer%28length_options_offset_%29.md): Creates a buffer at a specified offset on the heap.

# newBufferWithLength:options: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a buffer on the heap.

## Declaration

```objectivec
- (id<MTLBuffer>) newBufferWithLength:(NSUInteger) length options:(MTLResourceOptions) options;
```

## Parameters

- `length`: The size, in bytes, of the buffer.
- `options`: Options that describe the properties of the buffer.

<a id="return-value"></a>

## Return Value

A new buffer object backed by heap memory, or `nil` if the heap memory is full.

<a id="discussion"></a>

## Discussion

You can call the method with the following restrictions:

- The heap’s type needs to be [MTLHeapTypeAutomatic](../mtlheaptype/automatic.md)
- The buffer’s storage mode option needs to match the heap’s [storageMode](storagemode.md) property
- The buffer’s CPU cache mode option needs to match the heap’s [cpuCacheMode](cpucachemode.md) property

## See Also

### Creating buffers from a heap

- [newBufferWithLength:options:offset:](makebuffer%28length_options_offset_%29.md): Creates a buffer at a specified offset on the heap.
