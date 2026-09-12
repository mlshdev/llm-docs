> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/fileattributestowrite(to:oftype:for:originalcontentsurl:)](https://developer.apple.com/documentation/appkit/nsdocument/fileattributestowrite(to:oftype:for:originalcontentsurl:))

# fileAttributesToWrite(to:ofType:for:originalContentsURL:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.

## Declaration

```swift
nonisolated func fileAttributesToWrite(to url: URL, ofType typeName: String, for saveOperation: NSDocument.SaveOperationType, originalContentsURL absoluteOriginalContentsURL: URL?) throws -> [String : Any]
```

## Parameters

- `url`: The location to which the document is being written.
- `typeName`: The string that identifies the document type.
- `saveOperation`: The type of save operation.
- `absoluteOriginalContentsURL`: The location of the previously saved copy of the document (if not `nil`).

<a id="return-value"></a>

## Return Value

A dictionary containing the attributes to be written, or `nil` if unsuccessful.

<a id="Discussion"></a>

## Discussion

Your subclass of `NSDocument` can override this method to control the attributes that are set during a save operation. An override of this method should return a copy of the dictionary returned by its superclass’s version of this method, with appropriate alterations.

The set of valid file attributes is a subset of those understood by the `NSFileManager` class. The default implementation of this method returns an empty dictionary for an `NSSaveOperation` or `NSAutosaveInPlaceOperation`, or a dictionary with an appropriate `NSFileExtensionHidden` entry for any other kind of save operation. You can override this method to customize the attributes that are written to document files.

For backward binary compatibility with OS X v10.5 and earlier, the default implementation of this method returns a dictionary with `NSFileHFSCode` and `NSFileHFSTypeCode` entries that have a value of 0 for `NSSaveOperation`, in apps linked against OS X v10.5 or earlier.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes `[self fileAttributesToWriteToFile:[url path] ofType:typeName saveOperation:aSaveOperation]` if [fileAttributesToWriteToFile:ofType:saveOperation:](fileattributestowritetofile_oftype_saveoperation_.md) is overridden and the URL uses the `file:` scheme. The save operation used in this case is never one of the autosaving ones: `NSSaveToOperation` is used instead.

The default implementation of [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md) automatically copies important attributes like file permissions, creation date, and Finder information from the old on-disk version of a document to the new one during an `NSSaveOperation` or `NSAutosaveInPlaceOperation`. This method is meant to be used just for attributes that need to be written for the first time, for `NSSaveAsOperation` and `NSSaveToOperation`. The `url` and `absoluteOriginalContentsURL` parameters are passed in for completeness; NSDocument’s default implementation doesn’t need to use them.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

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
- [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [NSDocument.SaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

# fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) fileAttributesToWriteToURL:(NSURL *) url ofType:(NSString *) typeName forSaveOperation:(NSSaveOperationType) saveOperation originalContentsURL:(NSURL *) absoluteOriginalContentsURL error:(NSError **) outError;
```

## Parameters

- `url`: The location to which the document is being written.
- `typeName`: The string that identifies the document type.
- `saveOperation`: The type of save operation.
- `absoluteOriginalContentsURL`: The location of the previously saved copy of the document (if not `nil`).
- `outError`: On return, if the attributes could not be returned, a pointer to an error object that encapsulates the reason they could not be returned.

<a id="return-value"></a>

## Return Value

A dictionary containing the attributes to be written, or `nil` if unsuccessful.

<a id="Discussion"></a>

## Discussion

Your subclass of `NSDocument` can override this method to control the attributes that are set during a save operation. An override of this method should return a copy of the dictionary returned by its superclass’s version of this method, with appropriate alterations.

The set of valid file attributes is a subset of those understood by the `NSFileManager` class. The default implementation of this method returns an empty dictionary for an `NSSaveOperation` or `NSAutosaveInPlaceOperation`, or a dictionary with an appropriate `NSFileExtensionHidden` entry for any other kind of save operation. You can override this method to customize the attributes that are written to document files.

For backward binary compatibility with OS X v10.5 and earlier, the default implementation of this method returns a dictionary with `NSFileHFSCode` and `NSFileHFSTypeCode` entries that have a value of 0 for `NSSaveOperation`, in apps linked against OS X v10.5 or earlier.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes `[self fileAttributesToWriteToFile:[url path] ofType:typeName saveOperation:aSaveOperation]` if [fileAttributesToWriteToFile:ofType:saveOperation:](fileattributestowritetofile_oftype_saveoperation_.md) is overridden and the URL uses the `file:` scheme. The save operation used in this case is never one of the autosaving ones: `NSSaveToOperation` is used instead.

The default implementation of [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) automatically copies important attributes like file permissions, creation date, and Finder information from the old on-disk version of a document to the new one during an `NSSaveOperation` or `NSAutosaveInPlaceOperation`. This method is meant to be used just for attributes that need to be written for the first time, for `NSSaveAsOperation` and `NSSaveToOperation`. The `url` and `absoluteOriginalContentsURL` parameters are passed in for completeness; NSDocument’s default implementation doesn’t need to use them.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

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
- [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [NSSaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.
