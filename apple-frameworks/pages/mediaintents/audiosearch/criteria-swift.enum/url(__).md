> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintents/audiosearch/criteria-swift.enum/url(_:)](https://developer.apple.com/documentation/mediaintents/audiosearch/criteria-swift.enum/url(_:))

# AudioSearch.Criteria.url(\_:)

**Framework:** Media Intents  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

URLs that the system provides for matching audio content.

## Declaration

```swift
case url([URL])
```

## Mentioned In

- [Responding to audio search and playback requests](../../responding-to-audio-search-and-playback-requests.md)

<a id="discussion"></a>

## Discussion

The system provides URLs for matching content if:

- A person’s search request includes a URL.
- Spotlight was able to find matching content with a URL you donated to the Spotlight index.
- The system was able to provide URLs for matching audio content; for example, from onscreen context.

Use the provided URL in your [IntentValueQuery](../../../appintents/intentvaluequery.md) implementation to find content and return app entities.

## See Also

### Audio search types

- [AudioSearch.Criteria.searchQuery(\_:)](searchquery%28__%29.md): The person’s natural-language search query.
- [AudioSearch.Criteria.unspecified](unspecified.md): The request includes a vague search query or no specific search criteria.
