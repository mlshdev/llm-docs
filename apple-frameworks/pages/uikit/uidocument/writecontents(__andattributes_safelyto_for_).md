> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/writecontents(_:andattributes:safelyto:for:)](https://developer.apple.com/documentation/uikit/uidocument/writecontents(_:andattributes:safelyto:for:))

# writeContents(\_:andAttributes:safelyTo:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Ensures that document data is written safely to a specified location in the application sandbox.

## Declaration

```swift
func writeContents(_ contents: Any, andAttributes additionalFileAttributes: [AnyHashable : Any]? = nil, safelyTo url: URL, for saveOperation: UIDocument.SaveOperation) throws
```

## Parameters

- `contents`: The document data to write to disk. Typically, the data is encapsulated by an [NSData](../../foundation/nsdata.md) object (if a flat file) or an [FileWrapper](../../foundation/filewrapper.md) object (if a file package).

  If the object encapsulating the document data is of some other type, you should override this method or [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md) to perform the actual writing of the data.
- `additionalFileAttributes`: A dictionary of [FileManager](../../foundation/filemanager.md) file attributes to assign to the document file. The default implementation obtains these file attributes by calling [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md).
- `url`: The file URL specifying the location of the document file in the application sandbox.
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it is being overwritten. See [UIDocument.SaveOperation](saveoperation.md) for details.

<a id="Discussion"></a>

## Discussion

This method is called by the [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) method to save the file data (and associated attributes in the case of an [FileWrapper](../../foundation/filewrapper.md)). It creates temporary files and directories as necessary so that successful saves can be completed atomically and failed saves can be rolled back cleanly. This method calls [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md) to save the `contents` object, passing the location for the new saved file in the `toURL` parameter and the location of the previously existing file in the `originalContentsURL` parameter, if this is an overwrite operation.

If you want to change how file data is saved, you generally override the [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md) method instead of this method. Additionally, you don’t need to call this method directly unless you are overriding the [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) method.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Writing document data

- [close(completionHandler:)](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contents(forType:)](contents%28fortype_%29.md): Returns the document data to be saved.
- [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.

# writeContents:andAttributes:safelyToURL:forSaveOperation:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Ensures that document data is written safely to a specified location in the application sandbox.

## Declaration

```objectivec
- (BOOL) writeContents:(id) contents andAttributes:(NSDictionary *) additionalFileAttributes safelyToURL:(NSURL *) url forSaveOperation:(UIDocumentSaveOperation) saveOperation error:(NSError **) outError;
```

## Parameters

- `contents`: The document data to write to disk. Typically, the data is encapsulated by an [NSData](../../foundation/nsdata.md) object (if a flat file) or an [NSFileWrapper](../../foundation/filewrapper.md) object (if a file package).

  If the object encapsulating the document data is of some other type, you should override this method or [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md) to perform the actual writing of the data.
- `additionalFileAttributes`: A dictionary of [NSFileManager](../../foundation/filemanager.md) file attributes to assign to the document file. The default implementation obtains these file attributes by calling [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md).
- `url`: The file URL specifying the location of the document file in the application sandbox.
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it is being overwritten. See [UIDocumentSaveOperation](saveoperation.md) for details.
- `outError`: If you override this method and cannot write the document data for any reason, return by indirection an [NSError](../../foundation/nserror.md) object that encapsulates the reasons why you can’t. Otherwise, ignore this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the write operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is called by the [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) method to save the file data (and associated attributes in the case of an [NSFileWrapper](../../foundation/filewrapper.md)). It creates temporary files and directories as necessary so that successful saves can be completed atomically and failed saves can be rolled back cleanly. This method calls [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md) to save the `contents` object, passing the location for the new saved file in the `toURL` parameter and the location of the previously existing file in the `originalContentsURL` parameter, if this is an overwrite operation.

If you want to change how file data is saved, you generally override the [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md) method instead of this method. Additionally, you don’t need to call this method directly unless you are overriding the [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) method.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Writing document data

- [closeWithCompletionHandler:](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contentsForType:error:](contents%28fortype_%29.md): Returns the document data to be saved.
- [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.
