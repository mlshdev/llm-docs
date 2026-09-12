> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/face](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/face)

# FaceGroupAnalyzer.Face

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A face detected in an image asset.

## Declaration

```swift
struct Face
```

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

<a id="overview"></a>

## Overview

This type represents a single face that [FaceGroupAnalyzer](../facegroupanalyzer.md) detects in an image. It records the face’s location within the image, the identifier of the image it came from, and after [update(subprogress:)](update%28subprogress_%29.md) runs, the entity the face belongs to.

The [bounds](face/bounds.md) rectangle uses normalized coordinates in the range `0.0` to `1.0` along both axes, with the origin at the top-left corner of the image.

## Topics

### Identifying a face

- [id](face/id-swift.property.md): A unique identifier for the face.
- [entityID](face/entityid.md): An identifier for the entity this face belongs to.
- [assetID](face/assetid.md): An identifier for the image asset that contains this face.
- [FaceGroupAnalyzer.Face.ID](face/id-swift.struct.md): A unique identifier for a detected face.

### Locating a face

- [bounds](face/bounds.md): A normalized rectangle describing the location of the face within its source image.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving faces and entities

- [allFaces](allfaces.md): An async sequence of all faces in the analyzer.
- [allFacesByEntityID](allfacesbyentityid.md): An async sequence of all faces, grouped by entity.
- [allEntities](allentities.md): An async sequence of all entities in the analyzer.
- [allAssetIDs](allassetids.md): An async sequence of all asset identifiers in the analyzer.
- [allAssetIDsByEntityID](allassetidsbyentityid.md): An async sequence of all asset identifiers, grouped by entity.
- [FaceGroupAnalyzer.Entity](entity.md): A cluster of faces that belong to the same person.
