> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shlibrary/removeitems(_:)](https://developer.apple.com/documentation/shazamkit/shlibrary/removeitems(_:))

# removeItems(\_:)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Removes an array of media items from the user’s Shazam library.

## Declaration

```swift
final func removeItems(_ items: [SHMediaItem]) async throws
```

## Parameters

- `items`: An array containing the [SHMediaItem](../shmediaitem.md) objects to remove from the library.

<a id="Discussion"></a>

## Discussion

Apps can only remove media items that it added to the library with [addItems(\_:)](additems%28__%29.md).

This throws [SHError.Code.mediaLibrarySyncFailed](../sherror/code/medialibrarysyncfailed.md) if the system can’t remove at least one [SHMediaItem](../shmediaitem.md) or if an error occurred during the removal. In that case, the system doesn’t remove any items from the library.

## See Also

### Managing the items in the library

- [default](default.md): An instance of the default Shazam library.
- [addItems(\_:)](additems%28__%29.md): Adds an array of media items to the user’s Shazam library.
- [items](items.md): The list of synced items in the Media Library.
