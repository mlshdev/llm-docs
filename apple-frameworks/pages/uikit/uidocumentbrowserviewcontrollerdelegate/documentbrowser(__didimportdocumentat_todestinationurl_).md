> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:didimportdocumentat:todestinationurl:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:didimportdocumentat:todestinationurl:))

# documentBrowser(\_:didImportDocumentAt:toDestinationURL:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that a document has been successfully imported.

## Declaration

```swift
optional func documentBrowser(_ controller: UIDocumentBrowserViewController, didImportDocumentAt sourceURL: URL, toDestinationURL destinationURL: URL)
```

## Parameters

- `controller`: The document browser that performed the import action.
- `sourceURL`: The document’s original URL.
- `destinationURL`: The document’s URL after the import.

## Mentioned In

- [Enabling document sharing](../enabling-document-sharing.md)

<a id="Discussion"></a>

## Discussion

To open the document as soon as it’s imported:

1. Open a new [UIDocument](../uidocument.md) subclass for the document (or use a file presenter and file coordination to access the document).
2. Create a view controller to display the document.
3. Present that view controller modally.

## See Also

### Creating new documents

- [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md): Asks the delegate to create a new document.
- [UIDocumentBrowserViewController.ImportMode](../uidocumentbrowserviewcontroller/importmode.md): The document browser’s import modes.
- [documentBrowser(\_:failedToImportDocumentAt:error:)](documentbrowser%28__failedtoimportdocumentat_error_%29.md): Tells the delegate that the document browser failed to import the specified document.

# documentBrowser:didImportDocumentAtURL:toDestinationURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that a document has been successfully imported.

## Declaration

```objectivec
- (void) documentBrowser:(UIDocumentBrowserViewController *) controller didImportDocumentAtURL:(NSURL *) sourceURL toDestinationURL:(NSURL *) destinationURL;
```

## Parameters

- `controller`: The document browser that performed the import action.
- `sourceURL`: The document’s original URL.
- `destinationURL`: The document’s URL after the import.

## Mentioned In

- [Enabling document sharing](../enabling-document-sharing.md)

<a id="Discussion"></a>

## Discussion

To open the document as soon as it’s imported:

1. Open a new [UIDocument](../uidocument.md) subclass for the document (or use a file presenter and file coordination to access the document).
2. Create a view controller to display the document.
3. Present that view controller modally.

## See Also

### Creating new documents

- [documentBrowser:didRequestDocumentCreationWithHandler:](documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md): Asks the delegate to create a new document.
- [UIDocumentBrowserImportMode](../uidocumentbrowserviewcontroller/importmode.md): The document browser’s import modes.
- [documentBrowser:failedToImportDocumentAtURL:error:](documentbrowser%28__failedtoimportdocumentat_error_%29.md): Tells the delegate that the document browser failed to import the specified document.
