> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate/webview(_:requestgeolocationpermissionfor:initiatedbyframe:decisionhandler:)](https://developer.apple.com/documentation/webkit/wkuidelegate/webview(_:requestgeolocationpermissionfor:initiatedbyframe:decisionhandler:))

# webView(\_:requestGeolocationPermissionFor:initiatedByFrame:decisionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
optional func webView(_ webView: WKWebView, requestGeolocationPermissionFor origin: WKSecurityOrigin, initiatedByFrame frame: WKFrameInfo, decisionHandler: @escaping @MainActor @Sendable (WKPermissionDecision) -> Void)
```

```swift
optional func webView(_ webView: WKWebView, requestGeolocationPermissionFor origin: WKSecurityOrigin, initiatedBy frame: WKFrameInfo) async -> WKPermissionDecision
```

## Parameters

- `frame`: The frame that initiated the request.
- `decisionHandler`: The decision handler to call once the app has made its decision.

<a id="discussion"></a>

## Discussion

Allows your app to determine whether or not the given security origin should have access to geolocation APIs.

# webView:requestGeolocationPermissionForOrigin:initiatedByFrame:decisionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView requestGeolocationPermissionForOrigin:(WKSecurityOrigin *) origin initiatedByFrame:(WKFrameInfo *) frame decisionHandler:(void (^)(enum WKPermissionDecision)) decisionHandler;
```

## Parameters

- `frame`: The frame that initiated the request.
- `decisionHandler`: The decision handler to call once the app has made its decision.

<a id="discussion"></a>

## Discussion

Allows your app to determine whether or not the given security origin should have access to geolocation APIs.
