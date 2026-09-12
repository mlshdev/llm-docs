> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/transitioncontroller(fordocumentat:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/transitioncontroller(fordocumentat:))

# transitionController(forDocumentAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

## Declaration

```swift
func transitionController(forDocumentAt documentURL: URL) -> UIDocumentBrowserTransitionController
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

> **Note**

>  In Mac apps built with Mac Catalyst, the transition controller doesn’t generate animations. macOS doesn’t use animations when opening or closing documents.

## See Also

### Animating transitions

- [UIDocumentBrowserTransitionController](../uidocumentbrowsertransitioncontroller.md): An object that implements the standard loading and transition animations for a document browser.

# transitionControllerForDocumentAtURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a transition controller that provides the standard system-loading and segue animations for the document browser.

## Declaration

```objectivec
- (UIDocumentBrowserTransitionController *) transitionControllerForDocumentAtURL:(NSURL *) documentURL;
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

> **Note**

>  In Mac apps built with Mac Catalyst, the transition controller doesn’t generate animations. macOS doesn’t use animations when opening or closing documents.

## See Also

### Animating transitions

- [UIDocumentBrowserTransitionController](../uidocumentbrowsertransitioncontroller.md): An object that implements the standard loading and transition animations for a document browser.
