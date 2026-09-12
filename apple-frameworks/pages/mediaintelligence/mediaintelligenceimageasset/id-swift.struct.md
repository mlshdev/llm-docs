> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligenceimageasset/id-swift.struct](https://developer.apple.com/documentation/mediaintelligence/mediaintelligenceimageasset/id-swift.struct)

# MediaIntelligenceImageAsset.ID

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A unique identifier for an image asset.

## Declaration

```swift
struct ID
```

<a id="overview"></a>

## Overview

[MediaIntelligenceImageAsset.ID](id-swift.struct.md) is a string-backed identifier you assign to each image asset. The framework uses this value to track assets across calls to [insertOrUpdateAssets(\_:)](../facegroupanalyzer/insertorupdateassets%28__%29.md) and [deleteAssets(\_:)](../facegroupanalyzer/deleteassets%28__%29.md).

Choose identifiers that remain constant for a specified image. For example, a photo library asset identifier or a file path that doesn’t change.

## Topics

### Creating an ID

- [init(\_:)](id-swift.struct/init%28__%29.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an asset

- [init(id:kind:)](init%28id_kind_%29.md): Creates an image asset with the specified identifier and kind.
- [MediaIntelligenceImageAsset.Kind](kind-swift.enum.md): A value that describes the source of an image asset’s data.
