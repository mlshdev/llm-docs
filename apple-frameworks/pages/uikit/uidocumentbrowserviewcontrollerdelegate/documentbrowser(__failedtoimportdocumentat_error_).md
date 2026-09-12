> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:failedtoimportdocumentat:error:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:failedtoimportdocumentat:error:))

# documentBrowser(\_:failedToImportDocumentAt:error:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the document browser failed to import the specified document.

## Declaration

```swift
optional func documentBrowser(_ controller: UIDocumentBrowserViewController, failedToImportDocumentAt documentURL: URL, error: (any Error)?)
```

## Parameters

- `controller`: The document browser that attempted the import action.
- `documentURL`: The document’s original URL.
- `error`: An object describing the error, or `nil`.

## See Also

### Creating new documents

- [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md): Asks the delegate to create a new document.
- [UIDocumentBrowserViewController.ImportMode](../uidocumentbrowserviewcontroller/importmode.md): The document browser’s import modes.
- [documentBrowser(\_:didImportDocumentAt:toDestinationURL:)](documentbrowser%28__didimportdocumentat_todestinationurl_%29.md): Tells the delegate that a document has been successfully imported.

# documentBrowser:failedToImportDocumentAtURL:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the document browser failed to import the specified document.

## Declaration

```objectivec
- (void) documentBrowser:(UIDocumentBrowserViewController *) controller failedToImportDocumentAtURL:(NSURL *) documentURL error:(NSError *) error;
```

## Parameters

- `controller`: The document browser that attempted the import action.
- `documentURL`: The document’s original URL.
- `error`: An object describing the error, or `nil`.

## See Also

### Creating new documents

- [documentBrowser:didRequestDocumentCreationWithHandler:](documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md): Asks the delegate to create a new document.
- [UIDocumentBrowserImportMode](../uidocumentbrowserviewcontroller/importmode.md): The document browser’s import modes.
- [documentBrowser:didImportDocumentAtURL:toDestinationURL:](documentbrowser%28__didimportdocumentat_todestinationurl_%29.md): Tells the delegate that a document has been successfully imported.
