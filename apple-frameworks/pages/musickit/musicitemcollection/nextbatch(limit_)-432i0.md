> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicitemcollection/nextbatch(limit:)-432i0](https://developer.apple.com/documentation/musickit/musicitemcollection/nextbatch(limit:)-432i0)

# nextBatch(limit:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Fetches the next batch of items asynchronously.

## Declaration

```swift
func nextBatch(limit: Int? = nil) async throws -> MusicItemCollection<MusicItemType>? where MusicItemType : Decodable
```

<a id="discussion"></a>

## Discussion

This method returns the next batch of items as another collection of music items of the same type.
