> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrenderer/render(withviewport:commandbuffer:renderpassdescriptor:)](https://developer.apple.com/documentation/spritekit/skrenderer/render(withviewport:commandbuffer:renderpassdescriptor:))

# render(withViewport:commandBuffer:renderPassDescriptor:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func render(withViewport viewport: CGRect, commandBuffer: any MTLCommandBuffer, renderPassDescriptor: MTLRenderPassDescriptor)
```

## Mentioned In

- [Choosing a SpriteKit Scene Renderer](../choosing-a-spritekit-scene-renderer.md)

## See Also

### Rendering the Scene

- [render(withViewport:renderCommandEncoder:renderPassDescriptor:commandQueue:)](render%28withviewport_rendercommandencoder_renderpassdescriptor_commandqueue_%29.md)

# renderWithViewport:commandBuffer:renderPassDescriptor: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) renderWithViewport:(CGRect) viewport commandBuffer:(id<MTLCommandBuffer>) commandBuffer renderPassDescriptor:(MTLRenderPassDescriptor *) renderPassDescriptor;
```

## Mentioned In

- [Choosing a SpriteKit Scene Renderer](../choosing-a-spritekit-scene-renderer.md)

## See Also

### Rendering the Scene

- [renderWithViewport:renderCommandEncoder:renderPassDescriptor:commandQueue:](render%28withviewport_rendercommandencoder_renderpassdescriptor_commandqueue_%29.md)
