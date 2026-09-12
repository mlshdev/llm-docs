> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/importdocument(at:nexttodocumentat:mode:completionhandler:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/importdocument(at:nexttodocumentat:mode:completionhandler:))

# importDocument(at:nextToDocumentAt:mode:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Imports a document into the same location as an existing document.

## Declaration

```swift
func importDocument(at documentURL: URL, nextToDocumentAt neighbourURL: URL, mode importMode: UIDocumentBrowserViewController.ImportMode, completionHandler completion: @escaping (URL?, (any Error)?) -> Void)
```

```swift
func importDocument(at documentURL: URL, nextToDocumentAt neighbourURL: URL, mode importMode: UIDocumentBrowserViewController.ImportMode) async throws -> URL
```

## Parameters

- `documentURL`: The URL of the document’s initial location.
- `neighbourURL`: The URL of a document that’s already managed by a file provider (the local file provider, the iCloud file provider, or a third-party file provider). The system imports the document into the same file provider and directory as this URL.
- `importMode`: The mode used when importing the document. For a list of import modes, see [UIDocumentBrowserViewController.ImportMode](importmode.md).
- `completion`: - **importedDocumentURL**: The URL of the newly imported document, or `nil` if an error occurs.
  - **error**: An object that describes the error, if one occurred; otherwise, it’s set to `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to import a document into the same file provider and directory as an existing document.

For example, to duplicate a document that’s already managed by a file provider:

1. Create a duplicate of the original file in the user’s temporary directory. Be sure to give it a unique name.
2. Call [importDocument(at:nextToDocumentAt:mode:completionHandler:)](importdocument%28at_nexttodocumentat_mode_completionhandler_%29.md), passing in the temporary file’s URL as the `documentURL` parameter and the original file’s URL as the `neighbourURL` parameter.

The system imports the duplicate into the same file provider (the local file provider, the iCloud file provider, or a third-party file provider) and the same directory as the original file.

## See Also

### Responding to browser events

- [delegate](delegate.md): The document browser’s delegate.
- [UIDocumentBrowserViewControllerDelegate](../uidocumentbrowserviewcontrollerdelegate.md): The protocol you implement to respond as the user interacts with the document browser.

# importDocumentAtURL:nextToDocumentAtURL:mode:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Imports a document into the same location as an existing document.

## Declaration

```objectivec
- (void) importDocumentAtURL:(NSURL *) documentURL nextToDocumentAtURL:(NSURL *) neighbourURL mode:(UIDocumentBrowserImportMode) importMode completionHandler:(void (^)(NSURL *, NSError *)) completion;
```

## Parameters

- `documentURL`: The URL of the document’s initial location.
- `neighbourURL`: The URL of a document that’s already managed by a file provider (the local file provider, the iCloud file provider, or a third-party file provider). The system imports the document into the same file provider and directory as this URL.
- `importMode`: The mode used when importing the document. For a list of import modes, see [UIDocumentBrowserImportMode](importmode.md).
- `completion`: - **importedDocumentURL**: The URL of the newly imported document, or `nil` if an error occurs.
  - **error**: An object that describes the error, if one occurred; otherwise, it’s set to `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to import a document into the same file provider and directory as an existing document.

For example, to duplicate a document that’s already managed by a file provider:

1. Create a duplicate of the original file in the user’s temporary directory. Be sure to give it a unique name.
2. Call [importDocumentAtURL:nextToDocumentAtURL:mode:completionHandler:](importdocument%28at_nexttodocumentat_mode_completionhandler_%29.md), passing in the temporary file’s URL as the `documentURL` parameter and the original file’s URL as the `neighbourURL` parameter.

The system imports the duplicate into the same file provider (the local file provider, the iCloud file provider, or a third-party file provider) and the same directory as the original file.

## See Also

### Responding to browser events

- [delegate](delegate.md): The document browser’s delegate.
- [UIDocumentBrowserViewControllerDelegate](../uidocumentbrowserviewcontrollerdelegate.md): The protocol you implement to respond as the user interacts with the document browser.
