> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/writingoptions/fordeleting](https://developer.apple.com/documentation/foundation/nsfilecoordinator/writingoptions/fordeleting)

# forDeleting (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static var forDeleting: NSFileCoordinator.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

When this constant is specified, the file coordinator calls the [accommodatePresentedItemDeletion(completionHandler:)](../../nsfilepresenter/accommodatepresenteditemdeletion%28completionhandler_%29.md) or [accommodatePresentedSubitemDeletion(at:completionHandler:)](../../nsfilepresenter/accommodatepresentedsubitemdeletion%28at_completionhandler_%29.md) method of relevant file presenters to give them a chance to make adjustments before the item is deleted.

## See Also

### Constants

- [forMoving](formoving.md)
- [forMerging](formerging.md)
- [forReplacing](forreplacing.md)
- [contentIndependentMetadataOnly](contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.

# NSFileCoordinatorWritingForDeleting (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSFileCoordinatorWritingForDeleting
```

<a id="Discussion"></a>

## Discussion

When this constant is specified, the file coordinator calls the [accommodatePresentedItemDeletionWithCompletionHandler:](../../nsfilepresenter/accommodatepresenteditemdeletion%28completionhandler_%29.md) or [accommodatePresentedSubitemDeletionAtURL:completionHandler:](../../nsfilepresenter/accommodatepresentedsubitemdeletion%28at_completionhandler_%29.md) method of relevant file presenters to give them a chance to make adjustments before the item is deleted.

## See Also

### Constants

- [NSFileCoordinatorWritingForMoving](formoving.md)
- [NSFileCoordinatorWritingForMerging](formerging.md)
- [NSFileCoordinatorWritingForReplacing](forreplacing.md)
- [NSFileCoordinatorWritingContentIndependentMetadataOnly](contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.
