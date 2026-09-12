> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/allowspickingmultipleitems](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/allowspickingmultipleitems)

# allowsPickingMultipleItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the user can select and open more than one document at a time.

## Declaration

```swift
var allowsPickingMultipleItems: Bool { get set }
```

## Mentioned In

- [Customizing the document browser](../customizing-the-browser.md)

<a id="Discussion"></a>

## Discussion

By default, this property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring a document browser

- [allowsDocumentCreation](allowsdocumentcreation.md): A Boolean value that determines whether the document browser can create new documents.
- [revealDocument(at:importIfNeeded:completion:)](revealdocument%28at_importifneeded_completion_%29.md): Reveals, and optionally imports, the document at the provided URL.
- [contentTypesForRecentDocuments](contenttypesforrecentdocuments.md): Content types for browsing recent documents.

# allowsPickingMultipleItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the user can select and open more than one document at a time.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsPickingMultipleItems;
```

## Mentioned In

- [Customizing the document browser](../customizing-the-browser.md)

<a id="Discussion"></a>

## Discussion

By default, this property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring a document browser

- [allowsDocumentCreation](allowsdocumentcreation.md): A Boolean value that determines whether the document browser can create new documents.
- [revealDocumentAtURL:importIfNeeded:completion:](revealdocument%28at_importifneeded_completion_%29.md): Reveals, and optionally imports, the document at the provided URL.
- [contentTypesForRecentDocuments](contenttypesforrecentdocuments.md): Content types for browsing recent documents.
