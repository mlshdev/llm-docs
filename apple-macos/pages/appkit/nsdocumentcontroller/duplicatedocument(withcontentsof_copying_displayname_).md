> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/duplicatedocument(withcontentsof:copying:displayname:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/duplicatedocument(withcontentsof:copying:displayname:))

# duplicateDocument(withContentsOf:copying:displayName:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.

## Declaration

```swift
func duplicateDocument(withContentsOf url: URL, copying duplicateByCopying: Bool, displayName displayNameOrNil: String?) throws -> NSDocument
```

## Parameters

- `url`: The URL locating the document from which contents of the new document are copied.
- `duplicateByCopying`: If [true](https://developer.apple.com/documentation/swift/true), the contents located at the passed-in URL are copied into a file located in the directory used for the autosaved contents of untitled documents.
- `displayNameOrNil`: If not `nil` then this value is used to derive a display name for the new document that does not match one that is already in use by an open document.

<a id="return-value"></a>

## Return Value

The newly created [NSDocument](../nsdocument.md) object, or `nil` if the document could not be created.

<a id="Discussion"></a>

## Discussion

The default implementation of this method copies the file if specified, determines the type of the document, calls [makeDocument(for:withContentsOf:ofType:)](makedocument%28for_withcontentsof_oftype_%29.md) to instantiate it, sends the document `setDisplayName:` to name it if `displayNameOrNil` is not `nil`, calls [addDocument(\_:)](adddocument%28__%29.md) to record its opening, and sends the document [makeWindowControllers()](../nsdocument/makewindowcontrollers%28%29.md) and [showWindows()](../nsdocument/showwindows%28%29.md) messages.

The default implementation of this method uses the file coordination mechanism introduced in OS X v10.7. It passes the document to the `NSFileCoordinator` method [addFilePresenter(\_:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/addfilepresenter%28_:%29) immediately after calling the [addDocument(\_:)](adddocument%28__%29.md) method. (The balancing invocation of the [NSFileCoordinator](https://developer.apple.com/documentation/foundation/nsfilecoordinator) method [removeFilePresenter(\_:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/removefilepresenter%28_:%29) is in the [NSDocument](../nsdocument.md) method [close()](../nsdocument/close%28%29.md).)

You can override this method to customize how documents are duplicated. It is called by the [NSDocument](../nsdocument.md) method [duplicate()](../nsdocument/duplicate%28%29.md). It may also be called from other places in AppKit.

In most cases, an app does not need to call this method directly.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Opening Documents

- [document(for:)](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [openDocument(withContentsOf:display:completionHandler:)](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay(\_:)](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocument(for:withContentsOf:ofType:)](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocument(ofType:)](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocument(for:withContentsOf:display:completionHandler:)](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

# duplicateDocumentWithContentsOfURL:copying:displayName:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.

## Declaration

```objectivec
- (NSDocument *) duplicateDocumentWithContentsOfURL:(NSURL *) url copying:(BOOL) duplicateByCopying displayName:(NSString *) displayNameOrNil error:(NSError **) outError;
```

## Parameters

- `url`: The URL locating the document from which contents of the new document are copied.
- `duplicateByCopying`: If [true](https://developer.apple.com/documentation/swift/true), the contents located at the passed-in URL are copied into a file located in the directory used for the autosaved contents of untitled documents.
- `displayNameOrNil`: If not `nil` then this value is used to derive a display name for the new document that does not match one that is already in use by an open document.
- `outError`: On return, if duplication is unsuccessful, a pointer to an error object that encapsulates the reason the document could not be created.

<a id="return-value"></a>

## Return Value

The newly created [NSDocument](../nsdocument.md) object, or `nil` if the document could not be created.

<a id="Discussion"></a>

## Discussion

The default implementation of this method copies the file if specified, determines the type of the document, calls [makeDocumentForURL:withContentsOfURL:ofType:error:](makedocument%28for_withcontentsof_oftype_%29.md) to instantiate it, sends the document `setDisplayName:` to name it if `displayNameOrNil` is not `nil`, calls [addDocument:](adddocument%28__%29.md) to record its opening, and sends the document [makeWindowControllers](../nsdocument/makewindowcontrollers%28%29.md) and [showWindows](../nsdocument/showwindows%28%29.md) messages.

The default implementation of this method uses the file coordination mechanism introduced in OS X v10.7. It passes the document to the `NSFileCoordinator` method [addFilePresenter:](https://developer.apple.com/documentation/foundation/nsfilecoordinator/addfilepresenter%28_:%29) immediately after calling the [addDocument:](adddocument%28__%29.md) method. (The balancing invocation of the [NSFileCoordinator](https://developer.apple.com/documentation/foundation/nsfilecoordinator) method [removeFilePresenter:](https://developer.apple.com/documentation/foundation/nsfilecoordinator/removefilepresenter%28_:%29) is in the [NSDocument](../nsdocument.md) method [close](../nsdocument/close%28%29.md).)

You can override this method to customize how documents are duplicated. It is called by the [NSDocument](../nsdocument.md) method [duplicateAndReturnError:](../nsdocument/duplicate%28%29.md). It may also be called from other places in AppKit.

In most cases, an app does not need to call this method directly.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Opening Documents

- [documentForURL:](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay:error:](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocumentForURL:withContentsOfURL:ofType:error:](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocumentOfType:error:](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocumentForURL:withContentsOfURL:display:completionHandler:](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.
