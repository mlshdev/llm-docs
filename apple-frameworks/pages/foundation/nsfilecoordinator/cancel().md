> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/cancel()](https://developer.apple.com/documentation/foundation/nsfilecoordinator/cancel())

# cancel() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels any active file coordination calls.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel any active calls to coordinate the reading or writing of a file. If the block passed to the file coordination call has not yet been executed—perhaps because the file coordinator is still waiting for a response from other file presenters—the file coordinator method stops waiting for a response, does not execute its block, and returns an error object with the error code [NSUserCancelledError](../nsusercancellederror-swift.var.md). However, if the block is already being executed, the file coordinator method does not return until the block finishes executing.

You can call this method from any thread of your application and it returns immediately without waiting for the file coordinator object to respond. Thus, when this method returns, you cannot assume that the read or write operation occurred or did not occur. (In fact, it is possible for this method to return while the file coordinator is in the middle of executing a block.) If you want to know whether the operation actually occurred, you must track it yourself by setting a flag when the block starts executing or by using some other means.

## See Also

### Coordinating File Operations Synchronously

- [coordinate(readingItemAt:options:error:byAccessor:)](coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinate(writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinate(readingItemAt:options:writingItemAt:options:error:byAccessor:)](coordinate%28readingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a read operation that contains a follow-up write operation.
- [coordinate(writingItemAt:options:writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepare(forReadingItemsAt:options:writingItemsAt:options:error:byAccessor:)](prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [item(at:willMoveTo:)](item%28at_willmoveto_%29.md): Announces that your app is moving a file to a new URL.
- [item(at:didMoveTo:)](item%28at_didmoveto_%29.md): Notifies relevant file presenters that the location of a file or directory changed.

# cancel (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels any active file coordination calls.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel any active calls to coordinate the reading or writing of a file. If the block passed to the file coordination call has not yet been executed—perhaps because the file coordinator is still waiting for a response from other file presenters—the file coordinator method stops waiting for a response, does not execute its block, and returns an error object with the error code [NSUserCancelledError](../nsusercancellederror-swift.var.md). However, if the block is already being executed, the file coordinator method does not return until the block finishes executing.

You can call this method from any thread of your application and it returns immediately without waiting for the file coordinator object to respond. Thus, when this method returns, you cannot assume that the read or write operation occurred or did not occur. (In fact, it is possible for this method to return while the file coordinator is in the middle of executing a block.) If you want to know whether the operation actually occurred, you must track it yourself by setting a flag when the block starts executing or by using some other means.

## See Also

### Coordinating File Operations Synchronously

- [coordinateReadingItemAtURL:options:error:byAccessor:](coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinateWritingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinateReadingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](coordinate%28readingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a read operation that contains a follow-up write operation.
- [coordinateWritingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepareForReadingItemsAtURLs:options:writingItemsAtURLs:options:error:byAccessor:](prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [itemAtURL:willMoveToURL:](item%28at_willmoveto_%29.md): Announces that your app is moving a file to a new URL.
- [itemAtURL:didMoveToURL:](item%28at_didmoveto_%29.md): Notifies relevant file presenters that the location of a file or directory changed.
