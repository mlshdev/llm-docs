> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/entity](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/entity)

# FaceGroupAnalyzer.Entity

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A cluster of faces that belong to the same person.

## Declaration

```swift
struct Entity
```

<a id="overview"></a>

## Overview

This type represents a distinct person as identified by the framework’s clustering algorithm. After you call [update(subprogress:)](update%28subprogress_%29.md), each detected face receives a [entityID](face/entityid.md) that associates it with an entity.

Use [fetchFaces(for:)](fetchfaces%28for_%29.md) to retrieve all faces that belong to a particular entity, or [fetchAssetIDs(for:)](fetchassetids%28for_%29.md) to find the images in which a person appears.

## Topics

### Identifying an entity

- [id](entity/id-swift.property.md): A unique identifier for the entity.
- [FaceGroupAnalyzer.Entity.ID](entity/id-swift.struct.md): A type that uniquely identifies an entity.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving faces and entities

- [allFaces](allfaces.md): An async sequence of all faces in the analyzer.
- [allFacesByEntityID](allfacesbyentityid.md): An async sequence of all faces, grouped by entity.
- [allEntities](allentities.md): An async sequence of all entities in the analyzer.
- [allAssetIDs](allassetids.md): An async sequence of all asset identifiers in the analyzer.
- [allAssetIDsByEntityID](allassetidsbyentityid.md): An async sequence of all asset identifiers, grouped by entity.
- [FaceGroupAnalyzer.Face](face.md): A face detected in an image asset.
