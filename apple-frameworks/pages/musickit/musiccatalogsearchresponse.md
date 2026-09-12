> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiccatalogsearchresponse](https://developer.apple.com/documentation/musickit/musiccatalogsearchresponse)

# MusicCatalogSearchResponse

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains results for a catalog search request.

## Declaration

```swift
struct MusicCatalogSearchResponse
```

## Topics

### Instance Properties

- [albums](musiccatalogsearchresponse/albums.md): A collection of albums.
- [artists](musiccatalogsearchresponse/artists.md): A collection of artists.
- [curators](musiccatalogsearchresponse/curators.md): A collection of curators.
- [musicVideos](musiccatalogsearchresponse/musicvideos.md): A collection of music videos.
- [playlists](musiccatalogsearchresponse/playlists.md): A collection of playlists.
- [radioShows](musiccatalogsearchresponse/radioshows.md): A collection of radio shows.
- [recordLabels](musiccatalogsearchresponse/recordlabels.md): A collection of record labels.
- [songs](musiccatalogsearchresponse/songs.md): A collection of songs.
- [stations](musiccatalogsearchresponse/stations.md): A collection of stations.
- [topResults](musiccatalogsearchresponse/topresults.md): A collection of top results.

### Enumerations

- [MusicCatalogSearchResponse.TopResult](musiccatalogsearchresponse/topresult.md): An item that represents one of the top results in a catalog search response.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Catalog Search

- [MusicCatalogSearchRequest](musiccatalogsearchrequest.md): A request that your app uses to fetch items from the Apple Music catalog using a search term.
- [MusicCatalogSearchable](musiccatalogsearchable.md): A protocol for music items that your app can fetch by using a catalog search request.
