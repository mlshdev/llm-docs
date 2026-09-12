> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/importmode](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/importmode)

# UIDocumentBrowserViewController.ImportMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The document browser’s import modes.

## Declaration

```swift
enum ImportMode
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md)

## Topics

### Constants

- [UIDocumentBrowserViewController.ImportMode.copy](importmode/copy.md): A mode indicating that the file should be copied into its new location (the original file is left unchanged).
- [UIDocumentBrowserViewController.ImportMode.move](importmode/move.md): A mode indicating that the file should be moved to its new location (the original file should be deleted).
- [UIDocumentBrowserViewController.ImportMode.none](importmode/none.md): A mode indicating that the document can’t be imported.

### Initializers

- [init(rawValue:)](importmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating new documents

- [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md): Asks the delegate to create a new document.
- [documentBrowser(\_:didImportDocumentAt:toDestinationURL:)](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didimportdocumentat_todestinationurl_%29.md): Tells the delegate that a document has been successfully imported.
- [documentBrowser(\_:failedToImportDocumentAt:error:)](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__failedtoimportdocumentat_error_%29.md): Tells the delegate that the document browser failed to import the specified document.

# UIDocumentBrowserImportMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The document browser’s import modes.

## Declaration

```objectivec
enum UIDocumentBrowserImportMode : NSUInteger;
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md)

## Topics

### Constants

- [UIDocumentBrowserImportModeCopy](importmode/copy.md): A mode indicating that the file should be copied into its new location (the original file is left unchanged).
- [UIDocumentBrowserImportModeMove](importmode/move.md): A mode indicating that the file should be moved to its new location (the original file should be deleted).
- [UIDocumentBrowserImportModeNone](importmode/none.md): A mode indicating that the document can’t be imported.

## See Also

### Creating new documents

- [documentBrowser:didRequestDocumentCreationWithHandler:](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md): Asks the delegate to create a new document.
- [documentBrowser:didImportDocumentAtURL:toDestinationURL:](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didimportdocumentat_todestinationurl_%29.md): Tells the delegate that a document has been successfully imported.
- [documentBrowser:failedToImportDocumentAtURL:error:](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__failedtoimportdocumentat_error_%29.md): Tells the delegate that the document browser failed to import the specified document.
