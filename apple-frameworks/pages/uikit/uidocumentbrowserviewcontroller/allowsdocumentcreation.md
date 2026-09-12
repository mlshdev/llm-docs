> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/allowsdocumentcreation](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/allowsdocumentcreation)

# allowsDocumentCreation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the document browser can create new documents.

## Declaration

```swift
var allowsDocumentCreation: Bool { get set }
```

## Mentioned In

- [Customizing the document browser](../customizing-the-browser.md)

<a id="Discussion"></a>

## Discussion

The browser creates new documents when the user taps the Add (+) button in the navigation bar. The Add button is enabled only if both the [allowsDocumentCreation](allowsdocumentcreation.md) property is set to [true](https://developer.apple.com/documentation/swift/true), and the browser delegate implements the [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md) method.

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a document browser

- [allowsPickingMultipleItems](allowspickingmultipleitems.md): A Boolean value that determines whether the user can select and open more than one document at a time.
- [revealDocument(at:importIfNeeded:completion:)](revealdocument%28at_importifneeded_completion_%29.md): Reveals, and optionally imports, the document at the provided URL.
- [contentTypesForRecentDocuments](contenttypesforrecentdocuments.md): Content types for browsing recent documents.

# allowsDocumentCreation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the document browser can create new documents.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsDocumentCreation;
```

## Mentioned In

- [Customizing the document browser](../customizing-the-browser.md)

<a id="Discussion"></a>

## Discussion

The browser creates new documents when the user taps the Add (+) button in the navigation bar. The Add button is enabled only if both the [allowsDocumentCreation](allowsdocumentcreation.md) property is set to [true](https://developer.apple.com/documentation/swift/true), and the browser delegate implements the [documentBrowser:didRequestDocumentCreationWithHandler:](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md) method.

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a document browser

- [allowsPickingMultipleItems](allowspickingmultipleitems.md): A Boolean value that determines whether the user can select and open more than one document at a time.
- [revealDocumentAtURL:importIfNeeded:completion:](revealdocument%28at_importifneeded_completion_%29.md): Reveals, and optionally imports, the document at the provided URL.
- [contentTypesForRecentDocuments](contenttypesforrecentdocuments.md): Content types for browsing recent documents.
