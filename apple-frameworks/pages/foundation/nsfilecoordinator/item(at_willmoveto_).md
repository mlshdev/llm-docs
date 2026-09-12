> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/item(at:willmoveto:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/item(at:willmoveto:))

# item(at:willMoveTo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Announces that your app is moving a file to a new URL.

## Declaration

```swift
func item(at oldURL: URL, willMoveTo newURL: URL)
```

## Parameters

- `oldURL`: The old location of the file or directory.
- `newURL`: The new location of the file or directory.

<a id="Discussion"></a>

## Discussion

This method is intended for apps that adopt App Sandbox.

Some apps need to rename files while saving them. For example, when a user adds an attachment to a rich text document, TextEdit changes the document’s filename extension from `.rtf` to `.rtfd`. In such a case, in a sandboxed app, you must call this method to declare your intent to rename a file without user approval.

After the renaming process succeeds, call the [item(at:didMoveTo:)](item%28at_didmoveto_%29.md) method, with the same arguments, to provide your app with continued access to the file under its new name, while also giving up access to any file that appears with the old name.

If your macOS app is not sandboxed, this method serves no purpose. This method is nonfunctional in iOS.

## See Also

### Coordinating File Operations Synchronously

- [coordinate(readingItemAt:options:error:byAccessor:)](coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinate(writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinate(readingItemAt:options:writingItemAt:options:error:byAccessor:)](coordinate%28readingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a read operation that contains a follow-up write operation.
- [coordinate(writingItemAt:options:writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepare(forReadingItemsAt:options:writingItemsAt:options:error:byAccessor:)](prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [item(at:didMoveTo:)](item%28at_didmoveto_%29.md): Notifies relevant file presenters that the location of a file or directory changed.
- [cancel()](cancel%28%29.md): Cancels any active file coordination calls.

# itemAtURL:willMoveToURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Announces that your app is moving a file to a new URL.

## Declaration

```objectivec
- (void) itemAtURL:(NSURL *) oldURL willMoveToURL:(NSURL *) newURL;
```

## Parameters

- `oldURL`: The old location of the file or directory.
- `newURL`: The new location of the file or directory.

<a id="Discussion"></a>

## Discussion

This method is intended for apps that adopt App Sandbox.

Some apps need to rename files while saving them. For example, when a user adds an attachment to a rich text document, TextEdit changes the document’s filename extension from `.rtf` to `.rtfd`. In such a case, in a sandboxed app, you must call this method to declare your intent to rename a file without user approval.

After the renaming process succeeds, call the [itemAtURL:didMoveToURL:](item%28at_didmoveto_%29.md) method, with the same arguments, to provide your app with continued access to the file under its new name, while also giving up access to any file that appears with the old name.

If your macOS app is not sandboxed, this method serves no purpose. This method is nonfunctional in iOS.

## See Also

### Coordinating File Operations Synchronously

- [coordinateReadingItemAtURL:options:error:byAccessor:](coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinateWritingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinateReadingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](coordinate%28readingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a read operation that contains a follow-up write operation.
- [coordinateWritingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepareForReadingItemsAtURLs:options:writingItemsAtURLs:options:error:byAccessor:](prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [itemAtURL:didMoveToURL:](item%28at_didmoveto_%29.md): Notifies relevant file presenters that the location of a file or directory changed.
- [cancel](cancel%28%29.md): Cancels any active file coordination calls.
