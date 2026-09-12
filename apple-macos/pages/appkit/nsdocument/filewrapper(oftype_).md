> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/filewrapper(oftype:)](https://developer.apple.com/documentation/appkit/nsdocument/filewrapper(oftype:))

# fileWrapper(ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.

## Declaration

```swift
func fileWrapper(ofType typeName: String) throws -> FileWrapper
```

## Parameters

- `typeName`: The string that identifies the document type.

<a id="return-value"></a>

## Return Value

A file wrapper containing the document contents, or, if the file wrapper could not be created, `nil`.

<a id="Discussion"></a>

## Discussion

For backward binary compatibility with OS X v10.3 and earlier, if [fileWrapperRepresentationOfType:](filewrapperrepresentationoftype_.md) is overridden, the default implementation of this method instead invokes `[self fileWrapperRepresentationOfType:typeName]`.

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
- [data(ofType:)](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSDocument.SaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

# fileWrapperOfType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.

## Declaration

```objectivec
- (NSFileWrapper *) fileWrapperOfType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `typeName`: The string that identifies the document type.
- `outError`: On return, if the file wrapper could not be created, a pointer to an error object that encapsulates the reason it could not be created.

<a id="return-value"></a>

## Return Value

A file wrapper containing the document contents, or, if the file wrapper could not be created, `nil`.

<a id="Discussion"></a>

## Discussion

For backward binary compatibility with OS X v10.3 and earlier, if [fileWrapperRepresentationOfType:](filewrapperrepresentationoftype_.md) is overridden, the default implementation of this method instead invokes `[self fileWrapperRepresentationOfType:typeName]`.

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
- [dataOfType:error:](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSSaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.
