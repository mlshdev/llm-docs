> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shlibrary/additems(_:)](https://developer.apple.com/documentation/shazamkit/shlibrary/additems(_:))

# addItems(\_:)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds an array of media items to the user’s Shazam library.

## Declaration

```swift
final func addItems(_ items: [SHMediaItem]) async throws
```

## Parameters

- `items`: An array containing the [SHMediaItem](../shmediaitem.md) objects to add to the library.

<a id="Discussion"></a>

## Discussion

The library only accepts media items with a [shazamID](../shmediaitem/shazamid.md). The `shazamID` must be a numeric only string.

This throws [SHError.Code.mediaLibrarySyncFailed](../sherror/code/medialibrarysyncfailed.md) if the system can’t add at least one [SHMediaItem](../shmediaitem.md) or if an error occurred during the addition. In that case, the system doesn’t add any items to the library.

## See Also

### Managing the items in the library

- [default](default.md): An instance of the default Shazam library.
- [removeItems(\_:)](removeitems%28__%29.md): Removes an array of media items from the user’s Shazam library.
- [items](items.md): The list of synced items in the Media Library.
