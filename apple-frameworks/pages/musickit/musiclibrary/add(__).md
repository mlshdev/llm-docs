> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrary/add(_:)](https://developer.apple.com/documentation/musickit/musiclibrary/add(_:))

# add(\_:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds an item to the user’s music library.

## Declaration

```swift
func add<MusicItemType>(_ item: MusicItemType) async throws where MusicItemType : MusicLibraryAddable
```
