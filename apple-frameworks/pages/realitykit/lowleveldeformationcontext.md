> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformationcontext](https://developer.apple.com/documentation/realitykit/lowleveldeformationcontext)

# LowLevelDeformationContext

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that manages shared resources for [LowLevelDeformation](lowleveldeformation.md) instances.

## Declaration

```swift
final class LowLevelDeformationContext
```

## Topics

### Creating deformation pipelines

- [makeDeformation(pipeline:descriptor:)](lowleveldeformationcontext/makedeformation%28pipeline_descriptor_%29.md): Creates a deformation bound to a compiled pipeline.

### Accessing the device

- [device](lowleveldeformationcontext/device.md): The Metal device this context targets.

### Initializers

- [init(\_:)](lowleveldeformationcontext/init%28__%29.md): Creates a context targeting the specified Metal device.

### Instance Methods

- [makePipeline(\_:)](lowleveldeformationcontext/makepipeline%28__%29.md): Creates a compute pipeline synchronously.

## See Also

### Low-level deformation

- [LowLevelDeformation](lowleveldeformation.md): An object that encodes blend-shape, skinning, and renormalization passes into a Metal compute command encoder.
