> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:setstatusbarvisible:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:setstatusbarvisible:))

# webView(\_:setStatusBarVisible:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the visibility of the status bar in a web view’s window.

## Declaration

```swift
optional func webView(_ sender: WebView!, setStatusBarVisible visible: Bool)
```

## Parameters

- `sender`: The web view that sent the message.
- `visible`: If [true](https://developer.apple.com/documentation/swift/true), the delegate should display the status bar (if any); if [false](https://developer.apple.com/documentation/swift/false), the delegate should hide the status bar.

<a id="Discussion"></a>

## Discussion

No action is taken if you do not implement this method.

## See Also

### Managing Toolbars and the Status Bar

- [webViewAreToolbarsVisible(\_:)](webviewaretoolbarsvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.
- [webView(\_:setToolbarsVisible:)](webview%28__settoolbarsvisible_%29.md): Deprecated. Sets whether a web view’s toolbars should be visible.
- [webViewIsStatusBarVisible(\_:)](webviewisstatusbarvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether the status bar in a web view’s window is visible.

# webView:setStatusBarVisible: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the visibility of the status bar in a web view’s window.

## Declaration

```objectivec
- (void) webView:(WebView *) sender setStatusBarVisible:(BOOL) visible;
```

## Parameters

- `sender`: The web view that sent the message.
- `visible`: If [true](https://developer.apple.com/documentation/swift/true), the delegate should display the status bar (if any); if [false](https://developer.apple.com/documentation/swift/false), the delegate should hide the status bar.

<a id="Discussion"></a>

## Discussion

No action is taken if you do not implement this method.

## See Also

### Managing Toolbars and the Status Bar

- [webViewAreToolbarsVisible:](webviewaretoolbarsvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.
- [webView:setToolbarsVisible:](webview%28__settoolbarsvisible_%29.md): Deprecated. Sets whether a web view’s toolbars should be visible.
- [webViewIsStatusBarVisible:](webviewisstatusbarvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether the status bar in a web view’s window is visible.
