> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelstructure-swift.enum/load(asset:)](https://developer.apple.com/documentation/coreml/mlmodelstructure-swift.enum/load(asset:))

# load(asset:)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Load the model structure asynchronously from the model asset.

## Declaration

```swift
static func load(asset: MLModelAsset) async throws -> MLModelStructure
```

## Parameters

- `asset`: The model asset.

## See Also

### Loading a model structure

- [load(contentsOf:)](load%28contentsof_%29.md): Load the model structure asynchronously given the location of its on-disk representation.
