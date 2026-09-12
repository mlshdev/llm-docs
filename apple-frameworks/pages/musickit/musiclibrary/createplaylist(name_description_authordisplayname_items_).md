> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrary/createplaylist(name:description:authordisplayname:items:)](https://developer.apple.com/documentation/musickit/musiclibrary/createplaylist(name:description:authordisplayname:items:))

# createPlaylist(name:description:authorDisplayName:items:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a playlist in the user’s music library.

## Declaration

```swift
@discardableResult func createPlaylist<S, MusicPlaylistAddableType>(name: String, description: String? = nil, authorDisplayName: String? = nil, items: S) async throws -> Playlist where S : Sequence, MusicPlaylistAddableType : MusicPlaylistAddable, MusicPlaylistAddableType == S.Element
```

## Parameters

- `name`: The name of the playlist.
- `description`: An optional description of the playlist.
- `authorDisplayName`: The display name of the author for the playlist. A `nil` value will result in the framework using your app’s name instead.
- `items`: The items of the playlist.

<a id="return-value"></a>

## Return Value

The newly created playlist.
