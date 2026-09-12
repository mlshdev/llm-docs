> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/writecontents(_:to:for:originalcontentsurl:)](https://developer.apple.com/documentation/uikit/uidocument/writecontents(_:to:for:originalcontentsurl:))

# writeContents(\_:to:for:originalContentsURL:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Writes the document data to disk at the sandbox location indicated by a file URL.

## Declaration

```swift
func writeContents(_ contents: Any, to url: URL, for saveOperation: UIDocument.SaveOperation, originalContentsURL: URL?) throws
```

## Parameters

- `contents`: The document data to write to disk. Typically, the data is encapsulated by an [NSData](../../foundation/nsdata.md) object (if a flat file) or an [FileWrapper](../../foundation/filewrapper.md) object (if a file package).

  If the object encapsulating the document data is of some other type, you should override this method or [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md) to perform the actual writing of the data.
- `url`: A file URL specifying the location of the document file in the application sandbox.
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it is being overwritten. See [UIDocument.SaveOperation](saveoperation.md) for details.
- `originalContentsURL`: A file URL specifying the previous location of the document file (if not `nil`).

<a id="Discussion"></a>

## Discussion

This method is called by the [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md) to write the actual file data. It is passed the contents object returned from your [contents(forType:)](contents%28fortype_%29.md) implementation. The default implementation of this method supports [NSData](../../foundation/nsdata.md) or [FileWrapper](../../foundation/filewrapper.md) contents by asking the contents object to save itself to the corresponding URL.

If you override this method, you may choose to return a different type of data from [contents(forType:)](contents%28fortype_%29.md) or you may choose to not override [contents(forType:)](contents%28fortype_%29.md) and generate the writable data directly within this method. If you override this method, you should not invoke the superclass implementation.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Writing document data

- [close(completionHandler:)](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contents(forType:)](contents%28fortype_%29.md): Returns the document data to be saved.
- [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.

# writeContents:toURL:forSaveOperation:originalContentsURL:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Writes the document data to disk at the sandbox location indicated by a file URL.

## Declaration

```objectivec
- (BOOL) writeContents:(id) contents toURL:(NSURL *) url forSaveOperation:(UIDocumentSaveOperation) saveOperation originalContentsURL:(NSURL *) originalContentsURL error:(NSError **) outError;
```

## Parameters

- `contents`: The document data to write to disk. Typically, the data is encapsulated by an [NSData](../../foundation/nsdata.md) object (if a flat file) or an [NSFileWrapper](../../foundation/filewrapper.md) object (if a file package).

  If the object encapsulating the document data is of some other type, you should override this method or [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md) to perform the actual writing of the data.
- `url`: A file URL specifying the location of the document file in the application sandbox.
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it is being overwritten. See [UIDocumentSaveOperation](saveoperation.md) for details.
- `originalContentsURL`: A file URL specifying the previous location of the document file (if not `nil`).
- `outError`: If you override this method and cannot write the document data for any reason, return by indirection an [NSError](../../foundation/nserror.md) object that encapsulates the reasons why you can’t. Otherwise, ignore this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the write operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called by the [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md) to write the actual file data. It is passed the contents object returned from your [contentsForType:error:](contents%28fortype_%29.md) implementation. The default implementation of this method supports [NSData](../../foundation/nsdata.md) or [NSFileWrapper](../../foundation/filewrapper.md) contents by asking the contents object to save itself to the corresponding URL.

If you override this method, you may choose to return a different type of data from [contentsForType:error:](contents%28fortype_%29.md) or you may choose to not override [contentsForType:error:](contents%28fortype_%29.md) and generate the writable data directly within this method. If you override this method, you should not invoke the superclass implementation.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Writing document data

- [closeWithCompletionHandler:](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contentsForType:error:](contents%28fortype_%29.md): Returns the document data to be saved.
- [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.
