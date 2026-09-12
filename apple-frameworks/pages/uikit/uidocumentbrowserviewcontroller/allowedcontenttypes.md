> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/allowedcontenttypes](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/allowedcontenttypes)

# allowedContentTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The document types that the browser can open.

> Use [init(forOpening:)](init%28foropening_%29.md) instead.

## Declaration

```swift
var allowedContentTypes: [String] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of uniform type identifiers (UTIs). The document browser can open only documents of the types specified by these UTIs.

The list of UTIs is set when the document browser is first created. This list cannot be changed.If you programmatically create a document browser, this list is set to the value passed to the [init(forOpeningFilesWithContentTypes:)](init%28foropeningfileswithcontenttypes_%29.md) method’s `allowedContentTypes` parameter.

If you add a document browser to your project using a storyboard or Interface Builder, this property is calculated based on the the `CFBundleDocumentTypes` key in your app’s `Info.plist` file. For details, see [Set the supported document types](../setting-up-a-document-browser-app.md#Set-the-supported-document-types).

For more about UTIs, see [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257).

## See Also

### Deprecated symbols

- [init(forOpeningFilesWithContentTypes:)](init%28foropeningfileswithcontenttypes_%29.md): Deprecated. Initializes and returns a document browser view controller that can open the specified file types.
- [recentDocumentsContentTypes](recentdocumentscontenttypes.md): Deprecated. Content types for browsing recent documents.
- [transitionController(forDocumentURL:)](transitioncontroller%28fordocumenturl_%29.md): Deprecated. Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

# allowedContentTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The document types that the browser can open.

> Use [initForOpeningContentTypes:](init%28foropening_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * allowedContentTypes;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of uniform type identifiers (UTIs). The document browser can open only documents of the types specified by these UTIs.

The list of UTIs is set when the document browser is first created. This list cannot be changed.If you programmatically create a document browser, this list is set to the value passed to the [initForOpeningFilesWithContentTypes:](init%28foropeningfileswithcontenttypes_%29.md) method’s `allowedContentTypes` parameter.

If you add a document browser to your project using a storyboard or Interface Builder, this property is calculated based on the the `CFBundleDocumentTypes` key in your app’s `Info.plist` file. For details, see [Set the supported document types](../setting-up-a-document-browser-app.md#Set-the-supported-document-types).

For more about UTIs, see [Uniform Type Identifiers Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009257).

## See Also

### Deprecated symbols

- [initForOpeningFilesWithContentTypes:](init%28foropeningfileswithcontenttypes_%29.md): Deprecated. Initializes and returns a document browser view controller that can open the specified file types.
- [recentDocumentsContentTypes](recentdocumentscontenttypes.md): Deprecated. Content types for browsing recent documents.
- [transitionControllerForDocumentURL:](transitioncontroller%28fordocumenturl_%29.md): Deprecated. Creates a transition controller that provides the standard system-loading and segue animations for the document browser.
