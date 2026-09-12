> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/homemediacontent](https://developer.apple.com/documentation/nowplaying/homemediacontent)

# HomeMediaContent

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content representing home media or ambient content.

## Declaration

```swift
struct HomeMediaContent
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type for home-related media such as security camera feeds, baby monitors, or ambient soundscapes.

## Topics

### Initializers

- [init(id:sourceName:contentDescription:type:duration:artwork:)](homemediacontent/init%28id_sourcename_contentdescription_type_duration_artwork_%29.md): Creates home media content.
- [init(id:sourceName:contentDescription:type:duration:artwork:animatedArtwork:)](homemediacontent/init%28id_sourcename_contentdescription_type_duration_artwork_animatedartwork_%29.md): Creates home media content with static and animated artwork.

### Instance Properties

- [animatedArtwork](homemediacontent/animatedartwork.md): Animated artwork for this content.
- [artwork](homemediacontent/artwork.md): Artwork for this content.
- [contentDescription](homemediacontent/contentdescription.md): A description of the content, if available.
- [duration](homemediacontent/duration.md): The duration of this content.
- [sourceName](homemediacontent/sourcename.md): The name of the home media source or device.
- [type](homemediacontent/type.md): The media type (audio or video).

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
- [GenericContent](genericcontent.md): Content representing generic or unspecified media.
