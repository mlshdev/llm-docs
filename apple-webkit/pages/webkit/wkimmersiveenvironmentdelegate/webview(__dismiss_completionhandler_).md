> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkimmersiveenvironmentdelegate/webview(_:dismiss:completionhandler:)](https://developer.apple.com/documentation/webkit/wkimmersiveenvironmentdelegate/webview(_:dismiss:completionhandler:))

# webView(\_:dismiss:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

## Declaration

```swift
func webView(_ webView: WKWebView, dismiss environment: WKImmersiveEnvironment, completionHandler: @escaping () -> Void)
```

```swift
func webView(_ webView: WKWebView, dismissImmersiveEnvironment environment: WKImmersiveEnvironment) async
```

## Parameters

- `webView`: The web view requesting dismissal.
- `environment`: The immersive environment to dismiss.
- `completionHandler`: The completion handler you must invoke once the dismissal transition has completed.

<a id="discussion"></a>

## Discussion

Asks the delegate to dismiss an immersive environment.

# webView:dismissImmersiveEnvironment:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView dismissImmersiveEnvironment:(WKImmersiveEnvironment *) environment completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `webView`: The web view requesting dismissal.
- `environment`: The immersive environment to dismiss.
- `completionHandler`: The completion handler you must invoke once the dismissal transition has completed.

<a id="discussion"></a>

## Discussion

Asks the delegate to dismiss an immersive environment.
