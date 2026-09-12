> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicpersonalrecommendationsrequest/init(refreshing:)](https://developer.apple.com/documentation/musickit/musicpersonalrecommendationsrequest/init(refreshing:))

# init(refreshing:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a request to fetch default personal recommendations for the user.

## Declaration

```swift
init<S>(refreshing recommendations: S) where S : Sequence, S.Element == MusicPersonalRecommendation
```
