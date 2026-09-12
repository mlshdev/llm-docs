> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiccatalogsearchsuggestionsrequest](https://developer.apple.com/documentation/musickit/musiccatalogsearchsuggestionsrequest)

# MusicCatalogSearchSuggestionsRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A request that your app uses to fetch suggestions from the Apple Music catalog using a search term.

## Declaration

```swift
struct MusicCatalogSearchSuggestionsRequest
```

## Topics

### Initializers

- [init(term:includingTopResultsOfTypes:)](musiccatalogsearchsuggestionsrequest/init%28term_includingtopresultsoftypes_%29.md): Creates a catalog search suggestions request for a specified search term along with a list of types to include when fetching top results.

### Instance Properties

- [limit](musiccatalogsearchsuggestionsrequest/limit.md): A limit for the number of items to return in the catalog search suggestions response.
- [term](musiccatalogsearchsuggestionsrequest/term.md): The search term for the request.
- [typesForTopResults](musiccatalogsearchsuggestionsrequest/typesfortopresults.md): The list of requested types for top results.

### Instance Methods

- [response()](musiccatalogsearchsuggestionsrequest/response%28%29.md): Fetches suggestions of the requested catalog searchable types that match the search term of the request.
