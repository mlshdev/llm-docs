> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/typefromfileextension:](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/typefromfileextension:)

# typeFromFileExtension:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns the document type associated with files having extension `fileExtensionOrHFSFileType`.

> Use [typeForContentsOfURL:error:](typeforcontents%28of_%29.md) instead.

## Declaration

```objectivec
- (NSString *) typeFromFileExtension:(NSString *) fileNameExtensionOrHFSFileType;
```

<a id="Discussion"></a>

## Discussion

The  `fileExtensionOrHFSFileType` parameter may also be an encoded HFS file type, as well as a filename extension.

This method only works when passed a file name extension used in a `CFBundleDocumentTypes` entry that does not have an `LSItemContentTypes` subentry.

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
- [openUntitledDocumentOfType:display:](openuntitleddocumentoftype_display_.md): Deprecated. Returns a document object instantiated from the subclass of the given document type and optionally displays it.
- [reopenDocumentForURL:withContentsOfURL:error:](reopendocumentforurl_withcontentsofurl_error_.md): Deprecated. Reopens an autosaved document located by a URL, by reading the contents for the document from another URL, presents its user interface, and returns `true` if successful.
- [setShouldCreateUI:](setshouldcreateui_.md): Deprecated. Sets whether the window controllers of a document should be created when the document is created.
- [shouldCreateUI](shouldcreateui.md): Deprecated. Returns a Boolean value that indicates whether the window controllers of a document should be created when the document is created.
