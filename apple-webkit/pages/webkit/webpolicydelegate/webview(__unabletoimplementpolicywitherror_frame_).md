> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydelegate/webview(_:unabletoimplementpolicywitherror:frame:)](https://developer.apple.com/documentation/webkit/webpolicydelegate/webview(_:unabletoimplementpolicywitherror:frame:))

# webView(\_:unableToImplementPolicyWithError:frame:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Handles or drops events that were rejected by a policy maker.

## Declaration

```swift
optional func webView(_ webView: WebView!, unableToImplementPolicyWithError error: (any Error)!, frame: WebFrame!)
```

## Parameters

- `webView`: The `WebView` object for which this object is the policy delegate.
- `error`: The error that occurred.
- `frame`: The frame in which the error occurred.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to display or log an error message. If you do not implement this method, no action is taken.

# webView:unableToImplementPolicyWithError:frame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Handles or drops events that were rejected by a policy maker.

## Declaration

```objectivec
- (void) webView:(WebView *) webView unableToImplementPolicyWithError:(NSError *) error frame:(WebFrame *) frame;
```

## Parameters

- `webView`: The `WebView` object for which this object is the policy delegate.
- `error`: The error that occurred.
- `frame`: The frame in which the error occurred.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to display or log an error message. If you do not implement this method, no action is taken.
