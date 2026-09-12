> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/coordinate(readingitemat:options:writingitemat:options:error:byaccessor:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/coordinate(readingitemat:options:writingitemat:options:error:byaccessor:))

# coordinate(readingItemAt:options:writingItemAt:options:error:byAccessor:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initiates a read operation that contains a follow-up write operation.

## Declaration

```swift
func coordinate(readingItemAt readingURL: URL, options readingOptions: NSFileCoordinator.ReadingOptions = [], writingItemAt writingURL: URL, options writingOptions: NSFileCoordinator.WritingOptions = [], error outError: NSErrorPointer, byAccessor readerWriter: (URL, URL) -> Void)
```

## Parameters

- `readingURL`: A URL identifying the file or directory to read. If other objects or processes are acting on the item at the URL, the actual URL passed to the block in the `readerWriter` parameter may be different than the one in this parameter.
- `readingOptions`: One of the reading options described in [NSFileCoordinator.ReadingOptions](readingoptions.md). If you pass `0` for this parameter, the [savePresentedItemChanges(completionHandler:)](../nsfilepresenter/savepresenteditemchanges%28completionhandler_%29.md) method of relevant file presenters is called before your block executes.
- `writingURL`: A URL identifying the file or directory to write. If other objects or processes are acting on the item at the URL, the actual URL passed to the block in the `readerWriter` parameter may be different than the one in this parameter.
- `writingOptions`: One of the writing options described in [NSFileCoordinator.WritingOptions](writingoptions.md). The options you specify partially determine how file presenters are notified and how this file coordinator object waits to execute your block.
- `outError`: On input, a pointer to a pointer for an error object. If a file presenter encounters an error while preparing for this operation, that error is returned in this parameter and the block in the `readerWriter` parameter is not executed. If you cancel this operation before the `readerWriter` block is executed, this parameter contains an error object on output.
- `readerWriter`: A [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) containing the read and write operations you want to perform in a coordinated manner. This block receives [NSURL](../nsurl.md) objects containing the URLs of the items to read and write and returns no value. Always use the URLs passed into the block instead of the values in the `readingURL` and `writingURL` parameters.

<a id="Discussion"></a>

## Discussion

When invoking these methods, declare a `__block` variable before the accessor block and initialize it to a value that signals failure, and then inside the accessor block set it to a value that indicates success. If the coordinated operation fails, then the accessor block never runs. The sentinel variable still holds a value that indicates failure, and the [NSError](../nserror.md) out parameter contains a reference that describes the error.

You use this method to perform a read operation that might also contain a write operation that needs to be coordinated. This method executes synchronously, blocking the current thread until the `readerWriter` block finishes executing. When performing the write operation, you may call the [coordinate(writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_error_byaccessor_%29.md) method from your `readerWriter` block. This method does the canonical lock ordering that is required to prevent a potential deadlock of the file operations.

This method makes the same calls to file presenters, and has the same general wait behavior, as the [coordinate(readingItemAt:options:error:byAccessor:)](coordinate%28readingitemat_options_error_byaccessor_%29.md) method.

## See Also

### Coordinating File Operations Synchronously

- [coordinate(readingItemAt:options:error:byAccessor:)](coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinate(writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinate(writingItemAt:options:writingItemAt:options:error:byAccessor:)](coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepare(forReadingItemsAt:options:writingItemsAt:options:error:byAccessor:)](prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [item(at:willMoveTo:)](item%28at_willmoveto_%29.md): Announces that your app is moving a file to a new URL.
- [item(at:didMoveTo:)](item%28at_didmoveto_%29.md): Notifies relevant file presenters that the location of a file or directory changed.
- [cancel()](cancel%28%29.md): Cancels any active file coordination calls.

# coordinateReadingItemAtURL:options:writingItemAtURL:options:error:byAccessor: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initiates a read operation that contains a follow-up write operation.

## Declaration

```objectivec
- (void) coordinateReadingItemAtURL:(NSURL *) readingURL options:(NSFileCoordinatorReadingOptions) readingOptions writingItemAtURL:(NSURL *) writingURL options:(NSFileCoordinatorWritingOptions) writingOptions error:(NSError **) outError byAccessor:(void (^)(NSURL *newReadingURL, NSURL *newWritingURL)) readerWriter;
```

## Parameters

- `readingURL`: A URL identifying the file or directory to read. If other objects or processes are acting on the item at the URL, the actual URL passed to the block in the `readerWriter` parameter may be different than the one in this parameter.
- `readingOptions`: One of the reading options described in [NSFileCoordinatorReadingOptions](readingoptions.md). If you pass `0` for this parameter, the [savePresentedItemChangesWithCompletionHandler:](../nsfilepresenter/savepresenteditemchanges%28completionhandler_%29.md) method of relevant file presenters is called before your block executes.
- `writingURL`: A URL identifying the file or directory to write. If other objects or processes are acting on the item at the URL, the actual URL passed to the block in the `readerWriter` parameter may be different than the one in this parameter.
- `writingOptions`: One of the writing options described in [NSFileCoordinatorWritingOptions](writingoptions.md). The options you specify partially determine how file presenters are notified and how this file coordinator object waits to execute your block.
- `outError`: On input, a pointer to a pointer for an error object. If a file presenter encounters an error while preparing for this operation, that error is returned in this parameter and the block in the `readerWriter` parameter is not executed. If you cancel this operation before the `readerWriter` block is executed, this parameter contains an error object on output.
- `readerWriter`: A [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) containing the read and write operations you want to perform in a coordinated manner. This block receives [NSURL](../nsurl.md) objects containing the URLs of the items to read and write and returns no value. Always use the URLs passed into the block instead of the values in the `readingURL` and `writingURL` parameters.

<a id="Discussion"></a>

## Discussion

When invoking these methods, declare a `__block` variable before the accessor block and initialize it to a value that signals failure, and then inside the accessor block set it to a value that indicates success. If the coordinated operation fails, then the accessor block never runs. The sentinel variable still holds a value that indicates failure, and the [NSError](../nserror.md) out parameter contains a reference that describes the error.

You use this method to perform a read operation that might also contain a write operation that needs to be coordinated. This method executes synchronously, blocking the current thread until the `readerWriter` block finishes executing. When performing the write operation, you may call the [coordinateWritingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_error_byaccessor_%29.md) method from your `readerWriter` block. This method does the canonical lock ordering that is required to prevent a potential deadlock of the file operations.

This method makes the same calls to file presenters, and has the same general wait behavior, as the [coordinateReadingItemAtURL:options:error:byAccessor:](coordinate%28readingitemat_options_error_byaccessor_%29.md) method.

## See Also

### Coordinating File Operations Synchronously

- [coordinateReadingItemAtURL:options:error:byAccessor:](coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinateWritingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinateWritingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepareForReadingItemsAtURLs:options:writingItemsAtURLs:options:error:byAccessor:](prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [itemAtURL:willMoveToURL:](item%28at_willmoveto_%29.md): Announces that your app is moving a file to a new URL.
- [itemAtURL:didMoveToURL:](item%28at_didmoveto_%29.md): Notifies relevant file presenters that the location of a file or directory changed.
- [cancel](cancel%28%29.md): Cancels any active file coordination calls.
