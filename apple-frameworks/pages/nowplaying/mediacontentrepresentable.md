> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacontentrepresentable](https://developer.apple.com/documentation/nowplaying/mediacontentrepresentable)

# MediaContentRepresentable

**Framework:** Now Playing  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol that describes media content being played.

## Declaration

```swift
protocol MediaContentRepresentable : Identifiable
```

<a id="overview"></a>

## Overview

Content types like [MusicContent](musiccontent.md), [PodcastContent](podcastcontent.md), [MovieContent](moviecontent.md), [TVShowContent](tvshowcontent.md), [BookContent](bookcontent.md), [RadioContent](radiocontent.md), [HomeMediaContent](homemediacontent.md), and [GenericContent](genericcontent.md) conform to this protocol. Each content type provides structured metadata appropriate for its media type.

## Topics

### Instance Properties

- [animatedArtwork](mediacontentrepresentable/animatedartwork.md): Animated artwork for this content.
- [appEntityIdentifiers](mediacontentrepresentable/appentityidentifiers.md): The entities that represent this content, making them available to Siri and Apple Intelligence.
- [artwork](mediacontentrepresentable/artwork.md): Artwork for this content.
- [duration](mediacontentrepresentable/duration.md): The duration of this content.
- [genre](mediacontentrepresentable/genre.md): The genre of this content.
- [id](mediacontentrepresentable/id.md): The unique identifier for this content.
- [isExcludedFromSuggestions](mediacontentrepresentable/isexcludedfromsuggestions.md): A Boolean value that indicates whether to exclude this content from media suggestions.
- [isExplicit](mediacontentrepresentable/isexplicit.md): A Boolean value that indicates whether this content is explicit.
- [type](mediacontentrepresentable/type.md): The media type (audio or video).

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

### Conforming Types

- [BookContent](bookcontent.md)
- [GenericContent](genericcontent.md)
- [HomeMediaContent](homemediacontent.md)
- [MovieContent](moviecontent.md)
- [MusicContent](musiccontent.md)
- [PodcastContent](podcastcontent.md)
- [RadioContent](radiocontent.md)
- [TVShowContent](tvshowcontent.md)

## See Also

### Presenting content

- [MusicContent](musiccontent.md): Content representing a music track or song.
- [PodcastContent](podcastcontent.md): Content representing a podcast episode.
- [MovieContent](moviecontent.md): Content representing a movie.
- [TVShowContent](tvshowcontent.md): Content representing a TV show episode.
- [BookContent](bookcontent.md): Content representing an audiobook or book being read aloud.
- [RadioContent](radiocontent.md): Content representing a radio station or live audio stream.
- [HomeMediaContent](homemediacontent.md): Content representing home media or ambient content.
- [GenericContent](genericcontent.md): Content representing generic or unspecified media.
