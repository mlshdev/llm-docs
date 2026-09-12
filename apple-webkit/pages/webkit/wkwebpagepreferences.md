> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebpagepreferences](https://developer.apple.com/documentation/webkit/wkwebpagepreferences)

# WKWebpagePreferences (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that specifies the behaviors to use when loading and rendering page content.

## Declaration

```swift
@MainActor class WKWebpagePreferences
```

<a id="overview"></a>

## Overview

Create a [WKWebpagePreferences](wkwebpagepreferences.md) object when you want to change the default rendering behavior of your web view. Typically, iOS devices render web content for a mobile experience, and Mac devices render content for a desktop experience.

## Topics

### Setting the JavaScript preferences

- [allowsContentJavaScript](wkwebpagepreferences/allowscontentjavascript.md): A Boolean value that indicates whether JavaScript from web content is allowed to run.

### Setting the preferred content mode

- [preferredContentMode](wkwebpagepreferences/preferredcontentmode.md): The content mode for the web view to use when it loads and renders a webpage.
- [WKWebpagePreferences.ContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.

### Getting Lockdown Mode info

- [isLockdownModeEnabled](wkwebpagepreferences/islockdownmodeenabled.md): A Boolean value that indicates whether to use Lockdown Mode in the web view.

### Instance Properties

- [allowsJSHandleCreationInPageWorld](wkwebpagepreferences/allowsjshandlecreationinpageworld.md)
- [alternateRequest](wkwebpagepreferences/alternaterequest.md)
- [globalPrivacyControlEnabled](wkwebpagepreferences/globalprivacycontrolenabled.md)
- [overrideReferrer](wkwebpagepreferences/overridereferrer.md)
- [preferredHTTPSNavigationPolicy](wkwebpagepreferences/preferredhttpsnavigationpolicy.md)
- [securityRestrictionMode](wkwebpagepreferences/securityrestrictionmode.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences.ContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKPreferences.InactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](wkwebview/fullscreenstate-swift.enum.md)

# WKWebpagePreferences (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that specifies the behaviors to use when loading and rendering page content.

## Declaration

```objectivec
@interface WKWebpagePreferences : NSObject
```

<a id="overview"></a>

## Overview

Create a [WKWebpagePreferences](wkwebpagepreferences.md) object when you want to change the default rendering behavior of your web view. Typically, iOS devices render web content for a mobile experience, and Mac devices render content for a desktop experience.

## Topics

### Setting the JavaScript preferences

- [allowsContentJavaScript](wkwebpagepreferences/allowscontentjavascript.md): A Boolean value that indicates whether JavaScript from web content is allowed to run.

### Setting the preferred content mode

- [preferredContentMode](wkwebpagepreferences/preferredcontentmode.md): The content mode for the web view to use when it loads and renders a webpage.
- [WKContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.

### Getting Lockdown Mode info

- [lockdownModeEnabled](wkwebpagepreferences/islockdownmodeenabled.md): A Boolean value that indicates whether to use Lockdown Mode in the web view.

### Instance Properties

- [allowsJSHandleCreationInPageWorld](wkwebpagepreferences/allowsjshandlecreationinpageworld.md)
- [alternateRequest](wkwebpagepreferences/alternaterequest.md)
- [globalPrivacyControlEnabled](wkwebpagepreferences/globalprivacycontrolenabled.md)
- [overrideReferrer](wkwebpagepreferences/overridereferrer.md)
- [preferredHTTPSNavigationPolicy](wkwebpagepreferences/preferredhttpsnavigationpolicy.md)
- [securityRestrictionMode](wkwebpagepreferences/securityrestrictionmode.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKInactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](wkwebview/fullscreenstate-swift.enum.md)
