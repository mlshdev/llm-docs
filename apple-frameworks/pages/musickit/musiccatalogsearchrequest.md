> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiccatalogsearchrequest](https://developer.apple.com/documentation/musickit/musiccatalogsearchrequest)

# MusicCatalogSearchRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A request that your app uses to fetch items from the Apple Music catalog using a search term.

## Declaration

```swift
struct MusicCatalogSearchRequest
```

## Topics

### Initializers

- [init(term:types:)](musiccatalogsearchrequest/init%28term_types_%29.md): Creates a catalog search request for a specified search term and list of catalog searchable types.

### Instance Properties

- [includeTopResults](musiccatalogsearchrequest/includetopresults.md): A Boolean value that indicates whether to request top search results.
- [limit](musiccatalogsearchrequest/limit.md): A limit for the number of items to return in the catalog search response.
- [offset](musiccatalogsearchrequest/offset.md): An offset for the request.
- [term](musiccatalogsearchrequest/term.md): The search term for the request.
- [types](musiccatalogsearchrequest/types.md): The list of requested catalog searchable types.

### Instance Methods

- [response()](musiccatalogsearchrequest/response%28%29.md): Fetches items of the requested catalog searchable types that match the search term of the request.

## See Also

### Catalog Search

- [MusicCatalogSearchResponse](musiccatalogsearchresponse.md): An object that contains results for a catalog search request.
- [MusicCatalogSearchable](musiccatalogsearchable.md): A protocol for music items that your app can fetch by using a catalog search request.
