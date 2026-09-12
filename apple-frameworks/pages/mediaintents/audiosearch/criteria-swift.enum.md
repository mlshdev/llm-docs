> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintents/audiosearch/criteria-swift.enum](https://developer.apple.com/documentation/mediaintents/audiosearch/criteria-swift.enum)

# AudioSearch.Criteria

**Framework:** Media Intents  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The metadata and classification of a person’s audio search that the system provides.

## Declaration

```swift
enum Criteria
```

<a id="overview"></a>

## Overview

The `Criteria` enum describes the nature of a person’s audio search and playback request. A person might speak a natural-language query, provide a direct URL to content, or make a vague request without specifying anything; for example, they might say “Play something”. Inspect the `criteria` to determine how to resolve the person’s request.

## Topics

### Audio search types

- [AudioSearch.Criteria.searchQuery(\_:)](criteria-swift.enum/searchquery%28__%29.md): The person’s natural-language search query.
- [AudioSearch.Criteria.unspecified](criteria-swift.enum/unspecified.md): The request includes a vague search query or no specific search criteria.
- [AudioSearch.Criteria.url(\_:)](criteria-swift.enum/url%28__%29.md): URLs that the system provides for matching audio content.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing result criteria

- [criteria](criteria-swift.property.md): The search criteria for the audio request.
