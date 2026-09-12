> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkprocesspool](https://developer.apple.com/documentation/webkit/wkprocesspool)

# WKProcessPool (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

An opaque token that you use to run multiple web views in a single process.

> Creating and using multiple instances of WKProcessPool no longer has any effect.

## Declaration

```swift
@MainActor class WKProcessPool
```

<a id="overview"></a>

## Overview

A [WKProcessPool](wkprocesspool.md) object represents a single process that WebKit uses to manage web content. To provide a more secure and stable experience, WebKit renders the content of web views in separate processes, rather than in your app’s process space. By default, WebKit gives each web view its own process space until it reaches an implementation-defined process limit. After that, web views with the same [WKProcessPool](wkprocesspool.md) object share the same web content process.

If your app creates multiple web views, assign the same [WKProcessPool](wkprocesspool.md) object to web views that may safely share a process space. Instantiate an instance of this class and assign it to the [processPool](wkwebviewconfiguration/processpool.md) property of each web view’s [WKWebViewConfiguration](wkwebviewconfiguration.md) object.

## Topics

### Initializers

- [init(coder:)](wkprocesspool/init%28coder_%29.md): Deprecated.

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
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKWebpagePreferences.ContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKPreferences.InactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](wkwebview/fullscreenstate-swift.enum.md)

# WKProcessPool (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

An opaque token that you use to run multiple web views in a single process.

> Creating and using multiple instances of WKProcessPool no longer has any effect.

## Declaration

```objectivec
@interface WKProcessPool : NSObject
```

<a id="overview"></a>

## Overview

A [WKProcessPool](wkprocesspool.md) object represents a single process that WebKit uses to manage web content. To provide a more secure and stable experience, WebKit renders the content of web views in separate processes, rather than in your app’s process space. By default, WebKit gives each web view its own process space until it reaches an implementation-defined process limit. After that, web views with the same [WKProcessPool](wkprocesspool.md) object share the same web content process.

If your app creates multiple web views, assign the same [WKProcessPool](wkprocesspool.md) object to web views that may safely share a process space. Instantiate an instance of this class and assign it to the [processPool](wkwebviewconfiguration/processpool.md) property of each web view’s [WKWebViewConfiguration](wkwebviewconfiguration.md) object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKInactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](wkwebview/fullscreenstate-swift.enum.md)
