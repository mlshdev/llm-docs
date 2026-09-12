> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/unblockuserinteraction()](https://developer.apple.com/documentation/appkit/nsdocument/unblockuserinteraction())

# unblockUserInteraction() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Unblocks the main thread during asynchronous saving.

## Declaration

```swift
nonisolated func unblockUserInteraction()
```

<a id="Discussion"></a>

## Discussion

If [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md) is writing on a non-main thread because [canAsynchronouslyWrite(to:ofType:for:)](canasynchronouslywrite%28to_oftype_for_%29.md) has returned [true](https://developer.apple.com/documentation/swift/true), but it is still blocking the main thread, this method unblocks the main thread. Otherwise, it does nothing. For example, the default implementation of [fileWrapper(ofType:)](filewrapper%28oftype_%29.md) invokes this when it has created the [FileWrapper](https://developer.apple.com/documentation/foundation/filewrapper) object to return. Assuming that the `NSFileWrapper` is not mutated by subsequent user actions, it is effectively a “snapshot” of the document’s contents, and once it is created it is safe to resume handling user events on the main thread, even though some of those user events might change the document’s contents before the `NSFileWrapper` object has been safely written. You can invoke this method to make asynchronous saving actually asynchronous if you’ve overridden [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md), [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md), or [write(to:ofType:)](write%28to_oftype_%29.md) in such a way that the invocation of this method done by the [write(to:ofType:)](write%28to_oftype_%29.md) default implementation won’t happen during writing.

## See Also

### Writing the Document’s Content

- [canAsynchronouslyWrite(to:ofType:for:)](canasynchronouslywrite%28to_oftype_for_%29.md): Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.
- [write(to:ofType:)](write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [fileWrapper(ofType:)](filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [data(ofType:)](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSDocument.SaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

# unblockUserInteraction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Unblocks the main thread during asynchronous saving.

## Declaration

```objectivec
- (void) unblockUserInteraction;
```

<a id="Discussion"></a>

## Discussion

If [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md) is writing on a non-main thread because [canAsynchronouslyWriteToURL:ofType:forSaveOperation:](canasynchronouslywrite%28to_oftype_for_%29.md) has returned [true](https://developer.apple.com/documentation/swift/true), but it is still blocking the main thread, this method unblocks the main thread. Otherwise, it does nothing. For example, the default implementation of [fileWrapperOfType:error:](filewrapper%28oftype_%29.md) invokes this when it has created the [NSFileWrapper](https://developer.apple.com/documentation/foundation/filewrapper) object to return. Assuming that the `NSFileWrapper` is not mutated by subsequent user actions, it is effectively a “snapshot” of the document’s contents, and once it is created it is safe to resume handling user events on the main thread, even though some of those user events might change the document’s contents before the `NSFileWrapper` object has been safely written. You can invoke this method to make asynchronous saving actually asynchronous if you’ve overridden [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md), [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md), or [writeToURL:ofType:error:](write%28to_oftype_%29.md) in such a way that the invocation of this method done by the [writeToURL:ofType:error:](write%28to_oftype_%29.md) default implementation won’t happen during writing.

## See Also

### Writing the Document’s Content

- [canAsynchronouslyWriteToURL:ofType:forSaveOperation:](canasynchronouslywrite%28to_oftype_for_%29.md): Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.
- [writeToURL:ofType:error:](write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [fileWrapperOfType:error:](filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [dataOfType:error:](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSSaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.
