> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintents/audiosearch/criteria-swift.enum/searchquery(_:)](https://developer.apple.com/documentation/mediaintents/audiosearch/criteria-swift.enum/searchquery(_:))

# AudioSearch.Criteria.searchQuery(\_:)

**Framework:** Media Intents  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The person’s natural-language search query.

## Declaration

```swift
case searchQuery(String)
```

## Mentioned In

- [Responding to audio search and playback requests](../../responding-to-audio-search-and-playback-requests.md)

<a id="discussion"></a>

## Discussion

A string representation of a person’s search request. Use it in your app’s search infrastructure to find matching content.

## See Also

### Audio search types

- [AudioSearch.Criteria.unspecified](unspecified.md): The request includes a vague search query or no specific search criteria.
- [AudioSearch.Criteria.url(\_:)](url%28__%29.md): URLs that the system provides for matching audio content.
