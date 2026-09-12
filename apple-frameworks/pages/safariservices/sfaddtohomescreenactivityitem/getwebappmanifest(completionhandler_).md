> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfaddtohomescreenactivityitem/getwebappmanifest(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfaddtohomescreenactivityitem/getwebappmanifest(completionhandler:))

# getWebAppManifest(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ (deprecated in 27.0) · iPadOS 17.5+ (deprecated in 27.0) · Mac Catalyst 17.5+ (deprecated in 27.0) · visionOS 1.2+ (deprecated in 27.0)

Provides the web app’s manifest to the system, if the bookmark represents a web app.

> Create a SFAddToHomeScreenInfo instead

## Declaration

```swift
optional func getWebAppManifest(completionHandler: @escaping @Sendable (BEWebAppManifest?) -> Void)
```

```swift
optional func webAppManifest() async -> BEWebAppManifest?
```

## Parameters

- `completionHandler`: A closure that you call to supply the web app manifest to the system.

<a id="Discussion"></a>

## Discussion

The system only calls this method in browser apps that include an alternative browser engine.

## See Also

### Providing information about a web app to the system

- [getHomeScreenWebAppInfo(completionHandler:)](gethomescreenwebappinfo%28completionhandler_%29.md): Provides information about a web app to the system.
- [SFAddToHomeScreenInfo](../sfaddtohomescreeninfo.md): A class that provides information about a web app that someone adds to their Home Screen.

# getWebAppManifestWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ (deprecated in 27.0) · iPadOS 17.5+ (deprecated in 27.0) · Mac Catalyst 17.5+ (deprecated in 27.0) · visionOS 1.2+ (deprecated in 27.0)

Provides the web app’s manifest to the system, if the bookmark represents a web app.

> Create a SFAddToHomeScreenInfo instead

## Declaration

```objectivec
- (void) getWebAppManifestWithCompletionHandler:(void (^)(BEWebAppManifest *)) completionHandler;
```

## Parameters

- `completionHandler`: A closure that you call to supply the web app manifest to the system.

<a id="Discussion"></a>

## Discussion

The system only calls this method in browser apps that include an alternative browser engine.

## See Also

### Providing information about a web app to the system

- [getHomeScreenWebAppInfoWithCompletionHandler:](gethomescreenwebappinfo%28completionhandler_%29.md): Provides information about a web app to the system.
- [SFAddToHomeScreenInfo](../sfaddtohomescreeninfo.md): A class that provides information about a web app that someone adds to their Home Screen.
