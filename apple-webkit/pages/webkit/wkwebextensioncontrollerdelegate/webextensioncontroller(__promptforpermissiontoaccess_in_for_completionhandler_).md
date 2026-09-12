> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:promptforpermissiontoaccess:in:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:promptforpermissiontoaccess:in:for:completionhandler:))

# webExtensionController(\_:promptForPermissionToAccess:in:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when an extension context requests access to a set of URLs.

## Declaration

```swift
optional func webExtensionController(_ controller: WKWebExtensionController, promptForPermissionToAccess urls: Set<URL>, in tab: (any WKWebExtensionTab)?, for extensionContext: WKWebExtensionContext, completionHandler: @escaping (Set<URL>, Date?) -> Void)
```

```swift
optional func webExtensionController(_ controller: WKWebExtensionController, promptForPermissionToAccess urls: Set<URL>, in tab: (any WKWebExtensionTab)?, for extensionContext: WKWebExtensionContext) async -> (Set<URL>, Date?)
```

## Parameters

- `controller`: The web extension controller that is managing the extension.
- `urls`: The set of URLs that the extension is requesting access to.
- `tab`: The tab in which the extension is running, or \\c nil if the request is not specific to a tab.
- `extensionContext`: The context in which the web extension is running.
- `completionHandler`: A block to be called with the set of allowed URLs and an optional expiration date.

<a id="discussion"></a>

## Discussion

This method should be implemented by the app to prompt the user for permission and call the completion handler with the set of URLs that were granted access to and an optional expiration date. If not implemented or the completion handler is not called within a reasonable amount of time, the request is assumed to have been denied. The expiration date can be used to specify when the URLs expire.

If `nil`, URLs are assumed to not expire.

# webExtensionController:promptForPermissionToAccessURLs:inTab:forExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when an extension context requests access to a set of URLs.

## Declaration

```objectivec
- (void) webExtensionController:(WKWebExtensionController *) controller promptForPermissionToAccessURLs:(NSSet<NSURL *> *) urls inTab:(id<WKWebExtensionTab>) tab forExtensionContext:(WKWebExtensionContext *) extensionContext completionHandler:(void (^)(NSSet<NSURL *> *allowedURLs, NSDate *expirationDate)) completionHandler;
```

## Parameters

- `controller`: The web extension controller that is managing the extension.
- `urls`: The set of URLs that the extension is requesting access to.
- `tab`: The tab in which the extension is running, or \\c nil if the request is not specific to a tab.
- `extensionContext`: The context in which the web extension is running.
- `completionHandler`: A block to be called with the set of allowed URLs and an optional expiration date.

<a id="discussion"></a>

## Discussion

This method should be implemented by the app to prompt the user for permission and call the completion handler with the set of URLs that were granted access to and an optional expiration date. If not implemented or the completion handler is not called within a reasonable amount of time, the request is assumed to have been denied. The expiration date can be used to specify when the URLs expire.

If `nil`, URLs are assumed to not expire.
