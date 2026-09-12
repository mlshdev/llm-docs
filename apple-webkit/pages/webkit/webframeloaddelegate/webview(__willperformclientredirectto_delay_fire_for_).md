> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate/webview(_:willperformclientredirectto:delay:fire:for:)](https://developer.apple.com/documentation/webkit/webframeloaddelegate/webview(_:willperformclientredirectto:delay:fire:for:))

# webView(\_:willPerformClientRedirectTo:delay:fire:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a frame receives a client redirect and before it is fired.

## Declaration

```swift
optional func webView(_ sender: WebView!, willPerformClientRedirectTo URL: URL!, delay seconds: TimeInterval, fire date: Date!, for frame: WebFrame!)
```

## Parameters

- `sender`: The web view containing the frame.
- `URL`: The redirect location.
- `seconds`: The number of seconds from `date` before the redirect will be fired.
- `date`: The date and time to call the redirect.
- `frame`: The frame where the redirect occurred.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to display progress while a client redirect is pending. If a client redirect is cancelled the [webView(\_:didCancelClientRedirectFor:)](webview%28__didcancelclientredirectfor_%29.md) delegate method is invoked.

# webView:willPerformClientRedirectToURL:delay:fireDate:forFrame: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Called when a frame receives a client redirect and before it is fired.

## Declaration

```objectivec
- (void) webView:(WebView *) sender willPerformClientRedirectToURL:(NSURL *) URL delay:(NSTimeInterval) seconds fireDate:(NSDate *) date forFrame:(WebFrame *) frame;
```

## Parameters

- `sender`: The web view containing the frame.
- `URL`: The redirect location.
- `seconds`: The number of seconds from `date` before the redirect will be fired.
- `date`: The date and time to call the redirect.
- `frame`: The frame where the redirect occurred.

<a id="Discussion"></a>

## Discussion

Delegates might implement this method to display progress while a client redirect is pending. If a client redirect is cancelled the [webView:didCancelClientRedirectForFrame:](webview%28__didcancelclientredirectfor_%29.md) delegate method is invoked.
