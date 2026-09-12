> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/save(to:oftype:for:completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocument/save(to:oftype:for:completionhandler:))

# save(to:ofType:for:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.

## Declaration

```swift
func save(to url: URL, ofType typeName: String, for saveOperation: NSDocument.SaveOperationType, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func save(to url: URL, ofType typeName: String, for saveOperation: NSDocument.SaveOperationType) async throws
```

## Parameters

- `url`: The location to which the document contents are written.
- `typeName`: The document type.
- `saveOperation`: The type of save operation.
- `completionHandler`: The completion handler block object passed in to be invoked at some point in the future, perhaps after the method invocation has returned. The completion handler must be invoked on the main thread.

  The block takes one argument:

  - **`errorOrNil`**: If successful, pass a `nil` error. If not successful, pass an `NSError` object that encapsulates the reason why the document could not be saved.

<a id="Discussion"></a>

## Discussion

The default implementation of this method invokes [canAsynchronouslyWrite(to:ofType:for:)](canasynchronouslywrite%28to_oftype_for_%29.md). If writing can’t be done concurrently, it invokes [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) on the main thread thread. If writing can be done concurrently, it invokes that method on a different thread, but blocks the main thread until something invokes [unblockUserInteraction()](unblockuserinteraction%28%29.md). Either way, if [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) returns [true](https://developer.apple.com/documentation/swift/true), it updates the values in the [fileModificationDate](filemodificationdate.md), [fileType](filetype.md), [fileURL](fileurl.md), and [autosavedContentsFileURL](autosavedcontentsfileurl.md) properties and calls the [updateChangeCount(\_:)](updatechangecount%28__%29.md) method as appropriate on the main thread. It also updates information that [save(withDelegate:didSave:contextInfo:)](save%28withdelegate_didsave_contextinfo_%29.md) uses to check for modification, renaming, moving, deleting, and trashing of open documents, and deletes autosaved contents files when they have become obsolete. You can override this method to do things that need to be done before or after any save operation but be sure to invoke `super`.

For backward binary compatibility with OS X v10.6 and earlier, the default implementation of this method instead invokes [saveToURL:ofType:forSaveOperation:error:](savetourl_oftype_forsaveoperation_error_.md) if that method is overridden and this one is not, and it passes any error to the completion handler.

## See Also

### Writing the Document’s Content

- [canAsynchronouslyWrite(to:ofType:for:)](canasynchronouslywrite%28to_oftype_for_%29.md): Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.
- [unblockUserInteraction()](unblockuserinteraction%28%29.md): Unblocks the main thread during asynchronous saving.
- [write(to:ofType:)](write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [fileWrapper(ofType:)](filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [data(ofType:)](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSDocument.SaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

# saveToURL:ofType:forSaveOperation:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.

## Declaration

```objectivec
- (void) saveToURL:(NSURL *) url ofType:(NSString *) typeName forSaveOperation:(NSSaveOperationType) saveOperation completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `url`: The location to which the document contents are written.
- `typeName`: The document type.
- `saveOperation`: The type of save operation.
- `completionHandler`: The completion handler block object passed in to be invoked at some point in the future, perhaps after the method invocation has returned. The completion handler must be invoked on the main thread.

  The block takes one argument:

  - **`errorOrNil`**: If successful, pass a `nil` error. If not successful, pass an `NSError` object that encapsulates the reason why the document could not be saved.

<a id="Discussion"></a>

## Discussion

The default implementation of this method invokes [canAsynchronouslyWriteToURL:ofType:forSaveOperation:](canasynchronouslywrite%28to_oftype_for_%29.md). If writing can’t be done concurrently, it invokes [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) on the main thread thread. If writing can be done concurrently, it invokes that method on a different thread, but blocks the main thread until something invokes [unblockUserInteraction](unblockuserinteraction%28%29.md). Either way, if [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) returns [true](https://developer.apple.com/documentation/swift/true), it updates the values in the [fileModificationDate](filemodificationdate.md), [fileType](filetype.md), [fileURL](fileurl.md), and [autosavedContentsFileURL](autosavedcontentsfileurl.md) properties and calls the [updateChangeCount:](updatechangecount%28__%29.md) method as appropriate on the main thread. It also updates information that [saveDocumentWithDelegate:didSaveSelector:contextInfo:](save%28withdelegate_didsave_contextinfo_%29.md) uses to check for modification, renaming, moving, deleting, and trashing of open documents, and deletes autosaved contents files when they have become obsolete. You can override this method to do things that need to be done before or after any save operation but be sure to invoke `super`.

For backward binary compatibility with OS X v10.6 and earlier, the default implementation of this method instead invokes [saveToURL:ofType:forSaveOperation:error:](savetourl_oftype_forsaveoperation_error_.md) if that method is overridden and this one is not, and it passes any error to the completion handler.

## See Also

### Writing the Document’s Content

- [canAsynchronouslyWriteToURL:ofType:forSaveOperation:](canasynchronouslywrite%28to_oftype_for_%29.md): Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.
- [unblockUserInteraction](unblockuserinteraction%28%29.md): Unblocks the main thread during asynchronous saving.
- [writeToURL:ofType:error:](write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [fileWrapperOfType:error:](filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [dataOfType:error:](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSSaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.
