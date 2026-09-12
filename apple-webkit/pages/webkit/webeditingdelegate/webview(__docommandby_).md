> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate/webview(_:docommandby:)](https://developer.apple.com/documentation/webkit/webeditingdelegate/webview(_:docommandby:))

# webView(\_:doCommandBy:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the receiver performs a command instead of the web view.

## Declaration

```swift
optional func webView(_ webView: WebView!, doCommandBy selector: Selector!) -> Bool
```

## Parameters

- `webView`: The web view that the user is editing.
- `selector`: The command to perform.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver will perform `command`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method if you want to perform `command` instead of letting the web view perform `command`.

# webView:doCommandBySelector: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns whether the receiver performs a command instead of the web view.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView doCommandBySelector:(SEL) selector;
```

## Parameters

- `webView`: The web view that the user is editing.
- `selector`: The command to perform.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver will perform `command`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method if you want to perform `command` instead of letting the web view perform `command`.
