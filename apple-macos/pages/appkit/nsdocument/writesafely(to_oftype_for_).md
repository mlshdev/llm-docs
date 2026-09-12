> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/writesafely(to:oftype:for:)](https://developer.apple.com/documentation/appkit/nsdocument/writesafely(to:oftype:for:))

# writeSafely(to:ofType:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the contents of the document to a file or file package located by a URL.

## Declaration

```swift
nonisolated func writeSafely(to url: URL, ofType typeName: String, for saveOperation: NSDocument.SaveOperationType) throws
```

## Parameters

- `url`: The location to which the document contents are written.
- `typeName`: The string that identifies the document type.
- `saveOperation`: The type of save operation.

<a id="Discussion"></a>

## Discussion

The default implementation of this method invokes [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md). It also invokes [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md) and writes the returned attributes, if any, to the file. It may copy some attributes from the old on-disk revision of the document at the same time, if applicable.

This method is responsible for doing document writing in a way that minimizes the danger of leaving the disk to which writing is being done in an inconsistent state in the event of an app crash, system crash, hardware failure, power outage, and so on. If you override this method, be sure to invoke the superclass implementation.

For `NSSaveOperation`, the default implementation of this method uses the value in the [keepBackupFile](keepbackupfile.md) property to determine whether or not the old on-disk revision of the document, if there was one, should be preserved after being renamed.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes [writeWithBackupToFile:ofType:saveOperation:](writewithbackuptofile_oftype_saveoperation_.md) if that method is is overridden and the URL uses the `file:` scheme. The save operation in this case is never `NSAutosaveOperation`; `NSSaveToOperation` is used instead.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Writing the Document’s Content

- [canAsynchronouslyWrite(to:ofType:for:)](canasynchronouslywrite%28to_oftype_for_%29.md): Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.
- [unblockUserInteraction()](unblockuserinteraction%28%29.md): Unblocks the main thread during asynchronous saving.
- [write(to:ofType:)](write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [fileWrapper(ofType:)](filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [data(ofType:)](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSDocument.SaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

# writeSafelyToURL:ofType:forSaveOperation:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the contents of the document to a file or file package located by a URL.

## Declaration

```objectivec
- (BOOL) writeSafelyToURL:(NSURL *) url ofType:(NSString *) typeName forSaveOperation:(NSSaveOperationType) saveOperation error:(NSError **) outError;
```

## Parameters

- `url`: The location to which the document contents are written.
- `typeName`: The string that identifies the document type.
- `saveOperation`: The type of save operation.
- `outError`: On return, if the document contents could not be written, a pointer to an error object that encapsulates the reason they could not be written.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document contents could be written; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of this method invokes [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md). It also invokes [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md) and writes the returned attributes, if any, to the file. It may copy some attributes from the old on-disk revision of the document at the same time, if applicable.

This method is responsible for doing document writing in a way that minimizes the danger of leaving the disk to which writing is being done in an inconsistent state in the event of an app crash, system crash, hardware failure, power outage, and so on. If you override this method, be sure to invoke the superclass implementation.

For `NSSaveOperation`, the default implementation of this method uses the value in the [keepBackupFile](keepbackupfile.md) property to determine whether or not the old on-disk revision of the document, if there was one, should be preserved after being renamed.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes [writeWithBackupToFile:ofType:saveOperation:](writewithbackuptofile_oftype_saveoperation_.md) if that method is is overridden and the URL uses the `file:` scheme. The save operation in this case is never `NSAutosaveOperation`; `NSSaveToOperation` is used instead.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Writing the Document’s Content

- [canAsynchronouslyWriteToURL:ofType:forSaveOperation:](canasynchronouslywrite%28to_oftype_for_%29.md): Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.
- [unblockUserInteraction](unblockuserinteraction%28%29.md): Unblocks the main thread during asynchronous saving.
- [writeToURL:ofType:error:](write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [fileWrapperOfType:error:](filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [dataOfType:error:](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSSaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.
