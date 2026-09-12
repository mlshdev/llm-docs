> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makeargumenttable(descriptor:buffers:textures:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makeargumenttable(descriptor:buffers:textures:))

# makeArgumentTable(descriptor:buffers:textures:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an argument table that binds the provided buffer slices and textures.

## Declaration

```swift
func makeArgumentTable(descriptor: LowLevelArgumentTable.Descriptor, buffers: [LowLevelBufferSlice], textures: [LowLevelTextureResource]) throws -> LowLevelArgumentTable
```

## Parameters

- `descriptor`: The argument table layout describing expected buffer and texture slots.
- `buffers`: The buffer slices to bind, in slot order.
- `textures`: The texture resources to bind, in slot order.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelArgumentTable](../lowlevelargumenttable.md).

<a id="discussion"></a>

## Discussion

The `descriptor` must match the `argumentTableDescriptor` of the corresponding material function. The counts and sizes of `buffers` and `textures` must match the slots declared in the descriptor.

> **Throws**

> An error if the counts or sizes of `buffers` or `textures` do not match the descriptor, or if the underlying GPU allocation fails.

## See Also

### Creating pipeline state

- [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29-7j32p.md): Synchronous variant of [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29-7j32p.md). Blocks the current thread until compilation completes.
- [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29-55ty6.md): Asynchronously compiles a Metal render pipeline state from the given descriptor.
