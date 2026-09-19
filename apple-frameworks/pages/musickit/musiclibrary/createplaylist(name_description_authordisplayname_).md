> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiclibrary/createplaylist(name:description:authordisplayname:)

# createPlaylist(name:description:authorDisplayName:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a playlist in the user’s music library.

## Declaration

```swift
@discardableResult func createPlaylist(name: String, description: String? = nil, authorDisplayName: String? = nil) async throws -> Playlist
```

## Parameters

- `name`: The name of the playlist.
- `description`: An optional description of the playlist.
- `authorDisplayName`: The display name of the author for the playlist. A `nil` value will result in the framework using your app’s name instead.

<a id="return-value"></a>

## Return Value

The newly created playlist.
