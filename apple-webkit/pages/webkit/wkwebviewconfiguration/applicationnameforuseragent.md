> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/applicationnameforuseragent](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/applicationnameforuseragent)

# applicationNameForUserAgent (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The app name that appears in the user agent string.

## Declaration

```swift
var applicationNameForUserAgent: String? { get set }
```

## See Also

### Configuring the web view’s behavior

- [websiteDataStore](websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.
- [userContentController](usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [processPool](processpool.md): Deprecated. The object that coordinates the processes the web view uses to render its web content and execute scripts.
- [limitsNavigationsToAppBoundDomains](limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.

# applicationNameForUserAgent (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The app name that appears in the user agent string.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * applicationNameForUserAgent;
```

## See Also

### Configuring the web view’s behavior

- [websiteDataStore](websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.
- [userContentController](usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [processPool](processpool.md): Deprecated. The object that coordinates the processes the web view uses to render its web content and execute scripts.
- [limitsNavigationsToAppBoundDomains](limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.
