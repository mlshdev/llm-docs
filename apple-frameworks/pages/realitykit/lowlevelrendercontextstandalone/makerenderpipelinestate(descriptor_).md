> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makerenderpipelinestate(descriptor:)

# makeRenderPipelineState(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Synchronous variant of [makeRenderPipelineState(descriptor:)](makerenderpipelinestate%28descriptor_%29.md). Blocks the current thread until compilation completes.

## Declaration

```swift
final func makeRenderPipelineState(descriptor: LowLevelRenderPipelineState.Descriptor) throws -> sending LowLevelRenderPipelineState
```
