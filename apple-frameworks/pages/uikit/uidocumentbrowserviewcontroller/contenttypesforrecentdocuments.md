> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/contenttypesforrecentdocuments](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/contenttypesforrecentdocuments)

# contentTypesForRecentDocuments (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Content types for browsing recent documents.

## Declaration

```swift
var contentTypesForRecentDocuments: [UTType] { get }
```

<a id="Discussion"></a>

## Discussion

The default list is the same as the list of content types you provide to the initializer, or the types you define in [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) in the app’s `Info.plist` file.

You can define a subset of these types using the `UIDocumentBrowserRecentDocumentContentTypes` key in the app’s `Info.plist` file.

## See Also

### Configuring a document browser

- [allowsDocumentCreation](allowsdocumentcreation.md): A Boolean value that determines whether the document browser can create new documents.
- [allowsPickingMultipleItems](allowspickingmultipleitems.md): A Boolean value that determines whether the user can select and open more than one document at a time.
- [revealDocument(at:importIfNeeded:completion:)](revealdocument%28at_importifneeded_completion_%29.md): Reveals, and optionally imports, the document at the provided URL.

# contentTypesForRecentDocuments (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Content types for browsing recent documents.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UTType *> * contentTypesForRecentDocuments;
```

<a id="Discussion"></a>

## Discussion

The default list is the same as the list of content types you provide to the initializer, or the types you define in [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) in the app’s `Info.plist` file.

You can define a subset of these types using the `UIDocumentBrowserRecentDocumentContentTypes` key in the app’s `Info.plist` file.

## See Also

### Configuring a document browser

- [allowsDocumentCreation](allowsdocumentcreation.md): A Boolean value that determines whether the document browser can create new documents.
- [allowsPickingMultipleItems](allowspickingmultipleitems.md): A Boolean value that determines whether the user can select and open more than one document at a time.
- [revealDocumentAtURL:importIfNeeded:completion:](revealdocument%28at_importifneeded_completion_%29.md): Reveals, and optionally imports, the document at the provided URL.
