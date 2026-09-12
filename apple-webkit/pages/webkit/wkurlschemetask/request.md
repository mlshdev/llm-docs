> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkurlschemetask/request](https://developer.apple.com/documentation/webkit/wkurlschemetask/request)

# request (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Information about the resource to load.

## Declaration

```swift
var request: URLRequest { get }
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to get the URL of the requested resource, and any additional details. It is safe to retrieve the value of this property even after WebKit cancels the load request by calling your handler’s [webView(\_:stop:)](../wkurlschemehandler/webview%28__stop_%29.md) method.

# request (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Information about the resource to load.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSURLRequest * request;
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to get the URL of the requested resource, and any additional details. It is safe to retrieve the value of this property even after WebKit cancels the load request by calling your handler’s [webView:stopURLSchemeTask:](../wkurlschemehandler/webview%28__stop_%29.md) method.
