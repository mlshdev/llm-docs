> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setobjectbuffers(_:offsets:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setobjectbuffers(_:offsets:range:))

# setObjectBuffers(\_:offsets:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

Assigns multiple buffers to a range of entries in the object shader argument table.

## Declaration

```swift
func setObjectBuffers(_ buffers: [(any MTLBuffer)?], offsets: [Int], range: Range<Int>)
```

## Parameters

- `buffers`: An array of [MTLBuffer](../mtlbuffer.md) instances the command assigns to entries in the object shader argument table for buffers.
- `offsets`: An array of integers. Each element represents the location, in bytes, from the start of the corresponding [MTLBuffer](../mtlbuffer.md) element in `buffers` where the object shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `range`: A span of integers that represent the entries in the object shader argument table for buffers. Each entry stores a record of the corresponding element in `buffers` and `offsets`.

<a id="discussion"></a>

## Discussion

By default, the texture at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setObjectBuffers:offsets:withRange:](setobjectbuffers_offsets_withrange_.md).

## See Also

### Assigning buffers for object shaders

- [setObjectBuffer(\_:offset:index:)](setobjectbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the object shader argument table.
- [setObjectBytes(\_:length:index:)](setobjectbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the object shader argument table.
- [setObjectBufferOffset(\_:index:)](setobjectbufferoffset%28__index_%29.md): Updates an entry in the object shader argument table with a new location within the entry’s current buffer.
