> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration](https://developer.apple.com/documentation/webkit/webpage/configuration)

# WebPage.Configuration

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A configuration type that specifies the preferences and behaviors of a webpage.

## Declaration

```swift
@MainActor struct Configuration
```

## Topics

### Initializers

- [init()](configuration/init%28%29.md): Creates a new configuration value.

### Instance Properties

- [allowsAirPlayForMediaPlayback](configuration/allowsairplayformediaplayback.md): Indicates whether the webpage allows media playback over AirPlay.
- [allowsImmersiveEnvironments](configuration/allowsimmersiveenvironments.md): Indicates whether website immersive environments are allowed.
- [allowsInlinePredictions](configuration/allowsinlinepredictions.md): Indicates whether inline predictions are allowed.
- [applicationNameForUserAgent](configuration/applicationnameforuseragent.md): The app name that appears in the user agent string.
- [dataDetectorTypes](configuration/datadetectortypes.md): The types of data detectors to apply to the webpage’s content.
- [defaultNavigationPreferences](configuration/defaultnavigationpreferences.md): The default preferences to use when loading and rendering content.
- [deviceSensorAuthorization](configuration/devicesensorauthorization.md): Allows specifying how web resources may access device sensors.
- [ignoresViewportScaleLimits](configuration/ignoresviewportscalelimits.md): Determines whether a webpage allows scaling of the webpage.
- [limitsNavigationsToAppBoundDomains](configuration/limitsnavigationstoappbounddomains.md): Indicates whether the web view limits navigation to pages within the app’s domain.
- [loadsSubresources](configuration/loadssubresources.md): Indicates whether the webpage loads all of its subresources in addition to the main resource.
- [mediaPlaybackBehavior](configuration/mediaplaybackbehavior-swift.property.md): Indicates whether HTML5 videos play inline or use the native full-screen controller.
- [showsSystemScreenTimeBlockingView](configuration/showssystemscreentimeblockingview.md): Indicates whether the webpage should use the system Screen Time blocking view.
- [supportsAdaptiveImageGlyph](configuration/supportsadaptiveimageglyph.md): Indicates whether insertion of adaptive image glyphs is allowed.
- [suppressesIncrementalRendering](configuration/suppressesincrementalrendering.md): Indicates whether the web view suppresses content rendering until the content is fully loaded into memory.
- [upgradeKnownHostsToHTTPS](configuration/upgradeknownhoststohttps.md): Indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.
- [urlSchemeHandlers](configuration/urlschemehandlers.md): Allows registering an object to load resources associated with a specified URL scheme.
- [userContentController](configuration/usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [userInterfaceDirectionPolicy](configuration/userinterfacedirectionpolicy.md): The directionality of user interface elements.
- [webExtensionController](configuration/webextensioncontroller.md): The web extension controller to associate with the webpage.
- [websiteDataStore](configuration/websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.

### Enumerations

- [WebPage.Configuration.MediaPlaybackBehavior](configuration/mediaplaybackbehavior-swift.enum.md): The behavior used when playing HTML video within a page.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a WebPage

- [WebPage.DeviceSensorAuthorization](devicesensorauthorization.md): A type that describes the authorization permissions policy for the device’s sensors a web resource may access.
- [URLScheme](../urlscheme.md): A type representing a valid URL scheme.
- [URLSchemeHandler](../urlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [URLSchemeTaskResult](../urlschemetaskresult.md): A value used as part of a sequence of results from a [URLSchemeHandler](../urlschemehandler.md), which can either be a `Data` or a `URLResponse`.
- [WebPage.Configuration.MediaPlaybackBehavior](configuration/mediaplaybackbehavior-swift.enum.md): The behavior used when playing HTML video within a page.
- [WebPage.DeviceSensorAuthorization.Permission](devicesensorauthorization/permission.md): The kind of sensor permission a web resource may request to access.
