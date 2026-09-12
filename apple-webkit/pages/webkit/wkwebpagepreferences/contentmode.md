> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebpagepreferences/contentmode](https://developer.apple.com/documentation/webkit/wkwebpagepreferences/contentmode)

# WKWebpagePreferences.ContentMode (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

Constants that indicate how to render web view content.

## Declaration

```swift
enum ContentMode
```

<a id="overview"></a>

## Overview

Browsers often render webpages differently based on device type. For example, Safari provides a desktop-class experience when displaying webpages on Mac and iPad, but it displays a mobile experience when displaying pages on iPhone. Use content modes to specify how you want your web view to render content within your app.

## Topics

### Getting the Content Modes

- [WKWebpagePreferences.ContentMode.recommended](contentmode/recommended.md): The content mode that is appropriate for the current device.
- [WKWebpagePreferences.ContentMode.desktop](contentmode/desktop.md): The content mode that represents a desktop experience.
- [WKWebpagePreferences.ContentMode.mobile](contentmode/mobile.md): The content mode that represents a mobile experience.

### Initializers

- [init(rawValue:)](contentmode/init%28rawvalue_%29.md)

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
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](../wksecurityrestrictionmode.md)
- [WKPreferences.InactiveSchedulingPolicy](../wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](../wkwebview/fullscreenstate-swift.enum.md)

# WKContentMode (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

Constants that indicate how to render web view content.

## Declaration

```objectivec
enum WKContentMode : NSInteger;
```

<a id="overview"></a>

## Overview

Browsers often render webpages differently based on device type. For example, Safari provides a desktop-class experience when displaying webpages on Mac and iPad, but it displays a mobile experience when displaying pages on iPhone. Use content modes to specify how you want your web view to render content within your app.

## Topics

### Getting the Content Modes

- [WKContentModeRecommended](contentmode/recommended.md): The content mode that is appropriate for the current device.
- [WKContentModeDesktop](contentmode/desktop.md): The content mode that represents a desktop experience.
- [WKContentModeMobile](contentmode/mobile.md): The content mode that represents a mobile experience.

## See Also

### Web view configuration

- [WKWebViewConfiguration](../wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](../wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](../wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](../wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](../wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](../wksecurityrestrictionmode.md)
- [WKInactiveSchedulingPolicy](../wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](../wkwebview/fullscreenstate-swift.enum.md)
