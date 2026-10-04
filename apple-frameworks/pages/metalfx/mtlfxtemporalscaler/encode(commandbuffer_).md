> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporalscaler/encode(commandbuffer:)

# encode(commandBuffer:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 27.1+

Adds the temporal scaling command to a render pass’s command buffer.

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer)
```

## Parameters

- `commandBuffer`: The destination command buffer for a render pass.

# encodeToCommandBuffer: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 27.1+

Adds the temporal scaling command to a render pass’s command buffer.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer;
```

## Parameters

- `commandBuffer`: The destination command buffer for a render pass.
