> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/copyindirectcommandbuffer:sourcerange:destination:destinationindex:](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/copyindirectcommandbuffer:sourcerange:destination:destinationindex:)

# copyIndirectCommandBuffer:sourceRange:destination:destinationIndex:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that copies commands from an indirect command buffer into another.

## Declaration

```objectivec
- (void) copyIndirectCommandBuffer:(id<MTLIndirectCommandBuffer>) source sourceRange:(NSRange) sourceRange destination:(id<MTLIndirectCommandBuffer>) destination destinationIndex:(NSUInteger) destinationIndex;
```

## Parameters

- `source`: An [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance from where the command copies.
- `sourceRange`: The range of commands in `source` to copy. The copy operation requires that the source range starts at a valid execution point.
- `destination`: Another [MTLIndirectCommandBuffer](../mtlindirectcommandbuffer.md) instance into which the command copies.
- `destinationIndex`: An index in `destination` into where the command copies content to. The copy operation requires that the destination index is a valid execution point with enough space left in `destination` to accommodate `sourceRange.count` commands.
