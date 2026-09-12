> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiccatalogresourceresponse](https://developer.apple.com/documentation/musickit/musiccatalogresourceresponse)

# MusicCatalogResourceResponse

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that contains results for a catalog resource request.

## Declaration

```swift
struct MusicCatalogResourceResponse<MusicItemType> where MusicItemType : MusicItem
```

## Topics

### Instance Properties

- [items](musiccatalogresourceresponse/items.md): A collection of items matching the filter used in the originating [MusicCatalogResourceRequest](musiccatalogresourcerequest.md).

### Instance Methods

- [item(for:)](musiccatalogresourceresponse/item%28for_%29.md): Returns the item in this response that corresponds to the given identifier.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Resource Loading Using Filters

- [MusicCatalogResourceRequest](musiccatalogresourcerequest.md): A request that your app uses to fetch items from the Apple Music catalog using a filter.
- [AlbumFilter](albumfilter.md): Album properties your app uses as a filter for a catalog resource request.
- [ArtistFilter](artistfilter.md): Artist properties your app uses as a filter for a catalog resource request.
- [CuratorFilter](curatorfilter.md): Curator properties your app uses as a filter for a catalog resource request.
- [GenreFilter](genrefilter.md): Genre properties your app uses as a filter for a catalog resource request.
- [MusicVideoFilter](musicvideofilter.md): Music video properties your app uses as a filter for a catalog resource request.
- [PlaylistFilter](playlistfilter.md): Playlist properties your app uses as a filter for a catalog resource request.
- [RadioShowFilter](radioshowfilter.md): Radio Show properties your app uses as a filter for a catalog resource request.
- [RecordLabelFilter](recordlabelfilter.md): The set of record label properties your app uses as a filter for a catalog resource request.
- [SongFilter](songfilter.md): Song properties your app uses as a filter for a catalog resource request.
- [StationFilter](stationfilter.md): The set of station properties your app uses as a filter for a catalog resource request.
- [FilterableMusicItem](filterablemusicitem.md): A declaration of the associated type that contains the set of music item properties your app uses as a filter for a catalog resource request.
