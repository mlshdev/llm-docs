> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/makedocument(for:withcontentsof:oftype:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/makedocument(for:withcontentsof:oftype:))

# makeDocument(for:withContentsOf:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.

## Declaration

```swift
func makeDocument(for urlOrNil: URL?, withContentsOf contentsURL: URL, ofType typeName: String) throws -> NSDocument
```

## Parameters

- `urlOrNil`: The location of the new document object.
- `contentsURL`: The URL of the file that provides the contents for the new document.
- `typeName`: The type of the document.

<a id="return-value"></a>

## Return Value

The newly created [NSDocument](../nsdocument.md) object, or `nil` if the document could not be created.

<a id="Discussion"></a>

## Discussion

The URL is specified by `absoluteDocumentURL`, the type by `typeName`, and the other URL providing the contents by `absoluteDocumentContentsURL`. If not successful, the method returns `nil` after setting `outError` to point to an `NSError` object that encapsulates the reason why the document could not be instantiated. The default implementation of this method calls [documentClass(forType:)](documentclass%28fortype_%29.md) to find out the class of document to instantiate, allocates a document object, and initializes it by sending it an [init(for:withContentsOf:ofType:)](../nsdocument/init%28for_withcontentsof_oftype_%29.md) message.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Opening Documents

- [document(for:)](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocument(withContentsOf:copying:displayName:)](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocument(withContentsOf:display:completionHandler:)](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay(\_:)](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocument(ofType:)](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocument(for:withContentsOf:display:completionHandler:)](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

# makeDocumentForURL:withContentsOfURL:ofType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.

## Declaration

```objectivec
- (NSDocument *) makeDocumentForURL:(NSURL *) urlOrNil withContentsOfURL:(NSURL *) contentsURL ofType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `urlOrNil`: The location of the new document object.
- `contentsURL`: The URL of the file that provides the contents for the new document.
- `typeName`: The type of the document.
- `outError`: On return, an error if the document could not be created, otherwise `nil`.

<a id="return-value"></a>

## Return Value

The newly created [NSDocument](../nsdocument.md) object, or `nil` if the document could not be created.

<a id="Discussion"></a>

## Discussion

The URL is specified by `absoluteDocumentURL`, the type by `typeName`, and the other URL providing the contents by `absoluteDocumentContentsURL`. If not successful, the method returns `nil` after setting `outError` to point to an `NSError` object that encapsulates the reason why the document could not be instantiated. The default implementation of this method calls [documentClassForType:](documentclass%28fortype_%29.md) to find out the class of document to instantiate, allocates a document object, and initializes it by sending it an [initForURL:withContentsOfURL:ofType:error:](../nsdocument/init%28for_withcontentsof_oftype_%29.md) message.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Opening Documents

- [documentForURL:](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocumentWithContentsOfURL:copying:displayName:error:](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay:error:](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocumentOfType:error:](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocumentForURL:withContentsOfURL:display:completionHandler:](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.
