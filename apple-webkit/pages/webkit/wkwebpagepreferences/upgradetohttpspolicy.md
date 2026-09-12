> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebpagepreferences/upgradetohttpspolicy](https://developer.apple.com/documentation/webkit/wkwebpagepreferences/upgradetohttpspolicy)

# WKWebpagePreferences.UpgradeToHTTPSPolicy (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · visionOS 2.2+

## Declaration

```swift
enum UpgradeToHTTPSPolicy
```

<a id="overview"></a>

## Overview

A secure navigation policy represents whether or not there is a preference for loading a webpage with https, and how failures should be handled.

## Topics

### Enumeration Cases

- [WKWebpagePreferences.UpgradeToHTTPSPolicy.automaticFallbackToHTTP](upgradetohttpspolicy/automaticfallbacktohttp.md)
- [WKWebpagePreferences.UpgradeToHTTPSPolicy.errorOnFailure](upgradetohttpspolicy/erroronfailure.md)
- [WKWebpagePreferences.UpgradeToHTTPSPolicy.keepAsRequested](upgradetohttpspolicy/keepasrequested.md)
- [WKWebpagePreferences.UpgradeToHTTPSPolicy.userMediatedFallbackToHTTP](upgradetohttpspolicy/usermediatedfallbacktohttp.md)

### Initializers

- [init(rawValue:)](upgradetohttpspolicy/init%28rawvalue_%29.md)

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
- [WKWebpagePreferences.ContentMode](contentmode.md): Constants that indicate how to render web view content.
- [WKSecurityRestrictionMode](../wksecurityrestrictionmode.md)
- [WKPreferences.InactiveSchedulingPolicy](../wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](../wkwebview/fullscreenstate-swift.enum.md)

# WKWebpagePreferencesUpgradeToHTTPSPolicy (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · visionOS 2.2+

## Declaration

```objectivec
enum WKWebpagePreferencesUpgradeToHTTPSPolicy : NSInteger;
```

<a id="overview"></a>

## Overview

A secure navigation policy represents whether or not there is a preference for loading a webpage with https, and how failures should be handled.

## Topics

### Enumeration Cases

- [WKWebpagePreferencesUpgradeToHTTPSPolicyAutomaticFallbackToHTTP](upgradetohttpspolicy/automaticfallbacktohttp.md)
- [WKWebpagePreferencesUpgradeToHTTPSPolicyErrorOnFailure](upgradetohttpspolicy/erroronfailure.md)
- [WKWebpagePreferencesUpgradeToHTTPSPolicyKeepAsRequested](upgradetohttpspolicy/keepasrequested.md)
- [WKWebpagePreferencesUpgradeToHTTPSPolicyUserMediatedFallbackToHTTP](upgradetohttpspolicy/usermediatedfallbacktohttp.md)

## See Also

### Web view configuration

- [WKWebViewConfiguration](../wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](../wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](../wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](../wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](../wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKContentMode](contentmode.md): Constants that indicate how to render web view content.
- [WKSecurityRestrictionMode](../wksecurityrestrictionmode.md)
- [WKInactiveSchedulingPolicy](../wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](../wkwebview/fullscreenstate-swift.enum.md)
