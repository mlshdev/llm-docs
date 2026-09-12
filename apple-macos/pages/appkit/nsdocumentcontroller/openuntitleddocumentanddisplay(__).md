> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/openuntitleddocumentanddisplay(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/openuntitleddocumentanddisplay(_:))

# openUntitledDocumentAndDisplay(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.

## Declaration

```swift
func openUntitledDocumentAndDisplay(_ displayDocument: Bool) throws -> NSDocument
```

## Parameters

- `displayDocument`: [true](https://developer.apple.com/documentation/swift/true) if the user interface for the document should be shown, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

Returns the new [NSDocument](../nsdocument.md) object, or `nil` if a new untitled document could not be created. If this method returns `nil`, it also sets the address referenced by `outError` to an `NSError` object that tell why the document could not be created.

<a id="Discussion"></a>

## Discussion

The default implementation of this method calls [defaultType](defaulttype.md) to determine the type of new document to create, calls [makeUntitledDocument(ofType:)](makeuntitleddocument%28oftype_%29.md) to create it, then calls [addDocument(\_:)](adddocument%28__%29.md) to record its opening.

When `displayDocument` is [true](https://developer.apple.com/documentation/swift/true), this method sends the new document [makeWindowControllers()](../nsdocument/makewindowcontrollers%28%29.md) and [showWindows()](../nsdocument/showwindows%28%29.md) messages. In this scenario, [showWindows()](../nsdocument/showwindows%28%29.md) shows only the window controllers that have been assigned to the document.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Opening Documents

- [document(for:)](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocument(withContentsOf:copying:displayName:)](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocument(withContentsOf:display:completionHandler:)](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [makeDocument(for:withContentsOf:ofType:)](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocument(ofType:)](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocument(for:withContentsOf:display:completionHandler:)](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

# openUntitledDocumentAndDisplay:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.

## Declaration

```objectivec
- (NSDocument *) openUntitledDocumentAndDisplay:(BOOL) displayDocument error:(NSError **) outError;
```

## Parameters

- `displayDocument`: [true](https://developer.apple.com/documentation/swift/true) if the user interface for the document should be shown, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `outError`: On return, an error if the document could not be created, otherwise `nil`.

<a id="return-value"></a>

## Return Value

Returns the new [NSDocument](../nsdocument.md) object, or `nil` if a new untitled document could not be created. If this method returns `nil`, it also sets the address referenced by `outError` to an `NSError` object that tell why the document could not be created.

<a id="Discussion"></a>

## Discussion

The default implementation of this method calls [defaultType](defaulttype.md) to determine the type of new document to create, calls [makeUntitledDocumentOfType:error:](makeuntitleddocument%28oftype_%29.md) to create it, then calls [addDocument:](adddocument%28__%29.md) to record its opening.

When `displayDocument` is [true](https://developer.apple.com/documentation/swift/true), this method sends the new document [makeWindowControllers](../nsdocument/makewindowcontrollers%28%29.md) and [showWindows](../nsdocument/showwindows%28%29.md) messages. In this scenario, [showWindows](../nsdocument/showwindows%28%29.md) shows only the window controllers that have been assigned to the document.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Opening Documents

- [documentForURL:](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocumentWithContentsOfURL:copying:displayName:error:](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [makeDocumentForURL:withContentsOfURL:ofType:error:](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocumentOfType:error:](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocumentForURL:withContentsOfURL:display:completionHandler:](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.
