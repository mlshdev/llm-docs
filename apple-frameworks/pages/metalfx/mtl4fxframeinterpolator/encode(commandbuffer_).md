> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtl4fxframeinterpolator/encode(commandbuffer:)](https://developer.apple.com/documentation/metalfx/mtl4fxframeinterpolator/encode(commandbuffer:))

# encode(commandBuffer:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Encode this frame interpolator’s work into a command buffer.

## Declaration

```swift
func encode(commandBuffer: any MTL4CommandBuffer)
```

## Parameters

- `commandBuffer`: A command buffer into which this frame interpolator encodes work.

# encodeToCommandBuffer: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Encode this frame interpolator’s work into a command buffer.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTL4CommandBuffer>) commandBuffer;
```

## Parameters

- `commandBuffer`: A command buffer into which this frame interpolator encodes work.
