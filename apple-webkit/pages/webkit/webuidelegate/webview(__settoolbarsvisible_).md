> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:settoolbarsvisible:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:settoolbarsvisible:))

# webView(\_:setToolbarsVisible:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets whether a web view’s toolbars should be visible.

## Declaration

```swift
optional func webView(_ sender: WebView!, setToolbarsVisible visible: Bool)
```

## Parameters

- `sender`: The web view that sent the message.
- `visible`: If [true](https://developer.apple.com/documentation/swift/true), all toolbars (with the exception of the status bar) are shown; otherwise, all toolbars (with the exception of the status bar) are removed.

<a id="Discussion"></a>

## Discussion

No action is taken if you do not implement this method.

## See Also

### Managing Toolbars and the Status Bar

- [webViewAreToolbarsVisible(\_:)](webviewaretoolbarsvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.
- [webViewIsStatusBarVisible(\_:)](webviewisstatusbarvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether the status bar in a web view’s window is visible.
- [webView(\_:setStatusBarVisible:)](webview%28__setstatusbarvisible_%29.md): Deprecated. Sets the visibility of the status bar in a web view’s window.

# webView:setToolbarsVisible: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets whether a web view’s toolbars should be visible.

## Declaration

```objectivec
- (void) webView:(WebView *) sender setToolbarsVisible:(BOOL) visible;
```

## Parameters

- `sender`: The web view that sent the message.
- `visible`: If [true](https://developer.apple.com/documentation/swift/true), all toolbars (with the exception of the status bar) are shown; otherwise, all toolbars (with the exception of the status bar) are removed.

<a id="Discussion"></a>

## Discussion

No action is taken if you do not implement this method.

## See Also

### Managing Toolbars and the Status Bar

- [webViewAreToolbarsVisible:](webviewaretoolbarsvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.
- [webViewIsStatusBarVisible:](webviewisstatusbarvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether the status bar in a web view’s window is visible.
- [webView:setStatusBarVisible:](webview%28__setstatusbarvisible_%29.md): Deprecated. Sets the visibility of the status bar in a web view’s window.
