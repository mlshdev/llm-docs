> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/item(at:didmoveto:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/item(at:didmoveto:))

# item(at:didMoveTo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies relevant file presenters that the location of a file or directory changed.

## Declaration

```swift
func item(at oldURL: URL, didMoveTo newURL: URL)
```

## Parameters

- `oldURL`: The old location of the file or directory.
- `newURL`: The new location of the file or directory.

<a id="Discussion"></a>

## Discussion

If you move or rename a file or directory as part of a write operation, call this method to notify relevant file presenters that the change occurred. This method calls the [presentedItemDidMove(to:)](../nsfilepresenter/presenteditemdidmove%28to_%29.md) method for any of the item’s file presenters.  If the item is a directory, this method calls [presentedItemDidMove(to:)](../nsfilepresenter/presenteditemdidmove%28to_%29.md) on the file presenters for the item’s contents. Finally, it calls [presentedSubitem(at:didMoveTo:)](../nsfilepresenter/presentedsubitem%28at_didmoveto_%29.md) on the file presenter of any directory containing the item.

You must call this method from a coordinated write block. Calling this method with the same URL in the `oldURL` and `newURL` parameters is harmless. This call must balance a call to [item(at:willMoveTo:)](item%28at_willmoveto_%29.md).

## See Also

### Coordinating File Operations Synchronously

- [coordinate(readingItemAt:options:error:byAccessor:)](coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinate(writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinate(readingItemAt:options:writingItemAt:options:error:byAccessor:)](coordinate%28readingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a read operation that contains a follow-up write operation.
- [coordinate(writingItemAt:options:writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepare(forReadingItemsAt:options:writingItemsAt:options:error:byAccessor:)](prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [item(at:willMoveTo:)](item%28at_willmoveto_%29.md): Announces that your app is moving a file to a new URL.
- [cancel()](cancel%28%29.md): Cancels any active file coordination calls.

# itemAtURL:didMoveToURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies relevant file presenters that the location of a file or directory changed.

## Declaration

```objectivec
- (void) itemAtURL:(NSURL *) oldURL didMoveToURL:(NSURL *) newURL;
```

## Parameters

- `oldURL`: The old location of the file or directory.
- `newURL`: The new location of the file or directory.

<a id="Discussion"></a>

## Discussion

If you move or rename a file or directory as part of a write operation, call this method to notify relevant file presenters that the change occurred. This method calls the [presentedItemDidMoveToURL:](../nsfilepresenter/presenteditemdidmove%28to_%29.md) method for any of the item’s file presenters.  If the item is a directory, this method calls [presentedItemDidMoveToURL:](../nsfilepresenter/presenteditemdidmove%28to_%29.md) on the file presenters for the item’s contents. Finally, it calls [presentedSubitemAtURL:didMoveToURL:](../nsfilepresenter/presentedsubitem%28at_didmoveto_%29.md) on the file presenter of any directory containing the item.

You must call this method from a coordinated write block. Calling this method with the same URL in the `oldURL` and `newURL` parameters is harmless. This call must balance a call to [itemAtURL:willMoveToURL:](item%28at_willmoveto_%29.md).

## See Also

### Coordinating File Operations Synchronously

- [coordinateReadingItemAtURL:options:error:byAccessor:](coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinateWritingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinateReadingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](coordinate%28readingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a read operation that contains a follow-up write operation.
- [coordinateWritingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepareForReadingItemsAtURLs:options:writingItemsAtURLs:options:error:byAccessor:](prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [itemAtURL:willMoveToURL:](item%28at_willmoveto_%29.md): Announces that your app is moving a file to a new URL.
- [cancel](cancel%28%29.md): Cancels any active file coordination calls.
