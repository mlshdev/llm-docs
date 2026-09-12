> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/filenameextension(fortype:saveoperation:)](https://developer.apple.com/documentation/uikit/uidocument/filenameextension(fortype:saveoperation:))

# fileNameExtension(forType:saveOperation:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a file extension to append to the file URL of the document file being written.

## Declaration

```swift
func fileNameExtension(forType typeName: String?, saveOperation: UIDocument.SaveOperation) -> String
```

## Parameters

- `typeName`: A Uniform Type Identifier (UTI) that indicates the type of document (for example, PDF or HTML).
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it’s being overwritten. See [UIDocument.SaveOperation](saveoperation.md) for details.

<a id="return-value"></a>

## Return Value

A string to use as the file extension of the document file.

<a id="Discussion"></a>

## Discussion

The default implementation queries Launch Services to obtain the file extension matching the file (document) type. You can override this method to return a file extension that’s different from the default extension. The default implementation of the [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) method calls this method before it gets the document content and writes the document file to disk.

## See Also

### Writing document data

- [close(completionHandler:)](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contents(forType:)](contents%28fortype_%29.md): Returns the document data to be saved.
- [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.

# fileNameExtensionForType:saveOperation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a file extension to append to the file URL of the document file being written.

## Declaration

```objectivec
- (NSString *) fileNameExtensionForType:(NSString *) typeName saveOperation:(UIDocumentSaveOperation) saveOperation;
```

## Parameters

- `typeName`: A Uniform Type Identifier (UTI) that indicates the type of document (for example, PDF or HTML).
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it’s being overwritten. See [UIDocumentSaveOperation](saveoperation.md) for details.

<a id="return-value"></a>

## Return Value

A string to use as the file extension of the document file.

<a id="Discussion"></a>

## Discussion

The default implementation queries Launch Services to obtain the file extension matching the file (document) type. You can override this method to return a file extension that’s different from the default extension. The default implementation of the [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) method calls this method before it gets the document content and writes the document file to disk.

## See Also

### Writing document data

- [closeWithCompletionHandler:](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contentsForType:error:](contents%28fortype_%29.md): Returns the document data to be saved.
- [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
