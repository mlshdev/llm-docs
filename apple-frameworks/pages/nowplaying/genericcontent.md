> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/genericcontent](https://developer.apple.com/documentation/nowplaying/genericcontent)

# GenericContent

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content representing generic or unspecified media.

## Declaration

```swift
struct GenericContent
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type when the media doesn’t fit into other specific content types such as [MusicContent](musiccontent.md), [PodcastContent](podcastcontent.md), [MovieContent](moviecontent.md), or [TVShowContent](tvshowcontent.md). This provides maximum flexibility for custom media types.

## Topics

### Initializers

- [init(id:title:subtitle:type:duration:artwork:)](genericcontent/init%28id_title_subtitle_type_duration_artwork_%29.md): Creates generic media content.
- [init(id:title:subtitle:type:duration:artwork:animatedArtwork:)](genericcontent/init%28id_title_subtitle_type_duration_artwork_animatedartwork_%29.md): Creates generic media content with static and animated artwork.

### Instance Properties

- [animatedArtwork](genericcontent/animatedartwork.md): Animated artwork for this content.
- [artwork](genericcontent/artwork.md): Artwork for this content.
- [duration](genericcontent/duration.md): The duration of this content.
- [subtitle](genericcontent/subtitle.md): An optional subtitle or secondary description.
- [title](genericcontent/title.md): The title of the content.
- [type](genericcontent/type.md): The media type (audio or video).

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MediaContentRepresentable](mediacontentrepresentable.md)

## See Also

### Presenting content

- [MediaContentRepresentable](mediacontentrepresentable.md): A protocol that describes media content being played.
- [MusicContent](musiccontent.md): Content representing a music track or song.
- [PodcastContent](podcastcontent.md): Content representing a podcast episode.
- [MovieContent](moviecontent.md): Content representing a movie.
- [TVShowContent](tvshowcontent.md): Content representing a TV show episode.
- [BookContent](bookcontent.md): Content representing an audiobook or book being read aloud.
- [RadioContent](radiocontent.md): Content representing a radio station or live audio stream.
- [HomeMediaContent](homemediacontent.md): Content representing home media or ambient content.
