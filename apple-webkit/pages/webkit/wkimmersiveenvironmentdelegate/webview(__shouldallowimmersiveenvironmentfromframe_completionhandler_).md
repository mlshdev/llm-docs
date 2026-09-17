> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkimmersiveenvironmentdelegate/webview(_:shouldallowimmersiveenvironmentfromframe:completionhandler:)

# webView(\_:shouldAllowImmersiveEnvironmentFromFrame:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

## Declaration

```swift
func webView(_ webView: WKWebView, shouldAllowImmersiveEnvironmentFromFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void)
```

```swift
func webView(_ webView: WKWebView, shouldAllowImmersiveEnvironmentFrom frame: WKFrameInfo) async -> Bool
```

## Parameters

- `webView`: The web view that received the immersive environment request.
- `frame`: The frame information from the website requesting the immersive environment.
- `completionHandler`: The completion handler you must invoke with the request’s answer. `YES` to allow the environment presentation, or `NO` to deny it.

<a id="discussion"></a>

## Discussion

Asks the delegate whether to allow an immersive environment from the specified frame.

# webView:shouldAllowImmersiveEnvironmentFromFrame:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView shouldAllowImmersiveEnvironmentFromFrame:(WKFrameInfo *) frame completionHandler:(void (^)(BOOL allow)) completionHandler;
```

## Parameters

- `webView`: The web view that received the immersive environment request.
- `frame`: The frame information from the website requesting the immersive environment.
- `completionHandler`: The completion handler you must invoke with the request’s answer. `YES` to allow the environment presentation, or `NO` to deny it.

<a id="discussion"></a>

## Discussion

Asks the delegate whether to allow an immersive environment from the specified frame.
