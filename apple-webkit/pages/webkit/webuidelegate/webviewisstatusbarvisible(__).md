> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webviewisstatusbarvisible(_:)](https://developer.apple.com/documentation/webkit/webuidelegate/webviewisstatusbarvisible(_:))

# webViewIsStatusBarVisible(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value indicating whether the status bar in a web view’s window is visible.

## Declaration

```swift
optional func webViewIsStatusBarVisible(_ sender: WebView!) -> Bool
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a web view’s status bar (if any) is visible; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you do not implement this method, it returns [false](https://developer.apple.com/documentation/swift/false) by default.

## See Also

### Managing Toolbars and the Status Bar

- [webViewAreToolbarsVisible(\_:)](webviewaretoolbarsvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.
- [webView(\_:setToolbarsVisible:)](webview%28__settoolbarsvisible_%29.md): Deprecated. Sets whether a web view’s toolbars should be visible.
- [webView(\_:setStatusBarVisible:)](webview%28__setstatusbarvisible_%29.md): Deprecated. Sets the visibility of the status bar in a web view’s window.

# webViewIsStatusBarVisible: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value indicating whether the status bar in a web view’s window is visible.

## Declaration

```objectivec
- (BOOL) webViewIsStatusBarVisible:(WebView *) sender;
```

## Parameters

- `sender`: The web view that sent the message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a web view’s status bar (if any) is visible; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you do not implement this method, it returns [false](https://developer.apple.com/documentation/swift/false) by default.

## See Also

### Managing Toolbars and the Status Bar

- [webViewAreToolbarsVisible:](webviewaretoolbarsvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.
- [webView:setToolbarsVisible:](webview%28__settoolbarsvisible_%29.md): Deprecated. Sets whether a web view’s toolbars should be visible.
- [webView:setStatusBarVisible:](webview%28__setstatusbarvisible_%29.md): Deprecated. Sets the visibility of the status bar in a web view’s window.
