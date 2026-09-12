> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setobjectbufferoffset(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setobjectbufferoffset(_:index:))

# setObjectBufferOffset(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Updates an entry in the object shader argument table with a new location within the entry’s current buffer.

## Declaration

```swift
func setObjectBufferOffset(_ offset: Int, index: Int)
```

## Parameters

- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the object shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the object shader argument table for buffers that already stores a record of an [MTLBuffer](../mtlbuffer.md).

<a id="discussion"></a>

## Discussion

The command this method encodes changes the offset for a mesh buffer that already has a previous assignment from one of your earlier commands.

For more information, see:

- [setObjectBuffer(\_:offset:index:)](setobjectbuffer%28__offset_index_%29.md)
- [setObjectBuffers(\_:offsets:range:)](setobjectbuffers%28__offsets_range_%29.md) (Swift)
- [setObjectBuffers:offsets:withRange:](setobjectbuffers_offsets_withrange_.md) (Objective-C)

The command can also adjust the offset for an entry that you previously set with the [setObjectBytes(\_:length:index:)](setobjectbytes%28__length_index_%29.md) method.

> **Tip**

>  If you’re only updating an offset, this method is typically more efficient than rebinding a buffer or byte block with the methods above.

## See Also

### Assigning buffers for object shaders

- [setObjectBuffer(\_:offset:index:)](setobjectbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the object shader argument table.
- [setObjectBuffers(\_:offsets:range:)](setobjectbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the object shader argument table.
- [setObjectBytes(\_:length:index:)](setobjectbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the object shader argument table.

# setObjectBufferOffset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Updates an entry in the object shader argument table with a new location within the entry’s current buffer.

## Declaration

```objectivec
- (void) setObjectBufferOffset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the object shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the object shader argument table for buffers that already stores a record of an [MTLBuffer](../mtlbuffer.md).

<a id="discussion"></a>

## Discussion

The command this method encodes changes the offset for a mesh buffer that already has a previous assignment from one of your earlier commands.

For more information, see:

- [setObjectBuffer:offset:atIndex:](setobjectbuffer%28__offset_index_%29.md)
- [setObjectBuffers(\_:offsets:range:)](setobjectbuffers%28__offsets_range_%29.md) (Swift)
- [setObjectBuffers:offsets:withRange:](setobjectbuffers_offsets_withrange_.md) (Objective-C)

The command can also adjust the offset for an entry that you previously set with the [setObjectBytes:length:atIndex:](setobjectbytes%28__length_index_%29.md) method.

> **Tip**

>  If you’re only updating an offset, this method is typically more efficient than rebinding a buffer or byte block with the methods above.

## See Also

### Assigning buffers for object shaders

- [setObjectBuffer:offset:atIndex:](setobjectbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the object shader argument table.
- [setObjectBuffers:offsets:withRange:](setobjectbuffers_offsets_withrange_.md): Encodes a command that assigns multiple buffers to a range of entries in the object shader argument table.
- [setObjectBytes:length:atIndex:](setobjectbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the object shader argument table.
