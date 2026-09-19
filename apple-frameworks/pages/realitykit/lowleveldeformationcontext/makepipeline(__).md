> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowleveldeformationcontext/makepipeline(_:)

# makePipeline(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a compute pipeline synchronously.

## Declaration

```swift
final func makePipeline(_ descriptor: LowLevelDeformation.Pipeline.Descriptor) throws -> LowLevelDeformation.Pipeline
```

## Parameters

- `descriptor`: An object that describes the vertex layouts and deformer stages.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the descriptor is invalid.
