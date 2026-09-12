> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/fullscreenstate-swift.enum](https://developer.apple.com/documentation/webkit/wkwebview/fullscreenstate-swift.enum)

# WKWebView.FullscreenState (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```swift
enum FullscreenState
```

## Topics

### Constants

- [WKWebView.FullscreenState.enteringFullscreen](fullscreenstate-swift.enum/enteringfullscreen.md)
- [WKWebView.FullscreenState.exitingFullscreen](fullscreenstate-swift.enum/exitingfullscreen.md)
- [WKWebView.FullscreenState.inFullscreen](fullscreenstate-swift.enum/infullscreen.md)
- [WKWebView.FullscreenState.notInFullscreen](fullscreenstate-swift.enum/notinfullscreen.md)

### Initializers

- [init(rawValue:)](fullscreenstate-swift.enum/init%28rawvalue_%29.md)

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
- [WKPreferences.InactiveSchedulingPolicy](../wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.

# WKFullscreenState (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
enum WKFullscreenState : NSInteger;
```

## Topics

### Constants

- [WKFullscreenStateEnteringFullscreen](fullscreenstate-swift.enum/enteringfullscreen.md)
- [WKFullscreenStateExitingFullscreen](fullscreenstate-swift.enum/exitingfullscreen.md)
- [WKFullscreenStateInFullscreen](fullscreenstate-swift.enum/infullscreen.md)
- [WKFullscreenStateNotInFullscreen](fullscreenstate-swift.enum/notinfullscreen.md)

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
- [WKInactiveSchedulingPolicy](../wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
