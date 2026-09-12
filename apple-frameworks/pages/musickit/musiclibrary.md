> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrary](https://developer.apple.com/documentation/musickit/musiclibrary)

# MusicLibrary

**Framework:** MusicKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object your app uses to access the user’s music library.

## Declaration

```swift
class MusicLibrary
```

## Topics

### Instance Methods

- [add(\_:)](musiclibrary/add%28__%29.md): Adds an item to the user’s music library.
- [add(\_:to:)](musiclibrary/add%28__to_%29.md): Adds an item to the end of an existing playlist.
- [createPlaylist(name:description:authorDisplayName:)](musiclibrary/createplaylist%28name_description_authordisplayname_%29.md): Creates a playlist in the user’s music library.
- [createPlaylist(name:description:authorDisplayName:items:)](musiclibrary/createplaylist%28name_description_authordisplayname_items_%29.md): Creates a playlist in the user’s music library.
- [edit(\_:name:description:authorDisplayName:)](musiclibrary/edit%28__name_description_authordisplayname_%29.md): Edits a playlist that your app has created.
- [edit(\_:name:description:authorDisplayName:items:)](musiclibrary/edit%28__name_description_authordisplayname_items_%29.md): Edits a playlist that your app has created including items to rebuild the list of entries.

### Type Properties

- [shared](musiclibrary/shared.md): A shared object that allows your app to modify the user’s music library.

### Enumerations

- [MusicLibrary.Error](musiclibrary/error.md): An error that the music library can throw upon accessing, manipulating, or requesting data from the user’s music library.
