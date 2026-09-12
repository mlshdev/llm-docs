> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/optimizeindirectcommandbuffer:withrange:](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/optimizeindirectcommandbuffer:withrange:)

# optimizeIndirectCommandBuffer:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encode a command to attempt to improve the performance of a range of commands within an indirect command buffer.

## Declaration

```objectivec
- (void) optimizeIndirectCommandBuffer:(id<MTLIndirectCommandBuffer>) indirectCommandBuffer withRange:(NSRange) range;
```

## Parameters

- `indirectCommandBuffer`: An [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance that this command optimizes.
- `range`: A range of commands within `indirectCommandBuffer`.

## See Also

### Encoding optimization commands

- [optimizeContentsForCPUAccess:](optimizecontents%28forcpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents.
- [optimizeContentsForCPUAccess:slice:level:](optimizecontents%28forcpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of CPU accesses to its contents in a specific region.
- [optimizeContentsForGPUAccess:](optimizecontents%28forgpuaccess_%29.md): Encodes a command that modifies the contents of a texture to improve the performance of GPU accesses to its contents.
- [optimizeContentsForGPUAccess:slice:level:](optimizecontents%28forgpuaccess_slice_level_%29.md): Encodes a command that modifies the contents of a texture instance to improve the performance of GPU accesses to its contents in a specific region.
