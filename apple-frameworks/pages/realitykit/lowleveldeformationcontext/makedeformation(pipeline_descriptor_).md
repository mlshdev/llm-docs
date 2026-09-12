> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformationcontext/makedeformation(pipeline:descriptor:)](https://developer.apple.com/documentation/realitykit/lowleveldeformationcontext/makedeformation(pipeline:descriptor:))

# makeDeformation(pipeline:descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a deformation bound to a compiled pipeline.

## Declaration

```swift
final func makeDeformation(pipeline: LowLevelDeformation.Pipeline, descriptor: LowLevelDeformation.Descriptor) throws -> LowLevelDeformation
```

## Parameters

- `pipeline`: The compiled pipeline to bind the deformation to.
- `descriptor`: An object that describes the per-frame data requirements.

<a id="discussion"></a>

## Discussion

The pipeline must originate from this context.

> **Throws**

> If the pipeline belongs to a different context, or if the descriptor is invalid.
