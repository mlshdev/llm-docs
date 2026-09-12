> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewaretoolbarsvisible(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewaretoolbarsvisible(_:))

# webViewAreToolbarsVisible(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.

## Declaration

```swift
optional func webViewAreToolbarsVisible(_ sender: WebView!) -> Bool
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a web view’s window has any toolbars that are currently visible (other than the status bar); otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Toolbars and the Status Bar

- [webView(\_:setToolbarsVisible:)](webview%28__settoolbarsvisible_%29.md): Deprecated. Sets whether a web view’s toolbars should be visible.
- [webViewIsStatusBarVisible(\_:)](webviewisstatusbarvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether the status bar in a web view’s window is visible.
- [webView(\_:setStatusBarVisible:)](webview%28__setstatusbarvisible_%29.md): Deprecated. Sets the visibility of the status bar in a web view’s window.

# webViewAreToolbarsVisible: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.

## Declaration

```objectivec
- (BOOL) webViewAreToolbarsVisible:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a web view’s window has any toolbars that are currently visible (other than the status bar); otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Toolbars and the Status Bar

- [webView:setToolbarsVisible:](webview%28__settoolbarsvisible_%29.md): Deprecated. Sets whether a web view’s toolbars should be visible.
- [webViewIsStatusBarVisible:](webviewisstatusbarvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether the status bar in a web view’s window is visible.
- [webView:setStatusBarVisible:](webview%28__setstatusbarvisible_%29.md): Deprecated. Sets the visibility of the status bar in a web view’s window.
