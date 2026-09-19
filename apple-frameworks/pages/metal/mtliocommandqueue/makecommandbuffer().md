> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtliocommandqueue/makecommandbuffer()

# makeCommandBuffer() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an input/output command buffer for the command queue.

## Declaration

```swift
func makeCommandBuffer() -> any MTLIOCommandBuffer
```

## See Also

### Creating a input/output command buffer

- [makeCommandBufferWithUnretainedReferences()](makecommandbufferwithunretainedreferences%28%29.md): Creates an input/output command buffer for the command queue that doesn’t retain the instances you pass to its methods.

# commandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an input/output command buffer for the command queue.

## Declaration

```objectivec
- (id<MTLIOCommandBuffer>) commandBuffer;
```

## See Also

### Creating a input/output command buffer

- [commandBufferWithUnretainedReferences](makecommandbufferwithunretainedreferences%28%29.md): Creates an input/output command buffer for the command queue that doesn’t retain the instances you pass to its methods.
