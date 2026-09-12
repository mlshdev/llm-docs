> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/fetchfaces(_:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/fetchfaces(_:))

# fetchFaces(\_:)

**Framework:** Media Intelligence  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the faces with the specified identifiers.

## Declaration

```swift
final func fetchFaces(_ faceIDs: [FaceGroupAnalyzer.Face.ID]) throws -> some AsyncSequence<FaceGroupAnalyzer.Face, any Error>

```

## Parameters

- `faceIDs`: The face identifiers to look up.

<a id="return-value"></a>

## Return Value

An async sequence of matching [FaceGroupAnalyzer.Face](face.md) values.

## See Also

### Fetching and identifying faces

- [fetchFaces(for:)](fetchfaces%28for_%29.md): Returns the faces belonging to the specified entities.
- [fetchFaces(in:)](fetchfaces%28in_%29.md): Returns the faces from the specified assets.
- [fetchAssetIDs(for:)](fetchassetids%28for_%29.md): Returns the asset identifiers for the specified entities.
- [identifyFaces(in:)](identifyfaces%28in_%29.md): Detects and identifies faces without modifying the analyzer’s data.
