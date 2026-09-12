> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpreferences](https://developer.apple.com/documentation/webkit/wkpreferences)

# WKPreferences (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that encapsulates the standard behaviors to apply to websites.

## Declaration

```swift
@MainActor class WKPreferences
```

<a id="overview"></a>

## Overview

Use a [WKPreferences](wkpreferences.md) object to specify the preferences for your website, including the minimum font size, the JavaScript behavior, and the behavior for handling fraudulent websites. Create this object and assign it to the [preferences](wkwebviewconfiguration/preferences.md) property of the [WKWebViewConfiguration](wkwebviewconfiguration.md) object you use to create your web view.

## Topics

### Setting Rendering Preferences

- [minimumFontSize](wkpreferences/minimumfontsize.md): The minimum font size, in points.
- [shouldPrintBackgrounds](wkpreferences/shouldprintbackgrounds.md): A Boolean value that indicates whether to include any background color or graphics when printing content.

### Setting Behavior Preferences

- [tabFocusesLinks](wkpreferences/tabfocuseslinks.md): A Boolean value that indicates whether pressing the tab key changes the focus to links and form controls.
- [isTextInteractionEnabled](wkpreferences/istextinteractionenabled.md): A Boolean value that indicates whether to allow people to select or otherwise interact with text.
- [isElementFullscreenEnabled](wkpreferences/iselementfullscreenenabled.md): A Boolean value that indicates whether a web view can display content full screen.
- [inactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.property.md): A policy you set to specify how a web view that’s not in a window handles tasks.
- [WKPreferences.InactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.

### Setting Java and JavaScript Preferences

- [javaScriptCanOpenWindowsAutomatically](wkpreferences/javascriptcanopenwindowsautomatically.md): A Boolean value that indicates whether JavaScript can open windows without user interaction.
- [isSiteSpecificQuirksModeEnabled](wkpreferences/issitespecificquirksmodeenabled.md): A Boolean that indicates whether to apply site-specific compatibility workarounds.

### Setting Fraud Warning Preferences

- [isFraudulentWebsiteWarningEnabled](wkpreferences/isfraudulentwebsitewarningenabled.md): A Boolean value that indicates whether the web view shows warnings for suspected fraudulent content, such as malware or phishing attemps.

### Deprecated

- [javaEnabled](wkpreferences/javaenabled.md): Deprecated. A Boolean value that indicates whether Java is enabled.
- [javaScriptEnabled](wkpreferences/javascriptenabled.md): Deprecated. A Boolean value that indicates whether JavaScript is enabled.
- [plugInsEnabled](wkpreferences/pluginsenabled.md): Deprecated. A Boolean value that indicates whether plug-ins are enabled.

### Initializers

- [init(coder:)](wkpreferences/init%28coder_%29.md)

### Instance Properties

- [isLookToScrollEnabled](wkpreferences/islooktoscrollenabled.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKWebpagePreferences.ContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKPreferences.InactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](wkwebview/fullscreenstate-swift.enum.md)

# WKPreferences (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that encapsulates the standard behaviors to apply to websites.

## Declaration

```objectivec
@interface WKPreferences : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKPreferences](wkpreferences.md) object to specify the preferences for your website, including the minimum font size, the JavaScript behavior, and the behavior for handling fraudulent websites. Create this object and assign it to the [preferences](wkwebviewconfiguration/preferences.md) property of the [WKWebViewConfiguration](wkwebviewconfiguration.md) object you use to create your web view.

## Topics

### Setting Rendering Preferences

- [minimumFontSize](wkpreferences/minimumfontsize.md): The minimum font size, in points.
- [shouldPrintBackgrounds](wkpreferences/shouldprintbackgrounds.md): A Boolean value that indicates whether to include any background color or graphics when printing content.

### Setting Behavior Preferences

- [tabFocusesLinks](wkpreferences/tabfocuseslinks.md): A Boolean value that indicates whether pressing the tab key changes the focus to links and form controls.
- [textInteractionEnabled](wkpreferences/istextinteractionenabled.md): A Boolean value that indicates whether to allow people to select or otherwise interact with text.
- [elementFullscreenEnabled](wkpreferences/iselementfullscreenenabled.md): A Boolean value that indicates whether a web view can display content full screen.
- [inactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.property.md): A policy you set to specify how a web view that’s not in a window handles tasks.
- [WKInactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.

### Setting Java and JavaScript Preferences

- [javaScriptCanOpenWindowsAutomatically](wkpreferences/javascriptcanopenwindowsautomatically.md): A Boolean value that indicates whether JavaScript can open windows without user interaction.
- [siteSpecificQuirksModeEnabled](wkpreferences/issitespecificquirksmodeenabled.md): A Boolean that indicates whether to apply site-specific compatibility workarounds.

### Setting Fraud Warning Preferences

- [fraudulentWebsiteWarningEnabled](wkpreferences/isfraudulentwebsitewarningenabled.md): A Boolean value that indicates whether the web view shows warnings for suspected fraudulent content, such as malware or phishing attemps.

### Deprecated

- [javaEnabled](wkpreferences/javaenabled.md): Deprecated. A Boolean value that indicates whether Java is enabled.
- [javaScriptEnabled](wkpreferences/javascriptenabled.md): Deprecated. A Boolean value that indicates whether JavaScript is enabled.
- [plugInsEnabled](wkpreferences/pluginsenabled.md): Deprecated. A Boolean value that indicates whether plug-ins are enabled.

### Instance Properties

- [isLookToScrollEnabled](wkpreferences/islooktoscrollenabled.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKInactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](wkwebview/fullscreenstate-swift.enum.md)
