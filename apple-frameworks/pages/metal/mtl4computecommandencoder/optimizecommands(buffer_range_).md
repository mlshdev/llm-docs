> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/optimizecommands(buffer:range:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/optimizecommands(buffer:range:))

# optimizeCommands(buffer:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encode a command to attempt to improve the performance of a range of commands within an indirect command buffer.

## Declaration

```swift
func optimizeCommands(buffer: any MTLIndirectCommandBuffer, range: Range<Int>)
```

## Parameters

- `buffer`: An [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance that this command optimizes.
- `range`: A range of commands within `indirectCommandBuffer`.

## See Also

### Encoding optimization commands

- [optimizeContents(forCPUAccess:)](optimizecontents%28forcpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents.
- [optimizeContents(forCPUAccess:slice:level:)](optimizecontents%28forcpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents in a specific region.
- [optimizeContents(forGPUAccess:)](optimizecontents%28forgpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of GPU accesses to its contents.
- [optimizeContents(forGPUAccess:slice:level:)](optimizecontents%28forgpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture instance to improve the performance of GPU accesses to its contents in a specific region.
