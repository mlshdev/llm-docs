> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentbuffer(_:offset:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentbuffer(_:offset:index:))

# setFragmentBuffer(\_:offset:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a buffer to an entry in the fragment shader argument table.

## Declaration

```swift
func setFragmentBuffer(_ buffer: (any MTLBuffer)?, offset: Int, index: Int)
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance the command assigns to an entry in the fragment shader argument table for buffers.
- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the fragment shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the fragment shader argument table for buffers that stores a record of `buffer` and `offset`.

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setFragmentBuffers(\_:offsets:range:)](setfragmentbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the fragment shader argument table.
- [setFragmentBytes(\_:length:index:)](setfragmentbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the fragment shader argument table.
- [setFragmentBufferOffset(\_:index:)](setfragmentbufferoffset%28__index_%29.md): Updates an entry in the fragment shader argument table with a new location within the entry’s current buffer.

# setFragmentBuffer:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a buffer to an entry in the fragment shader argument table.

## Declaration

```objectivec
- (void) setFragmentBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance the command assigns to an entry in the fragment shader argument table for buffers.
- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the fragment shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the fragment shader argument table for buffers that stores a record of `buffer` and `offset`.

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setFragmentBuffers:offsets:withRange:](setfragmentbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the fragment shader argument table.
- [setFragmentBytes:length:atIndex:](setfragmentbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the fragment shader argument table.
- [setFragmentBufferOffset:atIndex:](setfragmentbufferoffset%28__index_%29.md): Updates an entry in the fragment shader argument table with a new location within the entry’s current buffer.
