> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/document(for:)-i5zi](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/document(for:)-i5zi)

# document(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.

## Declaration

```swift
func document(for url: URL) -> NSDocument?
```

## Parameters

- `url`: The URL of the document you wish to look up.

<a id="return-value"></a>

## Return Value

The newly created [NSDocument](../nsdocument.md) object, or `nil` if the document could not be created.

<a id="Discussion"></a>

## Discussion

The default implementation of this method queries each open document to find one whose URL matches, and returns the first one whose URL does match.

## See Also

### Creating and Opening Documents

- [duplicateDocument(withContentsOf:copying:displayName:)](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocument(withContentsOf:display:completionHandler:)](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay(\_:)](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocument(for:withContentsOf:ofType:)](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocument(withContentsOf:ofType:)](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocument(ofType:)](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocument(for:withContentsOf:display:completionHandler:)](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

# documentForURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.

## Declaration

```objectivec
- (NSDocument *) documentForURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the document you wish to look up.

<a id="return-value"></a>

## Return Value

The newly created [NSDocument](../nsdocument.md) object, or `nil` if the document could not be created.

<a id="Discussion"></a>

## Discussion

The default implementation of this method queries each open document to find one whose URL matches, and returns the first one whose URL does match.

## See Also

### Creating and Opening Documents

- [duplicateDocumentWithContentsOfURL:copying:displayName:error:](duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay:error:](openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocumentForURL:withContentsOfURL:ofType:error:](makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocumentOfType:error:](makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocumentForURL:withContentsOfURL:display:completionHandler:](reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.
