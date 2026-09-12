> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligencevideoasset/kind-swift.enum](https://developer.apple.com/documentation/mediaintelligence/mediaintelligencevideoasset/kind-swift.enum)

# MediaIntelligenceVideoAsset.Kind

**Framework:** Media Intelligence  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A value that describes the source of a video asset’s data.

## Declaration

```swift
enum Kind
```

## Mentioned In

- [Finding the best moments in a video](../finding-the-best-moments-in-a-video.md)

<a id="overview"></a>

## Overview

[MediaIntelligenceVideoAsset.Kind](kind-swift.enum.md) describes how the framework reads a video.

## Topics

### Kinds

- [MediaIntelligenceVideoAsset.Kind.url(\_:)](kind-swift.enum/url%28__%29.md): A video located at the specified URL.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an asset

- [init(id:kind:)](init%28id_kind_%29.md): Creates a video asset with the specified identifier and kind.
- [MediaIntelligenceVideoAsset.ID](id-swift.struct.md): A unique identifier for a video asset.
