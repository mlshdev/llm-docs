> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentbuffers(_:offsets:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentbuffers(_:offsets:range:))

# setFragmentBuffers(\_:offsets:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS 8.0+ · visionOS

Assigns multiple buffers to a range of entries in the fragment shader argument table.

## Declaration

```swift
func setFragmentBuffers(_ buffers: [(any MTLBuffer)?], offsets: [Int], range: Range<Int>)
```

## Parameters

- `buffers`: An array of [MTLBuffer](../mtlbuffer.md) instances the command assigns to entries in the fragment shader argument table for buffers.
- `offsets`: An array of integers. Each element represents the location, in bytes, from the start of the corresponding [MTLBuffer](../mtlbuffer.md) element in `buffers` where the fragment shader argument data begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.
- `range`: A span of integers that represent the entries in the fragment shader argument table for buffers. Each entry stores a record of the corresponding element in `buffers` and `offsets`.

<a id="discussion"></a>

## Discussion

By default, the buffer at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setFragmentBuffers:offsets:withRange:](setfragmentbuffers_offsets_withrange_.md).

## See Also

### Assigning buffers

- [setFragmentBuffer(\_:offset:index:)](setfragmentbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the fragment shader argument table.
- [setFragmentBytes(\_:length:index:)](setfragmentbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the fragment shader argument table.
- [setFragmentBufferOffset(\_:index:)](setfragmentbufferoffset%28__index_%29.md): Updates an entry in the fragment shader argument table with a new location within the entry’s current buffer.
