> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration)

# WKWebViewConfiguration (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A collection of properties that you use to initialize a web view.

## Declaration

```swift
@MainActor class WKWebViewConfiguration
```

<a id="overview"></a>

## Overview

A [WKWebViewConfiguration](wkwebviewconfiguration.md) object provides information about how to configure a [WKWebView](wkwebview.md) object. Use your configuration object to specify:

- The initial cookies to make available to your web content
- Handlers for any custom URL schemes your web content uses
- Settings for how to handle media content
- Information about how to manage selections within the web view
- Custom scripts to inject into the webpage
- Custom rules that determine how to render content

You create a [WKWebViewConfiguration](wkwebviewconfiguration.md) object in your code, configure its properties, and pass it to the initializer of your [WKWebView](wkwebview.md) object. The web view incorporates your configuration settings only at creation time; you cannot change those settings dynamically later.

## Topics

### Configuring the web view’s behavior

- [websiteDataStore](wkwebviewconfiguration/websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.
- [userContentController](wkwebviewconfiguration/usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [processPool](wkwebviewconfiguration/processpool.md): Deprecated. The object that coordinates the processes the web view uses to render its web content and execute scripts.
- [applicationNameForUserAgent](wkwebviewconfiguration/applicationnameforuseragent.md): The app name that appears in the user agent string.
- [limitsNavigationsToAppBoundDomains](wkwebviewconfiguration/limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](wkwebviewconfiguration/upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.

### Configuring the web view’s preferences

- [preferences](wkwebviewconfiguration/preferences.md): The object that manages the preference-related settings for the web view.
- [defaultWebpagePreferences](wkwebviewconfiguration/defaultwebpagepreferences.md): The default preferences to use when loading and rendering content.

### Adding handlers for custom URL schemes

- [setURLSchemeHandler(\_:forURLScheme:)](wkwebviewconfiguration/seturlschemehandler%28__forurlscheme_%29.md): Registers an object to load resources associated with the specified URL scheme.
- [urlSchemeHandler(forURLScheme:)](wkwebviewconfiguration/urlschemehandler%28forurlscheme_%29.md): Returns the currently registered handler object for the specified URL scheme.

### Configuring the rendering behavior

- [ignoresViewportScaleLimits](wkwebviewconfiguration/ignoresviewportscalelimits.md): A Boolean value that determines whether a web view allows scaling of the webpage.
- [suppressesIncrementalRendering](wkwebviewconfiguration/suppressesincrementalrendering.md): A Boolean value that indicates whether the web view suppresses content rendering until the content is fully loaded into memory.

### Setting media playback preferences

- [allowsInlineMediaPlayback](wkwebviewconfiguration/allowsinlinemediaplayback.md): A Boolean value that indicates whether HTML5 videos play inline or use the native full-screen controller.
- [allowsAirPlayForMediaPlayback](wkwebviewconfiguration/allowsairplayformediaplayback.md): A Boolean value that indicates whether the web view allows media playback over AirPlay.
- [allowsPictureInPictureMediaPlayback](wkwebviewconfiguration/allowspictureinpicturemediaplayback.md): A Boolean value that indicates whether HTML5 videos can play Picture in Picture.
- [mediaTypesRequiringUserActionForPlayback](wkwebviewconfiguration/mediatypesrequiringuseractionforplayback.md): The media types that require a user gesture to begin playing.
- [WKAudiovisualMediaTypes](wkaudiovisualmediatypes.md): The media types that require a user gesture to begin playing.

### Identifying data types

- [dataDetectorTypes](wkwebviewconfiguration/datadetectortypes.md): The types of data detectors to apply to the web view’s content.
- [WKDataDetectorTypes](wkdatadetectortypes.md): The data detector types.

### Setting selection granularity

- [selectionGranularity](wkwebviewconfiguration/selectiongranularity.md): Deprecated. The level of granularity with which the user can interactively select web view content.
- [WKSelectionGranularity](wkselectiongranularity.md): Deprecated. The granularity with which the user can select and modify web view content.

### Selecting user interface directionality

- [userInterfaceDirectionPolicy](wkwebviewconfiguration/userinterfacedirectionpolicy.md): The directionality of user interface elements.
- [WKUserInterfaceDirectionPolicy](wkuserinterfacedirectionpolicy.md): The policy that determines the directionality of user interface elements in a web view.

### Deprecated

- [mediaPlaybackAllowsAirPlay](wkwebviewconfiguration/mediaplaybackallowsairplay.md): Deprecated. Deprecated property.
- [requiresUserActionForMediaPlayback](wkwebviewconfiguration/requiresuseractionformediaplayback.md): Deprecated. A Boolean value that indicates whether HTML5 videos require the user to start playing them (`true`) or whether the videos play automatically (`false`).
- [mediaPlaybackRequiresUserAction](wkwebviewconfiguration/mediaplaybackrequiresuseraction.md): Deprecated. Deprecated property.

### Initializers

- [init(coder:)](wkwebviewconfiguration/init%28coder_%29.md)

### Instance Properties

- [allowsImmersiveEnvironments](wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [allowsInlinePredictions](wkwebviewconfiguration/allowsinlinepredictions.md)
- [showsSystemScreenTimeBlockingView](wkwebviewconfiguration/showssystemscreentimeblockingview.md)
- [supportsAdaptiveImageGlyph](wkwebviewconfiguration/supportsadaptiveimageglyph.md)
- [webExtensionController](wkwebviewconfiguration/webextensioncontroller.md)
- [writingToolsBehavior](wkwebviewconfiguration/writingtoolsbehavior.md)

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
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web view configuration

- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKWebpagePreferences.ContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKPreferences.InactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](wkwebview/fullscreenstate-swift.enum.md)

# WKWebViewConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A collection of properties that you use to initialize a web view.

## Declaration

```objectivec
@interface WKWebViewConfiguration : NSObject
```

<a id="overview"></a>

## Overview

A [WKWebViewConfiguration](wkwebviewconfiguration.md) object provides information about how to configure a [WKWebView](wkwebview.md) object. Use your configuration object to specify:

- The initial cookies to make available to your web content
- Handlers for any custom URL schemes your web content uses
- Settings for how to handle media content
- Information about how to manage selections within the web view
- Custom scripts to inject into the webpage
- Custom rules that determine how to render content

You create a [WKWebViewConfiguration](wkwebviewconfiguration.md) object in your code, configure its properties, and pass it to the initializer of your [WKWebView](wkwebview.md) object. The web view incorporates your configuration settings only at creation time; you cannot change those settings dynamically later.

## Topics

### Configuring the web view’s behavior

- [websiteDataStore](wkwebviewconfiguration/websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.
- [userContentController](wkwebviewconfiguration/usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [processPool](wkwebviewconfiguration/processpool.md): Deprecated. The object that coordinates the processes the web view uses to render its web content and execute scripts.
- [applicationNameForUserAgent](wkwebviewconfiguration/applicationnameforuseragent.md): The app name that appears in the user agent string.
- [limitsNavigationsToAppBoundDomains](wkwebviewconfiguration/limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](wkwebviewconfiguration/upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.

### Configuring the web view’s preferences

- [preferences](wkwebviewconfiguration/preferences.md): The object that manages the preference-related settings for the web view.
- [defaultWebpagePreferences](wkwebviewconfiguration/defaultwebpagepreferences.md): The default preferences to use when loading and rendering content.

### Adding handlers for custom URL schemes

- [setURLSchemeHandler:forURLScheme:](wkwebviewconfiguration/seturlschemehandler%28__forurlscheme_%29.md): Registers an object to load resources associated with the specified URL scheme.
- [urlSchemeHandlerForURLScheme:](wkwebviewconfiguration/urlschemehandler%28forurlscheme_%29.md): Returns the currently registered handler object for the specified URL scheme.

### Configuring the rendering behavior

- [ignoresViewportScaleLimits](wkwebviewconfiguration/ignoresviewportscalelimits.md): A Boolean value that determines whether a web view allows scaling of the webpage.
- [suppressesIncrementalRendering](wkwebviewconfiguration/suppressesincrementalrendering.md): A Boolean value that indicates whether the web view suppresses content rendering until the content is fully loaded into memory.

### Setting media playback preferences

- [allowsInlineMediaPlayback](wkwebviewconfiguration/allowsinlinemediaplayback.md): A Boolean value that indicates whether HTML5 videos play inline or use the native full-screen controller.
- [allowsAirPlayForMediaPlayback](wkwebviewconfiguration/allowsairplayformediaplayback.md): A Boolean value that indicates whether the web view allows media playback over AirPlay.
- [allowsPictureInPictureMediaPlayback](wkwebviewconfiguration/allowspictureinpicturemediaplayback.md): A Boolean value that indicates whether HTML5 videos can play Picture in Picture.
- [mediaTypesRequiringUserActionForPlayback](wkwebviewconfiguration/mediatypesrequiringuseractionforplayback.md): The media types that require a user gesture to begin playing.
- [WKAudiovisualMediaTypes](wkaudiovisualmediatypes.md): The media types that require a user gesture to begin playing.

### Identifying data types

- [dataDetectorTypes](wkwebviewconfiguration/datadetectortypes.md): The types of data detectors to apply to the web view’s content.
- [WKDataDetectorTypes](wkdatadetectortypes.md): The data detector types.

### Setting selection granularity

- [selectionGranularity](wkwebviewconfiguration/selectiongranularity.md): Deprecated. The level of granularity with which the user can interactively select web view content.
- [WKSelectionGranularity](wkselectiongranularity.md): Deprecated. The granularity with which the user can select and modify web view content.

### Selecting user interface directionality

- [userInterfaceDirectionPolicy](wkwebviewconfiguration/userinterfacedirectionpolicy.md): The directionality of user interface elements.
- [WKUserInterfaceDirectionPolicy](wkuserinterfacedirectionpolicy.md): The policy that determines the directionality of user interface elements in a web view.

### Deprecated

- [mediaPlaybackAllowsAirPlay](wkwebviewconfiguration/mediaplaybackallowsairplay.md): Deprecated. Deprecated property.
- [requiresUserActionForMediaPlayback](wkwebviewconfiguration/requiresuseractionformediaplayback.md): Deprecated. A Boolean value that indicates whether HTML5 videos require the user to start playing them (`true`) or whether the videos play automatically (`false`).
- [mediaPlaybackRequiresUserAction](wkwebviewconfiguration/mediaplaybackrequiresuseraction.md): Deprecated. Deprecated property.

### Instance Properties

- [allowsImmersiveEnvironments](wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [allowsInlinePredictions](wkwebviewconfiguration/allowsinlinepredictions.md)
- [showsSystemScreenTimeBlockingView](wkwebviewconfiguration/showssystemscreentimeblockingview.md)
- [supportsAdaptiveImageGlyph](wkwebviewconfiguration/supportsadaptiveimageglyph.md)
- [webExtensionController](wkwebviewconfiguration/webextensioncontroller.md)
- [writingToolsBehavior](wkwebviewconfiguration/writingtoolsbehavior.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Web view configuration

- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKInactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](wkwebview/fullscreenstate-swift.enum.md)
