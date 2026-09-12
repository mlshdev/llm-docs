> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/opendocument(withcontentsof:display:completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/opendocument(withcontentsof:display:completionhandler:))

# openDocument(withContentsOf:display:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.

## Declaration

```swift
func openDocument(withContentsOf url: URL, display displayDocument: Bool, completionHandler: @escaping (NSDocument?, Bool, (any Error)?) -> Void)
```

```swift
func openDocument(withContentsOf url: URL, display displayDocument: Bool) async throws -> (NSDocument, Bool)
```

## Parameters

- `url`: The URL locating the document to open.
- `displayDocument`: If [true](https://developer.apple.com/documentation/swift/true), displays the document’s user interface.
- `completionHandler`: The completion handler block object passed in to be called at some point in the future, perhaps after the method invocation has returned. The completion handler must be called on the main thread.

  The block takes three arguments:

  - **`document`**: The document that was opened, if successful. Otherwise, `nil`.
  - **`documentWasAlreadyOpen`**: Whether the document was already open or being opened when this method was called.
  - **`error`**: If not successful, an `NSError` object that encapsulates the reason why the document could not be opened.

<a id="Discussion"></a>

## Discussion

The default implementation of this method checks to see if the document is already open or being opened, and if it is not determines the type of the document, calls [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md) to instantiate it, and calls [addDocument(\_:)](adddocument%28__%29.md) to record its opening. If `displayDocument` is [true](https://developer.apple.com/documentation/swift/true) and the document is not already open, the default implementation calls [makeWindowControllers()](../nsdocument/makewindowcontrollers%28%29.md) and [showWindows()](../nsdocument/showwindows%28%29.md). If the document is already open, the implementation just calls [showWindows()](../nsdocument/showwindows%28%29.md) if `displayDocument` is [true](https://developer.apple.com/documentation/swift/true). If the relevant document class returns [true](https://developer.apple.com/documentation/swift/true) when sent [canConcurrentlyReadDocuments(ofType:)](../nsdocument/canconcurrentlyreaddocuments%28oftype_%29.md) then the invocation of [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md) is done on a thread other than the main one, and when that has returned, the rest of the operation is done on the main thread.

The default implementation of this method uses the file coordination mechanism that was added to the Foundation framework in OS X v10.7. All of the work it does is one big coordinated read, and it passes the document to the `NSFileCoordinator` method [addFilePresenter(\_:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/addfilepresenter%28_:%29) right after calling [addDocument(\_:)](adddocument%28__%29.md). (The balancing invocation of the `NSFileCoordinator` method [removeFilePresenter(\_:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/removefilepresenter%28_:%29) is in the `NSDocument` method [close()](../nsdocument/close%28%29.md).)

You can override this method to customize how documents are opened. Its implementation, however, is somewhat complex, so you should generally investigate overriding one of the methods that it calls instead. However, you can override this method to do additional work before calling the underlying method on `super`. You can also call the underlying method on `super` with a custom completion handler that performs additional work before calling the original completion handler. If you do override this method you should investigate whether you should also override [reopenDocument(for:withContentsOf:display:completionHandler:)](reopendocument%28for_withcontentsof_display_completionhandler_%29.md) to apply the same customization. In either case, take care to always call the completion handler on the main thread.

You can call this method to open a document.

<a id="Special-Considerations"></a>

### Special Considerations

For backward binary compatibility with OS X v10.6 and earlier, the default implementation of this method calls `[self openDocumentWithContentsOfURL:url display:displayDocument error:&anError]` if that method or the even older [openDocumentWithContentsOfFile:display:](opendocumentwithcontentsoffile_display_.md) method is overridden and this one is not, instead of calling [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md) and all the rest.

## See Also

### Creating and Opening Documents

- [document(for:)](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocument(withContentsOf:copying:displayName:)](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openUntitledDocumentAndDisplay(\_:)](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocument(for:withContentsOf:ofType:)](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocument(ofType:)](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocument(for:withContentsOf:display:completionHandler:)](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

# openDocumentWithContentsOfURL:display:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.

## Declaration

```objectivec
- (void) openDocumentWithContentsOfURL:(NSURL *) url display:(BOOL) displayDocument completionHandler:(void (^)(NSDocument *document, BOOL documentWasAlreadyOpen, NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL locating the document to open.
- `displayDocument`: If [true](https://developer.apple.com/documentation/swift/true), displays the document’s user interface.
- `completionHandler`: The completion handler block object passed in to be called at some point in the future, perhaps after the method invocation has returned. The completion handler must be called on the main thread.

  The block takes three arguments:

  - **`document`**: The document that was opened, if successful. Otherwise, `nil`.
  - **`documentWasAlreadyOpen`**: Whether the document was already open or being opened when this method was called.
  - **`error`**: If not successful, an `NSError` object that encapsulates the reason why the document could not be opened.

<a id="Discussion"></a>

## Discussion

The default implementation of this method checks to see if the document is already open or being opened, and if it is not determines the type of the document, calls [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md) to instantiate it, and calls [addDocument:](adddocument%28__%29.md) to record its opening. If `displayDocument` is [true](https://developer.apple.com/documentation/swift/true) and the document is not already open, the default implementation calls [makeWindowControllers](../nsdocument/makewindowcontrollers%28%29.md) and [showWindows](../nsdocument/showwindows%28%29.md). If the document is already open, the implementation just calls [showWindows](../nsdocument/showwindows%28%29.md) if `displayDocument` is [true](https://developer.apple.com/documentation/swift/true). If the relevant document class returns [true](https://developer.apple.com/documentation/swift/true) when sent [canConcurrentlyReadDocumentsOfType:](../nsdocument/canconcurrentlyreaddocuments%28oftype_%29.md) then the invocation of [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md) is done on a thread other than the main one, and when that has returned, the rest of the operation is done on the main thread.

The default implementation of this method uses the file coordination mechanism that was added to the Foundation framework in OS X v10.7. All of the work it does is one big coordinated read, and it passes the document to the `NSFileCoordinator` method [addFilePresenter:](https://developer.apple.com/documentation/foundation/nsfilecoordinator/addfilepresenter%28_:%29) right after calling [addDocument:](adddocument%28__%29.md). (The balancing invocation of the `NSFileCoordinator` method [removeFilePresenter:](https://developer.apple.com/documentation/foundation/nsfilecoordinator/removefilepresenter%28_:%29) is in the `NSDocument` method [close](../nsdocument/close%28%29.md).)

You can override this method to customize how documents are opened. Its implementation, however, is somewhat complex, so you should generally investigate overriding one of the methods that it calls instead. However, you can override this method to do additional work before calling the underlying method on `super`. You can also call the underlying method on `super` with a custom completion handler that performs additional work before calling the original completion handler. If you do override this method you should investigate whether you should also override [reopenDocumentForURL:withContentsOfURL:display:completionHandler:](reopendocument%28for_withcontentsof_display_completionhandler_%29.md) to apply the same customization. In either case, take care to always call the completion handler on the main thread.

You can call this method to open a document.

<a id="Special-Considerations"></a>

### Special Considerations

For backward binary compatibility with OS X v10.6 and earlier, the default implementation of this method calls `[self openDocumentWithContentsOfURL:url display:displayDocument error:&anError]` if that method or the even older [openDocumentWithContentsOfFile:display:](opendocumentwithcontentsoffile_display_.md) method is overridden and this one is not, instead of calling [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md) and all the rest.

## See Also

### Creating and Opening Documents

- [documentForURL:](document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocumentWithContentsOfURL:copying:displayName:error:](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openUntitledDocumentAndDisplay:error:](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocumentForURL:withContentsOfURL:ofType:error:](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocumentOfType:error:](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocumentForURL:withContentsOfURL:display:completionHandler:](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.
