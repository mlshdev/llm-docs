> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligenceimageasset](https://developer.apple.com/documentation/mediaintelligence/mediaintelligenceimageasset)

# MediaIntelligenceImageAsset

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An image asset to analyze.

## Declaration

```swift
struct MediaIntelligenceImageAsset
```

## Mentioned In

- [Detecting and grouping faces in images](detecting-and-grouping-faces-in-images.md)

<a id="overview"></a>

## Overview

Create a [MediaIntelligenceImageAsset](mediaintelligenceimageasset.md) to identify an image you want [FaceGroupAnalyzer](facegroupanalyzer.md) to process. Each asset has a unique identifier you assign, and a [MediaIntelligenceImageAsset.Kind](mediaintelligenceimageasset/kind-swift.enum.md) value that describes how the framework accesses the image data.

Use the same [MediaIntelligenceImageAsset.ID](mediaintelligenceimageasset/id-swift.struct.md) value consistently for a specified image. The framework uses this identifier to match new submissions against existing data, so changing the identifier causes the framework to treat the image as a new asset.

## Topics

### Creating an asset

- [init(id:kind:)](mediaintelligenceimageasset/init%28id_kind_%29.md): Creates an image asset with the specified identifier and kind.
- [MediaIntelligenceImageAsset.ID](mediaintelligenceimageasset/id-swift.struct.md): A unique identifier for an image asset.
- [MediaIntelligenceImageAsset.Kind](mediaintelligenceimageasset/kind-swift.enum.md): A value that describes the source of an image asset’s data.

### Inspecting an asset

- [id](mediaintelligenceimageasset/id-swift.property.md): A unique identifier for the asset.
- [kind](mediaintelligenceimageasset/kind-swift.property.md): A value that describes how the framework accesses the image data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image analysis

- [Detecting and grouping faces in images](detecting-and-grouping-faces-in-images.md): Organize photos by person using on-device face detection.
- [FaceGroupAnalyzer](facegroupanalyzer.md): An object that detects faces in images and groups them by person.
