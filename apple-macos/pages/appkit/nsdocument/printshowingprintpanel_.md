> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/printshowingprintpanel:](https://developer.apple.com/documentation/appkit/nsdocument/printshowingprintpanel:)

# printShowingPrintPanel:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Prints the current document’s data.

> Use [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md) instead.

## Declaration

```objectivec
- (void) printShowingPrintPanel:(BOOL) flag;
```

<a id="Discussion"></a>

## Discussion

Overridden by subclasses to print the current document’s (the receiver’s) data; if `flag` is [true](https://developer.apple.com/documentation/swift/true), the implementation should first display the Print panel. This method is typically invoked by `printDocument:` with an argument of [true](https://developer.apple.com/documentation/swift/true). The default implementation does nothing. If there is any printing information other than that encoded in the receiver’s `NSPrintInfo` object, subclasses should get it here.

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
- [readFromFile:ofType:](readfromfile_oftype_.md): Deprecated. Reads and loads document data of the given type from the given file.
- [readFromURL:ofType:](readfromurl_oftype_.md): Deprecated. Reads and loads document data.
- [revertToSavedFromFile:ofType:](reverttosavedfromfile_oftype_.md): Deprecated. Reverts the receiver to the data stored in the file system.
- [revertToSavedFromURL:ofType:](reverttosavedfromurl_oftype_.md): Deprecated. Reverts the receiver.
- [runModalPageLayoutWithPrintInfo:](runmodalpagelayoutwithprintinfo_.md): Deprecated. Runs the page layout modal panel with the receiver’s printing information object.
- [saveToFile:saveOperation:delegate:didSaveSelector:contextInfo:](savetofile_saveoperation_delegate_didsaveselector_contextinfo_.md): Deprecated. Called after the user has been given the opportunity to select a destination through the modal Save panel.
- [saveToURL:ofType:forSaveOperation:error:](savetourl_oftype_forsaveoperation_error_.md): Deprecated. Saves the contents of the document to a file or file package located by a URL, formatted to a specified type, for a particular kind of save operation.
