> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makerenderpipelinestate(descriptor:)-7j32p](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makerenderpipelinestate(descriptor:)-7j32p)

# makeRenderPipelineState(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Synchronous variant of [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29-7j32p.md). Blocks the current thread until compilation completes.

## Declaration

```swift
func makeRenderPipelineState(descriptor: LowLevelRenderPipelineState.Descriptor) throws -> sending LowLevelRenderPipelineState
```

## See Also

### Creating pipeline state

- [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29-55ty6.md): Asynchronously compiles a Metal render pipeline state from the given descriptor.
- [makeArgumentTable(descriptor:buffers:textures:)](makeargumenttable%28descriptor_buffers_textures_%29.md): Creates an argument table that binds the provided buffer slices and textures.
