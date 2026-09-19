> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/resources

# LowLevelRenderer.Resources

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Prepared GPU resources for a renderer.

## Declaration

```swift
struct Resources
```

## Topics

### Creating resources

- [init(configuration:renderContext:)](resources/init%28configuration_rendercontext_%29.md): Asynchronously compiles all shader and pipeline resources for the given configuration and render context.

## See Also

### Rendering a frame

- [render(using:\_:)](render%28using___%29.md): Encodes draw calls for the frame into the given command buffer using a caller-controlled render callback.
- [LowLevelRenderer.RenderState](renderstate.md): The per-frame render state passed to the `render(using:_:)` callback.
