> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/init(for:withcontentsof:oftype:)](https://developer.apple.com/documentation/appkit/nsdocument/init(for:withcontentsof:oftype:))

# init(for:withContentsOf:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a document with the specified contents, and places the resulting document’s file at the designated location.

## Declaration

```swift
convenience init(for urlOrNil: URL?, withContentsOf contentsURL: URL, ofType typeName: String) throws
```

## Parameters

- `urlOrNil`: The location for the document’s file. This value is `nil` for an autosaved document that the user never explicitly saved.
- `contentsURL`: The URL of the file that contains the document’s contents. When loading an autosaved document, this URL contains the location of the autosave file. The contents of this file replace the contents of the file in `absoluteDocumentURL`.
- `typeName`: The string that identifies the document type.

<a id="return-value"></a>

## Return Value

The initialized document object, or `nil` if the document could not be created.

<a id="Discussion"></a>

## Discussion

The system calls this method to open a document that has an associated autosave file . You can override this method to handle any document initialization specific to autosave contents.

After reading the contents from the specified autosave file, this method updates the document’s change count using the `NSChangeReadOtherContents` change type.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure. When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating a Document Object

- [init()](init%28%29.md): Initializes and returns an empty document object.
- [init(contentsOf:ofType:)](init%28contentsof_oftype_%29.md): Initializes a document located by a URL of a specified type.
- [init(type:)](init%28type_%29.md): Initializes a document of a specified type.

# initForURL:withContentsOfURL:ofType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a document with the specified contents, and places the resulting document’s file at the designated location.

## Declaration

```objectivec
- (instancetype) initForURL:(NSURL *) urlOrNil withContentsOfURL:(NSURL *) contentsURL ofType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `urlOrNil`: The location for the document’s file. This value is `nil` for an autosaved document that the user never explicitly saved.
- `contentsURL`: The URL of the file that contains the document’s contents. When loading an autosaved document, this URL contains the location of the autosave file. The contents of this file replace the contents of the file in `absoluteDocumentURL`.
- `typeName`: The string that identifies the document type.
- `outError`: On return, if initialization is unsuccessful, a pointer to an error object that encapsulates the reason the document could not be created.

<a id="return-value"></a>

## Return Value

The initialized document object, or `nil` if the document could not be created.

<a id="Discussion"></a>

## Discussion

The system calls this method to open a document that has an associated autosave file . You can override this method to handle any document initialization specific to autosave contents.

After reading the contents from the specified autosave file, this method updates the document’s change count using the `NSChangeReadOtherContents` change type.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure. When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating a Document Object

- [init](init%28%29.md): Initializes and returns an empty document object.
- [initWithContentsOfURL:ofType:error:](init%28contentsof_oftype_%29.md): Initializes a document located by a URL of a specified type.
- [initWithType:error:](init%28type_%29.md): Initializes a document of a specified type.
