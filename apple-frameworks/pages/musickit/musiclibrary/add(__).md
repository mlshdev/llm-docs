> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiclibrary/add(_:)

# add(\_:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds an item to the user’s music library.

## Declaration

```swift
func add<MusicItemType>(_ item: MusicItemType) async throws where MusicItemType : MusicLibraryAddable
```
