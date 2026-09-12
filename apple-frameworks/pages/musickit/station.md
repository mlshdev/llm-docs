> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/station](https://developer.apple.com/documentation/musickit/station)

# Station

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A music item that represents a station.

## Declaration

```swift
struct Station
```

## Topics

### Instance Properties

- [artwork](station/artwork.md): The station artwork.
- [contentRating](station/contentrating.md): The rating of the content that potentially plays while playing the station.
- [duration](station/duration.md): The duration of the stream.
- [editorialNotes](station/editorialnotes.md): The notes about the station that appear in the Music app.
- [episodeNumber](station/episodenumber.md): The episode number of the station.
- [id](station/id.md): The unique identifier for the station.
- [isLive](station/islive.md): A Boolean value that indicates whether the station is live.
- [name](station/name.md): The name of the station.
- [playParameters](station/playparameters.md): The parameters to use to play the station.
- [stationProviderName](station/stationprovidername.md): The name of the entity that provides the station.
- [url](station/url.md): The URL for the station.

### Default Implementations

- [FilterableMusicItem Implementations](station/filterablemusicitem-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FilterableMusicItem](filterablemusicitem.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MusicCatalogSearchable](musiccatalogsearchable.md)
- [MusicItem](musicitem.md)
- [MusicPersonalRecommendationItem](musicpersonalrecommendationitem.md)
- [MusicPropertyContainer](musicpropertycontainer.md)
- [MusicRecentlyPlayedRequestable](musicrecentlyplayedrequestable.md)
- [PlayableMusicItem](playablemusicitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Music Items

- [Album](album.md): A music item that represents an album.
- [Artist](artist.md): A music item that represents an artist.
- [Curator](curator.md): A music item that represents a curator.
- [Genre](genre.md): A music item that represents a genre.
- [MusicVideo](musicvideo.md): A music item that represents a music video.
- [Playlist](playlist.md): A music item that represents a playlist.
- [RadioShow](radioshow.md): A music item that represents a radio show.
- [RecordLabel](recordlabel.md): A music item that represents a record label.
- [Song](song.md): A music item that represents a song.
- [Track](track.md): A music item that represents a track.
