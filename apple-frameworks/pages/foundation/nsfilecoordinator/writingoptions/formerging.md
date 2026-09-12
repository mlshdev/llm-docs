> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/writingoptions/formerging](https://developer.apple.com/documentation/foundation/nsfilecoordinator/writingoptions/formerging)

# forMerging (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static var forMerging: NSFileCoordinator.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

When this constant is specified, the file coordinator calls the [savePresentedItemChanges(completionHandler:)](../../nsfilepresenter/savepresenteditemchanges%28completionhandler_%29.md) method of relevant file presenters to give them a chance to save their changes before your code makes its changes.

## See Also

### Constants

- [forDeleting](fordeleting.md)
- [forMoving](formoving.md)
- [forReplacing](forreplacing.md)
- [contentIndependentMetadataOnly](contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.

# NSFileCoordinatorWritingForMerging (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSFileCoordinatorWritingForMerging
```

<a id="Discussion"></a>

## Discussion

When this constant is specified, the file coordinator calls the [savePresentedItemChangesWithCompletionHandler:](../../nsfilepresenter/savepresenteditemchanges%28completionhandler_%29.md) method of relevant file presenters to give them a chance to save their changes before your code makes its changes.

## See Also

### Constants

- [NSFileCoordinatorWritingForDeleting](fordeleting.md)
- [NSFileCoordinatorWritingForMoving](formoving.md)
- [NSFileCoordinatorWritingForReplacing](forreplacing.md)
- [NSFileCoordinatorWritingContentIndependentMetadataOnly](contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.
