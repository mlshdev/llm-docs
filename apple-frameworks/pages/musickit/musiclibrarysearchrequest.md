> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysearchrequest](https://developer.apple.com/documentation/musickit/musiclibrarysearchrequest)

# MusicLibrarySearchRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A request that your app uses to fetch items from user’s library using a search term.

## Declaration

```swift
struct MusicLibrarySearchRequest
```

## Topics

### Initializers

- [init(term:types:)](musiclibrarysearchrequest/init%28term_types_%29.md): Creates a library search request for a specified search term and list of library searchable types.

### Instance Properties

- [includeTopResults](musiclibrarysearchrequest/includetopresults.md): A Boolean value that indicates whether to request top search results.
- [limit](musiclibrarysearchrequest/limit.md): A limit for the number of items to return in the library search response.
- [term](musiclibrarysearchrequest/term.md): The search term for the request.
- [types](musiclibrarysearchrequest/types.md): The list of requested library searchable types.

### Instance Methods

- [response()](musiclibrarysearchrequest/response%28%29.md): Fetches items of the requested library searchable types that match the search term of the request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
