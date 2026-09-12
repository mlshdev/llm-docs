> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setbuffer(_:offset:index:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setbuffer(_:offset:index:))

# setBuffer(\_:offset:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Binds a buffer to the buffer argument table, allowing compute kernels to access its data on the GPU.

## Declaration

```swift
func setBuffer(_ buffer: (any MTLBuffer)?, offset: Int, index: Int)
```

## Parameters

- `buffer`: The [MTLBuffer](../mtlbuffer.md) instance to bind to the argument table.
- `offset`: The number of bytes to skip in the buffer before the first element of data.
- `index`: The index the buffer binds to in the argument table.

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

For buffers binding to an argument using the `device` address space, align the offset to the data type’s size. The maximum size for an offset is `16` bytes.

For buffers in the `constant` address space, the minimum alignment depends on the hardware running your app. See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for information on each Apple GPU family.

Rebinding an already bound buffer causes a Metal error.

## See Also

### Binding buffers

- [setBuffer(\_:offset:attributeStride:index:)](setbuffer%28__offset_attributestride_index_%29.md): Binds a buffer with a stride to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffers(\_:offsets:range:)](setbuffers%28__offsets_range_%29.md): Binds multiple buffers to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBuffers(\_:offsets:attributeStrides:range:)](setbuffers%28__offsets_attributestrides_range_%29.md): Binds multiple buffers with data in stride to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBufferOffset(\_:index:)](setbufferoffset%28__index_%29.md): Changes where the data begins in a buffer already bound to the buffer argument table.
- [setBufferOffset(offset:attributeStride:index:)](setbufferoffset%28offset_attributestride_index_%29.md): Changes where the data begins and the distance between adjacent elements in a buffer already bound to the buffer argument table.

# setBuffer:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Binds a buffer to the buffer argument table, allowing compute kernels to access its data on the GPU.

## Declaration

```objectivec
- (void) setBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: The [MTLBuffer](../mtlbuffer.md) instance to bind to the argument table.
- `offset`: The number of bytes to skip in the buffer before the first element of data.
- `index`: The index the buffer binds to in the argument table.

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

For buffers binding to an argument using the `device` address space, align the offset to the data type’s size. The maximum size for an offset is `16` bytes.

For buffers in the `constant` address space, the minimum alignment depends on the hardware running your app. See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for information on each Apple GPU family.

Rebinding an already bound buffer causes a Metal error.

## See Also

### Binding buffers

- [setBuffer:offset:attributeStride:atIndex:](setbuffer%28__offset_attributestride_index_%29.md): Binds a buffer with a stride to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffers:offsets:withRange:](setbuffers_offsets_withrange_.md): Binds multiple buffers to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBuffers:offsets:attributeStrides:withRange:](setbuffers_offsets_attributestrides_withrange_.md): Binds multiple buffers with data in stride to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBufferOffset:atIndex:](setbufferoffset%28__index_%29.md): Changes where the data begins in a buffer already bound to the buffer argument table.
- [setBufferOffset:attributeStride:atIndex:](setbufferoffset%28offset_attributestride_index_%29.md): Changes where the data begins and the distance between adjacent elements in a buffer already bound to the buffer argument table.
