> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiccatalogsearchsuggestionsrequest/init(term:includingtopresultsoftypes:)

# init(term:includingTopResultsOfTypes:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a catalog search suggestions request for a specified search term along with a list of types to include when fetching top results.

## Declaration

```swift
init(term: String, includingTopResultsOfTypes types: [any MusicCatalogSearchable.Type] = [])
```

<a id="discussion"></a>

## Discussion

By default, top results are not fetched.
