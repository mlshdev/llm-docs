> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makerenderpipelinestate(descriptor:)-9x6v9

# makeRenderPipelineState(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously compiles a Metal render pipeline state from the given descriptor.

## Declaration

```swift
nonisolated(nonsending) final func makeRenderPipelineState(descriptor: LowLevelRenderPipelineState.Descriptor) async throws -> sending LowLevelRenderPipelineState
```

## Parameters

- `descriptor`: The mesh descriptor, material, render targets, and optional blending configuration.

<a id="return-value"></a>

## Return Value

A compiled [LowLevelRenderPipelineState](../lowlevelrenderpipelinestate.md).

<a id="discussion"></a>

## Discussion

The descriptor’s mesh format, material, and render target configuration are baked into the pipeline at compile time. Create pipeline states once and reuse them across frames.

> **Throws**

> An error if pipeline compilation fails.
