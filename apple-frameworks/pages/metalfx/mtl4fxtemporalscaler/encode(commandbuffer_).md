> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtl4fxtemporalscaler/encode(commandbuffer:)](https://developer.apple.com/documentation/metalfx/mtl4fxtemporalscaler/encode(commandbuffer:))

# encode(commandBuffer:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Adds a scaling pass to a command buffer.

## Declaration

```swift
func encode(commandBuffer: any MTL4CommandBuffer)
```

## Parameters

- `commandBuffer`: A command buffer into which this scaler encodes work.

# encodeToCommandBuffer: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Adds a scaling pass to a command buffer.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTL4CommandBuffer>) commandBuffer;
```

## Parameters

- `commandBuffer`: A command buffer into which this scaler encodes work.
