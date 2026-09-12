> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/savetofile:saveoperation:delegate:didsaveselector:contextinfo:](https://developer.apple.com/documentation/appkit/nsdocument/savetofile:saveoperation:delegate:didsaveselector:contextinfo:)

# saveToFile:saveOperation:delegate:didSaveSelector:contextInfo:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Called after the user has been given the opportunity to select a destination through the modal Save panel.

> Use [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md) instead.

## Declaration

```objectivec
- (void) saveToFile:(NSString *) fileName saveOperation:(NSSaveOperationType) saveOperation delegate:(id) delegate didSaveSelector:(SEL) didSaveSelector contextInfo:(void *) contextInfo;
```

<a id="Discussion"></a>

## Discussion

Called after the user has been given the opportunity to select a destination through the modal Save panel presented by [runModalSavePanelForSaveOperation:delegate:didSaveSelector:contextInfo:](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md). The `delegate` is assigned to the Save panel. If `fileName` is non-`nil`, this method writes the document to `fileName`, sets the document’s file location and document type (if a native type), and clears the document’s edited status. `didSaveSelector` gets called with [true](https://developer.apple.com/documentation/swift/true) if the document is saved successfully, and [false](https://developer.apple.com/documentation/swift/false) otherwise. The `saveOperation` is one of the constants in `Constants`. Pass `contextInfo` with the callback.

The `didSaveSelector` callback method should have the following signature:

```objc
- (void)document:(NSDocument *)doc didSave:(BOOL)didSave contextInfo:(void  *)contextInfo
```

## See Also

### Methods

- [dataRepresentationOfType:](datarepresentationoftype_.md): Deprecated. A primitive method to return a data object that represents the data of the receiver in a given type.
- [fileAttributesToWriteToFile:ofType:saveOperation:](fileattributestowritetofile_oftype_saveoperation_.md): Deprecated. Returns the file attributes that should be written to the named document file of the specified type.
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
- [saveToURL:ofType:forSaveOperation:error:](savetourl_oftype_forsaveoperation_error_.md): Deprecated. Saves the contents of the document to a file or file package located by a URL, formatted to a specified type, for a particular kind of save operation.
