> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/processpool](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/processpool)

# processPool (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

The object that coordinates the processes the web view uses to render its web content and execute scripts.

> Creating and using multiple instances of WKProcessPool no longer has any effect.

## Declaration

```swift
var processPool: WKProcessPool { get set }
```

<a id="Discussion"></a>

## Discussion

When it initializes a web view, WebKit either creates a new web content process in the specified pool, or uses an existing process from that pool.

## See Also

### Configuring the web view’s behavior

- [websiteDataStore](websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.
- [userContentController](usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [applicationNameForUserAgent](applicationnameforuseragent.md): The app name that appears in the user agent string.
- [limitsNavigationsToAppBoundDomains](limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.

# processPool (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

The object that coordinates the processes the web view uses to render its web content and execute scripts.

> Creating and using multiple instances of WKProcessPool no longer has any effect.

## Declaration

```objectivec
@property (nonatomic, strong) WKProcessPool * processPool;
```

<a id="Discussion"></a>

## Discussion

When it initializes a web view, WebKit either creates a new web content process in the specified pool, or uses an existing process from that pool.

## See Also

### Configuring the web view’s behavior

- [websiteDataStore](websitedatastore.md): The object you use to get and set the site’s cookies and to track the cached data objects.
- [userContentController](usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [applicationNameForUserAgent](applicationnameforuseragent.md): The app name that appears in the user agent string.
- [limitsNavigationsToAppBoundDomains](limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.
