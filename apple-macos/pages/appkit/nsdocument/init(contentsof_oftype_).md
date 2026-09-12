> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/init(contentsof:oftype:)](https://developer.apple.com/documentation/appkit/nsdocument/init(contentsof:oftype:))

# init(contentsOf:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a document located by a URL of a specified type.

## Declaration

```swift
convenience init(contentsOf url: URL, ofType typeName: String) throws
```

## Parameters

- `url`: The URL from which the contents of the document are obtained.
- `typeName`: The string that identifies the document type.

<a id="return-value"></a>

## Return Value

The initialized `NSDocument` object, or, if the document could not be created, `nil`.

<a id="Discussion"></a>

## Discussion

You can override this method to customize the reopening of autosaved documents.

This method is invoked by the `NSDocumentController` method [makeDocument(withContentsOf:ofType:)](../nsdocumentcontroller/makedocument%28withcontentsof_oftype_%29.md). The default implementation of this method calls the [init()](init%28%29.md) and [read(from:ofType:)](read%28from_oftype_%29-1vttv.md) methods and sets values for the [fileURL](fileurl.md), [fileType](filetype.md), and [fileModificationDate](filemodificationdate.md) properties.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes [initWithContentsOfFile:ofType:](initwithcontentsoffile_oftype_.md) if it is overridden and the URL uses the `file:` scheme. It still updates the  [fileModificationDate](filemodificationdate.md) property in this situation.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating a Document Object

- [init()](init%28%29.md): Initializes and returns an empty document object.
- [init(for:withContentsOf:ofType:)](init%28for_withcontentsof_oftype_%29.md): Initializes a document with the specified contents, and places the resulting document’s file at the designated location.
- [init(type:)](init%28type_%29.md): Initializes a document of a specified type.

# initWithContentsOfURL:ofType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a document located by a URL of a specified type.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url ofType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `url`: The URL from which the contents of the document are obtained.
- `typeName`: The string that identifies the document type.
- `outError`: On return, if initialization is unsuccessful, a pointer to an error object that encapsulates the reason the document could not be created.

<a id="return-value"></a>

## Return Value

The initialized `NSDocument` object, or, if the document could not be created, `nil`.

<a id="Discussion"></a>

## Discussion

You can override this method to customize the reopening of autosaved documents.

This method is invoked by the `NSDocumentController` method [makeDocumentWithContentsOfURL:ofType:error:](../nsdocumentcontroller/makedocument%28withcontentsof_oftype_%29.md). The default implementation of this method calls the [init](init%28%29.md) and [readFromURL:ofType:error:](read%28from_oftype_%29-1vttv.md) methods and sets values for the [fileURL](fileurl.md), [fileType](filetype.md), and [fileModificationDate](filemodificationdate.md) properties.

For backward binary compatibility with OS X v10.3 and earlier, the default implementation of this method instead invokes [initWithContentsOfFile:ofType:](initwithcontentsoffile_oftype_.md) if it is overridden and the URL uses the `file:` scheme. It still updates the  [fileModificationDate](filemodificationdate.md) property in this situation.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating a Document Object

- [init](init%28%29.md): Initializes and returns an empty document object.
- [initForURL:withContentsOfURL:ofType:error:](init%28for_withcontentsof_oftype_%29.md): Initializes a document with the specified contents, and places the resulting document’s file at the designated location.
- [initWithType:error:](init%28type_%29.md): Initializes a document of a specified type.
