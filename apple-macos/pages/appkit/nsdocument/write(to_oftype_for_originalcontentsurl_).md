> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/write(to:oftype:for:originalcontentsurl:)](https://developer.apple.com/documentation/appkit/nsdocument/write(to:oftype:for:originalcontentsurl:))

# write(to:ofType:for:originalContentsURL:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the contents of the document to a file or file package located by a URL.

## Declaration

```swift
nonisolated func write(to url: URL, ofType typeName: String, for saveOperation: NSDocument.SaveOperationType, originalContentsURL absoluteOriginalContentsURL: URL?) throws
```

## Parameters

- `url`: The location to which the document contents are written.
- `typeName`: The string that identifies the document type.
- `saveOperation`: The type of save operation.
- `absoluteOriginalContentsURL`: The location of the previously saved copy of the document (if not `nil`).

<a id="Discussion"></a>

## Discussion

The default implementation of this method merely invokes `[self writeToURL:absoluteURL ofType:typeName error:outError]`. You can override this method instead of one of the three simple writing methods ([write(to:ofType:)](write%28to_oftype_%29.md),[fileWrapper(ofType:)](filewrapper%28oftype_%29.md), and [data(ofType:)](data%28oftype_%29.md)) if your document writing machinery needs access to the on-disk representation of the document revision that is about to be overwritten. The value of `absoluteURL` is often not the same as `[self fileURL]`. Other times it is not the same as the URL for the final save destination. Likewise, `absoluteOriginalContentsURL` is often not the same value as `[self fileURL]`. If `absoluteOriginalContentsURL` is `nil`, either the document has never been saved or the user deleted the document file since it was opened.

For backward binary compatibility with OS X v10.3 and earlier, if [writeToFile:ofType:originalFile:saveOperation:](writetofile_oftype_originalfile_saveoperation_.md) is overridden and both URLs use the `file:` scheme, the default implementation of this method instead invokes:

```objc
[self writeToFile:[absoluteURL path]
      ofType:typeName
      originalFile:[absoluteOriginalContentsURL path]
      saveOperation:aSaveOperation];
```

The save operation used in this case is never `NSAutosaveOperation`; `NSSaveToOperation` is used instead.

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
- [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSDocument.SaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

# writeToURL:ofType:forSaveOperation:originalContentsURL:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the contents of the document to a file or file package located by a URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url ofType:(NSString *) typeName forSaveOperation:(NSSaveOperationType) saveOperation originalContentsURL:(NSURL *) absoluteOriginalContentsURL error:(NSError **) outError;
```

## Parameters

- `url`: The location to which the document contents are written.
- `typeName`: The string that identifies the document type.
- `saveOperation`: The type of save operation.
- `absoluteOriginalContentsURL`: The location of the previously saved copy of the document (if not `nil`).
- `outError`: On return, if the document contents could not be written, a pointer to an error object that encapsulates the reason they could not be written.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document contents could be written; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of this method merely invokes `[self writeToURL:absoluteURL ofType:typeName error:outError]`. You can override this method instead of one of the three simple writing methods ([writeToURL:ofType:error:](write%28to_oftype_%29.md),[fileWrapperOfType:error:](filewrapper%28oftype_%29.md), and [dataOfType:error:](data%28oftype_%29.md)) if your document writing machinery needs access to the on-disk representation of the document revision that is about to be overwritten. The value of `absoluteURL` is often not the same as `[self fileURL]`. Other times it is not the same as the URL for the final save destination. Likewise, `absoluteOriginalContentsURL` is often not the same value as `[self fileURL]`. If `absoluteOriginalContentsURL` is `nil`, either the document has never been saved or the user deleted the document file since it was opened.

For backward binary compatibility with OS X v10.3 and earlier, if [writeToFile:ofType:originalFile:saveOperation:](writetofile_oftype_originalfile_saveoperation_.md) is overridden and both URLs use the `file:` scheme, the default implementation of this method instead invokes:

```objc
[self writeToFile:[absoluteURL path]
      ofType:typeName
      originalFile:[absoluteOriginalContentsURL path]
      saveOperation:aSaveOperation];
```

The save operation used in this case is never `NSAutosaveOperation`; `NSSaveToOperation` is used instead.

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
- [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSSaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.
