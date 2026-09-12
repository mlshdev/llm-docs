> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer)

# FaceGroupAnalyzer

**Framework:** Media Intelligence  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that detects faces in images and groups them by person.

## Declaration

```swift
final class FaceGroupAnalyzer
```

## Mentioned In

- [Detecting and grouping faces in images](detecting-and-grouping-faces-in-images.md)

<a id="overview"></a>

## Overview

[FaceGroupAnalyzer](facegroupanalyzer.md) is the central object in the face analysis pipeline. It detects faces in images, stores their data persistently in a working directory you choose, and clusters the faces into groups called *entities*, where each entity represents a distinct person.

The analyzer stores all face data and cluster assignments in the directory you pass to [init(workingDirectory:)](facegroupanalyzer/init%28workingdirectory_%29.md). This directory persists between app launches, so subsequent runs resume from where the previous session ended. Call [purge(workingDirectory:)](facegroupanalyzer/purge%28workingdirectory_%29.md) to remove all data from the directory.

Use [identifyFaces(in:)](facegroupanalyzer/identifyfaces%28in_%29.md) to detect and match faces in images without storing anything. This is useful for recognizing people in new images against an existing gallery without modifying the analyzer’s data.

## Topics

### Creating an analyzer

- [init(workingDirectory:)](facegroupanalyzer/init%28workingdirectory_%29.md): Creates a face group analyzer at the specified directory.

### Managing assets

- [workingDirectory](facegroupanalyzer/workingdirectory.md): A directory where the analyzer stores its face data and metadata.
- [insertOrUpdateAssets(\_:)](facegroupanalyzer/insertorupdateassets%28__%29.md): Adds or replaces image assets in the analyzer.
- [deleteAssets(\_:)](facegroupanalyzer/deleteassets%28__%29.md): Removes the specified assets and their associated face data.
- [deleteAllAssets()](facegroupanalyzer/deleteallassets%28%29.md): Removes all assets and their associated face data from the analyzer.
- [purge(workingDirectory:)](facegroupanalyzer/purge%28workingdirectory_%29.md): Removes all analyzer data from the specified directory.

### Updating the gallery

- [state](facegroupanalyzer/state-swift.property.md): A value describing the current processing state of the analyzer.
- [FaceGroupAnalyzer.State](facegroupanalyzer/state-swift.enum.md): The current processing state of a face group analyzer.
- [update(subprogress:)](facegroupanalyzer/update%28subprogress_%29.md): Clusters faces into entities and updates their assignments.

### Retrieving faces and entities

- [allFaces](facegroupanalyzer/allfaces.md): An async sequence of all faces in the analyzer.
- [allFacesByEntityID](facegroupanalyzer/allfacesbyentityid.md): An async sequence of all faces, grouped by entity.
- [allEntities](facegroupanalyzer/allentities.md): An async sequence of all entities in the analyzer.
- [allAssetIDs](facegroupanalyzer/allassetids.md): An async sequence of all asset identifiers in the analyzer.
- [allAssetIDsByEntityID](facegroupanalyzer/allassetidsbyentityid.md): An async sequence of all asset identifiers, grouped by entity.
- [FaceGroupAnalyzer.Face](facegroupanalyzer/face.md): A face detected in an image asset.
- [FaceGroupAnalyzer.Entity](facegroupanalyzer/entity.md): A cluster of faces that belong to the same person.

### Fetching and identifying faces

- [fetchFaces(\_:)](facegroupanalyzer/fetchfaces%28__%29.md): Returns the faces with the specified identifiers.
- [fetchFaces(for:)](facegroupanalyzer/fetchfaces%28for_%29.md): Returns the faces belonging to the specified entities.
- [fetchFaces(in:)](facegroupanalyzer/fetchfaces%28in_%29.md): Returns the faces from the specified assets.
- [fetchAssetIDs(for:)](facegroupanalyzer/fetchassetids%28for_%29.md): Returns the asset identifiers for the specified entities.
- [identifyFaces(in:)](facegroupanalyzer/identifyfaces%28in_%29.md): Detects and identifies faces without modifying the analyzer’s data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image analysis

- [Detecting and grouping faces in images](detecting-and-grouping-faces-in-images.md): Organize photos by person using on-device face detection.
- [MediaIntelligenceImageAsset](mediaintelligenceimageasset.md): An image asset to analyze.
