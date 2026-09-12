> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligenceimageasset/kind-swift.enum](https://developer.apple.com/documentation/mediaintelligence/mediaintelligenceimageasset/kind-swift.enum)

# MediaIntelligenceImageAsset.Kind

**Framework:** Media Intelligence  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A value that describes the source of an image asset’s data.

## Declaration

```swift
enum Kind
```

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

<a id="overview"></a>

## Overview

[MediaIntelligenceImageAsset.Kind](kind-swift.enum.md) describes how the framework reads an image.

## Topics

### Kinds

- [MediaIntelligenceImageAsset.Kind.url(\_:)](kind-swift.enum/url%28__%29.md): An image located at the specified URL.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an asset

- [init(id:kind:)](init%28id_kind_%29.md): Creates an image asset with the specified identifier and kind.
- [MediaIntelligenceImageAsset.ID](id-swift.struct.md): A unique identifier for an image asset.
