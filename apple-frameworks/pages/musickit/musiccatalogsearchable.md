> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiccatalogsearchable](https://developer.apple.com/documentation/musickit/musiccatalogsearchable)

# MusicCatalogSearchable

**Framework:** MusicKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A protocol for music items that your app can fetch by using a catalog search request.

## Declaration

```swift
protocol MusicCatalogSearchable : MusicItem
```

## Relationships

### Inherits From

- [MusicItem](musicitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [Album](album.md)
- [Artist](artist.md)
- [Curator](curator.md)
- [MusicVideo](musicvideo.md)
- [Playlist](playlist.md)
- [RadioShow](radioshow.md)
- [RecordLabel](recordlabel.md)
- [Song](song.md)
- [Station](station.md)

## See Also

### Catalog Search

- [MusicCatalogSearchRequest](musiccatalogsearchrequest.md): A request that your app uses to fetch items from the Apple Music catalog using a search term.
- [MusicCatalogSearchResponse](musiccatalogsearchresponse.md): An object that contains results for a catalog search request.
