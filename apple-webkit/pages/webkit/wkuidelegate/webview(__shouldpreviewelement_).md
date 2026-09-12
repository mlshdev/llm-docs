> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:shouldpreviewelement:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:shouldpreviewelement:))

# webView(\_:shouldPreviewElement:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Determines whether the given element should show a preview.

## Declaration

```swift
optional func webView(_ webView: WKWebView, shouldPreviewElement elementInfo: WKPreviewElementInfo) -> Bool
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `elementInfo`: The information associated with the element.

<a id="return-value"></a>

## Return Value

Return `NO` to disable previews for the given element.

<a id="Discussion"></a>

## Discussion

This method is only invoked for elements that have a default preview in WebKit.

## See Also

### Responding to Force Touch actions

- [webView(\_:previewingViewControllerForElement:defaultActions:)](webview%28__previewingviewcontrollerforelement_defaultactions_%29.md): Deprecated. Called when the user performs a peek action.
- [webView(\_:commitPreviewingViewController:)](webview%28__commitpreviewingviewcontroller_%29.md): Deprecated. Called when the user performs a pop action on the preview.

# webView:shouldPreviewElement: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Determines whether the given element should show a preview.

## Declaration

```objectivec
- (BOOL) webView:(WKWebView *) webView shouldPreviewElement:(WKPreviewElementInfo *) elementInfo;
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `elementInfo`: The information associated with the element.

<a id="return-value"></a>

## Return Value

Return `NO` to disable previews for the given element.

<a id="Discussion"></a>

## Discussion

This method is only invoked for elements that have a default preview in WebKit.

## See Also

### Responding to Force Touch actions

- [webView:previewingViewControllerForElement:defaultActions:](webview%28__previewingviewcontrollerforelement_defaultactions_%29.md): Deprecated. Called when the user performs a peek action.
- [webView:commitPreviewingViewController:](webview%28__commitpreviewingviewcontroller_%29.md): Deprecated. Called when the user performs a pop action on the preview.
