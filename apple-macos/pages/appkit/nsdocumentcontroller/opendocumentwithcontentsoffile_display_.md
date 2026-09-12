> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/opendocumentwithcontentsoffile:display:](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/opendocumentwithcontentsoffile:display:)

# openDocumentWithContentsOfFile:display:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns a document object created from the contents of a given file and optionally displays it.

> Use [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (id) openDocumentWithContentsOfFile:(NSString *) fileName display:(BOOL) display;
```

<a id="Discussion"></a>

## Discussion

Returns an `NSDocument` object created from the contents of the file `fileName` (an absolute path) and displays it if `flag` is [true](https://developer.apple.com/documentation/swift/true). The returned object is not retained, but is added to the receiver’s list of managed documents. Returns `nil` if the object could not be created, typically because `fileName` does not point to a valid file or because there is no `NSDocument` subclass for the document type (as indicated by the file extension or HFS file type). Even if `flag` is [true](https://developer.apple.com/documentation/swift/true), the document is not displayed if [shouldCreateUI](shouldcreateui.md) returns [false](https://developer.apple.com/documentation/swift/false). This method calls [makeDocumentWithContentsOfFile:ofType:](makedocumentwithcontentsoffile_oftype_.md) to obtain the created NSDocument object. If you override this method, your implementation should be prepared to handle either [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false).

To handle an Open Documents Apple event, the Application Kit’s built-in Apple event handling automatically calls this method with the path to the file to open and a display argument.

Called with a display argument of [true](https://developer.apple.com/documentation/swift/true) instead of [false](https://developer.apple.com/documentation/swift/false) when a Print Documents Apple event is handled. This may have been handled differently in versions of macOS prior to version 10.3.

## See Also

### Deprecated Methods

- [documentForFileName:](documentforfilename_.md): Deprecated. Returns the document object for the file in which the document data is stored.
- [fileExtensionsFromType:](fileextensionsfromtype_.md): Deprecated. Returns the allowable file extensions for the given document type.
- [fileNamesFromRunningOpenPanel](filenamesfromrunningopenpanel.md): Deprecated. Returns a selection of files chosen by the user in the Open panel.
- [makeUntitledDocumentOfType:](makeuntitleddocumentoftype_.md): Deprecated. Creates and returns a document object for document type.
- [makeDocumentWithContentsOfURL:ofType:](makedocumentwithcontentsofurl_oftype_.md): Deprecated. Creates and returns a document object for the given document type from the contents of a given URL.
- [makeDocumentWithContentsOfFile:ofType:](makedocumentwithcontentsoffile_oftype_.md): Deprecated. Creates and returns a document object of a given document type from the contents of a file.
- [openDocumentWithContentsOfURL:display:](opendocumentwithcontentsofurl_display_.md): Deprecated. Returns a document object created from the contents of a given URL and optionally displays it.
- [openDocumentWithContentsOfURL:display:error:](opendocumentwithcontentsofurl_display_error_.md): Deprecated. Opens a document located by the given URL presents its user interface if requested, and returns the document if successful.
- [openUntitledDocumentOfType:display:](openuntitleddocumentoftype_display_.md): Deprecated. Returns a document object instantiated from the subclass of the given document type and optionally displays it.
- [reopenDocumentForURL:withContentsOfURL:error:](reopendocumentforurl_withcontentsofurl_error_.md): Deprecated. Reopens an autosaved document located by a URL, by reading the contents for the document from another URL, presents its user interface, and returns `true` if successful.
- [setShouldCreateUI:](setshouldcreateui_.md): Deprecated. Sets whether the window controllers of a document should be created when the document is created.
- [shouldCreateUI](shouldcreateui.md): Deprecated. Returns a Boolean value that indicates whether the window controllers of a document should be created when the document is created.
- [typeFromFileExtension:](typefromfileextension_.md): Deprecated. Returns the document type associated with files having extension `fileExtensionOrHFSFileType`.
