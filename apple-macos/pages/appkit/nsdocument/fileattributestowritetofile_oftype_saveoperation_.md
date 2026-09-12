> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/fileattributestowritetofile:oftype:saveoperation:](https://developer.apple.com/documentation/appkit/nsdocument/fileattributestowritetofile:oftype:saveoperation:)

# fileAttributesToWriteToFile:ofType:saveOperation:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.1+ (deprecated in 10.4)

Returns the file attributes that should be written to the named document file of the specified type.

> Use [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md) instead.

## Declaration

```objectivec
- (NSDictionary *) fileAttributesToWriteToFile:(NSString *) fullDocumentPath ofType:(NSString *) documentTypeName saveOperation:(NSSaveOperationType) saveOperationType;
```

<a id="Discussion"></a>

## Discussion

Returns the file attributes that should be written to the named document file of the specified type `docType`, as part of a particular `saveOperationType`. The set of valid file attributes is a subset of those understood by the `NSFileManager` class.

## See Also

### Methods

- [dataRepresentationOfType:](datarepresentationoftype_.md): Deprecated. A primitive method to return a data object that represents the data of the receiver in a given type.
- [fileName](filename.md): Deprecated. Returns the fully qualified pathname under which the receiver has been saved.
- [fileWrapperRepresentationOfType:](filewrapperrepresentationoftype_.md): Deprecated. Returns a file wrapper object that represents the data of the receiver in a given type.
- [initWithContentsOfFile:ofType:](initwithcontentsoffile_oftype_.md): Deprecated. Initializes and returns a document object.
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
