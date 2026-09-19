> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/allassetids

# allAssetIDs

**Framework:** Media Intelligence  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An async sequence of all asset identifiers in the analyzer.

## Declaration

```swift
final var allAssetIDs: some AsyncSequence<MediaIntelligenceImageAsset.ID, any Error> { get }
```

## See Also

### Retrieving faces and entities

- [allFaces](allfaces.md): An async sequence of all faces in the analyzer.
- [allFacesByEntityID](allfacesbyentityid.md): An async sequence of all faces, grouped by entity.
- [allEntities](allentities.md): An async sequence of all entities in the analyzer.
- [allAssetIDsByEntityID](allassetidsbyentityid.md): An async sequence of all asset identifiers, grouped by entity.
- [FaceGroupAnalyzer.Face](face.md): A face detected in an image asset.
- [FaceGroupAnalyzer.Entity](entity.md): A cluster of faces that belong to the same person.
