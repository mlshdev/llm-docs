> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiclibrary/add(_:to:)

# add(\_:to:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds an item to the end of an existing playlist.

## Declaration

```swift
@discardableResult func add<MusicItemType>(_ item: MusicItemType, to playlist: Playlist) async throws -> Playlist where MusicItemType : MusicPlaylistAddable
```

<a id="return-value"></a>

## Return Value

The updated playlist.
