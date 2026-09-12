> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/usercontentcontroller](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/usercontentcontroller)

# userContentController (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.

## Declaration

```swift
var userContentController: WKUserContentController { get set }
```

## See Also

### Configuring the web view’s behavior

- [websiteDataStore](websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.
- [processPool](processpool.md): Deprecated. The object that coordinates the processes the web view uses to render its web content and execute scripts.
- [applicationNameForUserAgent](applicationnameforuseragent.md): The app name that appears in the user agent string.
- [limitsNavigationsToAppBoundDomains](limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.

# userContentController (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.

## Declaration

```objectivec
@property (nonatomic, strong) WKUserContentController * userContentController;
```

## See Also

### Configuring the web view’s behavior

- [websiteDataStore](websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.
- [processPool](processpool.md): Deprecated. The object that coordinates the processes the web view uses to render its web content and execute scripts.
- [applicationNameForUserAgent](applicationnameforuseragent.md): The app name that appears in the user agent string.
- [limitsNavigationsToAppBoundDomains](limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.
