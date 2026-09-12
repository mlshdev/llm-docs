> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydelegate](https://developer.apple.com/documentation/webkit/webpolicydelegate)

# WebPolicyDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

## Declaration

```swift
protocol WebPolicyDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [webView(\_:decidePolicyForMIMEType:request:frame:decisionListener:)](webpolicydelegate/webview%28__decidepolicyformimetype_request_frame_decisionlistener_%29.md): Deprecated. Decides whether to display content with a given MIME type.
- [webView(\_:decidePolicyForNavigationAction:request:frame:decisionListener:)](webpolicydelegate/webview%28__decidepolicyfornavigationaction_request_frame_decisionlistener_%29.md): Deprecated. Routes a navigation action internally or to an external viewer.
- [webView(\_:decidePolicyForNewWindowAction:request:newFrameName:decisionListener:)](webpolicydelegate/webview%28__decidepolicyfornewwindowaction_request_newframename_decisionlistener_%29.md): Deprecated. Decides whether to allow a targeted navigation event, such as opening a link in a new window.
- [webView(\_:unableToImplementPolicyWithError:frame:)](webpolicydelegate/webview%28__unabletoimplementpolicywitherror_frame_%29.md): Deprecated. Handles or drops events that were rejected by a policy maker.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Setting Policies (Legacy)

- [WebPolicyDecisionListener](webpolicydecisionlistener.md): Deprecated. This protocol enables [WebView](webview-swift.class.md) policy delegates to communicate with listener objects. A listener object conforming to this protocol is passed as one of the arguments to web view policy delegate methods.

# WebPolicyDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

## Declaration

```objectivec
@protocol WebPolicyDelegate <NSObject>
```

## Topics

### Instance Methods

- [webView:decidePolicyForMIMEType:request:frame:decisionListener:](webpolicydelegate/webview%28__decidepolicyformimetype_request_frame_decisionlistener_%29.md): Deprecated. Decides whether to display content with a given MIME type.
- [webView:decidePolicyForNavigationAction:request:frame:decisionListener:](webpolicydelegate/webview%28__decidepolicyfornavigationaction_request_frame_decisionlistener_%29.md): Deprecated. Routes a navigation action internally or to an external viewer.
- [webView:decidePolicyForNewWindowAction:request:newFrameName:decisionListener:](webpolicydelegate/webview%28__decidepolicyfornewwindowaction_request_newframename_decisionlistener_%29.md): Deprecated. Decides whether to allow a targeted navigation event, such as opening a link in a new window.
- [webView:unableToImplementPolicyWithError:frame:](webpolicydelegate/webview%28__unabletoimplementpolicywitherror_frame_%29.md): Deprecated. Handles or drops events that were rejected by a policy maker.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Setting Policies (Legacy)

- [WebPolicyDecisionListener](webpolicydecisionlistener.md): Deprecated. This protocol enables [WebView](webview-swift.class.md) policy delegates to communicate with listener objects. A listener object conforming to this protocol is passed as one of the arguments to web view policy delegate methods.
