> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/fetchfaces(in:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/fetchfaces(in:))

# fetchFaces(in:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the faces from the specified assets.

## Declaration

```swift
final func fetchFaces(in assetIDs: [MediaIntelligenceImageAsset.ID]) throws -> some AsyncSequence<(assetID: MediaIntelligenceImageAsset.ID, faces: Array<FaceGroupAnalyzer.Face>), any Error>

```

## Parameters

- `assetIDs`: The asset identifiers to look up.

<a id="return-value"></a>

## Return Value

An async sequence of `(assetID, faces)` pairs.

## See Also

### Fetching and identifying faces

- [fetchFaces(\_:)](fetchfaces%28__%29.md): Returns the faces with the specified identifiers.
- [fetchFaces(for:)](fetchfaces%28for_%29.md): Returns the faces belonging to the specified entities.
- [fetchAssetIDs(for:)](fetchassetids%28for_%29.md): Returns the asset identifiers for the specified entities.
- [identifyFaces(in:)](identifyfaces%28in_%29.md): Detects and identifies faces without modifying the analyzer’s data.
