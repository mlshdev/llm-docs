> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/read(from:oftype:)-6g6ai](https://developer.apple.com/documentation/appkit/nsdocument/read(from:oftype:)-6g6ai)

# read(from:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the contents of this document by reading from data of a specified type.

## Declaration

```swift
nonisolated func read(from data: Data, ofType typeName: String) throws
```

## Parameters

- `data`: The data object from which the document contents are read.
- `typeName`: The string that identifies the document type.

<a id="Discussion"></a>

## Discussion

The default implementation of this method throws an exception because at least one of the three reading methods (this method, [read(from:ofType:)](read%28from_oftype_%29-1vttv.md), [read(from:ofType:)](read%28from_oftype_%29-3rzsi.md)), or every method that may invoke [read(from:ofType:)](read%28from_oftype_%29-1vttv.md), must be overridden.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading the Document’s Content

- [canConcurrentlyReadDocuments(ofType:)](canconcurrentlyreaddocuments%28oftype_%29.md): Returns a Boolean value that indicates whether the receiver reads multiple documents of the given type concurrently.
- [read(from:ofType:)](read%28from_oftype_%29-1vttv.md): Sets the contents of this document by reading from a file or file package, of a specified type, located by a URL.
- [read(from:ofType:)](read%28from_oftype_%29-3rzsi.md): Sets the contents of this document by reading from a file wrapper of a specified type.

# readFromData:ofType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the contents of this document by reading from data of a specified type.

## Declaration

```objectivec
- (BOOL) readFromData:(NSData *) data ofType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `data`: The data object from which the document contents are read.
- `typeName`: The string that identifies the document type.
- `outError`: On return, if the document contents could not be read, a pointer to an error object that encapsulates the reason they could not be read.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document contents could be read; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of this method throws an exception because at least one of the three reading methods (this method, [readFromURL:ofType:error:](read%28from_oftype_%29-1vttv.md), [readFromFileWrapper:ofType:error:](read%28from_oftype_%29-3rzsi.md)), or every method that may invoke [readFromURL:ofType:error:](read%28from_oftype_%29-1vttv.md), must be overridden.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading the Document’s Content

- [canConcurrentlyReadDocumentsOfType:](canconcurrentlyreaddocuments%28oftype_%29.md): Returns a Boolean value that indicates whether the receiver reads multiple documents of the given type concurrently.
- [readFromURL:ofType:error:](read%28from_oftype_%29-1vttv.md): Sets the contents of this document by reading from a file or file package, of a specified type, located by a URL.
- [readFromFileWrapper:ofType:error:](read%28from_oftype_%29-3rzsi.md): Sets the contents of this document by reading from a file wrapper of a specified type.
