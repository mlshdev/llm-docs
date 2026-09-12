> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller](https://developer.apple.com/documentation/appkit/nsdocumentcontroller)

# NSDocumentController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages an app’s documents.

## Declaration

```swift
@MainActor class NSDocumentController
```

<a id="overview"></a>

## Overview

As the first-responder target of New and Open menu commands, [NSDocumentController](nsdocumentcontroller.md) creates and opens documents and tracks them throughout a session of the app. When opening documents, a document controller runs and manages the modal Open panel. [NSDocumentController](nsdocumentcontroller.md) objects also maintain and manage the mappings of document types, extensions, and [NSDocument](nsdocument.md) subclasses as specified in the [CFBundleDocumentTypes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-101685) property loaded from the information property list (`Info.plist`).

You can use various [NSDocumentController](nsdocumentcontroller.md) methods to get a list of the current documents, get the current document (which is the document whose window is currently key), get documents based on a given filename or window, and find out about a document’s extension, type, display name, and document class.

In some situations, it’s worthwhile to subclass [NSDocumentController](nsdocumentcontroller.md) in non-[NSDocument](nsdocument.md)-based apps to get some of its features. For example, the [NSDocumentController](nsdocumentcontroller.md) management of the Open Recent menu is useful in apps that don’t use subclasses of [NSDocument](nsdocument.md).

## Topics

### Obtaining the Shared Document Controller

- [shared](nsdocumentcontroller/shared.md): Returns the shared `NSDocumentController` instance.

### Initializing a New NSDocumentController

- [init()](nsdocumentcontroller/init%28%29.md): This method is the designated initializer for `NSDocumentController`.
- [init(coder:)](nsdocumentcontroller/init%28coder_%29.md): This method initializes a new NSDocumentController from the coder.

### Creating and Opening Documents

- [document(for:)](nsdocumentcontroller/document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocument(withContentsOf:copying:displayName:)](nsdocumentcontroller/duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocument(withContentsOf:display:completionHandler:)](nsdocumentcontroller/opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay(\_:)](nsdocumentcontroller/openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocument(for:withContentsOf:ofType:)](nsdocumentcontroller/makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocument(withContentsOf:ofType:)](nsdocumentcontroller/makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocument(ofType:)](nsdocumentcontroller/makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocument(for:withContentsOf:display:completionHandler:)](nsdocumentcontroller/reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

### Managing Documents

- [documents](nsdocumentcontroller/documents.md): The document objects managed by the receiver.
- [addDocument(\_:)](nsdocumentcontroller/adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](nsdocumentcontroller/currentdocument.md): The document object associated with the main window.
- [document(for:)](nsdocumentcontroller/document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](nsdocumentcontroller/hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument(\_:)](nsdocumentcontroller/removedocument%28__%29.md): Removes the given document from the list of open documents.

### Managing Document Types

- [documentClassNames](nsdocumentcontroller/documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [defaultType](nsdocumentcontroller/defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [documentClass(forType:)](nsdocumentcontroller/documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [displayName(forType:)](nsdocumentcontroller/displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
- [typeForContents(of:)](nsdocumentcontroller/typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.

### Autosaving

- [autosavingDelay](nsdocumentcontroller/autosavingdelay.md): The time interval (in seconds) for periodic autosaving.

### Closing Documents

- [closeAllDocuments(withDelegate:didCloseAllSelector:contextInfo:)](nsdocumentcontroller/closealldocuments%28withdelegate_didcloseallselector_contextinfo_%29.md): Iterates through all the open documents and tries to close them one by one using the specified delegate.
- [reviewUnsavedDocuments(withAlertTitle:cancellable:delegate:didReviewAllSelector:contextInfo:)](nsdocumentcontroller/reviewunsaveddocuments%28withalerttitle_cancellable_delegate_didreviewallselector_contextinfo_%29.md): Displays an alert asking if the user wants to review unsaved documents, quit regardless of unsaved documents, or cancel the save operation.

### Responding to Action Messages

- [newDocument(\_:)](nsdocumentcontroller/newdocument%28__%29.md): An action method called by the New menu command, this method creates a new `NSDocument` object and adds it to the list of such objects managed by the document controller.
- [openDocument(\_:)](nsdocumentcontroller/opendocument%28__%29.md): An action method called by the Open menu command, it runs the modal Open panel and, based on the selected filenames, creates one or more `NSDocument` objects from the contents of the files.
- [saveAllDocuments(\_:)](nsdocumentcontroller/savealldocuments%28__%29.md): As the action method called by the Save All command, saves all open documents of the application that need to be saved.

### Managing the Open Dialog

- [beginOpenPanel(completionHandler:)](nsdocumentcontroller/beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [beginOpenPanel(\_:forTypes:completionHandler:)](nsdocumentcontroller/beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [runModalOpenPanel(\_:forTypes:)](nsdocumentcontroller/runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [currentDirectory](nsdocumentcontroller/currentdirectory.md): The directory path to use as the starting point in the Open dialog.
- [urlsFromRunningOpenPanel()](nsdocumentcontroller/urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](nsdocumentcontroller/maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [clearRecentDocuments(\_:)](nsdocumentcontroller/clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocumentURL(\_:)](nsdocumentcontroller/notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [noteNewRecentDocument(\_:)](nsdocumentcontroller/notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
- [recentDocumentURLs](nsdocumentcontroller/recentdocumenturls.md): The list of recent-document URLs.

### Validating User Interface Items

- [validateUserInterfaceItem(\_:)](nsdocumentcontroller/validateuserinterfaceitem%28__%29.md): Returns a Boolean value that indicates whether a given user interface item should be enabled.

### Sharing

- [allowsAutomaticShareMenu](nsdocumentcontroller/allowsautomaticsharemenu.md): A Boolean value that the system uses to insert a Share menu in the File menu.
- [standardShareMenuItem()](nsdocumentcontroller/standardsharemenuitem%28%29.md): Returns a menu item that your app uses for sharing the current document.

### Handling Errors

- [presentError(\_:)](nsdocumentcontroller/presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](nsdocumentcontroller/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError(\_:)](nsdocumentcontroller/willpresenterror%28__%29.md): Indicates an error condition and provides the opportunity to return the same or a different error.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [NSWindowRestoration](nswindowrestoration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Documents

- [Developing a Document-Based App](developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.
- [NSDocument](nsdocument.md): An abstract class that defines the interface for macOS documents.
- [NSPersistentDocument](nspersistentdocument.md): A document object that can integrate with Core Data.

# NSDocumentController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages an app’s documents.

## Declaration

```objectivec
@interface NSDocumentController : NSObject
```

<a id="overview"></a>

## Overview

As the first-responder target of New and Open menu commands, [NSDocumentController](nsdocumentcontroller.md) creates and opens documents and tracks them throughout a session of the app. When opening documents, a document controller runs and manages the modal Open panel. [NSDocumentController](nsdocumentcontroller.md) objects also maintain and manage the mappings of document types, extensions, and [NSDocument](nsdocument.md) subclasses as specified in the [CFBundleDocumentTypes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-101685) property loaded from the information property list (`Info.plist`).

You can use various [NSDocumentController](nsdocumentcontroller.md) methods to get a list of the current documents, get the current document (which is the document whose window is currently key), get documents based on a given filename or window, and find out about a document’s extension, type, display name, and document class.

In some situations, it’s worthwhile to subclass [NSDocumentController](nsdocumentcontroller.md) in non-[NSDocument](nsdocument.md)-based apps to get some of its features. For example, the [NSDocumentController](nsdocumentcontroller.md) management of the Open Recent menu is useful in apps that don’t use subclasses of [NSDocument](nsdocument.md).

## Topics

### Obtaining the Shared Document Controller

- [sharedDocumentController](nsdocumentcontroller/shared.md): Returns the shared `NSDocumentController` instance.

### Initializing a New NSDocumentController

- [init](nsdocumentcontroller/init%28%29.md): This method is the designated initializer for `NSDocumentController`.
- [initWithCoder:](nsdocumentcontroller/init%28coder_%29.md): This method initializes a new NSDocumentController from the coder.

### Creating and Opening Documents

- [documentForURL:](nsdocumentcontroller/document%28for_%29-i5zi.md): Returns, for a given URL, the open document whose file or file package is located by the URL, or `nil` if there is no such open document.
- [duplicateDocumentWithContentsOfURL:copying:displayName:error:](nsdocumentcontroller/duplicatedocument%28withcontentsof_copying_displayname_%29.md): Creates a new document by reading the contents for the document from another URL, presents its user interface, and returns the document if successful.
- [openDocumentWithContentsOfURL:display:completionHandler:](nsdocumentcontroller/opendocument%28withcontentsof_display_completionhandler_%29.md): Opens a document located by a URL, optionally presents its user interface, and calls the passed-in completion handler.
- [openUntitledDocumentAndDisplay:error:](nsdocumentcontroller/openuntitleddocumentanddisplay%28__%29.md): Creates a new untitled document, presents its user interface if `displayDocument` is `true`, and returns the document if successful.
- [makeDocumentForURL:withContentsOfURL:ofType:error:](nsdocumentcontroller/makedocument%28for_withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, but by reading the contents for the document from another URL, and returns it if successful.
- [makeDocumentWithContentsOfURL:ofType:error:](nsdocumentcontroller/makedocument%28withcontentsof_oftype_%29.md): Instantiates a document located by a URL, of a specified type, and returns it if successful.
- [makeUntitledDocumentOfType:error:](nsdocumentcontroller/makeuntitleddocument%28oftype_%29.md): Instantiates a new untitled document of the specified type and returns it if successful.
- [reopenDocumentForURL:withContentsOfURL:display:completionHandler:](nsdocumentcontroller/reopendocument%28for_withcontentsof_display_completionhandler_%29.md): Reopens a document, optionally located by a URL, by reading the contents for the document from another URL, optionally presents its user interface, and calls the passed-in completion handler.

### Managing Documents

- [documents](nsdocumentcontroller/documents.md): The document objects managed by the receiver.
- [addDocument:](nsdocumentcontroller/adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](nsdocumentcontroller/currentdocument.md): The document object associated with the main window.
- [documentForWindow:](nsdocumentcontroller/document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](nsdocumentcontroller/hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument:](nsdocumentcontroller/removedocument%28__%29.md): Removes the given document from the list of open documents.

### Managing Document Types

- [documentClassNames](nsdocumentcontroller/documentclassnames.md): An array of strings representing the custom document classes supported by this app.
- [defaultType](nsdocumentcontroller/defaulttype.md): Returns the name of the document type that should be used when creating new documents.
- [documentClassForType:](nsdocumentcontroller/documentclass%28fortype_%29.md): Returns the `NSDocument` subclass associated with a given document type.
- [displayNameForType:](nsdocumentcontroller/displayname%28fortype_%29.md): Returns the descriptive name for the specified document type, which is used in the File Format pop-up menu of the Save As dialog.
- [typeForContentsOfURL:error:](nsdocumentcontroller/typeforcontents%28of_%29.md): Returns, for a specified URL, the document type identifier to use when opening the document at that location, if successful.

### Autosaving

- [autosavingDelay](nsdocumentcontroller/autosavingdelay.md): The time interval (in seconds) for periodic autosaving.

### Closing Documents

- [closeAllDocumentsWithDelegate:didCloseAllSelector:contextInfo:](nsdocumentcontroller/closealldocuments%28withdelegate_didcloseallselector_contextinfo_%29.md): Iterates through all the open documents and tries to close them one by one using the specified delegate.
- [reviewUnsavedDocumentsWithAlertTitle:cancellable:delegate:didReviewAllSelector:contextInfo:](nsdocumentcontroller/reviewunsaveddocuments%28withalerttitle_cancellable_delegate_didreviewallselector_contextinfo_%29.md): Displays an alert asking if the user wants to review unsaved documents, quit regardless of unsaved documents, or cancel the save operation.

### Responding to Action Messages

- [newDocument:](nsdocumentcontroller/newdocument%28__%29.md): An action method called by the New menu command, this method creates a new `NSDocument` object and adds it to the list of such objects managed by the document controller.
- [openDocument:](nsdocumentcontroller/opendocument%28__%29.md): An action method called by the Open menu command, it runs the modal Open panel and, based on the selected filenames, creates one or more `NSDocument` objects from the contents of the files.
- [saveAllDocuments:](nsdocumentcontroller/savealldocuments%28__%29.md): As the action method called by the Save All command, saves all open documents of the application that need to be saved.

### Managing the Open Dialog

- [beginOpenPanelWithCompletionHandler:](nsdocumentcontroller/beginopenpanel%28completionhandler_%29.md): Presents an Open dialog and delivers the results to a completion handler as an array of URLs for the chosen files, or nil.
- [beginOpenPanel:forTypes:completionHandler:](nsdocumentcontroller/beginopenpanel%28__fortypes_completionhandler_%29.md): Presents a nonmodal Open dialog that displays files you can open from a list of UTIs.
- [runModalOpenPanel:forTypes:](nsdocumentcontroller/runmodalopenpanel%28__fortypes_%29.md): Presents a modal Open dialog and limits selection to specific file types.
- [currentDirectory](nsdocumentcontroller/currentdirectory.md): The directory path to use as the starting point in the Open dialog.
- [URLsFromRunningOpenPanel](nsdocumentcontroller/urlsfromrunningopenpanel%28%29.md): An array of URLs that correspond to the selected files in a running Open dialog.

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](nsdocumentcontroller/maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [clearRecentDocuments:](nsdocumentcontroller/clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocumentURL:](nsdocumentcontroller/notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [noteNewRecentDocument:](nsdocumentcontroller/notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
- [recentDocumentURLs](nsdocumentcontroller/recentdocumenturls.md): The list of recent-document URLs.

### Validating User Interface Items

- [validateUserInterfaceItem:](nsdocumentcontroller/validateuserinterfaceitem%28__%29.md): Returns a Boolean value that indicates whether a given user interface item should be enabled.

### Sharing

- [allowsAutomaticShareMenu](nsdocumentcontroller/allowsautomaticsharemenu.md): A Boolean value that the system uses to insert a Share menu in the File menu.
- [standardShareMenuItem](nsdocumentcontroller/standardsharemenuitem%28%29.md): Returns a menu item that your app uses for sharing the current document.

### Handling Errors

- [presentError:](nsdocumentcontroller/presenterror%28__%29.md): Presents an error alert to the user as a modal panel.
- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](nsdocumentcontroller/presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a modal panel.
- [willPresentError:](nsdocumentcontroller/willpresenterror%28__%29.md): Indicates an error condition and provides the opportunity to return the same or a different error.

### Deprecated Methods

- [documentForFileName:](nsdocumentcontroller/documentforfilename_.md): Deprecated. Returns the document object for the file in which the document data is stored.
- [fileExtensionsFromType:](nsdocumentcontroller/fileextensionsfromtype_.md): Deprecated. Returns the allowable file extensions for the given document type.
- [fileNamesFromRunningOpenPanel](nsdocumentcontroller/filenamesfromrunningopenpanel.md): Deprecated. Returns a selection of files chosen by the user in the Open panel.
- [makeUntitledDocumentOfType:](nsdocumentcontroller/makeuntitleddocumentoftype_.md): Deprecated. Creates and returns a document object for document type.
- [makeDocumentWithContentsOfURL:ofType:](nsdocumentcontroller/makedocumentwithcontentsofurl_oftype_.md): Deprecated. Creates and returns a document object for the given document type from the contents of a given URL.
- [makeDocumentWithContentsOfFile:ofType:](nsdocumentcontroller/makedocumentwithcontentsoffile_oftype_.md): Deprecated. Creates and returns a document object of a given document type from the contents of a file.
- [openDocumentWithContentsOfFile:display:](nsdocumentcontroller/opendocumentwithcontentsoffile_display_.md): Deprecated. Returns a document object created from the contents of a given file and optionally displays it.
- [openDocumentWithContentsOfURL:display:](nsdocumentcontroller/opendocumentwithcontentsofurl_display_.md): Deprecated. Returns a document object created from the contents of a given URL and optionally displays it.
- [openDocumentWithContentsOfURL:display:error:](nsdocumentcontroller/opendocumentwithcontentsofurl_display_error_.md): Deprecated. Opens a document located by the given URL presents its user interface if requested, and returns the document if successful.
- [openUntitledDocumentOfType:display:](nsdocumentcontroller/openuntitleddocumentoftype_display_.md): Deprecated. Returns a document object instantiated from the subclass of the given document type and optionally displays it.
- [reopenDocumentForURL:withContentsOfURL:error:](nsdocumentcontroller/reopendocumentforurl_withcontentsofurl_error_.md): Deprecated. Reopens an autosaved document located by a URL, by reading the contents for the document from another URL, presents its user interface, and returns `true` if successful.
- [setShouldCreateUI:](nsdocumentcontroller/setshouldcreateui_.md): Deprecated. Sets whether the window controllers of a document should be created when the document is created.
- [shouldCreateUI](nsdocumentcontroller/shouldcreateui.md): Deprecated. Returns a Boolean value that indicates whether the window controllers of a document should be created when the document is created.
- [typeFromFileExtension:](nsdocumentcontroller/typefromfileextension_.md): Deprecated. Returns the document type associated with files having extension `fileExtensionOrHFSFileType`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [NSWindowRestoration](nswindowrestoration.md)

## See Also

### Documents

- [Developing a Document-Based App](developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.
- [NSDocument](nsdocument.md): An abstract class that defines the interface for macOS documents.
- [NSPersistentDocument](nspersistentdocument.md): A document object that can integrate with Core Data.
