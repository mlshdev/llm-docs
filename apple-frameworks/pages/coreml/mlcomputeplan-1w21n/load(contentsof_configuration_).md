> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-1w21n/load(contentsof:configuration:)](https://developer.apple.com/documentation/coreml/mlcomputeplan-1w21n/load(contentsof:configuration:))

# load(contentsOf:configuration:)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Construct the compute plan of a model asynchronously given the location of its on-disk representation.

## Declaration

```swift
static func load(contentsOf url: URL, configuration: MLModelConfiguration) async throws -> MLComputePlan
```

## Parameters

- `url`: The on-disk location of the compiled model (.mlmodelc directory).
- `configuration`: The model configuration.

## Mentioned In

- [Analyzing a Core ML model’s performance in Xcode](../analyzing-a-core-ml-model-s-performance-in-xcode.md)

## See Also

### Loading a compute plan

- [load(asset:configuration:)](load%28asset_configuration_%29.md): Construct the compute plan of a model asynchronously given the model asset.
