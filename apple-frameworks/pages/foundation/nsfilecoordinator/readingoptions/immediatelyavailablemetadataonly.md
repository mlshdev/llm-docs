> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/readingoptions/immediatelyavailablemetadataonly](https://developer.apple.com/documentation/foundation/nsfilecoordinator/readingoptions/immediatelyavailablemetadataonly)

# immediatelyAvailableMetadataOnly (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specify this constant if you want to read an item’s metadata without triggering a download.

## Declaration

```swift
static var immediatelyAvailableMetadataOnly: NSFileCoordinator.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

Specifying this option grants the coordinated read immediately (barring any conflicts with other readers, writers or file presenters on the same system), instead of waiting for the system to download the file’s contents and any additional metadata (for example, conflicting versions or thumbnails).

Attempting to actually read the item’s contents during this coordinated read may give unexpected results or fail.

## See Also

### Constants

- [withoutChanges](withoutchanges.md)
- [resolvesSymbolicLink](resolvessymboliclink.md)
- [forUploading](foruploading.md): Specify this content when reading an item for the purpose of uploading its contents.

# NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specify this constant if you want to read an item’s metadata without triggering a download.

## Declaration

```objectivec
NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly
```

<a id="Discussion"></a>

## Discussion

Specifying this option grants the coordinated read immediately (barring any conflicts with other readers, writers or file presenters on the same system), instead of waiting for the system to download the file’s contents and any additional metadata (for example, conflicting versions or thumbnails).

Attempting to actually read the item’s contents during this coordinated read may give unexpected results or fail.

## See Also

### Constants

- [NSFileCoordinatorReadingWithoutChanges](withoutchanges.md)
- [NSFileCoordinatorReadingResolvesSymbolicLink](resolvessymboliclink.md)
- [NSFileCoordinatorReadingForUploading](foruploading.md): Specify this content when reading an item for the purpose of uploading its contents.
