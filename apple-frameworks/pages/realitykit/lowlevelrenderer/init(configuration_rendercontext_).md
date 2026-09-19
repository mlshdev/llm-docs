> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrenderer/init(configuration:rendercontext:)

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
