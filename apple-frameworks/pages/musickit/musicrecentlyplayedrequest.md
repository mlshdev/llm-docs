> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicrecentlyplayedrequest](https://developer.apple.com/documentation/musickit/musicrecentlyplayedrequest)

# MusicRecentlyPlayedRequest

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A request that your app uses to fetch items the user has recently played.

## Declaration

```swift
struct MusicRecentlyPlayedRequest<MusicItemType> where MusicItemType : MusicRecentlyPlayedRequestable, MusicItemType : Decodable
```

## Topics

### Initializers

- [init()](musicrecentlyplayedrequest/init%28%29.md): Creates a request for items the user has recently played.

### Instance Properties

- [limit](musicrecentlyplayedrequest/limit.md): A limit for the number of items to return in the response that contains items the user has recently played.
- [offset](musicrecentlyplayedrequest/offset.md): An offset for the request.

### Instance Methods

- [response()](musicrecentlyplayedrequest/response%28%29.md): Fetches items the user has recently played.
