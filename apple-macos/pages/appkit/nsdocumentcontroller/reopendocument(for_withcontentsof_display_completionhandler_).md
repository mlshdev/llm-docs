> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/reopendocument(for:withcontentsof:display:completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/reopendocument(for:withcontentsof:display:completionhandler:))

# reopenDocument(for:withContentsOf:display:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

## Declaration

```swift
func reopenDocument(for urlOrNil: URL?, withContentsOf contentsURL: URL, display displayDocument: Bool, completionHandler: @escaping (NSDocument?, Bool, (any Error)?) -> Void)
```

```swift
func reopenDocument(for urlOrNil: URL?, withContentsOf contentsURL: URL, display displayDocument: Bool) async throws -> (NSDocument, Bool)
```

## Parameters

- `urlOrNil`: The URL locating the reopened document, unless `nil`. A `nil` parameter value indicates that the reopened document is to have no [fileURL](../nsdocument/fileurl.md), like an untitled document.
- `contentsURL`: The URL (which may or may not be different from the URL of the reopened document) of the document from which the contents are read.
- `displayDocument`: If [true](https://developer.apple.com/documentation/swift/true), displays the document’s user interface.
- `completionHandler`: The completion handler block object passed in to be called at some point in the future, perhaps after the method invocation has returned. The completion handler must be called on the main thread.

  The block takes three arguments:

  - **`document`**: The document that was opened, if successful. Otherwise, `nil`.
  - **`documentWasAlreadyOpen`**: Whether the document was already open or being opened when this method was called.
  - **`error`**: If not successful, an `NSError` object that encapsulates the reason why the document could not be opened.

<a id="Discussion"></a>

## Discussion

The default implementation of this method is very similar to [openDocument(withContentsOf:display:completionHandler:)](opendocument%28withcontentsof_display_completionhandler_%29.md), the primary difference being that it calls [makeDocument(for:withContentsOf:ofType:)](makedocument%28for_withcontentsof_oftype_%29.md) instead of [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md).

You can override this method to customize how documents are reopened during application launching by the restorable state mechanism introduced in OS X v10.7. Its implementation, however, is somewhat complex, so you should generally investigate overriding one of the methods that it calls instead. However, you can override this method to do additional work before calling the underlying method on `super`. You can also call the underlying method on `super` with a custom completion handler that performs additional work before calling the original completion handler.

Applications probably do not need to call this method directly.

For backward binary compatibility with OS X v10.6 and earlier, the default implementation of this method calls `[self reopenDocumentForURL:url withContentsOfURL:contentsURL error:&anError]` if that method is overridden and this one is not, instead of calling [makeDocument(for:withContentsOf:ofType:)](makedocument%28for_withcontentsof_oftype_%29.md) and all the rest.

## See Also

### Creating and Opening Documents

- [document(for:)](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocument(withContentsOf:copying:displayName:)](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocument(withContentsOf:display:completionHandler:)](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay(\_:)](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocument(for:withContentsOf:ofType:)](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocument(ofType:)](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.

# reopenDocumentForURL:withContentsOfURL:display:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

## Declaration

```objectivec
- (void) reopenDocumentForURL:(NSURL *) urlOrNil withContentsOfURL:(NSURL *) contentsURL display:(BOOL) displayDocument completionHandler:(void (^)(NSDocument *document, BOOL documentWasAlreadyOpen, NSError *error)) completionHandler;
```

## Parameters

- `urlOrNil`: The URL locating the reopened document, unless `nil`. A `nil` parameter value indicates that the reopened document is to have no [fileURL](../nsdocument/fileurl.md), like an untitled document.
- `contentsURL`: The URL (which may or may not be different from the URL of the reopened document) of the document from which the contents are read.
- `displayDocument`: If [true](https://developer.apple.com/documentation/swift/true), displays the document’s user interface.
- `completionHandler`: The completion handler block object passed in to be called at some point in the future, perhaps after the method invocation has returned. The completion handler must be called on the main thread.

  The block takes three arguments:

  - **`document`**: The document that was opened, if successful. Otherwise, `nil`.
  - **`documentWasAlreadyOpen`**: Whether the document was already open or being opened when this method was called.
  - **`error`**: If not successful, an `NSError` object that encapsulates the reason why the document could not be opened.

<a id="Discussion"></a>

## Discussion

The default implementation of this method is very similar to [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md), the primary difference being that it calls [makeDocumentForURL:withContentsOfURL:ofType:error:](makedocument%28for_withcontentsof_oftype_%29.md) instead of [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md).

You can override this method to customize how documents are reopened during application launching by the restorable state mechanism introduced in OS X v10.7. Its implementation, however, is somewhat complex, so you should generally investigate overriding one of the methods that it calls instead. However, you can override this method to do additional work before calling the underlying method on `super`. You can also call the underlying method on `super` with a custom completion handler that performs additional work before calling the original completion handler.

Applications probably do not need to call this method directly.

For backward binary compatibility with OS X v10.6 and earlier, the default implementation of this method calls `[self reopenDocumentForURL:url withContentsOfURL:contentsURL error:&anError]` if that method is overridden and this one is not, instead of calling [makeDocumentForURL:withContentsOfURL:ofType:error:](makedocument%28for_withcontentsof_oftype_%29.md) and all the rest.

## See Also

### Creating and Opening Documents

- [documentForURL:](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocumentWithContentsOfURL:copying:displayName:error:](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay:error:](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocumentForURL:withContentsOfURL:ofType:error:](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocumentOfType:error:](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
