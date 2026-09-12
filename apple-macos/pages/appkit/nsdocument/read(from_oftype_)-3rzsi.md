> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/read(from:oftype:)-3rzsi](https://developer.apple.com/documentation/appkit/nsdocument/read(from:oftype:)-3rzsi)

# read(from:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the contents of this document by reading from a file wrapper of a specified type.

## Declaration

```swift
nonisolated func read(from fileWrapper: FileWrapper, ofType typeName: String) throws
```

## Parameters

- `fileWrapper`: The file wrapper from which the document contents are read.
- `typeName`: The string that identifies the document type.

<a id="Discussion"></a>

## Discussion

The default implementation of this method invokes `[self readFromData:[fileWrapper regularFileContents] ofType:typeName error:outError]`.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes `[self loadFileWrapperRepresentation:fileWrapper ofType:typeName]` if [loadFileWrapperRepresentation:ofType:](loadfilewrapperrepresentation_oftype_.md) is overridden.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading the Document’s Content

- [canConcurrentlyReadDocuments(ofType:)](canconcurrentlyreaddocuments%28oftype_%29.md): Returns a Boolean value that indicates whether the receiver reads multiple documents of the given type concurrently.
- [read(from:ofType:)](read%28from_oftype_%29-1vttv.md): Sets the contents of this document by reading from a file or file package, of a specified type, located by a URL.
- [read(from:ofType:)](read%28from_oftype_%29-6g6ai.md): Sets the contents of this document by reading from data of a specified type.

# readFromFileWrapper:ofType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the contents of this document by reading from a file wrapper of a specified type.

## Declaration

```objectivec
- (BOOL) readFromFileWrapper:(NSFileWrapper *) fileWrapper ofType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `fileWrapper`: The file wrapper from which the document contents are read.
- `typeName`: The string that identifies the document type.
- `outError`: On return, if the document contents could not be read, a pointer to an error object that encapsulates the reason they could not be read.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document contents could be read; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of this method invokes `[self readFromData:[fileWrapper regularFileContents] ofType:typeName error:outError]`.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes `[self loadFileWrapperRepresentation:fileWrapper ofType:typeName]` if [loadFileWrapperRepresentation:ofType:](loadfilewrapperrepresentation_oftype_.md) is overridden.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading the Document’s Content

- [canConcurrentlyReadDocumentsOfType:](canconcurrentlyreaddocuments%28oftype_%29.md): Returns a Boolean value that indicates whether the receiver reads multiple documents of the given type concurrently.
- [readFromURL:ofType:error:](read%28from_oftype_%29-1vttv.md): Sets the contents of this document by reading from a file or file package, of a specified type, located by a URL.
- [readFromData:ofType:error:](read%28from_oftype_%29-6g6ai.md): Sets the contents of this document by reading from data of a specified type.
