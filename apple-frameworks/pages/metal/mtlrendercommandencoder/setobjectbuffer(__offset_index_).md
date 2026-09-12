> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setobjectbuffer(_:offset:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setobjectbuffer(_:offset:index:))

# setObjectBuffer(\_:offset:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a buffer to an entry in the object shader argument table.

## Declaration

```swift
func setObjectBuffer(_ buffer: (any MTLBuffer)?, offset: Int, index: Int)
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance the command assigns to an entry in the object shader argument table for buffers.
- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the object shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the object shader argument table for buffers that stores a record of `buffer` and `offset`.

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning buffers for object shaders

- [setObjectBuffers(\_:offsets:range:)](setobjectbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the object shader argument table.
- [setObjectBytes(\_:length:index:)](setobjectbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the object shader argument table.
- [setObjectBufferOffset(\_:index:)](setobjectbufferoffset%28__index_%29.md): Updates an entry in the object shader argument table with a new location within the entry’s current buffer.

# setObjectBuffer:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a buffer to an entry in the object shader argument table.

## Declaration

```objectivec
- (void) setObjectBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: An [MTLBuffer](../mtlbuffer.md) instance the command assigns to an entry in the object shader argument table for buffers.
- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the object shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the object shader argument table for buffers that stores a record of `buffer` and `offset`.

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

## See Also

### Assigning buffers for object shaders

- [setObjectBuffers:offsets:withRange:](setobjectbuffers_offsets_withrange_.md): Encodes a command that assigns multiple buffers to a range of entries in the object shader argument table.
- [setObjectBytes:length:atIndex:](setobjectbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the object shader argument table.
- [setObjectBufferOffset:atIndex:](setobjectbufferoffset%28__index_%29.md): Updates an entry in the object shader argument table with a new location within the entry’s current buffer.
