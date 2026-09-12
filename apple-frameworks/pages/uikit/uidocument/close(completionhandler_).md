> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/close(completionhandler:)](https://developer.apple.com/documentation/uikit/uidocument/close(completionhandler:))

# close(completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asynchronously closes the document after saving any changes.

## Declaration

```swift
func close(completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func close() async -> Bool
```

## Parameters

- `completionHandler`: A block with code to execute after the save-and-close operation concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if any save operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  The block is invoked on the main queue.

<a id="Discussion"></a>

## Discussion

You call this method to begin the sequence of method calls that saves a document safely and asynchronously. The file-system location of the document derives from the [fileURL](fileurl.md) property. After the save operation concludes, the code in `completionHandler` is executed. In this code, you can close the document — for example, by removing the document’s view from the screen. Additionally, if the save operation didn’t succeed (`success` is [false](https://developer.apple.com/documentation/swift/false)), you can respond in an appropriate manner.

You typically wouldn’t override this method. The default implementation calls the [autosave(completionHandler:)](autosave%28completionhandler_%29.md) method.

## See Also

### Writing document data

- [contents(forType:)](contents%28fortype_%29.md): Returns the document data to be saved.
- [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.

# closeWithCompletionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asynchronously closes the document after saving any changes.

## Declaration

```objectivec
- (void) closeWithCompletionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `completionHandler`: A block with code to execute after the save-and-close operation concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if any save operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  The block is invoked on the main queue.

<a id="Discussion"></a>

## Discussion

You call this method to begin the sequence of method calls that saves a document safely and asynchronously. The file-system location of the document derives from the [fileURL](fileurl.md) property. After the save operation concludes, the code in `completionHandler` is executed. In this code, you can close the document — for example, by removing the document’s view from the screen. Additionally, if the save operation didn’t succeed (`success` is [false](https://developer.apple.com/documentation/swift/false)), you can respond in an appropriate manner.

You typically wouldn’t override this method. The default implementation calls the [autosaveWithCompletionHandler:](autosave%28completionhandler_%29.md) method.

## See Also

### Writing document data

- [contentsForType:error:](contents%28fortype_%29.md): Returns the document data to be saved.
- [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.
