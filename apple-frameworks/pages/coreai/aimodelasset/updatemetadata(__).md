> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelasset/updatemetadata(_:)](https://developer.apple.com/documentation/coreai/aimodelasset/updatemetadata(_:))

# updateMetadata(\_:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Updates the asset metadata.

## Declaration

```swift
mutating func updateMetadata(_ updates: (inout AIModelAsset.Metadata) throws -> Void) throws
```

<a id="discussion"></a>

## Discussion

Pass a closure that takes the existing metadata and updates it. After the closure executes, this method writes the new metadata to the model asset on disk.

<a id="Example"></a>

## Example

```swift
var asset = try AIModelAsset(contentsOf: input)
try asset.updateMetadata { metadata in
  metadata.author = "Alice"
  metadata.description = "An example model"
  metadata["iterations"] = 1000 // Custom metadata
}
```

## See Also

### Modifying an asset

- [removeDerivedArtifacts()](removederivedartifacts%28%29.md): Removes all derived artifacts for the model’s program.
