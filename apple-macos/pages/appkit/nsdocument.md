> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument](https://developer.apple.com/documentation/appkit/nsdocument)

# NSDocument (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract class that defines the interface for macOS documents.

## Declaration

```swift
@MainActor class NSDocument
```

<a id="overview"></a>

## Overview

A document is an object that can internally represent data displayed in a window and that can read data from and write data to a file or file package. Documents create and manage one or more window controllers and are in turn managed by a document controller. Documents respond to first-responder action messages to save, revert, and print their data.

Conceptually, a document is a container for a body of information identified by a name under which it is stored in a disk file. In this sense, however, the document is not the same as the file but is an object in memory that owns and manages the document data. In the context of AppKit, a document is an instance of a custom [NSDocument](nsdocument.md) subclass that knows how to represent internally, in one or more formats, persistent data that is displayed in windows.

A document can read that data from a file and write it to a file. It is also the first-responder target for many menu commands related to documents, such as Save, Revert, and Print. A document manages its window’s edited status and is set up to perform undo and redo operations. When a window is closing, the document is asked before the window delegate to approve the closing.

[NSDocument](nsdocument.md) is one of the triad of AppKit classes that establish an architectural basis for document-based apps (the others being [NSDocumentController](nsdocumentcontroller.md) and [NSWindowController](nswindowcontroller.md)).

For more information about using [NSDocument](nsdocument.md) in a document-based app, see [Developing a Document-Based App](developing-a-document-based-app.md).

<a id="Subclassing-NSDocument"></a>

### Subclassing NSDocument

The [NSDocument](nsdocument.md) class is designed to be subclassed. That is, the [NSDocument](nsdocument.md) class is abstract, and your app must create at least one [NSDocument](nsdocument.md) subclass in order to use the document architecture. To create a useful [NSDocument](nsdocument.md) subclass, you must override some methods, and you can optionally override others.

The [NSDocument](nsdocument.md) class itself knows how to handle document data as undifferentiated lumps; although it understands that these lumps are typed, it knows nothing about particular types. In their overrides of the data-based reading and writing methods, subclasses must add the knowledge of particular types and how data of the document’s native type is structured internally. Subclasses are also responsible for the creation of the window controllers that manage document windows and for the implementation of undo and redo. The `NSDocument` class takes care of much of the rest, including generally managing the state of the document.

For more information about creating subclasses, including the primitive methods that subclasses must override and those that you can optionally override, see [Developing a Document-Based App](developing-a-document-based-app.md).

<a id="Document-Saving-Behavior"></a>

### Document Saving Behavior

The [NSDocument](nsdocument.md) class implements document saving in a way that preserves, when possible, various attributes of each document, including:

- Creation date
- Permissions/privileges
- Location of the document’s icon in its parent folder’s Icon View Finder window
- Value of the document’s Show Extension setting

Care is also taken to save documents in a way that does not break any user-created aliases that may point to documents. As a result, some methods in any class of `NSDocument` may be invoked with parameters that do not have the same meaning as they did in early releases of macOS. It is important that overrides of [write(to:ofType:)](nsdocument/write%28to_oftype_%29.md) and [write(to:ofType:for:originalContentsURL:)](nsdocument/write%28to_oftype_for_originalcontentsurl_%29.md) make no assumptions about the file paths passed as parameters, including:

- The location to which the file is being written. This location might be a hidden temporary directory.
- The name of the file being written. It is possible that this file has no obvious relation to the document name.
- The relation of any file being passed, including the original file, to the value in [fileURL](nsdocument/fileurl.md).

When updating your app to link against OS X v10.5, keep in mind that it is usually more appropriate to invoke in your app code one of the `NSDocument` `save...` methods than one of the `write...` methods. The `write...` methods are there primarily for you to override. The [saveToURL:ofType:forSaveOperation:error:](nsdocument/savetourl_oftype_forsaveoperation_error_.md) method that is meant always to be invoked during document saving, sets the [fileModificationDate](nsdocument/filemodificationdate.md) property  with the file’s new modification date after it has been written (for [NSDocument.SaveOperationType.saveOperation](nsdocument/saveoperationtype/saveoperation.md) and [NSDocument.SaveOperationType.saveAsOperation](nsdocument/saveoperationtype/saveasoperation.md) only).

Likewise, it’s usually more appropriate to invoke in your app code one of the `NSDocument` `revert...` methods than one of the `read...` methods. The `read...` methods are there primarily for you to override. The [revert(toContentsOf:ofType:)](nsdocument/revert%28tocontentsof_oftype_%29.md) method that is meant always to be invoked during rereading of an open document, sets the [fileModificationDate](nsdocument/filemodificationdate.md) property with the file’s modification date after it has been read.

<a id="iCloud-Support"></a>

### iCloud Support

The [NSDocument](nsdocument.md) class implements the file coordination support that is required for an iCloud-enabled, document-based Mac app (see [How iCloud Document Storage Works](https://developer.apple.com/library/archive/documentation/General/Conceptual/iCloudDesignGuide/Chapters/DesigningForDocumentsIniCloud.html#//apple_ref/doc/uid/TP40012094-CH2-SW10) in [iCloud Design Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/iCloudDesignGuide/Chapters/Introduction.html#//apple_ref/doc/uid/TP40012094)). In addition, this class’s methods for moving and renaming documents, new in OS X v10.8, ensure that these operations are performed in a safe manner for iCloud-enabled apps.

<a id="Multicore-Considerations"></a>

### Multicore Considerations

In macOS 10.6 and later, `NSDocument` supports the ability to open multiple documents concurrently. However, this support requires the cooperation of the document object. If your document subclass is able to read specific document types independently of other similar documents, you should override the [canConcurrentlyReadDocuments(ofType:)](nsdocument/canconcurrentlyreaddocuments%28oftype_%29.md) class method and return [true](https://developer.apple.com/documentation/swift/true) for the appropriate document types. If specific document types rely on shared state information, however, you should return [false](https://developer.apple.com/documentation/swift/false) for those types.

## Topics

### Creating a Document Object

- [init()](nsdocument/init%28%29.md): Initializes and returns an empty document object.
- [init(contentsOf:ofType:)](nsdocument/init%28contentsof_oftype_%29.md): Initializes a document located by a URL of a specified type.
- [init(for:withContentsOf:ofType:)](nsdocument/init%28for_withcontentsof_oftype_%29.md): Initializes a document with the specified contents, and places the resulting document’s file at the designated location.
- [init(type:)](nsdocument/init%28type_%29.md): Initializes a document of a specified type.

### Reading the Document’s Content

- [canConcurrentlyReadDocuments(ofType:)](nsdocument/canconcurrentlyreaddocuments%28oftype_%29.md): Returns a Boolean value that indicates whether the receiver reads multiple documents of the given type concurrently.
- [read(from:ofType:)](nsdocument/read%28from_oftype_%29-1vttv.md): Sets the contents of this document by reading from a file or file package, of a specified type, located by a URL.
- [read(from:ofType:)](nsdocument/read%28from_oftype_%29-3rzsi.md): Sets the contents of this document by reading from a file wrapper of a specified type.
- [read(from:ofType:)](nsdocument/read%28from_oftype_%29-6g6ai.md): Sets the contents of this document by reading from data of a specified type.

### Writing the Document’s Content

- [canAsynchronouslyWrite(to:ofType:for:)](nsdocument/canasynchronouslywrite%28to_oftype_for_%29.md): Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.
- [unblockUserInteraction()](nsdocument/unblockuserinteraction%28%29.md): Unblocks the main thread during asynchronous saving.
- [write(to:ofType:)](nsdocument/write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [writeSafely(to:ofType:for:)](nsdocument/writesafely%28to_oftype_for_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [fileWrapper(ofType:)](nsdocument/filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [data(ofType:)](nsdocument/data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [write(to:ofType:for:originalContentsURL:)](nsdocument/write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [save(to:ofType:for:delegate:didSave:contextInfo:)](nsdocument/save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [save(to:ofType:for:completionHandler:)](nsdocument/save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWrite(to:ofType:for:originalContentsURL:)](nsdocument/fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSDocument.SaveOperationType](nsdocument/saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

### Getting Document Metadata

- [fileURL](nsdocument/fileurl.md): The location of the document’s on-disk representation.
- [isEntireFileLoaded](nsdocument/isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](nsdocument/filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](nsdocument/keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [isDraft](nsdocument/isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](nsdocument/filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [isDocumentEdited](nsdocument/isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [isInViewingMode](nsdocument/isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

### Managing File Type Information

- [readableTypes](nsdocument/readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [writableTypes](nsdocument/writabletypes.md): Returns the types of data the receiver can write natively and any types filterable to that native type.
- [isNativeType(\_:)](nsdocument/isnativetype%28__%29.md): Returns a Boolean value that indicates whether the document can read and write the data natively.
- [writableTypes(for:)](nsdocument/writabletypes%28for_%29.md): Returns the names of the types to which this document can be saved for a specified kind of save operation.
- [fileNameExtension(forType:saveOperation:)](nsdocument/filenameextension%28fortype_saveoperation_%29.md): Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.

### Creating and Managing Window Controllers

- [makeWindowControllers()](nsdocument/makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController(\_:)](nsdocument/addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController(\_:)](nsdocument/removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](nsdocument/windowcontrollers.md): The document’s current window controllers.
- [windowNibName](nsdocument/windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib(\_:)](nsdocument/windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib(\_:)](nsdocument/windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:)](nsdocument/shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

### Managing Document Windows

- [showWindows()](nsdocument/showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [setWindow(\_:)](nsdocument/setwindow%28__%29.md): Sets the window outlet of this document to the specified value.
- [windowForSheet](nsdocument/windowforsheet.md): Returns the document window to use as the parent of a document-modal sheet.
- [displayName](nsdocument/displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.
- [defaultDraftName()](nsdocument/defaultdraftname%28%29.md): Returns the default draft name for the document subclass.
- [encodeRestorableState(with:backgroundQueue:)](nsdocument/encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.

### Configuring the Autosave Behavior

- [autosavesInPlace](nsdocument/autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](nsdocument/autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](nsdocument/preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](nsdocument/autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](nsdocument/autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](nsdocument/autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

### Autosaving the Document

- [checkAutosavingSafety()](nsdocument/checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [hasUnautosavedChanges](nsdocument/hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [scheduleAutosaving()](nsdocument/scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosave(withDelegate:didAutosave:contextInfo:)](nsdocument/autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosave(withImplicitCancellability:completionHandler:)](nsdocument/autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](nsdocument/backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.

### Browsing Document Versions

- [browseVersions(\_:)](nsdocument/browseversions%28__%29.md): Opens the Versions browser in the document’s main window.
- [isBrowsingVersions](nsdocument/isbrowsingversions.md): A Boolean value that indicates whether the document is currently displaying the Versions browser.
- [stopBrowsingVersions(completionHandler:)](nsdocument/stopbrowsingversions%28completionhandler_%29.md): Dismiss the Versions browser for the current document.

### Storing Documents in iCloud

- [moveToUbiquityContainer(\_:)](nsdocument/movetoubiquitycontainer%28__%29.md): Moves the document to the user’s iCloud storage.
- [usesUbiquitousStorage](nsdocument/usesubiquitousstorage.md): Returns whether the document object stores its contents in the user’s iCloud document storage.

### Managing Undo and Redo Actions

- [undoManager](nsdocument/undomanager.md): The object that the document uses to support undo/redo operations.
- [hasUndoManager](nsdocument/hasundomanager.md): A Boolean value that indicates whether the document owns an undo manager object.

### Updating the Document Change Count

- [updateChangeCount(withToken:for:)](nsdocument/updatechangecount%28withtoken_for_%29.md): Updates the document’s change count settings after a successful save operation.
- [updateChangeCount(\_:)](nsdocument/updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [NSDocument.ChangeType](nsdocument/changetype.md): Values that indicate a document’s edit status.
- [changeCountToken(for:)](nsdocument/changecounttoken%28for_%29.md): Returns an object that encapsulates the current record of document changes at the beginning of a save operation.

### Handling Window Restoration

- [allowedClasses(forRestorableStateKeyPath:)](nsdocument/allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableState(with:)](nsdocument/encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreState(with:)](nsdocument/restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](nsdocument/restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState()](nsdocument/invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreWindow(withIdentifier:state:completionHandler:)](nsdocument/restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.

### Presenting a Save Panel

- [runModalSavePanel(for:delegate:didSave:contextInfo:)](nsdocument/runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [prepareSavePanel(\_:)](nsdocument/preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [shouldRunSavePanelWithAccessoryView](nsdocument/shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileTypeFromLastRunSavePanel](nsdocument/filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
- [fileNameExtensionWasHiddenInLastRunSavePanel](nsdocument/filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.

### Supporting User Activities

- [userActivity](nsdocument/useractivity.md): An object that encapsulates a user activity the document supports.
- [updateUserActivityState(\_:)](nsdocument/updateuseractivitystate%28__%29.md): Updates the state of the given user activity.
- [NSUserActivityDocumentURLKey](nsuseractivitydocumenturlkey.md): The key that identifies the document associated with a user activity.

### Validating User Interface Items

- [validateUserInterfaceItem(\_:)](nsdocument/validateuserinterfaceitem%28__%29.md): Validates the specified user interface item that the receiver manages.

### Performing Tasks Serially

- [performSynchronousFileAccess(\_:)](nsdocument/performsynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete, then invokes the passed-in block.
- [performAsynchronousFileAccess(\_:)](nsdocument/performasynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.
- [performActivity(withSynchronousWaiting:using:)](nsdocument/performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueActivity(\_:)](nsdocument/continueactivity%28__%29.md): Continues to perform the task for a user activity object using a different block.
- [continueAsynchronousWorkOnMainThread(\_:)](nsdocument/continueasynchronousworkonmainthread%28__%29.md): Invokes the passed-in block on the main thread.

### Handling User Actions

- [printDocument(\_:)](nsdocument/printdocument%28__%29.md): Prints the receiver in response to the user choosing the Print menu command.
- [runPageLayout(\_:)](nsdocument/runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.
- [revertToSaved(\_:)](nsdocument/reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [save(\_:)](nsdocument/save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveAs(\_:)](nsdocument/saveas%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save As menu command.
- [saveTo(\_:)](nsdocument/saveto%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save To menu command.
- [save(withDelegate:didSave:contextInfo:)](nsdocument/save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.

### Closing the Document

- [canClose(withDelegate:shouldClose:contextInfo:)](nsdocument/canclose%28withdelegate_shouldclose_contextinfo_%29.md): Determines whether to close the document, prompting the user as needed to choose a course of action.
- [close()](nsdocument/close%28%29.md): Closes all of the document’s windows and removes the document from its document controller.

### Reverting the Document Contents

- [revert(toContentsOf:ofType:)](nsdocument/revert%28tocontentsof_oftype_%29.md): Discards all unsaved document modifications and replaces the document’s contents by reading a file or file package located by a URL of a specified type.

### Duplicating the Document

- [duplicate()](nsdocument/duplicate%28%29.md): Creates a new document whose contents are the same as the receiver and returns an error object if unsuccessful.
- [duplicate(\_:)](nsdocument/duplicate%28__%29.md): Creates a copy of the receiving document in response to the user choosing Duplicate from the File menu.
- [duplicate(withDelegate:didDuplicate:contextInfo:)](nsdocument/duplicate%28withdelegate_didduplicate_contextinfo_%29.md): Creates a new document whose contents are the same as the current document.

### Renaming the Document

- [rename(\_:)](nsdocument/rename%28__%29.md): Renames the current document in response to the user choosing the Rename menu item.

### Moving the Document

- [move(\_:)](nsdocument/move%28__%29.md): Moves the document to a new location in response to the user choosing the Move To… menu item.
- [move(completionHandler:)](nsdocument/move%28completionhandler_%29.md): Moves the document to a user-selected location.
- [move(to:completionHandler:)](nsdocument/move%28to_completionhandler_%29.md): Moves the document’s file to the given URL.

### Locking the Document

- [lock(\_:)](nsdocument/lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlock(\_:)](nsdocument/unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lock(completionHandler:)](nsdocument/lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lock(completionHandler:)](nsdocument/lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlock(completionHandler:)](nsdocument/unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlock(completionHandler:)](nsdocument/unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [isLocked](nsdocument/islocked.md): A Boolean value that indicates whether or not the file can be written to.

### Printing the Document

- [printInfo](nsdocument/printinfo.md): The printing information associated with the document.
- [preparePageLayout(\_:)](nsdocument/preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayout(with:delegate:didRun:contextInfo:)](nsdocument/runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation(\_:delegate:didRun:contextInfo:)](nsdocument/runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo(\_:)](nsdocument/shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](nsdocument/print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperation(withSettings:)](nsdocument/printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [pdfPrintOperation](nsdocument/pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveToPDF(\_:)](nsdocument/savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.

### Sharing the Document

- [allowsDocumentSharing](nsdocument/allowsdocumentsharing.md): A Boolean value that indicates whether the document is shareable from the standard Share menu.
- [prepare(\_:)](nsdocument/prepare%28__%29.md): Perform any custom setup associated with a sharing service picker.
- [share(with:completionHandler:)](nsdocument/share%28with_completionhandler_%29.md): Share the document’s file using the specified sharing service.

### Handling Script Commands

- [handleClose(\_:)](nsdocument/handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handlePrint(\_:)](nsdocument/handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [handleSave(\_:)](nsdocument/handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [objectSpecifier](nsdocument/objectspecifier.md): Returns the object specifier that represents the document.
- [lastComponentOfFileName](nsdocument/lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.

### Displaying Errors to the User

- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](nsdocument/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [presentError(\_:)](nsdocument/presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError(\_:)](nsdocument/willpresenterror%28__%29.md): Called when the receiver is about to present an error.
- [willNotPresentError(\_:)](nsdocument/willnotpresenterror%28__%29.md): Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](nsdocument-deprecated-symbols.md): Review symbols that are no longer supported, and find replacements.

### Instance Properties

- [observedPresentedItemUbiquityAttributes](nsdocument/observedpresenteditemubiquityattributes.md)
- [presentedItemURL](nsdocument/presenteditemurl.md)
- [previewRepresentableActivityItems](nsdocument/previewrepresentableactivityitems.md)
- [savePanelShowsFileFormatsControl](nsdocument/savepanelshowsfileformatscontrol.md)

### Instance Methods

- [accommodatePresentedItemDeletion(completionHandler:)](nsdocument/accommodatepresenteditemdeletion%28completionhandler_%29.md)
- [presentedItemDidChange()](nsdocument/presenteditemdidchange%28%29.md)
- [presentedItemDidChangeUbiquityAttributes(\_:)](nsdocument/presenteditemdidchangeubiquityattributes%28__%29.md)
- [presentedItemDidGain(\_:)](nsdocument/presenteditemdidgain%28__%29.md)
- [presentedItemDidLose(\_:)](nsdocument/presenteditemdidlose%28__%29.md)
- [presentedItemDidMove(to:)](nsdocument/presenteditemdidmove%28to_%29.md)
- [presentedItemDidResolveConflict(\_:)](nsdocument/presenteditemdidresolveconflict%28__%29.md)
- [relinquishPresentedItem(toReader:)](nsdocument/relinquishpresenteditem%28toreader_%29.md)
- [relinquishPresentedItem(toWriter:)](nsdocument/relinquishpresenteditem%28towriter_%29.md)
- [savePresentedItemChanges(completionHandler:)](nsdocument/savepresenteditemchanges%28completionhandler_%29.md)

### Initializers

- [init(contentsOfURL:ofType:)](nsdocument/init%28contentsofurl_oftype_%29.md)
- [init(forURL:withContentsOfURL:ofType:)](nsdocument/init%28forurl_withcontentsofurl_oftype_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSPersistentDocument](nspersistentdocument.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSEditorRegistration](nseditorregistration.md)
- [NSFilePresenter](https://developer.apple.com/documentation/foundation/nsfilepresenter)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Documents

- [Developing a Document-Based App](developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.
- [NSDocumentController](nsdocumentcontroller.md): An object that manages an app’s documents.
- [NSPersistentDocument](nspersistentdocument.md): A document object that can integrate with Core Data.

# NSDocument (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract class that defines the interface for macOS documents.

## Declaration

```objectivec
@interface NSDocument : NSObject
```

<a id="overview"></a>

## Overview

A document is an object that can internally represent data displayed in a window and that can read data from and write data to a file or file package. Documents create and manage one or more window controllers and are in turn managed by a document controller. Documents respond to first-responder action messages to save, revert, and print their data.

Conceptually, a document is a container for a body of information identified by a name under which it is stored in a disk file. In this sense, however, the document is not the same as the file but is an object in memory that owns and manages the document data. In the context of AppKit, a document is an instance of a custom [NSDocument](nsdocument.md) subclass that knows how to represent internally, in one or more formats, persistent data that is displayed in windows.

A document can read that data from a file and write it to a file. It is also the first-responder target for many menu commands related to documents, such as Save, Revert, and Print. A document manages its window’s edited status and is set up to perform undo and redo operations. When a window is closing, the document is asked before the window delegate to approve the closing.

[NSDocument](nsdocument.md) is one of the triad of AppKit classes that establish an architectural basis for document-based apps (the others being [NSDocumentController](nsdocumentcontroller.md) and [NSWindowController](nswindowcontroller.md)).

For more information about using [NSDocument](nsdocument.md) in a document-based app, see [Developing a Document-Based App](developing-a-document-based-app.md).

<a id="Subclassing-NSDocument"></a>

### Subclassing NSDocument

The [NSDocument](nsdocument.md) class is designed to be subclassed. That is, the [NSDocument](nsdocument.md) class is abstract, and your app must create at least one [NSDocument](nsdocument.md) subclass in order to use the document architecture. To create a useful [NSDocument](nsdocument.md) subclass, you must override some methods, and you can optionally override others.

The [NSDocument](nsdocument.md) class itself knows how to handle document data as undifferentiated lumps; although it understands that these lumps are typed, it knows nothing about particular types. In their overrides of the data-based reading and writing methods, subclasses must add the knowledge of particular types and how data of the document’s native type is structured internally. Subclasses are also responsible for the creation of the window controllers that manage document windows and for the implementation of undo and redo. The `NSDocument` class takes care of much of the rest, including generally managing the state of the document.

For more information about creating subclasses, including the primitive methods that subclasses must override and those that you can optionally override, see [Developing a Document-Based App](developing-a-document-based-app.md).

<a id="Document-Saving-Behavior"></a>

### Document Saving Behavior

The [NSDocument](nsdocument.md) class implements document saving in a way that preserves, when possible, various attributes of each document, including:

- Creation date
- Permissions/privileges
- Location of the document’s icon in its parent folder’s Icon View Finder window
- Value of the document’s Show Extension setting

Care is also taken to save documents in a way that does not break any user-created aliases that may point to documents. As a result, some methods in any class of `NSDocument` may be invoked with parameters that do not have the same meaning as they did in early releases of macOS. It is important that overrides of [writeToURL:ofType:error:](nsdocument/write%28to_oftype_%29.md) and [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](nsdocument/write%28to_oftype_for_originalcontentsurl_%29.md) make no assumptions about the file paths passed as parameters, including:

- The location to which the file is being written. This location might be a hidden temporary directory.
- The name of the file being written. It is possible that this file has no obvious relation to the document name.
- The relation of any file being passed, including the original file, to the value in [fileURL](nsdocument/fileurl.md).

When updating your app to link against OS X v10.5, keep in mind that it is usually more appropriate to invoke in your app code one of the `NSDocument` `save...` methods than one of the `write...` methods. The `write...` methods are there primarily for you to override. The [saveToURL:ofType:forSaveOperation:error:](nsdocument/savetourl_oftype_forsaveoperation_error_.md) method that is meant always to be invoked during document saving, sets the [fileModificationDate](nsdocument/filemodificationdate.md) property  with the file’s new modification date after it has been written (for [NSSaveOperation](nsdocument/saveoperationtype/saveoperation.md) and [NSSaveAsOperation](nsdocument/saveoperationtype/saveasoperation.md) only).

Likewise, it’s usually more appropriate to invoke in your app code one of the `NSDocument` `revert...` methods than one of the `read...` methods. The `read...` methods are there primarily for you to override. The [revertToContentsOfURL:ofType:error:](nsdocument/revert%28tocontentsof_oftype_%29.md) method that is meant always to be invoked during rereading of an open document, sets the [fileModificationDate](nsdocument/filemodificationdate.md) property with the file’s modification date after it has been read.

<a id="iCloud-Support"></a>

### iCloud Support

The [NSDocument](nsdocument.md) class implements the file coordination support that is required for an iCloud-enabled, document-based Mac app (see [How iCloud Document Storage Works](https://developer.apple.com/library/archive/documentation/General/Conceptual/iCloudDesignGuide/Chapters/DesigningForDocumentsIniCloud.html#//apple_ref/doc/uid/TP40012094-CH2-SW10) in [iCloud Design Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/iCloudDesignGuide/Chapters/Introduction.html#//apple_ref/doc/uid/TP40012094)). In addition, this class’s methods for moving and renaming documents, new in OS X v10.8, ensure that these operations are performed in a safe manner for iCloud-enabled apps.

<a id="Multicore-Considerations"></a>

### Multicore Considerations

In macOS 10.6 and later, `NSDocument` supports the ability to open multiple documents concurrently. However, this support requires the cooperation of the document object. If your document subclass is able to read specific document types independently of other similar documents, you should override the [canConcurrentlyReadDocumentsOfType:](nsdocument/canconcurrentlyreaddocuments%28oftype_%29.md) class method and return [true](https://developer.apple.com/documentation/swift/true) for the appropriate document types. If specific document types rely on shared state information, however, you should return [false](https://developer.apple.com/documentation/swift/false) for those types.

## Topics

### Creating a Document Object

- [init](nsdocument/init%28%29.md): Initializes and returns an empty document object.
- [initWithContentsOfURL:ofType:error:](nsdocument/init%28contentsof_oftype_%29.md): Initializes a document located by a URL of a specified type.
- [initForURL:withContentsOfURL:ofType:error:](nsdocument/init%28for_withcontentsof_oftype_%29.md): Initializes a document with the specified contents, and places the resulting document’s file at the designated location.
- [initWithType:error:](nsdocument/init%28type_%29.md): Initializes a document of a specified type.

### Reading the Document’s Content

- [canConcurrentlyReadDocumentsOfType:](nsdocument/canconcurrentlyreaddocuments%28oftype_%29.md): Returns a Boolean value that indicates whether the receiver reads multiple documents of the given type concurrently.
- [readFromURL:ofType:error:](nsdocument/read%28from_oftype_%29-1vttv.md): Sets the contents of this document by reading from a file or file package, of a specified type, located by a URL.
- [readFromFileWrapper:ofType:error:](nsdocument/read%28from_oftype_%29-3rzsi.md): Sets the contents of this document by reading from a file wrapper of a specified type.
- [readFromData:ofType:error:](nsdocument/read%28from_oftype_%29-6g6ai.md): Sets the contents of this document by reading from data of a specified type.

### Writing the Document’s Content

- [canAsynchronouslyWriteToURL:ofType:forSaveOperation:](nsdocument/canasynchronouslywrite%28to_oftype_for_%29.md): Returns whether the receiver can concurrently write to a file or file package located by a URL, that is formatted for a specific type, for a specific kind of save operation.
- [unblockUserInteraction](nsdocument/unblockuserinteraction%28%29.md): Unblocks the main thread during asynchronous saving.
- [writeToURL:ofType:error:](nsdocument/write%28to_oftype_%29.md): Writes the contents of the document to a file or file package located by a URL, that is formatted to a specified type.
- [writeSafelyToURL:ofType:forSaveOperation:error:](nsdocument/writesafely%28to_oftype_for_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [fileWrapperOfType:error:](nsdocument/filewrapper%28oftype_%29.md): Creates and returns a file wrapper that contains the contents of the document, formatted to the specified type.
- [dataOfType:error:](nsdocument/data%28oftype_%29.md): Creates and returns a data object that contains the contents of the document, formatted to a specified type.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](nsdocument/write%28to_oftype_for_originalcontentsurl_%29.md): Writes the contents of the document to a file or file package located by a URL.
- [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](nsdocument/save%28to_oftype_for_delegate_didsave_contextinfo_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation.
- [saveToURL:ofType:forSaveOperation:completionHandler:](nsdocument/save%28to_oftype_for_completionhandler_%29.md): Saves the contents of the document to a file or file package located by a URL, that is formatted to a specified type, for a particular kind of save operation, and invokes the passed-in completion handler.
- [fileAttributesToWriteToURL:ofType:forSaveOperation:originalContentsURL:error:](nsdocument/fileattributestowrite%28to_oftype_for_originalcontentsurl_%29.md): Returns the attributes to write to the file or file package at the specified URL, and targeting the specified type of save operation.
- [NSSaveOperationType](nsdocument/saveoperationtype.md): Constants for specifying the type of document-save operation to perform.

### Getting Document Metadata

- [fileURL](nsdocument/fileurl.md): The location of the document’s on-disk representation.
- [entireFileLoaded](nsdocument/isentirefileloaded.md): A Boolean value that indicates whether the document’s file is completely loaded into memory.
- [fileModificationDate](nsdocument/filemodificationdate.md): The last-known modification date of the document’s on-disk representation.
- [keepBackupFile](nsdocument/keepbackupfile.md): A Boolean value that indicates whether the document archives previously saved versions of the document.
- [draft](nsdocument/isdraft.md): A Boolean value that indicates whether the document is a draft that the user has not yet saved.
- [fileType](nsdocument/filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [documentEdited](nsdocument/isdocumentedited.md): A Boolean value that indicates whether the document has unsaved changes.
- [inViewingMode](nsdocument/isinviewingmode.md): A Boolean value that indicates whether the document is in read-only mode.

### Managing File Type Information

- [readableTypes](nsdocument/readabletypes.md): Returns the types of data the receiver can read natively and any types filterable to that native type.
- [writableTypes](nsdocument/writabletypes.md): Returns the types of data the receiver can write natively and any types filterable to that native type.
- [isNativeType:](nsdocument/isnativetype%28__%29.md): Returns a Boolean value that indicates whether the document can read and write the data natively.
- [writableTypesForSaveOperation:](nsdocument/writabletypes%28for_%29.md): Returns the names of the types to which this document can be saved for a specified kind of save operation.
- [fileNameExtensionForType:saveOperation:](nsdocument/filenameextension%28fortype_saveoperation_%29.md): Returns a filename extension that can be appended to a base filename, for a specified file type and kind of save operation.

### Creating and Managing Window Controllers

- [makeWindowControllers](nsdocument/makewindowcontrollers%28%29.md): Creates the window controller objects that the document uses to display its content.
- [addWindowController:](nsdocument/addwindowcontroller%28__%29.md): Adds the specified window controller to the current document.
- [removeWindowController:](nsdocument/removewindowcontroller%28__%29.md): Removes the specified window controller from the receiver’s array of window controllers.
- [windowControllers](nsdocument/windowcontrollers.md): The document’s current window controllers.
- [windowNibName](nsdocument/windownibname.md): The name of the document’s sole nib file.
- [windowControllerDidLoadNib:](nsdocument/windowcontrollerdidloadnib%28__%29.md): Called after one of the document’s window controllers loads its nib file.
- [windowControllerWillLoadNib:](nsdocument/windowcontrollerwillloadnib%28__%29.md): Called before one of the document’s window controllers loads its nib file.
- [shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo:](nsdocument/shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

### Managing Document Windows

- [showWindows](nsdocument/showwindows%28%29.md): Displays all of the document’s windows, bringing them to the front and making them main or key as necessary.
- [setWindow:](nsdocument/setwindow%28__%29.md): Sets the window outlet of this document to the specified value.
- [windowForSheet](nsdocument/windowforsheet.md): Returns the document window to use as the parent of a document-modal sheet.
- [displayName](nsdocument/displayname.md): The name of the document as displayed in the title bars of the document’s windows and in alert dialogs related to the document.
- [defaultDraftName](nsdocument/defaultdraftname%28%29.md): Returns the default draft name for the document subclass.
- [encodeRestorableStateWithCoder:backgroundQueue:](nsdocument/encoderestorablestate%28with_backgroundqueue_%29.md): Saves the interface-related state of the document.

### Configuring the Autosave Behavior

- [autosavesInPlace](nsdocument/autosavesinplace.md): A Boolean value that indicates whether the document subclass supports autosaving in place.
- [autosavesDrafts](nsdocument/autosavesdrafts.md): A Boolean value that indicates whether the document subclass supports autosaving of drafts.
- [preservesVersions](nsdocument/preservesversions.md): A Boolean value that indicates whether the document subclass supports version management.
- [autosavedContentsFileURL](nsdocument/autosavedcontentsfileurl.md): The location of the most recently autosaved document contents.
- [autosavingFileType](nsdocument/autosavingfiletype.md): The document type to use for an autosave operation.
- [autosavingIsImplicitlyCancellable](nsdocument/autosavingisimplicitlycancellable.md): A Boolean value that indicates whether you can cancel an in-progress autosave operation.

### Autosaving the Document

- [checkAutosavingSafetyAndReturnError:](nsdocument/checkautosavingsafety%28%29.md): Returns a Boolean value that indicates whether it is safe to autosave document changes.
- [hasUnautosavedChanges](nsdocument/hasunautosavedchanges.md): A Boolean value that indicates whether the document has changes that have not been autosaved.
- [scheduleAutosaving](nsdocument/scheduleautosaving%28%29.md): Schedules periodic autosaving for the purpose of crash protection.
- [autosaveDocumentWithDelegate:didAutosaveSelector:contextInfo:](nsdocument/autosave%28withdelegate_didautosave_contextinfo_%29.md): Autosaves the document’s contents to an appropriate location in the file system.
- [autosaveWithImplicitCancellability:completionHandler:](nsdocument/autosave%28withimplicitcancellability_completionhandler_%29.md): Autosaves the document’s contents to an appropriate file-system location, as needed.
- [backupFileURL](nsdocument/backupfileurl.md): The URL for the document’s backup file that was created during an autosave operation.

### Browsing Document Versions

- [browseDocumentVersions:](nsdocument/browseversions%28__%29.md): Opens the Versions browser in the document’s main window.
- [browsingVersions](nsdocument/isbrowsingversions.md): A Boolean value that indicates whether the document is currently displaying the Versions browser.
- [stopBrowsingVersionsWithCompletionHandler:](nsdocument/stopbrowsingversions%28completionhandler_%29.md): Dismiss the Versions browser for the current document.

### Storing Documents in iCloud

- [moveDocumentToUbiquityContainer:](nsdocument/movetoubiquitycontainer%28__%29.md): Moves the document to the user’s iCloud storage.
- [usesUbiquitousStorage](nsdocument/usesubiquitousstorage.md): Returns whether the document object stores its contents in the user’s iCloud document storage.

### Managing Undo and Redo Actions

- [undoManager](nsdocument/undomanager.md): The object that the document uses to support undo/redo operations.
- [hasUndoManager](nsdocument/hasundomanager.md): A Boolean value that indicates whether the document owns an undo manager object.

### Updating the Document Change Count

- [updateChangeCountWithToken:forSaveOperation:](nsdocument/updatechangecount%28withtoken_for_%29.md): Updates the document’s change count settings after a successful save operation.
- [updateChangeCount:](nsdocument/updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [NSDocumentChangeType](nsdocument/changetype.md): Values that indicate a document’s edit status.
- [changeCountTokenForSaveOperation:](nsdocument/changecounttoken%28for_%29.md): Returns an object that encapsulates the current record of document changes at the beginning of a save operation.

### Handling Window Restoration

- [allowedClassesForRestorableStateKeyPath:](nsdocument/allowedclasses%28forrestorablestatekeypath_%29.md): Returns the classes that support secure coding.
- [encodeRestorableStateWithCoder:](nsdocument/encoderestorablestate%28with_%29.md): Saves the interface-related state of the document.
- [restoreStateWithCoder:](nsdocument/restorestate%28with_%29.md): Restores the interface-related state of the document.
- [restorableStateKeyPaths](nsdocument/restorablestatekeypaths.md): Returns an array of key paths that represent the restorable attributes of the document.
- [invalidateRestorableState](nsdocument/invalidaterestorablestate%28%29.md): Marks the document’s interface-related state as dirty.
- [restoreDocumentWindowWithIdentifier:state:completionHandler:](nsdocument/restorewindow%28withidentifier_state_completionhandler_%29.md): Restores a window that was associated with a document, after that document is reopened.

### Presenting a Save Panel

- [runModalSavePanelForSaveOperation:delegate:didSaveSelector:contextInfo:](nsdocument/runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [prepareSavePanel:](nsdocument/preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [shouldRunSavePanelWithAccessoryView](nsdocument/shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileTypeFromLastRunSavePanel](nsdocument/filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
- [fileNameExtensionWasHiddenInLastRunSavePanel](nsdocument/filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.

### Supporting User Activities

- [userActivity](nsdocument/useractivity.md): An object that encapsulates a user activity the document supports.
- [updateUserActivityState:](nsdocument/updateuseractivitystate%28__%29.md): Updates the state of the given user activity.
- [NSUserActivityDocumentURLKey](nsuseractivitydocumenturlkey.md): The key that identifies the document associated with a user activity.

### Validating User Interface Items

- [validateUserInterfaceItem:](nsdocument/validateuserinterfaceitem%28__%29.md): Validates the specified user interface item that the receiver manages.

### Performing Tasks Serially

- [performSynchronousFileAccessUsingBlock:](nsdocument/performsynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete, then invokes the passed-in block.
- [performAsynchronousFileAccessUsingBlock:](nsdocument/performasynchronousfileaccess%28__%29.md): Waits for any scheduled file access to complete but without blocking the main thread, then invokes the passed-in block.
- [performActivityWithSynchronousWaiting:usingBlock:](nsdocument/performactivity%28withsynchronouswaiting_using_%29.md): Waits for any work scheduled by previous invocations of this method to complete, then invokes the passed-in block.
- [continueActivityUsingBlock:](nsdocument/continueactivity%28__%29.md): Continues to perform the task for a user activity object using a different block.
- [continueAsynchronousWorkOnMainThreadUsingBlock:](nsdocument/continueasynchronousworkonmainthread%28__%29.md): Invokes the passed-in block on the main thread.

### Handling User Actions

- [printDocument:](nsdocument/printdocument%28__%29.md): Prints the receiver in response to the user choosing the Print menu command.
- [runPageLayout:](nsdocument/runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.
- [revertDocumentToSaved:](nsdocument/reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [saveDocument:](nsdocument/save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveDocumentAs:](nsdocument/saveas%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save As menu command.
- [saveDocumentTo:](nsdocument/saveto%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save To menu command.
- [saveDocumentWithDelegate:didSaveSelector:contextInfo:](nsdocument/save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.

### Closing the Document

- [canCloseDocumentWithDelegate:shouldCloseSelector:contextInfo:](nsdocument/canclose%28withdelegate_shouldclose_contextinfo_%29.md): Determines whether to close the document, prompting the user as needed to choose a course of action.
- [close](nsdocument/close%28%29.md): Closes all of the document’s windows and removes the document from its document controller.

### Reverting the Document Contents

- [revertToContentsOfURL:ofType:error:](nsdocument/revert%28tocontentsof_oftype_%29.md): Discards all unsaved document modifications and replaces the document’s contents by reading a file or file package located by a URL of a specified type.

### Duplicating the Document

- [duplicateAndReturnError:](nsdocument/duplicate%28%29.md): Creates a new document whose contents are the same as the receiver and returns an error object if unsuccessful.
- [duplicateDocument:](nsdocument/duplicate%28__%29.md): Creates a copy of the receiving document in response to the user choosing Duplicate from the File menu.
- [duplicateDocumentWithDelegate:didDuplicateSelector:contextInfo:](nsdocument/duplicate%28withdelegate_didduplicate_contextinfo_%29.md): Creates a new document whose contents are the same as the current document.

### Renaming the Document

- [renameDocument:](nsdocument/rename%28__%29.md): Renames the current document in response to the user choosing the Rename menu item.

### Moving the Document

- [moveDocument:](nsdocument/move%28__%29.md): Moves the document to a new location in response to the user choosing the Move To… menu item.
- [moveDocumentWithCompletionHandler:](nsdocument/move%28completionhandler_%29.md): Moves the document to a user-selected location.
- [moveToURL:completionHandler:](nsdocument/move%28to_completionhandler_%29.md): Moves the document’s file to the given URL.

### Locking the Document

- [lockDocument:](nsdocument/lock%28__%29.md): Locks the document in response to the user choosing the Lock menu item.
- [unlockDocument:](nsdocument/unlock%28__%29.md): Unlocks the document in response to the user choosing the Unlock menu item.
- [lockDocumentWithCompletionHandler:](nsdocument/lock%28completionhandler_%29-6zuhh.md): Prevents the user from making further changes to the document.
- [lockWithCompletionHandler:](nsdocument/lock%28completionhandler_%29-161qv.md): Prevents the user from making changes to the document’s file.
- [unlockDocumentWithCompletionHandler:](nsdocument/unlock%28completionhandler_%29-8p8zd.md): Allows the user to make modifications to the document.
- [unlockWithCompletionHandler:](nsdocument/unlock%28completionhandler_%29-6m7rh.md): Allows the user to make modifications to the document’s file.
- [locked](nsdocument/islocked.md): A Boolean value that indicates whether or not the file can be written to.

### Printing the Document

- [printInfo](nsdocument/printinfo.md): The printing information associated with the document.
- [preparePageLayout:](nsdocument/preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](nsdocument/runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation:delegate:didRunSelector:contextInfo:](nsdocument/runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo:](nsdocument/shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](nsdocument/print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperationWithSettings:error:](nsdocument/printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [PDFPrintOperation](nsdocument/pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveDocumentToPDF:](nsdocument/savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.

### Sharing the Document

- [allowsDocumentSharing](nsdocument/allowsdocumentsharing.md): A Boolean value that indicates whether the document is shareable from the standard Share menu.
- [prepareSharingServicePicker:](nsdocument/prepare%28__%29.md): Perform any custom setup associated with a sharing service picker.
- [shareDocumentWithSharingService:completionHandler:](nsdocument/share%28with_completionhandler_%29.md): Share the document’s file using the specified sharing service.

### Handling Script Commands

- [handleCloseScriptCommand:](nsdocument/handleclose%28__%29.md): Handles the Close AppleScript command by attempting to close the document.
- [handlePrintScriptCommand:](nsdocument/handleprint%28__%29.md): Handles the Print AppleScript command by attempting to print the document.
- [handleSaveScriptCommand:](nsdocument/handlesave%28__%29.md): Handles the Save AppleScript command by attempting to save the document.
- [objectSpecifier](nsdocument/objectspecifier.md): Returns the object specifier that represents the document.
- [lastComponentOfFileName](nsdocument/lastcomponentoffilename.md): The name of the document seen by the user in AppleScript.

### Displaying Errors to the User

- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](nsdocument/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [presentError:](nsdocument/presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError:](nsdocument/willpresenterror%28__%29.md): Called when the receiver is about to present an error.
- [willNotPresentError:](nsdocument/willnotpresenterror%28__%29.md): Confirms that the error object is not to be presented to the user and the error cannot be recovered from, so cleanup can be done.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](nsdocument-deprecated-symbols.md): Review symbols that are no longer supported, and find replacements.

### Instance Properties

- [observedPresentedItemUbiquityAttributes](nsdocument/observedpresenteditemubiquityattributes.md)
- [presentedItemURL](nsdocument/presenteditemurl.md)
- [previewRepresentableActivityItems](nsdocument/previewrepresentableactivityitems.md)
- [savePanelShowsFileFormatsControl](nsdocument/savepanelshowsfileformatscontrol.md)

### Instance Methods

- [accommodatePresentedItemDeletionWithCompletionHandler:](nsdocument/accommodatepresenteditemdeletion%28completionhandler_%29.md)
- [presentedItemDidChange](nsdocument/presenteditemdidchange%28%29.md)
- [presentedItemDidChangeUbiquityAttributes:](nsdocument/presenteditemdidchangeubiquityattributes%28__%29.md)
- [presentedItemDidGainVersion:](nsdocument/presenteditemdidgain%28__%29.md)
- [presentedItemDidLoseVersion:](nsdocument/presenteditemdidlose%28__%29.md)
- [presentedItemDidMoveToURL:](nsdocument/presenteditemdidmove%28to_%29.md)
- [presentedItemDidResolveConflictVersion:](nsdocument/presenteditemdidresolveconflict%28__%29.md)
- [relinquishPresentedItemToReader:](nsdocument/relinquishpresenteditem%28toreader_%29.md)
- [relinquishPresentedItemToWriter:](nsdocument/relinquishpresenteditem%28towriter_%29.md)
- [savePresentedItemChangesWithCompletionHandler:](nsdocument/savepresenteditemchanges%28completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSPersistentDocument](nspersistentdocument.md)

### Conforms To

- [NSEditorRegistration](nseditorregistration.md)
- [NSFilePresenter](https://developer.apple.com/documentation/foundation/nsfilepresenter)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Documents

- [Developing a Document-Based App](developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.
- [NSDocumentController](nsdocumentcontroller.md): An object that manages an app’s documents.
- [NSPersistentDocument](nspersistentdocument.md): A document object that can integrate with Core Data.
