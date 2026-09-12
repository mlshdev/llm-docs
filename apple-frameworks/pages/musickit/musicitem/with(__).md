> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicitem/with(_:)](https://developer.apple.com/documentation/musickit/musicitem/with(_:))

# with(\_:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a new instance of the music item that includes the specified properties.

## Declaration

```swift
func with(_ properties: [PartialMusicAsyncProperty<Self>]) async throws -> Self
```

<a id="discussion"></a>

## Discussion

This asynchronous method fetches a more complete representation of the receiver from Apple Music API over the network.
