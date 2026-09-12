> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/fetchassetids(for:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/fetchassetids(for:))

# fetchAssetIDs(for:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the asset identifiers for the specified entities.

## Declaration

```swift
final func fetchAssetIDs(for entityIDs: [FaceGroupAnalyzer.Entity.ID]) throws -> some AsyncSequence<(entityID: FaceGroupAnalyzer.Entity.ID, assetIDs: Array<MediaIntelligenceImageAsset.ID>), any Error>

```

## Parameters

- `entityIDs`: The entity identifiers to look up.

<a id="return-value"></a>

## Return Value

An async sequence of `(entityID, assetIDs)` pairs.

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

## See Also

### Fetching and identifying faces

- [fetchFaces(\_:)](fetchfaces%28__%29.md): Returns the faces with the specified identifiers.
- [fetchFaces(for:)](fetchfaces%28for_%29.md): Returns the faces belonging to the specified entities.
- [fetchFaces(in:)](fetchfaces%28in_%29.md): Returns the faces from the specified assets.
- [identifyFaces(in:)](identifyfaces%28in_%29.md): Detects and identifies faces without modifying the analyzer’s data.
