> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/readingoptions/resolvessymboliclink](https://developer.apple.com/documentation/foundation/nsfilecoordinator/readingoptions/resolvessymboliclink)

# resolvesSymbolicLink (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static var resolvesSymbolicLink: NSFileCoordinator.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

Specify this constant if you want an item that might be a symbolic link to resolve to the file pointed to by that link (instead of to the link itself). When you use this option, the system provides the resolved URL to the accessor block in place of the original URL.

> **Note**

>  This option cannot be used with the [prepare(forReadingItemsAt:options:writingItemsAt:options:error:byAccessor:)](../prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md) method.

## See Also

### Constants

- [withoutChanges](withoutchanges.md)
- [immediatelyAvailableMetadataOnly](immediatelyavailablemetadataonly.md): Specify this constant if you want to read an item’s metadata without triggering a download.
- [forUploading](foruploading.md): Specify this content when reading an item for the purpose of uploading its contents.

# NSFileCoordinatorReadingResolvesSymbolicLink (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSFileCoordinatorReadingResolvesSymbolicLink
```

<a id="Discussion"></a>

## Discussion

Specify this constant if you want an item that might be a symbolic link to resolve to the file pointed to by that link (instead of to the link itself). When you use this option, the system provides the resolved URL to the accessor block in place of the original URL.

> **Note**

>  This option cannot be used with the [prepareForReadingItemsAtURLs:options:writingItemsAtURLs:options:error:byAccessor:](../prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md) method.

## See Also

### Constants

- [NSFileCoordinatorReadingWithoutChanges](withoutchanges.md)
- [NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly](immediatelyavailablemetadataonly.md): Specify this constant if you want to read an item’s metadata without triggering a download.
- [NSFileCoordinatorReadingForUploading](foruploading.md): Specify this content when reading an item for the purpose of uploading its contents.
