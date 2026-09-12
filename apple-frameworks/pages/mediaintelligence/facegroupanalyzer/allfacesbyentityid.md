> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/allfacesbyentityid](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/allfacesbyentityid)

# allFacesByEntityID

**Framework:** Media Intelligence  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An async sequence of all faces, grouped by entity.

## Declaration

```swift
final var allFacesByEntityID: some AsyncSequence<(entityID: FaceGroupAnalyzer.Entity.ID, faces: Array<FaceGroupAnalyzer.Face>), any Error> { get }
```

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

## See Also

### Retrieving faces and entities

- [allFaces](allfaces.md): An async sequence of all faces in the analyzer.
- [allEntities](allentities.md): An async sequence of all entities in the analyzer.
- [allAssetIDs](allassetids.md): An async sequence of all asset identifiers in the analyzer.
- [allAssetIDsByEntityID](allassetidsbyentityid.md): An async sequence of all asset identifiers, grouped by entity.
- [FaceGroupAnalyzer.Face](face.md): A face detected in an image asset.
- [FaceGroupAnalyzer.Entity](entity.md): A cluster of faces that belong to the same person.
