> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:shouldperformaction:fromsender:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:shouldperformaction:fromsender:))

# webView(\_:shouldPerformAction:fromSender:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value that indicates whether the action sent by the specified object should be performed.

## Declaration

```swift
optional func webView(_ webView: WebView!, shouldPerformAction action: Selector!, fromSender sender: Any!) -> Bool
```

## Parameters

- `webView`: The web view that sent the message.
- `action`: The action to perform. See [WebView](../webview-swift.class.md) for information on actions a web view can perform.
- `sender`: The object that sent the action.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action should be performed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method allows the delegate to control the web view’s behavior when action methods are invoked. For example, if the action is `copy:`, the delegate can return [false](https://developer.apple.com/documentation/swift/false) to perform a copy in some other way than the default.

## See Also

### Controlling Other Behaviors

- [webView(\_:validate:defaultValidation:)](webview%28__validate_defaultvalidation_%29.md): Deprecated. Returns a Boolean value that indicates whether the specified user interface item is valid.

# webView:shouldPerformAction:fromSender: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value that indicates whether the action sent by the specified object should be performed.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView shouldPerformAction:(SEL) action fromSender:(id) sender;
```

## Parameters

- `webView`: The web view that sent the message.
- `action`: The action to perform. See [WebView](../webview-swift.class.md) for information on actions a web view can perform.
- `sender`: The object that sent the action.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action should be performed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method allows the delegate to control the web view’s behavior when action methods are invoked. For example, if the action is `copy:`, the delegate can return [false](https://developer.apple.com/documentation/swift/false) to perform a copy in some other way than the default.

## See Also

### Controlling Other Behaviors

- [webView:validateUserInterfaceItem:defaultValidation:](webview%28__validate_defaultvalidation_%29.md): Deprecated. Returns a Boolean value that indicates whether the specified user interface item is valid.
