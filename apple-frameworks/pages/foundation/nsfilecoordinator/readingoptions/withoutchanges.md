> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/readingoptions/withoutchanges](https://developer.apple.com/documentation/foundation/nsfilecoordinator/readingoptions/withoutchanges)

# withoutChanges (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static var withoutChanges: NSFileCoordinator.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

Specify this constant if your code does not need other objects to save changes first. If you do *not* specify this constant, the [savePresentedItemChanges(completionHandler:)](../../nsfilepresenter/savepresenteditemchanges%28completionhandler_%29.md) method of relevant file presenters is called before your code reads the item.

## See Also

### Constants

- [resolvesSymbolicLink](resolvessymboliclink.md)
- [immediatelyAvailableMetadataOnly](immediatelyavailablemetadataonly.md): Specify this constant if you want to read an item’s metadata without triggering a download.
- [forUploading](foruploading.md): Specify this content when reading an item for the purpose of uploading its contents.

# NSFileCoordinatorReadingWithoutChanges (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSFileCoordinatorReadingWithoutChanges
```

<a id="Discussion"></a>

## Discussion

Specify this constant if your code does not need other objects to save changes first. If you do *not* specify this constant, the [savePresentedItemChangesWithCompletionHandler:](../../nsfilepresenter/savepresenteditemchanges%28completionhandler_%29.md) method of relevant file presenters is called before your code reads the item.

## See Also

### Constants

- [NSFileCoordinatorReadingResolvesSymbolicLink](resolvessymboliclink.md)
- [NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly](immediatelyavailablemetadataonly.md): Specify this constant if you want to read an item’s metadata without triggering a download.
- [NSFileCoordinatorReadingForUploading](foruploading.md): Specify this content when reading an item for the purpose of uploading its contents.
