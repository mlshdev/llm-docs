> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligencevideoasset/id-swift.struct](https://developer.apple.com/documentation/mediaintelligence/mediaintelligencevideoasset/id-swift.struct)

# MediaIntelligenceVideoAsset.ID

**Framework:** Media Intelligence  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A unique identifier for a video asset.

## Declaration

```swift
struct ID
```

<a id="overview"></a>

## Overview

This value is a string-backed identifier that you assign to each video asset. Choose a value that uniquely identifies the video in your app, such as a file name or a database key.

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

- [init(id:kind:)](init%28id_kind_%29.md): Creates a video asset with the specified identifier and kind.
- [MediaIntelligenceVideoAsset.Kind](kind-swift.enum.md): A value that describes the source of a video asset’s data.
