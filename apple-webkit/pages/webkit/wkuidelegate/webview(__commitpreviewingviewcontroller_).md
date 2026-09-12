> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:commitpreviewingviewcontroller:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:commitpreviewingviewcontroller:))

# webView(\_:commitPreviewingViewController:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Called when the user performs a pop action on the preview.

## Declaration

```swift
optional func webView(_ webView: WKWebView, commitPreviewingViewController previewingViewController: UIViewController)
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `previewingViewController`: The view controller that is popped.

<a id="Discussion"></a>

## Discussion

You must display the previewed view controller inside of your app.

## See Also

### Responding to Force Touch actions

- [webView(\_:shouldPreviewElement:)](webview%28__shouldpreviewelement_%29.md): Deprecated. Determines whether the given element should show a preview.
- [webView(\_:previewingViewControllerForElement:defaultActions:)](webview%28__previewingviewcontrollerforelement_defaultactions_%29.md): Deprecated. Called when the user performs a peek action.

# webView:commitPreviewingViewController: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Called when the user performs a pop action on the preview.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView commitPreviewingViewController:(UIViewController *) previewingViewController;
```

## Parameters

- `webView`: The web view invoking the delegate method.
- `previewingViewController`: The view controller that is popped.

<a id="Discussion"></a>

## Discussion

You must display the previewed view controller inside of your app.

## See Also

### Responding to Force Touch actions

- [webView:shouldPreviewElement:](webview%28__shouldpreviewelement_%29.md): Deprecated. Determines whether the given element should show a preview.
- [webView:previewingViewControllerForElement:defaultActions:](webview%28__previewingviewcontrollerforelement_defaultactions_%29.md): Deprecated. Called when the user performs a peek action.
