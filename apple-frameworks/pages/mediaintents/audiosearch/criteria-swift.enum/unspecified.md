> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintents/audiosearch/criteria-swift.enum/unspecified](https://developer.apple.com/documentation/mediaintents/audiosearch/criteria-swift.enum/unspecified)

# AudioSearch.Criteria.unspecified

**Framework:** Media Intents  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The request includes a vague search query or no specific search criteria.

## Declaration

```swift
case unspecified
```

## Mentioned In

- [Responding to audio search and playback requests](../../responding-to-audio-search-and-playback-requests.md)

<a id="discussion"></a>

## Discussion

The person says something like “Play something” without specifying particular content. Provide recommended or recently played content in your response.

## See Also

### Audio search types

- [AudioSearch.Criteria.searchQuery(\_:)](searchquery%28__%29.md): The person’s natural-language search query.
- [AudioSearch.Criteria.url(\_:)](url%28__%29.md): URLs that the system provides for matching audio content.
