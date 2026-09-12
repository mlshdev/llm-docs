> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrary/edit(_:name:description:authordisplayname:items:)](https://developer.apple.com/documentation/musickit/musiclibrary/edit(_:name:description:authordisplayname:items:))

# edit(\_:name:description:authorDisplayName:items:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Edits a playlist that your app has created including items to rebuild the list of entries.

## Declaration

```swift
@discardableResult func edit<S, MusicPlaylistAddableType>(_ playlist: Playlist, name: String? = nil, description: String? = nil, authorDisplayName: String? = nil, items: S) async throws -> Playlist where S : Sequence, MusicPlaylistAddableType : MusicPlaylistAddable, MusicPlaylistAddableType == S.Element
```

<a id="return-value"></a>

## Return Value

The edited playlist.

<a id="discussion"></a>

## Discussion

This function will throw an error if your app attempts to edit a playlist that another app created.
