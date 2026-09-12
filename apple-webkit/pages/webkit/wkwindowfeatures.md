> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwindowfeatures](https://developer.apple.com/documentation/webkit/wkwindowfeatures)

# WKWindowFeatures (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Display-related attributes that a webpage requests for its window.

## Declaration

```swift
@MainActor class WKWindowFeatures
```

<a id="overview"></a>

## Overview

A [WKWindowFeatures](wkwindowfeatures.md) object contains the attributes that a webpage requests from its containing web view. You don’t create a [WKWindowFeatures](wkwindowfeatures.md) object directly. When a navigation action results in the display of a new web view, [WKWebView](wkwebview.md) creates this object and passes it to the [webView(\_:createWebViewWith:for:windowFeatures:)](wkuidelegate/webview%28__createwebviewwith_for_windowfeatures_%29.md) method of its UI delegate object. The delegate uses the information in this object to configure and return the new web view.

## Topics

### Inspecting Window Position and Dimensions

- [allowsResizing](wkwindowfeatures/allowsresizing.md): A Boolean value that indicates whether to make the containing window window resizable.
- [height](wkwindowfeatures/height.md): The requested height of the containing window.
- [width](wkwindowfeatures/width.md): The requested width of the containing window.
- [x](wkwindowfeatures/x.md): The requested x-coordinate of the containing window.
- [y](wkwindowfeatures/y.md): The requested y-coordinate of the containing window.

### Inspecting Visibility Properties

- [menuBarVisibility](wkwindowfeatures/menubarvisibility.md): A Boolean value that indicates whether the webpage requests a visible menu bar.
- [statusBarVisibility](wkwindowfeatures/statusbarvisibility.md): A Boolean value that indicates whether the webpage requested a visible status bar.
- [toolbarsVisibility](wkwindowfeatures/toolbarsvisibility.md): A Boolean value that indicates whether the webpage requested a visible toolbar.

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
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKWebpagePreferences.ContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKPreferences.InactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](wkwebview/fullscreenstate-swift.enum.md)

# WKWindowFeatures (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Display-related attributes that a webpage requests for its window.

## Declaration

```objectivec
@interface WKWindowFeatures : NSObject
```

<a id="overview"></a>

## Overview

A [WKWindowFeatures](wkwindowfeatures.md) object contains the attributes that a webpage requests from its containing web view. You don’t create a [WKWindowFeatures](wkwindowfeatures.md) object directly. When a navigation action results in the display of a new web view, [WKWebView](wkwebview.md) creates this object and passes it to the [webView:createWebViewWithConfiguration:forNavigationAction:windowFeatures:](wkuidelegate/webview%28__createwebviewwith_for_windowfeatures_%29.md) method of its UI delegate object. The delegate uses the information in this object to configure and return the new web view.

## Topics

### Inspecting Window Position and Dimensions

- [allowsResizing](wkwindowfeatures/allowsresizing.md): A Boolean value that indicates whether to make the containing window window resizable.
- [height](wkwindowfeatures/height.md): The requested height of the containing window.
- [width](wkwindowfeatures/width.md): The requested width of the containing window.
- [x](wkwindowfeatures/x.md): The requested x-coordinate of the containing window.
- [y](wkwindowfeatures/y.md): The requested y-coordinate of the containing window.

### Inspecting Visibility Properties

- [menuBarVisibility](wkwindowfeatures/menubarvisibility.md): A Boolean value that indicates whether the webpage requests a visible menu bar.
- [statusBarVisibility](wkwindowfeatures/statusbarvisibility.md): A Boolean value that indicates whether the webpage requested a visible status bar.
- [toolbarsVisibility](wkwindowfeatures/toolbarsvisibility.md): A Boolean value that indicates whether the webpage requested a visible toolbar.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKInactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](wkwebview/fullscreenstate-swift.enum.md)
