> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/transitioncontroller(fordocumenturl:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/transitioncontroller(fordocumenturl:))

# transitionController(forDocumentURL:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

> Use [transitionController(forDocumentAt:)](transitioncontroller%28fordocumentat_%29.md) instead.

## Declaration

```swift
func transitionController(forDocumentURL documentURL: URL) -> UIDocumentBrowserTransitionController
```

## Parameters

- `documentURL`: The URL of a document. Only use URLs provided by the document browser (for example, URLs passed to the delegate’s [documentBrowser(\_:didRequestDocumentCreationWithHandler:)](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md)method’s completion block).

<a id="return-value"></a>

## Return Value

Returns a newly instantiated transition controller. Its [loadingProgress](../uidocumentbrowsertransitioncontroller/loadingprogress.md) and [targetView](../uidocumentbrowsertransitioncontroller/targetview.md) properties are both set to `nil`.

<a id="Discussion"></a>

## Discussion

For the animations to function properly, you must maintain a strong reference to the transition controller until all the animation sequences are complete.

For more about using the transition controller, see [UIDocumentBrowserTransitionController](../uidocumentbrowsertransitioncontroller.md).

## See Also

### Deprecated symbols

- [init(forOpeningFilesWithContentTypes:)](init%28foropeningfileswithcontenttypes_%29.md): Deprecated. Initializes and returns a document browser view controller that can open the specified file types.
- [recentDocumentsContentTypes](recentdocumentscontenttypes.md): Deprecated. Content types for browsing recent documents.
- [allowedContentTypes](allowedcontenttypes.md): Deprecated. The document types that the browser can open.

# transitionControllerForDocumentURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

> Use [transitionControllerForDocumentAtURL:](transitioncontroller%28fordocumentat_%29.md) instead.

## Declaration

```objectivec
- (UIDocumentBrowserTransitionController *) transitionControllerForDocumentURL:(NSURL *) documentURL;
```

## Parameters

- `documentURL`: The URL of a document. Only use URLs provided by the document browser (for example, URLs passed to the delegate’s [documentBrowser:didRequestDocumentCreationWithHandler:](../uidocumentbrowserviewcontrollerdelegate/documentbrowser%28__didrequestdocumentcreationwithhandler_%29.md)method’s completion block).

<a id="return-value"></a>

## Return Value

Returns a newly instantiated transition controller. Its [loadingProgress](../uidocumentbrowsertransitioncontroller/loadingprogress.md) and [targetView](../uidocumentbrowsertransitioncontroller/targetview.md) properties are both set to `nil`.

<a id="Discussion"></a>

## Discussion

For the animations to function properly, you must maintain a strong reference to the transition controller until all the animation sequences are complete.

For more about using the transition controller, see [UIDocumentBrowserTransitionController](../uidocumentbrowsertransitioncontroller.md).

## See Also

### Deprecated symbols

- [initForOpeningFilesWithContentTypes:](init%28foropeningfileswithcontenttypes_%29.md): Deprecated. Initializes and returns a document browser view controller that can open the specified file types.
- [recentDocumentsContentTypes](recentdocumentscontenttypes.md): Deprecated. Content types for browsing recent documents.
- [allowedContentTypes](allowedcontenttypes.md): Deprecated. The document types that the browser can open.
