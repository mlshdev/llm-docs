> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-1w21n/load(asset:configuration:)](https://developer.apple.com/documentation/coreml/mlcomputeplan-1w21n/load(asset:configuration:))

# load(asset:configuration:)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Construct the compute plan of a model asynchronously given the model asset.

## Declaration

```swift
static func load(asset: MLModelAsset, configuration: MLModelConfiguration) async throws -> MLComputePlan
```

## Parameters

- `asset`: The model asset.
- `configuration`: The model configuration.

## See Also

### Loading a compute plan

- [load(contentsOf:configuration:)](load%28contentsof_configuration_%29.md): Construct the compute plan of a model asynchronously given the location of its on-disk representation.
