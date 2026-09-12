> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontentmetadata-swift.struct](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontentmetadata-swift.struct)

# AVPlaybackUserInterfaceContentMetadata

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Swift-friendly structure representing media metadata.

## Declaration

```swift
struct AVPlaybackUserInterfaceContentMetadata
```

<a id="overview"></a>

## Overview

This structure provides metadata information about media content including title, artwork, and content type. Use this to provide rich information for playback interfaces and system integrations.

## Topics

### Structures

- [AVPlaybackUserInterfaceContentMetadata.VideoProperties](avplaybackuserinterfacecontentmetadata-swift.struct/videoproperties-swift.struct.md): Properties specific to video content.

### Initializers

- [init(videoProperties:title:subtitle:artworkRepresentations:)](avplaybackuserinterfacecontentmetadata-swift.struct/init%28videoproperties_title_subtitle_artworkrepresentations_%29.md): Creates a new metadata object.

### Instance Properties

- [artworkRepresentations](avplaybackuserinterfacecontentmetadata-swift.struct/artworkrepresentations.md): Array of available artwork representations in various formats and sizes.
- [subtitle](avplaybackuserinterfacecontentmetadata-swift.struct/subtitle.md): Secondary descriptive text such as artist name or episode description.
- [title](avplaybackuserinterfacecontentmetadata-swift.struct/title.md): Primary title or name of the media content.
- [videoProperties](avplaybackuserinterfacecontentmetadata-swift.struct/videoproperties-swift.property.md): Properties describing the video content. `nil` if the content contains no video.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metadata

- [AVPlaybackUserInterfaceMetadataProviding](avplaybackuserinterfacemetadataproviding-814y4.md): Provides metadata information about media content including title, artwork, and content type.
- [AVPlaybackUserInterfaceContentArtwork](avplaybackuserinterfacecontentartwork.md): Base class representing artwork or cover art for media content.
- [AVPlaybackUserInterfaceContentURLArtwork](avplaybackuserinterfacecontenturlartwork.md): An artwork subclass that references artwork via a URL and content type.
