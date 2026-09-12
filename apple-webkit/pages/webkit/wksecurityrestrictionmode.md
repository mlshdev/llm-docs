> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wksecurityrestrictionmode](https://developer.apple.com/documentation/webkit/wksecurityrestrictionmode)

# WKSecurityRestrictionMode (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
enum WKSecurityRestrictionMode
```

<a id="overview"></a>

## Overview

Security restriction modes for WebView content.

## Topics

### Enumeration Cases

- [WKSecurityRestrictionMode.lockdown](wksecurityrestrictionmode/lockdown.md)
- [WKSecurityRestrictionMode.maximizeCompatibility](wksecurityrestrictionmode/maximizecompatibility.md)
- [WKSecurityRestrictionMode.none](wksecurityrestrictionmode/none.md)

### Initializers

- [init(rawValue:)](wksecurityrestrictionmode/init%28rawvalue_%29.md)

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

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKWebpagePreferences.ContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKPreferences.InactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](wkwebview/fullscreenstate-swift.enum.md)

# WKSecurityRestrictionMode (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
enum WKSecurityRestrictionMode : NSInteger;
```

<a id="overview"></a>

## Overview

Security restriction modes for WebView content.

## Topics

### Enumeration Cases

- [WKSecurityRestrictionModeLockdown](wksecurityrestrictionmode/lockdown.md)
- [WKSecurityRestrictionModeMaximizeCompatibility](wksecurityrestrictionmode/maximizecompatibility.md)
- [WKSecurityRestrictionModeNone](wksecurityrestrictionmode/none.md)

## See Also

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKInactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](wkwebview/fullscreenstate-swift.enum.md)
