> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settilebytes(_:length:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settilebytes(_:length:index:))

# setTileBytes(\_:length:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Creates a buffer from bytes and assigns it to an entry in the tile shader argument table.

## Declaration

```swift
func setTileBytes(_ bytes: UnsafeRawPointer, length: Int, index: Int)
```

## Parameters

- `bytes`: A pointer to argument data the method copies to an [MTLBuffer](../mtlbuffer.md) and assigns to an entry in the tile shader argument table for buffers.
- `length`: The number of bytes the method copies from the `bytes` pointer.
- `index`: An integer that represents the entry in the tile shader argument table for buffers that stores a record of the [MTLBuffer](../mtlbuffer.md) the method creates from `bytes`.

<a id="discussion"></a>

## Discussion

The method is equivalent to creating an [MTLBuffer](../mtlbuffer.md) instance that contains the same data as `bytes` and calling the [setTileBuffer(\_:offset:index:)](settilebuffer%28__offset_index_%29.md) method. However, this method avoids the overhead of creating a buffer to store your data; instead, Metal manages the data.

> **Important**

>  Only call this method for single-use data that’s smaller than 4 KB.

For data that’s more than 4 KB, create an [MTLBuffer](../mtlbuffer.md) instance and pass it to [setTileBuffer(\_:offset:index:)](settilebuffer%28__offset_index_%29.md).

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setTileBuffer(\_:offset:index:)](settilebuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the tile shader argument table.
- [setTileBuffers(\_:offsets:range:)](settilebuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the tile shader argument table.
- [setTileBufferOffset(\_:index:)](settilebufferoffset%28__index_%29.md): Updates an entry in the tile shader argument table with a new location within the entry’s current buffer.

# setTileBytes:length:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Creates a buffer from bytes and assigns it to an entry in the tile shader argument table.

## Declaration

```objectivec
- (void) setTileBytes:(const void *) bytes length:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `bytes`: A pointer to argument data the method copies to an [MTLBuffer](../mtlbuffer.md) and assigns to an entry in the tile shader argument table for buffers.
- `length`: The number of bytes the method copies from the `bytes` pointer.
- `index`: An integer that represents the entry in the tile shader argument table for buffers that stores a record of the [MTLBuffer](../mtlbuffer.md) the method creates from `bytes`.

<a id="discussion"></a>

## Discussion

The method is equivalent to creating an [MTLBuffer](../mtlbuffer.md) instance that contains the same data as `bytes` and calling the [setTileBuffer:offset:atIndex:](settilebuffer%28__offset_index_%29.md) method. However, this method avoids the overhead of creating a buffer to store your data; instead, Metal manages the data.

> **Important**

>  Only call this method for single-use data that’s smaller than 4 KB.

For data that’s more than 4 KB, create an [MTLBuffer](../mtlbuffer.md) instance and pass it to [setTileBuffer:offset:atIndex:](settilebuffer%28__offset_index_%29.md).

By default, the buffer at each index is `nil`.

## See Also

### Assigning buffers

- [setTileBuffer:offset:atIndex:](settilebuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the tile shader argument table.
- [setTileBuffers:offsets:withRange:](settilebuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the tile shader argument table.
- [setTileBufferOffset:atIndex:](settilebufferoffset%28__index_%29.md): Updates an entry in the tile shader argument table with a new location within the entry’s current buffer.
