> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/openuntitleddocumentoftype:display:](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/openuntitleddocumentoftype:display:)

# openUntitledDocumentOfType:display:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns a document object instantiated from the subclass of the given document type and optionally displays it.

> Use [openUntitledDocumentAndDisplay:error:](openuntitleddocumentanddisplay%28__%29.md) with [defaultType](defaulttype.md) instead.

## Declaration

```objectivec
- (id) openUntitledDocumentOfType:(NSString *) type display:(BOOL) display;
```

<a id="Discussion"></a>

## Discussion

Returns an `NSDocument` object instantiated from the `NSDocument` subclass required by document type `docType` and displays it if `flag` is [true](https://developer.apple.com/documentation/swift/true). The returned object is not retained, but is added to the receiver’s list of managed documents. Returns `nil` if the object could not be created, typically because no `NSDocument` subclass could be found for `docType`. Even if `flag` is [true](https://developer.apple.com/documentation/swift/true), the document is not displayed if [shouldCreateUI](shouldcreateui.md) returns [false](https://developer.apple.com/documentation/swift/false). This method calls [makeUntitledDocumentOfType:](makeuntitleddocumentoftype_.md) to obtain the created `NSDocument` object.

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
- [openDocumentWithContentsOfURL:display:error:](opendocumentwithcontentsofurl_display_error_.md): Deprecated. Opens a document located by the given URL presents its user interface if requested, and returns the document if successful.
- [reopenDocumentForURL:withContentsOfURL:error:](reopendocumentforurl_withcontentsofurl_error_.md): Deprecated. Reopens an autosaved document located by a URL, by reading the contents for the document from another URL, presents its user interface, and returns `true` if successful.
- [setShouldCreateUI:](setshouldcreateui_.md): Deprecated. Sets whether the window controllers of a document should be created when the document is created.
- [shouldCreateUI](shouldcreateui.md): Deprecated. Returns a Boolean value that indicates whether the window controllers of a document should be created when the document is created.
- [typeFromFileExtension:](typefromfileextension_.md): Deprecated. Returns the document type associated with files having extension `fileExtensionOrHFSFileType`.
