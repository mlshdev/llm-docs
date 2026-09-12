> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/pipeline](https://developer.apple.com/documentation/realitykit/lowleveldeformation/pipeline)

# LowLevelDeformation.Pipeline

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled compute pipeline for a specific combination of mesh layouts and deformer stages.

## Declaration

```swift
final class Pipeline
```

<a id="overview"></a>

## Overview

Create a pipeline once and reuse it across frames.

## Topics

### Creating a pipeline

- [LowLevelDeformation.Pipeline.Descriptor](pipeline/descriptor.md): An object that describes the vertex layouts and deformer stages for a pipeline.

## See Also

### Encoding deformation work

- [encode(into:)](encode%28into_%29.md): Encodes the configured deformation passes into the given command encoder.
- [LowLevelDeformation.Error](error.md): The error type thrown by every throwing method and initializer.
