> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkurlschemehandler/webview(_:start:)](https://developer.apple.com/documentation/webkit/wkurlschemehandler/webview(_:start:))

# webView(\_:start:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Asks your handler to begin loading the data for the specified resource.

## Declaration

```swift
func webView(_ webView: WKWebView, start urlSchemeTask: any WKURLSchemeTask)
```

## Parameters

- `webView`: The web view that requires the resource.
- `urlSchemeTask`: The task object that identifies the resource to load. You also use this object to report the progress of the load operation back to the web view.

<a id="Discussion"></a>

## Discussion

When a web view encounters a resource with your custom URL scheme, it calls this method on the appropriate handler object. Use your implementation of this method to begin loading the resource. Call the methods of the provided [WKURLSchemeTask](../wkurlschemetask.md) object to report the progress of the loading operation back to the web view. You also use that object to deliver the resource data to the web view.

# webView:startURLSchemeTask: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Asks your handler to begin loading the data for the specified resource.

## Declaration

```objectivec
- (void) webView:(WKWebView *) webView startURLSchemeTask:(id<WKURLSchemeTask>) urlSchemeTask;
```

## Parameters

- `webView`: The web view that requires the resource.
- `urlSchemeTask`: The task object that identifies the resource to load. You also use this object to report the progress of the load operation back to the web view.

<a id="Discussion"></a>

## Discussion

When a web view encounters a resource with your custom URL scheme, it calls this method on the appropriate handler object. Use your implementation of this method to begin loading the resource. Call the methods of the provided [WKURLSchemeTask](../wkurlschemetask.md) object to report the progress of the loading operation back to the web view. You also use that object to deliver the resource data to the web view.
