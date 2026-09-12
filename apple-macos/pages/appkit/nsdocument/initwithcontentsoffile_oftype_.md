> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/initwithcontentsoffile:oftype:](https://developer.apple.com/documentation/appkit/nsdocument/initwithcontentsoffile:oftype:)

# initWithContentsOfFile:ofType:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Initializes and returns a document object.

> Use [initWithContentsOfURL:ofType:error:](init%28contentsof_oftype_%29.md) instead.

## Declaration

```objectivec
- (id) initWithContentsOfFile:(NSString *) absolutePath ofType:(NSString *) typeName;
```

<a id="Discussion"></a>

## Discussion

Initializes and returns an NSDocument object of document type `docType` containing data stored in the file `fileName`. In opening the file, invokes the [readFromFile:ofType:](readfromfile_oftype_.md) method. If the document successfully opens the file, it updates [fileURL](fileurl.md) and [fileType](filetype.md). If the file cannot be opened, or the document is unable to load the contents of the file, this method returns `nil`. This initializer is typically invoked by the `NSDocumentController` method [makeDocumentWithContentsOfFile:ofType:](../nsdocumentcontroller/makedocumentwithcontentsoffile_oftype_.md).

## See Also

### Methods

- [dataRepresentationOfType:](datarepresentationoftype_.md): Deprecated. A primitive method to return a data object that represents the data of the receiver in a given type.
- [fileAttributesToWriteToFile:ofType:saveOperation:](fileattributestowritetofile_oftype_saveoperation_.md): Deprecated. Returns the file attributes that should be written to the named document file of the specified type.
- [fileName](filename.md): Deprecated. Returns the fully qualified pathname under which the receiver has been saved.
- [fileWrapperRepresentationOfType:](filewrapperrepresentationoftype_.md): Deprecated. Returns a file wrapper object that represents the data of the receiver in a given type.
- [initWithContentsOfURL:ofType:](initwithcontentsofurl_oftype_.md): Deprecated. Initializes and returns a document object of a given type.
- [loadDataRepresentation:ofType:](loaddatarepresentation_oftype_.md): Deprecated. Loads the document data.
- [loadFileWrapperRepresentation:ofType:](loadfilewrapperrepresentation_oftype_.md): Deprecated. Loads document data from a given file wrapper.
- [printShowingPrintPanel:](printshowingprintpanel_.md): Deprecated. Prints the current document’s data.
- [readFromFile:ofType:](readfromfile_oftype_.md): Deprecated. Reads and loads document data of the given type from the given file.
- [readFromURL:ofType:](readfromurl_oftype_.md): Deprecated. Reads and loads document data.
- [revertToSavedFromFile:ofType:](reverttosavedfromfile_oftype_.md): Deprecated. Reverts the receiver to the data stored in the file system.
- [revertToSavedFromURL:ofType:](reverttosavedfromurl_oftype_.md): Deprecated. Reverts the receiver.
- [runModalPageLayoutWithPrintInfo:](runmodalpagelayoutwithprintinfo_.md): Deprecated. Runs the page layout modal panel with the receiver’s printing information object.
- [saveToFile:saveOperation:delegate:didSaveSelector:contextInfo:](savetofile_saveoperation_delegate_didsaveselector_contextinfo_.md): Deprecated. Called after the user has been given the opportunity to select a destination through the modal Save panel.
- [saveToURL:ofType:forSaveOperation:error:](savetourl_oftype_forsaveoperation_error_.md): Deprecated. Saves the contents of the document to a file or file package located by a URL, formatted to a specified type, for a particular kind of save operation.
