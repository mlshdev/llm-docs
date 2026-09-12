> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelasset/summary(includingstatistics:)](https://developer.apple.com/documentation/coreai/aimodelasset/summary(includingstatistics:))

# summary(includingStatistics:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the model summary.

## Declaration

```swift
func summary(includingStatistics: Bool) throws -> AIModelAsset.Summary?
```

## Parameters

- `includingStatistics`: A Boolean value that indicates whether to read detailed model statistics. If `false`, the summary contains only version information and function signatures. Including model statistics is considerably slower for large models.

<a id="return-value"></a>

## Return Value

The model summary, or `nil` if no program bytecode exists.

## See Also

### Inspecting an asset

- [metadata](metadata-swift.property.md): The author-provided metadata for the model asset.
- [url](url.md): The file URL of the model asset bundle on disk.
