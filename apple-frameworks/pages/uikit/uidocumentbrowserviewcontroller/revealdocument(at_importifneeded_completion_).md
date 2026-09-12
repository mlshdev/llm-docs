> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/revealdocument(at:importifneeded:completion:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/revealdocument(at:importifneeded:completion:))

# revealDocument(at:importIfNeeded:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reveals, and optionally imports, the document at the provided URL.

## Declaration

```swift
func revealDocument(at url: URL, importIfNeeded: Bool, completion: ((URL?, (any Error)?) -> Void)? = nil)
```

```swift
func revealDocument(at url: URL, importIfNeeded: Bool) async throws -> URL
```

## Parameters

- `url`: The URL of the document to reveal.
- `importIfNeeded`: A Boolean value that determines whether the document browser should import the document.
- `completion`: A completion block with the following parameters:

  - **url**: The new URL of an imported document. Set to `nil` if `shouldImport` is [false](https://developer.apple.com/documentation/swift/false), or if an error occurs.
  - **error**: If an error occurs, this parameter contains the error information; otherwise, set to `nil`.

## Mentioned In

- [Enabling document sharing](../enabling-document-sharing.md)

<a id="Discussion"></a>

## Discussion

Call this method to display a document in the document browser.

If `importIfNeeded` is [true](https://developer.apple.com/documentation/swift/true), the document browser calls its delegate’s [documentBrowser(\_:didImportDocumentAt:toDestinationURL:)](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didimportdocumentat_todestinationurl_%29.md) method (or its [documentBrowser(\_:failedToImportDocumentAt:error:)](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__failedtoimportdocumentat_error_%29.md) method, if an error occurred) before calling the completion handler.

## See Also

### Configuring a document browser

- [allowsDocumentCreation](allowsdocumentcreation.md): A Boolean value that determines whether the document browser can create new documents.
- [allowsPickingMultipleItems](allowspickingmultipleitems.md): A Boolean value that determines whether the user can select and open more than one document at a time.
- [contentTypesForRecentDocuments](contenttypesforrecentdocuments.md): Content types for browsing recent documents.

# revealDocumentAtURL:importIfNeeded:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reveals, and optionally imports, the document at the provided URL.

## Declaration

```objectivec
- (void) revealDocumentAtURL:(NSURL *) url importIfNeeded:(BOOL) importIfNeeded completion:(void (^)(NSURL *revealedDocumentURL, NSError *error)) completion;
```

## Parameters

- `url`: The URL of the document to reveal.
- `importIfNeeded`: A Boolean value that determines whether the document browser should import the document.
- `completion`: A completion block with the following parameters:

  - **url**: The new URL of an imported document. Set to `nil` if `shouldImport` is [false](https://developer.apple.com/documentation/swift/false), or if an error occurs.
  - **error**: If an error occurs, this parameter contains the error information; otherwise, set to `nil`.

## Mentioned In

- [Enabling document sharing](../enabling-document-sharing.md)

<a id="Discussion"></a>

## Discussion

Call this method to display a document in the document browser.

If `importIfNeeded` is [true](https://developer.apple.com/documentation/swift/true), the document browser calls its delegate’s [documentBrowser:didImportDocumentAtURL:toDestinationURL:](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didimportdocumentat_todestinationurl_%29.md) method (or its [documentBrowser:failedToImportDocumentAtURL:error:](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__failedtoimportdocumentat_error_%29.md) method, if an error occurred) before calling the completion handler.

## See Also

### Configuring a document browser

- [allowsDocumentCreation](allowsdocumentcreation.md): A Boolean value that determines whether the document browser can create new documents.
- [allowsPickingMultipleItems](allowspickingmultipleitems.md): A Boolean value that determines whether the user can select and open more than one document at a time.
- [contentTypesForRecentDocuments](contenttypesforrecentdocuments.md): Content types for browsing recent documents.
