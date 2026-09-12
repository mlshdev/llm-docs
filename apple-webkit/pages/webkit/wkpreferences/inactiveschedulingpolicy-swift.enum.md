> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpreferences/inactiveschedulingpolicy-swift.enum](https://developer.apple.com/documentation/webkit/wkpreferences/inactiveschedulingpolicy-swift.enum)

# WKPreferences.InactiveSchedulingPolicy (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An enumeration that lists policies for how a web view that’s not in a window handles tasks.

## Declaration

```swift
enum InactiveSchedulingPolicy
```

## Topics

### Scheduling policies

- [WKPreferences.InactiveSchedulingPolicy.none](inactiveschedulingpolicy-swift.enum/none.md): A policy where a web view that’s not in a window runs tasks normally.
- [WKPreferences.InactiveSchedulingPolicy.suspend](inactiveschedulingpolicy-swift.enum/suspend.md): A policy where a web view that’s not in a window fully suspends tasks.
- [WKPreferences.InactiveSchedulingPolicy.throttle](inactiveschedulingpolicy-swift.enum/throttle.md): A policy where a web view that’s not in a window limits processing, but does not fully suspend tasks.

### Initializers

- [init(rawValue:)](inactiveschedulingpolicy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Web view configuration

- [WKWebViewConfiguration](../wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](../wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](../wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](../wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](../wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKWebpagePreferences.ContentMode](../wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](../wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](../wksecurityrestrictionmode.md)
- [WKWebView.FullscreenState](../wkwebview/fullscreenstate-swift.enum.md)

# WKInactiveSchedulingPolicy (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An enumeration that lists policies for how a web view that’s not in a window handles tasks.

## Declaration

```objectivec
enum WKInactiveSchedulingPolicy : NSInteger;
```

## Topics

### Scheduling policies

- [WKInactiveSchedulingPolicyNone](inactiveschedulingpolicy-swift.enum/none.md): A policy where a web view that’s not in a window runs tasks normally.
- [WKInactiveSchedulingPolicySuspend](inactiveschedulingpolicy-swift.enum/suspend.md): A policy where a web view that’s not in a window fully suspends tasks.
- [WKInactiveSchedulingPolicyThrottle](inactiveschedulingpolicy-swift.enum/throttle.md): A policy where a web view that’s not in a window limits processing, but does not fully suspend tasks.

## See Also

### Web view configuration

- [WKWebViewConfiguration](../wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](../wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](../wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](../wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](../wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKContentMode](../wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](../wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](../wksecurityrestrictionmode.md)
- [WKFullscreenState](../wkwebview/fullscreenstate-swift.enum.md)
