> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscaler/encode(commandbuffer:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscaler/encode(commandbuffer:))

# encode(commandBuffer:) (Swift)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Encode this scaler denoiser’s work into a command buffer.

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer)
```

## Parameters

- `commandBuffer`: A command buffer into which this scaler denoiser encodes work.

# encodeToCommandBuffer: (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Encode this scaler denoiser’s work into a command buffer.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer;
```

## Parameters

- `commandBuffer`: A command buffer into which this scaler denoiser encodes work.
