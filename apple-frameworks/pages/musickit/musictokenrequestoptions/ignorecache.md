> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musictokenrequestoptions/ignorecache](https://developer.apple.com/documentation/musickit/musictokenrequestoptions/ignorecache)

# ignoreCache

**Framework:** MusicKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An option that indicates the token provider needs to discard any cached token and generate a new token.

## Declaration

```swift
static let ignoreCache: MusicTokenRequestOptions
```

<a id="discussion"></a>

## Discussion

You can add the newly generated token to an in-memory or persistent cache for faster access upon subsequent requests for this token.
