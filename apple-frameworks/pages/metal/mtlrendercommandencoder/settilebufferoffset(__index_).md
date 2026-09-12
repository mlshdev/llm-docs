> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settilebufferoffset(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settilebufferoffset(_:index:))

# setTileBufferOffset(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Updates an entry in the tile shader argument table with a new location within the entry’s current buffer.

## Declaration

```swift
func setTileBufferOffset(_ offset: Int, index: Int)
```

## Parameters

- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the tile shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the tile shader argument table for buffers that already stores a record of an [MTLBuffer](../mtlbuffer.md).

<a id="discussion"></a>

## Discussion

The command this method encodes changes the offset for a fragment buffer that already has a previous assignment from one of your earlier commands.

For more information, see:

- [setTileBuffer(\_:offset:index:)](settilebuffer%28__offset_index_%29.md)
- [setTileBuffers(\_:offsets:range:)](settilebuffers%28__offsets_range_%29.md) (Swift)
- [setTileBuffers:offsets:withRange:](settilebuffers_offsets_withrange_.md) (Objective-C)

The command can also adjust the offset for an entry that you previously set with the [setTileBytes(\_:length:index:)](settilebytes%28__length_index_%29.md) method.

> **Tip**

>  If you’re only updating an offset, this method is typically more efficient than rebinding a buffer or byte block with the methods above.

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setTileBuffer(\_:offset:index:)](settilebuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the tile shader argument table.
- [setTileBuffers(\_:offsets:range:)](settilebuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the tile shader argument table.
- [setTileBytes(\_:length:index:)](settilebytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the tile shader argument table.

# setTileBufferOffset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Updates an entry in the tile shader argument table with a new location within the entry’s current buffer.

## Declaration

```objectivec
- (void) setTileBufferOffset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `offset`: An integer that represents the location, in bytes, from the start of `buffer` where the tile shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `index`: An integer that represents the entry in the tile shader argument table for buffers that already stores a record of an [MTLBuffer](../mtlbuffer.md).

<a id="discussion"></a>

## Discussion

The command this method encodes changes the offset for a fragment buffer that already has a previous assignment from one of your earlier commands.

For more information, see:

- [setTileBuffer:offset:atIndex:](settilebuffer%28__offset_index_%29.md)
- [setTileBuffers(\_:offsets:range:)](settilebuffers%28__offsets_range_%29.md) (Swift)
- [setTileBuffers:offsets:withRange:](settilebuffers_offsets_withrange_.md) (Objective-C)

The command can also adjust the offset for an entry that you previously set with the [setTileBytes:length:atIndex:](settilebytes%28__length_index_%29.md) method.

> **Tip**

>  If you’re only updating an offset, this method is typically more efficient than rebinding a buffer or byte block with the methods above.

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setTileBuffer:offset:atIndex:](settilebuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the tile shader argument table.
- [setTileBuffers:offsets:withRange:](settilebuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the tile shader argument table.
- [setTileBytes:length:atIndex:](settilebytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the tile shader argument table.
