> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiclibrary/error](https://developer.apple.com/documentation/musickit/musiclibrary/error)

# MusicLibrary.Error

**Framework:** MusicKit  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

An error that the music library can throw upon accessing, manipulating, or requesting data from the user’s music library.

## Declaration

```swift
enum Error
```

## Topics

### Enumeration Cases

- [MusicLibrary.Error.addToPlaylistFailed](error/addtoplaylistfailed.md): An error that indicates a failure in the process of adding an item to a playlist.
- [MusicLibrary.Error.createPlaylistFailed](error/createplaylistfailed.md): An error that indicates a failure in the process of creating a playlist.
- [MusicLibrary.Error.editPlaylistFailed](error/editplaylistfailed.md): An error that indicates a failure in the process of editing a playlist.
- [MusicLibrary.Error.itemAlreadyAdded](error/itemalreadyadded.md): An error indicating that the item attempting to be added to the user’s music library is already in the library.
- [MusicLibrary.Error.permissionDenied](error/permissiondenied.md): An error that occurs when the user doesn’t consent for the current app to access their Apple Music library.
- [MusicLibrary.Error.playlistNotInLibrary](error/playlistnotinlibrary.md): An error indicating that the playlist attempting to be added to is not in the user’s library.
- [MusicLibrary.Error.unableToAddItem](error/unabletoadditem.md): An error indicating that the item attempting to be added to the user’s music library cannot be added.
- [MusicLibrary.Error.unknown](error/unknown.md): An error indicating the ocurrence of an unknown or unexpected error.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
