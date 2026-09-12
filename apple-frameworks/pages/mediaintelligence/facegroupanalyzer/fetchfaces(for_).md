> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/fetchfaces(for:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/fetchfaces(for:))

# fetchFaces(for:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the faces belonging to the specified entities.

## Declaration

```swift
final func fetchFaces(for entityIDs: [FaceGroupAnalyzer.Entity.ID]) throws -> some AsyncSequence<(entityID: FaceGroupAnalyzer.Entity.ID, faces: Array<FaceGroupAnalyzer.Face>), any Error>

```

## Parameters

- `entityIDs`: The entity identifiers to look up.

<a id="return-value"></a>

## Return Value

An async sequence of `(entityID, faces)` pairs.

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

## See Also

### Fetching and identifying faces

- [fetchFaces(\_:)](fetchfaces%28__%29.md): Returns the faces with the specified identifiers.
- [fetchFaces(in:)](fetchfaces%28in_%29.md): Returns the faces from the specified assets.
- [fetchAssetIDs(for:)](fetchassetids%28for_%29.md): Returns the asset identifiers for the specified entities.
- [identifyFaces(in:)](identifyfaces%28in_%29.md): Detects and identifies faces without modifying the analyzer’s data.
