> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrary/edit(_:name:description:authordisplayname:)](https://developer.apple.com/documentation/musickit/musiclibrary/edit(_:name:description:authordisplayname:))

# edit(\_:name:description:authorDisplayName:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Edits a playlist that your app has created.

## Declaration

```swift
@discardableResult func edit(_ playlist: Playlist, name: String? = nil, description: String? = nil, authorDisplayName: String? = nil) async throws -> Playlist
```

<a id="return-value"></a>

## Return Value

The edited playlist.

<a id="discussion"></a>

## Discussion

This function will throw an error if your app attempts to edit a playlist that another app created.
