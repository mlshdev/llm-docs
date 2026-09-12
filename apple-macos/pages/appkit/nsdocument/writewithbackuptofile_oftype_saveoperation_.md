> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/writewithbackuptofile:oftype:saveoperation:](https://developer.apple.com/documentation/appkit/nsdocument/writewithbackuptofile:oftype:saveoperation:)

# writeWithBackupToFile:ofType:saveOperation:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

This method is called by action methods to save document contents to a file.

> Use [writeSafelyToURL:ofType:forSaveOperation:error:](writesafely%28to_oftype_for_%29.md) instead.

## Declaration

```objectivec
- (BOOL) writeWithBackupToFile:(NSString *) fullDocumentPath ofType:(NSString *) documentTypeName saveOperation:(NSSaveOperationType) saveOperationType;
```

<a id="Discussion"></a>

## Discussion

This method is called by action methods like [saveDocument:](save%28__%29.md), [saveDocumentAs:](saveas%28__%29.md), and [saveDocumentTo:](saveto%28__%29.md). It is responsible for handling backup of the existing file, if any, and removal of that backup if [keepBackupFile](keepbackupfile.md) returns [false](https://developer.apple.com/documentation/swift/false). In between those two things, it calls [writeToFile:ofType:originalFile:saveOperation:](writetofile_oftype_originalfile_saveoperation_.md) to write the document of type `docType` to `fullDocumentPath`. You should never need to call [writeWithBackupToFile:ofType:saveOperation:](writewithbackuptofile_oftype_saveoperation_.md), but subclasses that want to change the way the backup works can override it. The `saveOperationType` argument is one of the constants listed in `Constants`.

If you override this method, you should invoke [fileAttributesToWriteToFile:ofType:saveOperation:](fileattributestowritetofile_oftype_saveoperation_.md) and set the variables returned from this method when writing `fullDocumentPath`. `NSFileManager` [setAttributes:ofItemAtPath:error:](https://developer.apple.com/documentation/foundation/filemanager/setattributes%28_:ofitematpath:%29) can be used to do this.

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
- [saveToFile:saveOperation:delegate:didSaveSelector:contextInfo:](savetofile_saveoperation_delegate_didsaveselector_contextinfo_.md): Deprecated. Called after the user has been given the opportunity to select a destination through the modal Save panel.
