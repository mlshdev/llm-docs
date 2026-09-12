> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/init(foropeningfileswithcontenttypes:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/init(foropeningfileswithcontenttypes:))

# init(forOpeningFilesWithContentTypes:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes and returns a document browser view controller that can open the specified file types.

> Use [init(forOpening:)](init%28foropening_%29.md) instead.

## Declaration

```swift
init(forOpeningFilesWithContentTypes allowedContentTypes: [String]?)
```

## Parameters

- `allowedContentTypes`: An array of uniform type identifiers (UTIs). The document browser can open only the document types that these UTIs specify.  If you pass `nil`, the browser uses the document types that the `CFBundleDocumentTypes` key specifies in the app’s `Info.plist` file.

  For detailed instructions about setting the `CFBundleDocumentTypes` key, see the [Set the supported document types](../setting-up-a-document-browser-app.md#Set-the-supported-document-types) section of [Setting up a document browser app](../setting-up-a-document-browser-app.md).

  For more information about UTIs, see [Uniform Type Identifiers](../../uniformtypeidentifiers.md).

<a id="return-value"></a>

## Return Value

Returns a newly initialized document browser view controller.

## Mentioned In

- [Customizing the document browser](../customizing-the-browser.md)

## See Also

### Deprecated symbols

- [recentDocumentsContentTypes](recentdocumentscontenttypes.md): Deprecated. Content types for browsing recent documents.
- [allowedContentTypes](allowedcontenttypes.md): Deprecated. The document types that the browser can open.
- [transitionController(forDocumentURL:)](transitioncontroller%28fordocumenturl_%29.md): Deprecated. Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

# initForOpeningFilesWithContentTypes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes and returns a document browser view controller that can open the specified file types.

> Use [initForOpeningContentTypes:](init%28foropening_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initForOpeningFilesWithContentTypes:(NSArray<NSString *> *) allowedContentTypes;
```

## Parameters

- `allowedContentTypes`: An array of uniform type identifiers (UTIs). The document browser can open only the document types that these UTIs specify.  If you pass `nil`, the browser uses the document types that the `CFBundleDocumentTypes` key specifies in the app’s `Info.plist` file.

  For detailed instructions about setting the `CFBundleDocumentTypes` key, see the [Set the supported document types](../setting-up-a-document-browser-app.md#Set-the-supported-document-types) section of [Setting up a document browser app](../setting-up-a-document-browser-app.md).

  For more information about UTIs, see [Uniform Type Identifiers](../../uniformtypeidentifiers.md).

<a id="return-value"></a>

## Return Value

Returns a newly initialized document browser view controller.

## Mentioned In

- [Customizing the document browser](../customizing-the-browser.md)

## See Also

### Deprecated symbols

- [recentDocumentsContentTypes](recentdocumentscontenttypes.md): Deprecated. Content types for browsing recent documents.
- [allowedContentTypes](allowedcontenttypes.md): Deprecated. The document types that the browser can open.
- [transitionControllerForDocumentURL:](transitioncontroller%28fordocumenturl_%29.md): Deprecated. Creates a transition controller that provides the standard system-loading and segue animations for the document browser.
