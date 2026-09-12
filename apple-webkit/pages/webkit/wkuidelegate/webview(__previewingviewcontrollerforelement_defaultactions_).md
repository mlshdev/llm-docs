> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:previewingviewcontrollerforelement:defaultactions:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:previewingviewcontrollerforelement:defaultactions:))

# webView(\_:previewingViewControllerForElement:defaultActions:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Called when the user performs a peek action.

## Declaration

```swift
optional func webView(_ webView: WKWebView, previewingViewControllerForElement elementInfo: WKPreviewElementInfo, defaultActions previewActions: [any WKPreviewActionItem]) -> UIViewController?
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `elementInfo`: The information associated with the element.
- `previewActions`: An array of default actions used by the element.

<a id="return-value"></a>

## Return Value

Return `nil` to use Webkit’s default preview behavior. Returning a view controller allows [webView(\_:commitPreviewingViewController:)](webview%28__commitpreviewingviewcontroller_%29.md) to be invoked when the user performs a pop action.

<a id="Discussion"></a>

## Discussion

To use the default actions, your app must return the actions to be run in your view controller’s implementation of [previewActionItems](https://developer.apple.com/documentation/uikit/uiviewcontroller/previewactionitems).

## See Also

### Responding to Force Touch actions

- [webView(\_:shouldPreviewElement:)](webview%28__shouldpreviewelement_%29.md): Deprecated. Determines whether the given element should show a preview.
- [webView(\_:commitPreviewingViewController:)](webview%28__commitpreviewingviewcontroller_%29.md): Deprecated. Called when the user performs a pop action on the preview.

# webView:previewingViewControllerForElement:defaultActions: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Called when the user performs a peek action.

## Declaration

```objectivec
- (UIViewController *) webView:(WKWebView *) webView previewingViewControllerForElement:(WKPreviewElementInfo *) elementInfo defaultActions:(NSArray<id<WKPreviewActionItem>> *) previewActions;
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `elementInfo`: The information associated with the element.
- `previewActions`: An array of default actions used by the element.

<a id="return-value"></a>

## Return Value

Return `nil` to use Webkit’s default preview behavior. Returning a view controller allows [webView:commitPreviewingViewController:](webview%28__commitpreviewingviewcontroller_%29.md) to be invoked when the user performs a pop action.

<a id="Discussion"></a>

## Discussion

To use the default actions, your app must return the actions to be run in your view controller’s implementation of [previewActionItems](https://developer.apple.com/documentation/uikit/uiviewcontroller/previewactionitems).

## See Also

### Responding to Force Touch actions

- [webView:shouldPreviewElement:](webview%28__shouldpreviewelement_%29.md): Deprecated. Determines whether the given element should show a preview.
- [webView:commitPreviewingViewController:](webview%28__commitpreviewingviewcontroller_%29.md): Deprecated. Called when the user performs a pop action on the preview.
