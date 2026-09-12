> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrenderer/render(withviewport:rendercommandencoder:renderpassdescriptor:commandqueue:)](https://developer.apple.com/documentation/spritekit/skrenderer/render(withviewport:rendercommandencoder:renderpassdescriptor:commandqueue:))

# render(withViewport:renderCommandEncoder:renderPassDescriptor:commandQueue:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func render(withViewport viewport: CGRect, renderCommandEncoder: any MTLRenderCommandEncoder, renderPassDescriptor: MTLRenderPassDescriptor, commandQueue: any MTLCommandQueue)
```

## See Also

### Rendering the Scene

- [render(withViewport:commandBuffer:renderPassDescriptor:)](render%28withviewport_commandbuffer_renderpassdescriptor_%29.md)

# renderWithViewport:renderCommandEncoder:renderPassDescriptor:commandQueue: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) renderWithViewport:(CGRect) viewport renderCommandEncoder:(id<MTLRenderCommandEncoder>) renderCommandEncoder renderPassDescriptor:(MTLRenderPassDescriptor *) renderPassDescriptor commandQueue:(id<MTLCommandQueue>) commandQueue;
```

## See Also

### Rendering the Scene

- [renderWithViewport:commandBuffer:renderPassDescriptor:](render%28withviewport_commandbuffer_renderpassdescriptor_%29.md)
