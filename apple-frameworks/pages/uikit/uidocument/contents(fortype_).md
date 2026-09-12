> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/contents(fortype:)](https://developer.apple.com/documentation/uikit/uidocument/contents(fortype:))

# contents(forType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the document data to be saved.

## Declaration

```swift
func contents(forType typeName: String) throws -> Any
```

## Parameters

- `typeName`: The file type of the document, a Uniform Type Identifier (UTI). This string typically derives from the [fileType](filetype.md) property. If you want to save the document under a different UTI, you can override the [savingFileType](savingfiletype.md) method.

<a id="return-value"></a>

## Return Value

The document data to be saved, or `nil` if you cannot return document data. The returned object is typically an instance of the [NSData](../../foundation/nsdata.md) class for flat files or the [FileWrapper](../../foundation/filewrapper.md) class for file packages. If you return `nil`, you should also return an error object in `outError`.

If you return an object other than an [NSData](../../foundation/nsdata.md) or [FileWrapper](../../foundation/filewrapper.md) object, you must override the [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md) or [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md) method to handle the writing of data.

<a id="Discussion"></a>

## Discussion

When you subclass [UIDocument](../uidocument.md), override this method to provide UIKit with the document data for saving.

This method is called on the queue that the [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md) method was called on (typically, the main queue). Writing of data occurs on a background queue. The default implementation of this method returns `nil`.

When you return a non-`nil` value in the `outError` parameter, the completion handlers for the following methods don’t get called:

- [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md)
- [autosave(completionHandler:)](autosave%28completionhandler_%29.md)
- [close(completionHandler:)](close%28completionhandler_%29.md)

Instead, in this case, the error is available to your app in the [handleError(\_:userInteractionPermitted:)](handleerror%28__userinteractionpermitted_%29.md) method and in the [stateChangedNotification](statechangednotification.md) notification.

If you want more control over the saving operation than this method provides—for example, if you want to perform incremental writing of data — override, instead, one of the lower-level data-writing methods such as [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md) or [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md). These methods are called on a background thread.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [open(completionHandler:)](open%28completionhandler_%29.md): Opens a document asynchronously.
- [revert(toContentsOf:completionHandler:)](revert%28tocontentsof_completionhandler_%29.md): Reverts a document to the most recent document data stored on-disk.

### Writing document data

- [close(completionHandler:)](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents(\_:andAttributes:safelyTo:for:)](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents(\_:to:for:originalContentsURL:)](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWrite(to:for:)](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtension(forType:saveOperation:)](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.

# contentsForType:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the document data to be saved.

## Declaration

```objectivec
- (id) contentsForType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `typeName`: The file type of the document, a Uniform Type Identifier (UTI). This string typically derives from the [fileType](filetype.md) property. If you want to save the document under a different UTI, you can override the [savingFileType](savingfiletype.md) method.
- `outError`: If you can’t return document data, return by indirection an [NSError](../../foundation/nserror.md) object that encapsulates the reasons you can’t. Otherwise, ignore this parameter.

<a id="return-value"></a>

## Return Value

The document data to be saved, or `nil` if you cannot return document data. The returned object is typically an instance of the [NSData](../../foundation/nsdata.md) class for flat files or the [NSFileWrapper](../../foundation/filewrapper.md) class for file packages. If you return `nil`, you should also return an error object in `outError`.

If you return an object other than an [NSData](../../foundation/nsdata.md) or [NSFileWrapper](../../foundation/filewrapper.md) object, you must override the [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md) or [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md) method to handle the writing of data.

<a id="Discussion"></a>

## Discussion

When you subclass [UIDocument](../uidocument.md), override this method to provide UIKit with the document data for saving.

This method is called on the queue that the [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md) method was called on (typically, the main queue). Writing of data occurs on a background queue. The default implementation of this method returns `nil`.

When you return a non-`nil` value in the `outError` parameter, the completion handlers for the following methods don’t get called:

- [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md)
- [autosaveWithCompletionHandler:](autosave%28completionhandler_%29.md)
- [closeWithCompletionHandler:](close%28completionhandler_%29.md)

Instead, in this case, the error is available to your app in the [handleError:userInteractionPermitted:](handleerror%28__userinteractionpermitted_%29.md) method and in the [UIDocumentStateChangedNotification](statechangednotification.md) notification.

If you want more control over the saving operation than this method provides—for example, if you want to perform incremental writing of data — override, instead, one of the lower-level data-writing methods such as [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md) or [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md). These methods are called on a background thread.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [openWithCompletionHandler:](open%28completionhandler_%29.md): Opens a document asynchronously.
- [revertToContentsOfURL:completionHandler:](revert%28tocontentsof_completionhandler_%29.md): Reverts a document to the most recent document data stored on-disk.

### Writing document data

- [closeWithCompletionHandler:](close%28completionhandler_%29.md): Asynchronously closes the document after saving any changes.
- [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md): Saves document data to the specified location in the application sandbox.
- [writeContents:andAttributes:safelyToURL:forSaveOperation:error:](writecontents%28__andattributes_safelyto_for_%29.md): Ensures that document data is written safely to a specified location in the application sandbox.
- [writeContents:toURL:forSaveOperation:originalContentsURL:error:](writecontents%28__to_for_originalcontentsurl_%29.md): Writes the document data to disk at the sandbox location indicated by a file URL.
- [savingFileType](savingfiletype.md): Returns the file type to use for saving a document.
- [fileAttributesToWriteToURL:forSaveOperation:error:](fileattributestowrite%28to_for_%29.md): Returns a dictionary of file attributes to associate with the document file when writing or updating it.
- [fileNameExtensionForType:saveOperation:](filenameextension%28fortype_saveoperation_%29.md): Returns a file extension to append to the file URL of the document file being written.
