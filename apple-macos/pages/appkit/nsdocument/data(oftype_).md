> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/data(oftype:)](https://developer.apple.com/documentation/appkit/nsdocument/data(oftype:))

# data(ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns a data object that contains the contents of the document, formatted to a specified type.

## Declaration

```swift
func data(ofType typeName: String) throws -> Data
```

## Parameters

- `typeName`: The string that identifies the document type.

<a id="return-value"></a>

## Return Value

A data object containing the document contents, or, if the data object could not be created, `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method throws an exception because at least one of the writing methods (this method, [write(to:ofType:)](write%28to_oftype_%29.md), [fileWrapper(ofType:)](filewrapper%28oftype_%29.md), or [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md)) must be overridden.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes ```dataRepresentationOfType:``typeName``` on `self` if `dataRepresentationOfType:` is overridden.

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
- [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSDocument.SaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

# dataOfType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns a data object that contains the contents of the document, formatted to a specified type.

## Declaration

```objectivec
- (NSData *) dataOfType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `typeName`: The string that identifies the document type.
- `outError`: On return, if the data object could not be created, a pointer to an error object that encapsulates the reason it could not be created.

<a id="return-value"></a>

## Return Value

A data object containing the document contents, or, if the data object could not be created, `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method throws an exception because at least one of the writing methods (this method, [writeToURL:ofType:error:](write%28to_oftype_%29.md), [fileWrapperOfType:error:](filewrapper%28oftype_%29.md), or [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md)) must be overridden.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes ```dataRepresentationOfType:``typeName``` on `self` if `dataRepresentationOfType:` is overridden.

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
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSSaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.
