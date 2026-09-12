> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/resources/init(configuration:rendercontext:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/resources/init(configuration:rendercontext:))

# init(configuration:renderContext:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously compiles all shader and pipeline resources for the given configuration and render context.

## Declaration

```swift
nonisolated(nonsending) init(configuration: LowLevelRenderer.Configuration, renderContext: any LowLevelRenderContext) async throws
```

## Parameters

- `configuration`: The renderer configuration that determines which pipelines to compile.
- `renderContext`: The render context that provides the Metal device and factory methods.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if shader or pipeline compilation fails.
