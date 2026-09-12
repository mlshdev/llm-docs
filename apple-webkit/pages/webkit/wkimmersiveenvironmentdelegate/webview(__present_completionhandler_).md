> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkimmersiveenvironmentdelegate/webview(_:present:completionhandler:)](https://developer.apple.com/documentation/webkit/wkimmersiveenvironmentdelegate/webview(_:present:completionhandler:))

# webView(\_:present:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

## Declaration

```swift
func webView(_ webView: WKWebView, present environment: WKImmersiveEnvironment, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func webView(_ webView: WKWebView, presentImmersiveEnvironment environment: WKImmersiveEnvironment) async throws
```

## Parameters

- `webView`: The web view requesting presentation.
- `environment`: The immersive environment to present.
- `completionHandler`: The completion handler you must invoke once the presentation transition has completed. The error argument should be used in case the presentation failed and the environment couldn’t be presented.

<a id="discussion"></a>

## Discussion

Asks the delegate to present an immersive environment.

# webView:presentImmersiveEnvironment:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView presentImmersiveEnvironment:(WKImmersiveEnvironment *) environment completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `webView`: The web view requesting presentation.
- `environment`: The immersive environment to present.
- `completionHandler`: The completion handler you must invoke once the presentation transition has completed. The error argument should be used in case the presentation failed and the environment couldn’t be presented.

<a id="discussion"></a>

## Discussion

Asks the delegate to present an immersive environment.
