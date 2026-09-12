> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/presenting-selected-documents](https://developer.apple.com/documentation/uikit/presenting-selected-documents)

# Presenting selected documents (Swift)

**Framework:** UIKit  
**Kind:** Article

Display user-selected documents over your browser view controller.

<a id="overview"></a>

## Overview

When the user selects one or more documents in the browser view controller, the system calls your delegate’s [documentBrowser(\_:didPickDocumentURLs:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didpickdocumenturls_%29.md) method.

<a id="Display-documents-with-document-view-controllers"></a>

### Display documents with document view controllers

In your implementation of the [documentBrowser(\_:didPickDocumentURLs:)](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didpickdocumenturls_%29.md) method, modally present a view controller to display the selected documents by calling the browser’s [present(\_:animated:completion:)](uiviewcontroller/present%28__animated_completion_%29.md) method.

The document view should fill the entire screen, but it can have its own split view controller, navigation controller, or tab controller, as appropriate. It remains onscreen as long as the user is interacting with the documents. To return to the browser, dismiss the document view controller.

## See Also

### Configuration

- [Setting up a document browser app](setting-up-a-document-browser-app.md): Add a document browser view controller to your app.
- [Enabling document sharing](enabling-document-sharing.md): Give users the ability to import and export documents from your app.

# Presenting selected documents (Objective-C)

**Framework:** UIKit  
**Kind:** Article

Display user-selected documents over your browser view controller.

<a id="overview"></a>

## Overview

When the user selects one or more documents in the browser view controller, the system calls your delegate’s [documentBrowser:didPickDocumentURLs:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didpickdocumenturls_%29.md) method.

<a id="Display-documents-with-document-view-controllers"></a>

### Display documents with document view controllers

In your implementation of the [documentBrowser:didPickDocumentURLs:](uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didpickdocumenturls_%29.md) method, modally present a view controller to display the selected documents by calling the browser’s [presentViewController:animated:completion:](uiviewcontroller/present%28__animated_completion_%29.md) method.

The document view should fill the entire screen, but it can have its own split view controller, navigation controller, or tab controller, as appropriate. It remains onscreen as long as the user is interacting with the documents. To return to the browser, dismiss the document view controller.

## See Also

### Configuration

- [Setting up a document browser app](setting-up-a-document-browser-app.md): Add a document browser view controller to your app.
- [Enabling document sharing](enabling-document-sharing.md): Give users the ability to import and export documents from your app.
