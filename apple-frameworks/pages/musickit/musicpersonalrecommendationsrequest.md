> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicpersonalrecommendationsrequest](https://developer.apple.com/documentation/musickit/musicpersonalrecommendationsrequest)

# MusicPersonalRecommendationsRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A request that your app uses to fetch music recommendations based on the user’s library and listening history.

## Declaration

```swift
struct MusicPersonalRecommendationsRequest
```

## Topics

### Initializers

- [init()](musicpersonalrecommendationsrequest/init%28%29.md): Creates a request to fetch default personal recommendations for the user.
- [init(refreshing:)](musicpersonalrecommendationsrequest/init%28refreshing_%29.md): Creates a request to fetch default personal recommendations for the user.

### Instance Properties

- [limit](musicpersonalrecommendationsrequest/limit.md): A limit for the number of recommendations to return in the personal recommendations response.
- [offset](musicpersonalrecommendationsrequest/offset.md): An offset for the request.

### Instance Methods

- [response()](musicpersonalrecommendationsrequest/response%28%29.md): Fetches the music recommendations based on the user’s library and listening history.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
