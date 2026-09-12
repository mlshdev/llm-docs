> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/savingfiletype](https://developer.apple.com/documentation/uikit/uidocument/savingfiletype)

# savingFileType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the file type to use for saving a document.

## Declaration

```swift
var savingFileType: String? { get }
```

<a id="return-value"></a>

## Return Value

A Uniform Type Identifier (UTI) identifying a document type (for example, PDF or HTML).

<a id="Discussion"></a>

## Discussion

The default implementation returns the current file type obtained from the [fileType](filetype.md) property. The default implementation of the [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) method appends an extension to the file URL that’s based on the file type. So if you want to move the document to a new type and extension, you can override this method to supply that file type.

## See Also

### Writing document data

- [close(completionHandler:)](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contents(forType:)](contents%28fortype_%29.md): Returns the document data to be saved.
- [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.

# savingFileType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the file type to use for saving a document.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * savingFileType;
```

<a id="return-value"></a>

## Return Value

A Uniform Type Identifier (UTI) identifying a document type (for example, PDF or HTML).

<a id="Discussion"></a>

## Discussion

The default implementation returns the current file type obtained from the [fileType](filetype.md) property. The default implementation of the [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) method appends an extension to the file URL that’s based on the file type. So if you want to move the document to a new type and extension, you can override this method to supply that file type.

## See Also

### Writing document data

- [closeWithCompletionHandler:](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contentsForType:error:](contents%28fortype_%29.md): Returns the document data to be saved.
- [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.
