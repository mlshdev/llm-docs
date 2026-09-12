> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiccatalogchartsrequest](https://developer.apple.com/documentation/musickit/musiccatalogchartsrequest)

# MusicCatalogChartsRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A request that your app uses to fetch the most popular items in the Apple Music catalog.

## Declaration

```swift
struct MusicCatalogChartsRequest
```

## Topics

### Initializers

- [init(genre:kinds:types:)](musiccatalogchartsrequest/init%28genre_kinds_types_%29.md): Creates a catalog charts request for a specified genre and list of types to include in the catalog charts response.

### Instance Properties

- [genre](musiccatalogchartsrequest/genre.md): The genre for the request.
- [kinds](musiccatalogchartsrequest/kinds.md): The kinds of requested catalog charts.
- [limit](musiccatalogchartsrequest/limit.md): A limit for the number of items to return in the catalog search response.
- [offset](musiccatalogchartsrequest/offset.md): An offset for the request.
- [types](musiccatalogchartsrequest/types.md): The list of requested types for the catalog charts response.

### Instance Methods

- [response()](musiccatalogchartsrequest/response%28%29.md): Fetches the most popular items of the requested types that match the genre and kinds for the request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
