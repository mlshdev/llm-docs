> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presenteditemdidmove(to:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/presenteditemdidmove(to:))

# presentedItemDidMove(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells your object that the presented item moved or was renamed.

## Declaration

```swift
optional func presentedItemDidMove(to newURL: URL)
```

## Parameters

- `newURL`: The URL containing the new path to the presented item.

<a id="Discussion"></a>

## Discussion

Use this method to update the value returned by the [presentedItemURL](presenteditemurl.md) property of your object.

## See Also

### Related Documentation

- [presentedItemURL](presenteditemurl.md): The URL of the presented file or directory.

### Handling Changes to Files

- [savePresentedItemChanges(completionHandler:)](savepresenteditemchanges%28completionhandler_%29.md): Tells your object to save any unsaved changes for the presented item.
- [accommodatePresentedItemDeletion(completionHandler:)](accommodatepresenteditemdeletion%28completionhandler_%29.md): Tells your object that its presented item is about to be deleted.
- [presentedItemDidChange()](presenteditemdidchange%28%29.md): Tells your object that the presented item’s contents or attributes changed.

# presentedItemDidMoveToURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells your object that the presented item moved or was renamed.

## Declaration

```objectivec
- (void) presentedItemDidMoveToURL:(NSURL *) newURL;
```

## Parameters

- `newURL`: The URL containing the new path to the presented item.

<a id="Discussion"></a>

## Discussion

Use this method to update the value returned by the [presentedItemURL](presenteditemurl.md) property of your object.

## See Also

### Related Documentation

- [presentedItemURL](presenteditemurl.md): The URL of the presented file or directory.

### Handling Changes to Files

- [savePresentedItemChangesWithCompletionHandler:](savepresenteditemchanges%28completionhandler_%29.md): Tells your object to save any unsaved changes for the presented item.
- [accommodatePresentedItemDeletionWithCompletionHandler:](accommodatepresenteditemdeletion%28completionhandler_%29.md): Tells your object that its presented item is about to be deleted.
- [presentedItemDidChange](presenteditemdidchange%28%29.md): Tells your object that the presented item’s contents or attributes changed.
