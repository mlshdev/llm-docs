> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4computecommandencoder/resetcommandsinbuffer:withrange:

# resetCommandsInBuffer:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that resets a range of commands in an indirect command buffer.

## Declaration

```objectivec
- (void) resetCommandsInBuffer:(id<MTLIndirectCommandBuffer>) buffer withRange:(NSRange) range;
```

## Parameters

- `buffer`: An [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) the command resets.
- `range`: A range of commands within `buffer`.
