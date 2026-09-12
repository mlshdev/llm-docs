> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/recentdocumentscontenttypes](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/recentdocumentscontenttypes)

# recentDocumentsContentTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Content types for browsing recent documents.

> Use [contentTypesForRecentDocuments](contenttypesforrecentdocuments.md) instead.

## Declaration

```swift
var recentDocumentsContentTypes: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The default list is the same as the list of content types provided to the initializer, or the types defined in [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) in the app’s `Info.plist` file.

You can define a subset of these types using the key `UIDocumentBrowserRecentDocumentContentTypes` in the app’s `Info.plist` file.

## See Also

### Deprecated symbols

- [init(forOpeningFilesWithContentTypes:)](init%28foropeningfileswithcontenttypes_%29.md): Deprecated. Initializes and returns a document browser view controller that can open the specified file types.
- [allowedContentTypes](allowedcontenttypes.md): Deprecated. The document types that the browser can open.
- [transitionController(forDocumentURL:)](transitioncontroller%28fordocumenturl_%29.md): Deprecated. Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

# recentDocumentsContentTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Content types for browsing recent documents.

> Use [contentTypesForRecentDocuments](contenttypesforrecentdocuments.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * recentDocumentsContentTypes;
```

<a id="Discussion"></a>

## Discussion

The default list is the same as the list of content types provided to the initializer, or the types defined in [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) in the app’s `Info.plist` file.

You can define a subset of these types using the key `UIDocumentBrowserRecentDocumentContentTypes` in the app’s `Info.plist` file.

## See Also

### Deprecated symbols

- [initForOpeningFilesWithContentTypes:](init%28foropeningfileswithcontenttypes_%29.md): Deprecated. Initializes and returns a document browser view controller that can open the specified file types.
- [allowedContentTypes](allowedcontenttypes.md): Deprecated. The document types that the browser can open.
- [transitionControllerForDocumentURL:](transitioncontroller%28fordocumenturl_%29.md): Deprecated. Creates a transition controller that provides the standard system-loading and segue animations for the document browser.
