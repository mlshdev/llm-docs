> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/init(configuration:rendercontext:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/init(configuration:rendercontext:))

# init(configuration:renderContext:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a renderer, asynchronously compiling all required GPU resources.

## Declaration

```swift
nonisolated(nonsending) convenience init(configuration: LowLevelRenderer.Configuration, renderContext: any LowLevelRenderContext) async throws
```

## Parameters

- `configuration`: The immutable configuration for this renderer, including output formats and MSAA settings.
- `renderContext`: The render context that provides the Metal device and factory methods.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if GPU resource compilation fails.

## See Also

### Creating a renderer

- [LowLevelRenderer.Configuration](configuration.md): The configuration for a renderer.
