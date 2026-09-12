> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/save(to:for:completionhandler:)](https://developer.apple.com/documentation/uikit/uidocument/save(to:for:completionhandler:))

# save(to:for:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Saves document data to the specified location in the application sandbox.

## Declaration

```swift
func save(to url: URL, for saveOperation: UIDocument.SaveOperation, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func save(to url: URL, for saveOperation: UIDocument.SaveOperation) async -> Bool
```

## Parameters

- `url`: The file URL identifying the location in the application sandbox to write the document data to. Typically, this is the URL obtained from the [fileURL](fileurl.md) property.
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it is being overwritten. See [UIDocument.SaveOperation](saveoperation.md) for details.
- `completionHandler`: A block with code that is executed when the save operation concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if the save operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  This block is invoked on the calling queue.

<a id="Discussion"></a>

## Discussion

The default implementation of this method first calls the [contents(forType:)](contents%28fortype_%29.md) method synchronously on the calling queue to get the document data to save. Then it calls the [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md) method on a background queue to perform the actual writing of the data to disk.

If you override this method, it’s recommended that you first call the superclass implementation of the method (`super`). If you do not call `super`, you must do two things:

- Call [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md) to put the save operation on a background queue.
- In the block parameter, implement coordinated writing by using the [NSFileCoordinator](../../foundation/nsfilecoordinator.md) class.
- From within the coordinated write, call [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md).

## See Also

### Writing document data

- [close(completionHandler:)](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contents(forType:)](contents%28fortype_%29.md): Returns the document data to be saved.
- [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.

# saveToURL:forSaveOperation:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Saves document data to the specified location in the application sandbox.

## Declaration

```objectivec
- (void) saveToURL:(NSURL *) url forSaveOperation:(UIDocumentSaveOperation) saveOperation completionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `url`: The file URL identifying the location in the application sandbox to write the document data to. Typically, this is the URL obtained from the [fileURL](fileurl.md) property.
- `saveOperation`: A constant that indicates whether the document file is being written the first time or whether it is being overwritten. See [UIDocumentSaveOperation](saveoperation.md) for details.
- `completionHandler`: A block with code that is executed when the save operation concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if the save operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  This block is invoked on the calling queue.

<a id="Discussion"></a>

## Discussion

The default implementation of this method first calls the [contentsForType:error:](contents%28fortype_%29.md) method synchronously on the calling queue to get the document data to save. Then it calls the [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md) method on a background queue to perform the actual writing of the data to disk.

If you override this method, it’s recommended that you first call the superclass implementation of the method (`super`). If you do not call `super`, you must do two things:

- Call [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md) to put the save operation on a background queue.
- In the block parameter, implement coordinated writing by using the [NSFileCoordinator](../../foundation/nsfilecoordinator.md) class.
- From within the coordinated write, call [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md).

## See Also

### Writing document data

- [closeWithCompletionHandler:](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [contentsForType:error:](contents%28fortype_%29.md): Returns the document data to be saved.
- [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.
