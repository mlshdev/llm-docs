> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/radiocontent](https://developer.apple.com/documentation/nowplaying/radiocontent)

# RadioContent

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Content representing a radio station or live audio stream.

## Declaration

```swift
struct RadioContent
```

## Mentioned In

- [Publishing media sessions](publishing-media-sessions.md)

<a id="overview"></a>

## Overview

Use this type for radio stations, live streams, and other continuous audio broadcasts.

## Topics

### Initializers

- [init(id:stationName:programName:type:duration:artwork:)](radiocontent/init%28id_stationname_programname_type_duration_artwork_%29.md): Creates radio station content.
- [init(id:stationName:programName:type:duration:artwork:animatedArtwork:)](radiocontent/init%28id_stationname_programname_type_duration_artwork_animatedartwork_%29.md): Creates radio station content with static and animated artwork.

### Instance Properties

- [animatedArtwork](radiocontent/animatedartwork.md): Animated artwork for this content.
- [artwork](radiocontent/artwork.md): Artwork for this content.
- [duration](radiocontent/duration.md): The duration of this content.
- [programName](radiocontent/programname.md): The current program or show name, if available.
- [stationName](radiocontent/stationname.md): The name of the radio station.
- [type](radiocontent/type.md): The media type (audio or video). Defaults to `.audio` for radio content.

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
- [HomeMediaContent](homemediacontent.md): Content representing home media or ambient content.
- [GenericContent](genericcontent.md): Content representing generic or unspecified media.
