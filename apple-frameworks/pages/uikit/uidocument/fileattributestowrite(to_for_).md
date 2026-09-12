> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/fileattributestowrite(to:for:)](https://developer.apple.com/documentation/uikit/uidocument/fileattributestowrite(to:for:))

# fileAttributesToWrite(to:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a dictionary of file attributes to associate with the document file when writing or updating it.

## Declaration

```swift
func fileAttributesToWrite(to url: URL, for saveOperation: UIDocument.SaveOperation) throws -> [AnyHashable : Any]
```

## Parameters

- `url`: A file URL locating the document in the application sandbox.
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it’s being overwritten. See [UIDocument.SaveOperation](saveoperation.md) for details.

<a id="return-value"></a>

## Return Value

A dictionary of file attributes — for example, level of file protection and creation date. See [FileManager](../../foundation/filemanager.md) for more information about file attributes.

<a id="Discussion"></a>

## Discussion

The attributes are associated with a specific file type and save operation. You can override this method to return a dictionary of file attributes that are different than the default file attribute, which for new files is [extensionHidden](../../foundation/fileattributekey/extensionhidden.md).

The [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) calls this method before executing asynchronous writing. It passes the dictionary into [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md) when it calls that method to write the document file.

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
- [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.

# fileAttributesToWriteToURL:forSaveOperation:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a dictionary of file attributes to associate with the document file when writing or updating it.

## Declaration

```objectivec
- (NSDictionary *) fileAttributesToWriteToURL:(NSURL *) url forSaveOperation:(UIDocumentSaveOperation) saveOperation error:(NSError **) outError;
```

## Parameters

- `url`: A file URL locating the document in the application sandbox.
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it’s being overwritten. See [UIDocumentSaveOperation](saveoperation.md) for details.
- `outError`: If you override this method and can’t write the document data for any reason, return by indirection an [NSError](../../foundation/nserror.md) object that encapsulates the reasons why you can’t. Otherwise, ignore this parameter.

<a id="return-value"></a>

## Return Value

A dictionary of file attributes — for example, level of file protection and creation date. See [NSFileManager](../../foundation/filemanager.md) for more information about file attributes.

<a id="Discussion"></a>

## Discussion

The attributes are associated with a specific file type and save operation. You can override this method to return a dictionary of file attributes that are different than the default file attribute, which for new files is [NSFileExtensionHidden](../../foundation/fileattributekey/extensionhidden.md).

The [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) calls this method before executing asynchronous writing. It passes the dictionary into [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md) when it calls that method to write the document file.

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
- [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.
