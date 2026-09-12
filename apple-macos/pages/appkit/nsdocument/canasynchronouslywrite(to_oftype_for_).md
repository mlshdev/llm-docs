> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/canasynchronouslywrite(to:oftype:for:)](https://developer.apple.com/documentation/appkit/nsdocument/canasynchronouslywrite(to:oftype:for:))

# canAsynchronouslyWrite(to:ofType:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.

## Declaration

```swift
func canAsynchronouslyWrite(to url: URL, ofType typeName: String, for saveOperation: NSDocument.SaveOperationType) -> Bool
```

## Parameters

- `url`: The location of the file or package to which the document is written.
- `typeName`: The string that identifies the document type.
- `saveOperation`: The type of save operation.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) by default; subclasses can override to return [true](https://developer.apple.com/documentation/swift/true), thereby enabling asynchronous writing.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). You are strongly encouraged to override it and make it return [true](https://developer.apple.com/documentation/swift/true), after making sure your overrides of document writing methods can be safely invoked on a non-main thread, and making sure that the [unblockUserInteraction()](unblockuserinteraction%28%29.md) method is invoked at some appropriate time during writing.

## See Also

### Writing the Document’s Content

- [unblockUserInteraction()](unblockuserinteraction%28%29.md): Unblocks the main thread during asynchronous saving.
- [write(to:ofType:)](write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [writeSafely(to:ofType:for:)](writesafely%28to_oftype_for_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [fileWrapper(ofType:)](filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [data(ofType:)](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSDocument.SaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

# canAsynchronouslyWriteToURL:ofType:forSaveOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.

## Declaration

```objectivec
- (BOOL) canAsynchronouslyWriteToURL:(NSURL *) url ofType:(NSString *) typeName forSaveOperation:(NSSaveOperationType) saveOperation;
```

## Parameters

- `url`: The location of the file or package to which the document is written.
- `typeName`: The string that identifies the document type.
- `saveOperation`: The type of save operation.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) by default; subclasses can override to return [true](https://developer.apple.com/documentation/swift/true), thereby enabling asynchronous writing.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false). You are strongly encouraged to override it and make it return [true](https://developer.apple.com/documentation/swift/true), after making sure your overrides of document writing methods can be safely invoked on a non-main thread, and making sure that the [unblockUserInteraction](unblockuserinteraction%28%29.md) method is invoked at some appropriate time during writing.

## See Also

### Writing the Document’s Content

- [unblockUserInteraction](unblockuserinteraction%28%29.md): Unblocks the main thread during asynchronous saving.
- [writeToURL:ofType:error:](write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [fileWrapperOfType:error:](filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [dataOfType:error:](data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSSaveOperationType](saveoperationtype.md): Constants for specifying the type of document-save operation to perform.
