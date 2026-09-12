> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontentmetadata-swift.struct/init(videoproperties:title:subtitle:artworkrepresentations:)](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontentmetadata-swift.struct/init(videoproperties:title:subtitle:artworkrepresentations:))

# init(videoProperties:title:subtitle:artworkRepresentations:)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a new metadata object.

## Declaration

```swift
init(videoProperties: AVPlaybackUserInterfaceContentMetadata.VideoProperties? = nil, title: String? = nil, subtitle: String? = nil, artworkRepresentations: [AVPlaybackUserInterfaceContentArtwork] = [])
```

## Parameters

- `videoProperties`: Properties describing the video content, or `nil` for content without video.
- `title`: Primary title or name of the media content.
- `subtitle`: Secondary descriptive text.
- `artworkRepresentations`: Array of available artwork representations in various formats and sizes.
