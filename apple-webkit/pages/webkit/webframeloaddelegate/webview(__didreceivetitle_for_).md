> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:didreceivetitle:for:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:didreceivetitle:for:))

# webView(\_:didReceiveTitle:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when the page title of a frame loads or changes.

## Declaration

```swift
optional func webView(_ sender: WebView!, didReceiveTitle title: String!, for frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `title`: The newly loaded title.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method may be invoked multiple times before all resources for `frame` are completely loaded. Delegates can implement this message to display the page title to the user.

# webView:didReceiveTitle:forFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when the page title of a frame loads or changes.

## Declaration

```objectivec
- (void) webView:(WebView *) sender didReceiveTitle:(NSString *) title forFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `title`: The newly loaded title.
- `frame`: The frame being loaded.

<a id="Discussion"></a>

## Discussion

This method may be invoked multiple times before all resources for `frame` are completely loaded. Delegates can implement this message to display the page title to the user.
