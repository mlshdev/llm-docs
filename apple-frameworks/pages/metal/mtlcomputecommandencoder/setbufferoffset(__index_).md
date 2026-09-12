> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setbufferoffset(_:index:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setbufferoffset(_:index:))

# setBufferOffset(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Changes where the data begins in a buffer already bound to the buffer argument table.

## Declaration

```swift
func setBufferOffset(_ offset: Int, index: Int)
```

## Parameters

- `offset`: Where the data to bind begins, in bytes, from the start of the bound buffer.
- `index`: The argument table entry to change.

<a id="discussion"></a>

## Discussion

Prefer calling this method to unbinding and then rebinding data.

For buffers binding to an argument using the `device` address space, align the offset to the data type’s size. The maximum size for an offset is `16` bytes.

For buffers in the `constant` address space, the minimum alignment depends on the hardware running your app. See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for information on each Apple GPU family.

## See Also

### Binding buffers

- [setBuffer(\_:offset:index:)](setbuffer%28__offset_index_%29.md): Binds a buffer to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffer(\_:offset:attributeStride:index:)](setbuffer%28__offset_attributestride_index_%29.md): Binds a buffer with a stride to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffers(\_:offsets:range:)](setbuffers%28__offsets_range_%29.md): Binds multiple buffers to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBuffers(\_:offsets:attributeStrides:range:)](setbuffers%28__offsets_attributestrides_range_%29.md): Binds multiple buffers with data in stride to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBufferOffset(offset:attributeStride:index:)](setbufferoffset%28offset_attributestride_index_%29.md): Changes where the data begins and the distance between adjacent elements in a buffer already bound to the buffer argument table.

# setBufferOffset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Changes where the data begins in a buffer already bound to the buffer argument table.

## Declaration

```objectivec
- (void) setBufferOffset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `offset`: Where the data to bind begins, in bytes, from the start of the bound buffer.
- `index`: The argument table entry to change.

<a id="discussion"></a>

## Discussion

Prefer calling this method to unbinding and then rebinding data.

For buffers binding to an argument using the `device` address space, align the offset to the data type’s size. The maximum size for an offset is `16` bytes.

For buffers in the `constant` address space, the minimum alignment depends on the hardware running your app. See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for information on each Apple GPU family.

## See Also

### Binding buffers

- [setBuffer:offset:atIndex:](setbuffer%28__offset_index_%29.md): Binds a buffer to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffer:offset:attributeStride:atIndex:](setbuffer%28__offset_attributestride_index_%29.md): Binds a buffer with a stride to the buffer argument table, allowing compute kernels to access its data on the GPU.
- [setBuffers:offsets:withRange:](setbuffers_offsets_withrange_.md): Binds multiple buffers to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBuffers:offsets:attributeStrides:withRange:](setbuffers_offsets_attributestrides_withrange_.md): Binds multiple buffers with data in stride to the buffer argument table at once, allowing compute kernels to access their data on the GPU.
- [setBufferOffset:attributeStride:atIndex:](setbufferoffset%28offset_attributestride_index_%29.md): Changes where the data begins and the distance between adjacent elements in a buffer already bound to the buffer argument table.
