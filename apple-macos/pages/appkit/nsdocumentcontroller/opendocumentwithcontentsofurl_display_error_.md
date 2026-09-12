> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/opendocumentwithcontentsofurl:display:error:](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/opendocumentwithcontentsofurl:display:error:)

# openDocumentWithContentsOfURL:display:error:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.7)

Opens a document located by the given URL presents its user interface if requested, and returns the document if successful.

> Use [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (id) openDocumentWithContentsOfURL:(NSURL *) url display:(BOOL) displayDocument error:(NSError **) outError;
```

<a id="Discussion"></a>

## Discussion

If not  successful, the method returns `nil` after setting `outError` to point to an `NSError` object that encapsulates the reason why the document could not be opened.

The default implementation of this method checks to see if the document is already open according to [documentForURL:](document%28for_%29-i5zi.md), and if it is not open determines the type of the document, calls [makeDocumentWithContentsOfURL:ofType:error:](makedocument%28withcontentsof_oftype_%29.md) to instantiate it, then calls [addDocument:](adddocument%28__%29.md) to record its opening, and sends the document [makeWindowControllers](../nsdocument/makewindowcontrollers%28%29.md) and [showWindows](../nsdocument/showwindows%28%29.md) messages if `displayDocument` is [true](https://developer.apple.com/documentation/swift/true). If the document is already open it is just sent a [showWindows](../nsdocument/showwindows%28%29.md) message if `displayDocument` is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Deprecated Methods

- [documentForFileName:](documentforfilename_.md): Deprecated. Returns the document object for the file in which the document data is stored.
- [fileExtensionsFromType:](fileextensionsfromtype_.md): Deprecated. Returns the allowable file extensions for the given document type.
- [fileNamesFromRunningOpenPanel](filenamesfromrunningopenpanel.md): Deprecated. Returns a selection of files chosen by the user in the Open panel.
- [makeUntitledDocumentOfType:](makeuntitleddocumentoftype_.md): Deprecated. Creates and returns a document object for document type.
- [makeDocumentWithContentsOfURL:ofType:](makedocumentwithcontentsofurl_oftype_.md): Deprecated. Creates and returns a document object for the given document type from the contents of a given URL.
- [makeDocumentWithContentsOfFile:ofType:](makedocumentwithcontentsoffile_oftype_.md): Deprecated. Creates and returns a document object of a given document type from the contents of a file.
- [openDocumentWithContentsOfFile:display:](opendocumentwithcontentsoffile_display_.md): Deprecated. Returns a document object created from the contents of a given file and optionally displays it.
- [openDocumentWithContentsOfURL:display:](opendocumentwithcontentsofurl_display_.md): Deprecated. Returns a document object created from the contents of a given URL and optionally displays it.
- [openUntitledDocumentOfType:display:](openuntitleddocumentoftype_display_.md): Deprecated. Returns a document object instantiated from the subclass of the given document type and optionally displays it.
- [reopenDocumentForURL:withContentsOfURL:error:](reopendocumentforurl_withcontentsofurl_error_.md): Deprecated. Reopens an autosaved document located by a URL, by reading the contents for the document from another URL, presents its user interface, and returns `true` if successful.
- [setShouldCreateUI:](setshouldcreateui_.md): Deprecated. Sets whether the window controllers of a document should be created when the document is created.
- [shouldCreateUI](shouldcreateui.md): Deprecated. Returns a Boolean value that indicates whether the window controllers of a document should be created when the document is created.
- [typeFromFileExtension:](typefromfileextension_.md): Deprecated. Returns the document type associated with files having extension `fileExtensionOrHFSFileType`.
