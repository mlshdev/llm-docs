> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontrollerdelegate](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontrollerdelegate)

# UIDocumentBrowserViewControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The protocol you implement to respond as the user interacts with the document browser.

## Declaration

```swift
protocol UIDocumentBrowserViewControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Customizing a document-based app’s launch experience](customizing-a-document-based-app-s-launch-experience.md)
- [Adding custom actions and activities](adding-custom-actions-and-activities.md)
- [Customizing the document browser](customizing-the-browser.md)

## Topics

### Creating new documents

- [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md): Asks the delegate to create a new document.
- [UIDocumentBrowserViewController.ImportMode](uidocumentbrowserviewcontroller/importmode.md): The document browser’s import modes.
- [documentBrowser(\_:didImportDocumentAt:toDestinationURL:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didimportdocumentat_todestinationurl_%29.md): Tells the delegate that a document has been successfully imported.
- [documentBrowser(\_:failedToImportDocumentAt:error:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__failedtoimportdocumentat_error_%29.md): Tells the delegate that the document browser failed to import the specified document.

### Selecting documents

- [documentBrowser(\_:didPickDocumentsAt:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didpickdocumentsat_%29.md): Tells the delegate that the user has selected one or more documents.

### Working with the browser’s activity view

- [documentBrowser(\_:willPresent:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__willpresent_%29.md): Tells the delegate that the document browser will display an activity view.
- [documentBrowser(\_:applicationActivitiesForDocumentURLs:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__applicationactivitiesfordocumenturls_%29.md): Asks the delegate for additional activities when displaying an activity view.

### Deprecated methods

- [documentBrowser(\_:didPickDocumentURLs:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didpickdocumenturls_%29.md): Deprecated. Tells the delegate that the user has selected one or more documents.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.

### Responding to browser events

- [delegate](uidocumentbrowserviewcontroller/delegate.md): The document browser’s delegate.
- [importDocument(at:nextToDocumentAt:mode:completionHandler:)](uidocumentbrowserviewcontroller/importdocument%28at_nexttodocumentat_mode_completionhandler_%29.md): Imports a document into the same location as an existing document.

# UIDocumentBrowserViewControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The protocol you implement to respond as the user interacts with the document browser.

## Declaration

```objectivec
@protocol UIDocumentBrowserViewControllerDelegate <NSObject>
```

## Mentioned In

- [Customizing a document-based app’s launch experience](customizing-a-document-based-app-s-launch-experience.md)
- [Adding custom actions and activities](adding-custom-actions-and-activities.md)
- [Customizing the document browser](customizing-the-browser.md)

## Topics

### Creating new documents

- [documentBrowser:didRequestDocumentCreationWithHandler:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md): Asks the delegate to create a new document.
- [UIDocumentBrowserImportMode](uidocumentbrowserviewcontroller/importmode.md): The document browser’s import modes.
- [documentBrowser:didImportDocumentAtURL:toDestinationURL:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didimportdocumentat_todestinationurl_%29.md): Tells the delegate that a document has been successfully imported.
- [documentBrowser:failedToImportDocumentAtURL:error:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__failedtoimportdocumentat_error_%29.md): Tells the delegate that the document browser failed to import the specified document.

### Selecting documents

- [documentBrowser:didPickDocumentsAtURLs:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didpickdocumentsat_%29.md): Tells the delegate that the user has selected one or more documents.

### Working with the browser’s activity view

- [documentBrowser:willPresentActivityViewController:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__willpresent_%29.md): Tells the delegate that the document browser will display an activity view.
- [documentBrowser:applicationActivitiesForDocumentURLs:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__applicationactivitiesfordocumenturls_%29.md): Asks the delegate for additional activities when displaying an activity view.

### Deprecated methods

- [documentBrowser:didPickDocumentURLs:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didpickdocumenturls_%29.md): Deprecated. Tells the delegate that the user has selected one or more documents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [UIDocumentBrowserViewController](uidocumentbrowserviewcontroller.md): A view controller for browsing and performing actions on documents that you store locally and in the cloud.

### Responding to browser events

- [delegate](uidocumentbrowserviewcontroller/delegate.md): The document browser’s delegate.
- [importDocumentAtURL:nextToDocumentAtURL:mode:completionHandler:](uidocumentbrowserviewcontroller/importdocument%28at_nexttodocumentat_mode_completionhandler_%29.md): Imports a document into the same location as an existing document.
