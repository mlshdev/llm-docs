> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrarysearchrequest/limit](https://developer.apple.com/documentation/musickit/musiclibrarysearchrequest/limit)

# limit

**Framework:** MusicKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A limit for the number of items to return in the library search response.

## Declaration

```swift
var limit: Int
```

<a id="discussion"></a>

## Discussion

The default value for this limit is 50.

If the application sets the limit to 0, the framework returns all matching items in the user’s music library.
