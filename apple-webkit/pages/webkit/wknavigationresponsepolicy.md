> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationresponsepolicy](https://developer.apple.com/documentation/webkit/wknavigationresponsepolicy)

# WKNavigationResponsePolicy (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Constants that indicate whether to allow or cancel navigation to a webpage from a response.

## Declaration

```swift
enum WKNavigationResponsePolicy
```

## Topics

### Constants

- [WKNavigationResponsePolicy.cancel](wknavigationresponsepolicy/cancel.md): Cancel the navigation.
- [WKNavigationResponsePolicy.allow](wknavigationresponsepolicy/allow.md): Allow the navigation to continue.
- [WKNavigationResponsePolicy.download](wknavigationresponsepolicy/download.md): Allow the download to proceed.

### Initializers

- [init(rawValue:)](wknavigationresponsepolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Allowing or denying navigation requests

- [webView(\_:decidePolicyFor:preferences:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_preferences_decisionhandler_%29.md): Asks the delegate for permission to navigate to new content based on the specified preferences and action information.
- [webView(\_:decidePolicyFor:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md): Asks the delegate for permission to navigate to new content based on the specified action information.
- [WKNavigationActionPolicy](wknavigationactionpolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from an action.
- [webView(\_:decidePolicyFor:decisionHandler:)](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md): Asks the delegate for permission to navigate to new content after the response to the navigation request is known.

# WKNavigationResponsePolicy (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Constants that indicate whether to allow or cancel navigation to a webpage from a response.

## Declaration

```objectivec
enum WKNavigationResponsePolicy : NSInteger;
```

## Topics

### Constants

- [WKNavigationResponsePolicyCancel](wknavigationresponsepolicy/cancel.md): Cancel the navigation.
- [WKNavigationResponsePolicyAllow](wknavigationresponsepolicy/allow.md): Allow the navigation to continue.
- [WKNavigationResponsePolicyDownload](wknavigationresponsepolicy/download.md): Allow the download to proceed.

## See Also

### Allowing or denying navigation requests

- [webView:decidePolicyForNavigationAction:preferences:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_preferences_decisionhandler_%29.md): Asks the delegate for permission to navigate to new content based on the specified preferences and action information.
- [webView:decidePolicyForNavigationAction:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-2ni62.md): Asks the delegate for permission to navigate to new content based on the specified action information.
- [WKNavigationActionPolicy](wknavigationactionpolicy.md): Constants that indicate whether to allow or cancel navigation to a webpage from an action.
- [webView:decidePolicyForNavigationResponse:decisionHandler:](wknavigationdelegate/webview%28__decidepolicyfor_decisionhandler_%29-19mn2.md): Asks the delegate for permission to navigate to new content after the response to the navigation request is known.
