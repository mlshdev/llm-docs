> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/websitedatastore](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/websitedatastore)

# websiteDataStore (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The object you use to get and set the site’s cookies and to track the cached data objects.

## Declaration

```swift
var websiteDataStore: WKWebsiteDataStore { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t assign a value to this property, the configuration object uses the default data store object to store data persistently. To create a private web-browsing session, create a nonpersistent data store using the [nonPersistent()](../wkwebsitedatastore/nonpersistent%28%29.md) method and assign it to this property. For more information, see [WKWebsiteDataStore](../wkwebsitedatastore.md).

## See Also

### Configuring the web view’s behavior

- [userContentController](usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [processPool](processpool.md): Deprecated. The object that coordinates the processes the web view uses to render its web content and execute scripts.
- [applicationNameForUserAgent](applicationnameforuseragent.md): The app name that appears in the user agent string.
- [limitsNavigationsToAppBoundDomains](limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.

# websiteDataStore (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The object you use to get and set the site’s cookies and to track the cached data objects.

## Declaration

```objectivec
@property (nonatomic, strong) WKWebsiteDataStore * websiteDataStore;
```

<a id="Discussion"></a>

## Discussion

If you don’t assign a value to this property, the configuration object uses the default data store object to store data persistently. To create a private web-browsing session, create a nonpersistent data store using the [nonPersistentDataStore](../wkwebsitedatastore/nonpersistent%28%29.md) method and assign it to this property. For more information, see [WKWebsiteDataStore](../wkwebsitedatastore.md).

## See Also

### Configuring the web view’s behavior

- [userContentController](usercontentcontroller.md): The object that coordinates interactions between your app’s native code and the webpage’s scripts and other content.
- [processPool](processpool.md): Deprecated. The object that coordinates the processes the web view uses to render its web content and execute scripts.
- [applicationNameForUserAgent](applicationnameforuseragent.md): The app name that appears in the user agent string.
- [limitsNavigationsToAppBoundDomains](limitsnavigationstoappbounddomains.md): A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
- [upgradeKnownHostsToHTTPS](upgradeknownhoststohttps.md): A Boolean value that indicates whether the web view should automatically upgrade supported HTTP requests to HTTPS.
