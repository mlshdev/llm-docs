> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/identifyfaces(in:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/identifyfaces(in:))

# identifyFaces(in:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Detects and identifies faces without modifying the analyzer’s data.

## Declaration

```swift
final nonisolated(nonsending) func identifyFaces(in assets: [MediaIntelligenceImageAsset]) async throws -> some AsyncSequence<(assetID: MediaIntelligenceImageAsset.ID, faces: Array<FaceGroupAnalyzer.Face>), any Error>

```

## Parameters

- `assets`: The image assets to analyze.

<a id="return-value"></a>

## Return Value

An async sequence of `(assetID, faces)` pairs.

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

<a id="discussion"></a>

## Discussion

Use this method to recognize people in new images against the existing gallery without storing any face data. Each returned face has an [entityID](face/entityid.md) if the framework matched it to a known entity, or `nil` if no match was found.

## See Also

### Fetching and identifying faces

- [fetchFaces(\_:)](fetchfaces%28__%29.md): Returns the faces with the specified identifiers.
- [fetchFaces(for:)](fetchfaces%28for_%29.md): Returns the faces belonging to the specified entities.
- [fetchFaces(in:)](fetchfaces%28in_%29.md): Returns the faces from the specified assets.
- [fetchAssetIDs(for:)](fetchassetids%28for_%29.md): Returns the asset identifiers for the specified entities.
