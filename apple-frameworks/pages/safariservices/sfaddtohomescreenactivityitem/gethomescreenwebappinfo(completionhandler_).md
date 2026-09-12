> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfaddtohomescreenactivityitem/gethomescreenwebappinfo(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfaddtohomescreenactivityitem/gethomescreenwebappinfo(completionhandler:))

# getHomeScreenWebAppInfo(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

Provides information about a web app to the system.

## Declaration

```swift
optional func getHomeScreenWebAppInfo(completionHandler: @escaping @Sendable (SFAddToHomeScreenInfo?) -> Void)
```

```swift
optional func homeScreenWebAppInfo() async -> SFAddToHomeScreenInfo?
```

## Parameters

- `completionHandler`: A closure that you call to supply the web app’s information to the system.

<a id="Overview"></a>

## Overview

Add information about the web app to a [SFAddToHomeScreenInfo](../sfaddtohomescreeninfo.md) object that you create, and pass it to the completion handler.

The system only calls this method in browser apps that include an alternative browser engine. If you implement this method, then the system doesn’t call your implementation of [getWebAppManifest(completionHandler:)](getwebappmanifest%28completionhandler_%29.md).

## See Also

### Providing information about a web app to the system

- [SFAddToHomeScreenInfo](../sfaddtohomescreeninfo.md): A class that provides information about a web app that someone adds to their Home Screen.
- [getWebAppManifest(completionHandler:)](getwebappmanifest%28completionhandler_%29.md): Deprecated. Provides the web app’s manifest to the system, if the bookmark represents a web app.

# getHomeScreenWebAppInfoWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

Provides information about a web app to the system.

## Declaration

```objectivec
- (void) getHomeScreenWebAppInfoWithCompletionHandler:(void (^)(SFAddToHomeScreenInfo *)) completionHandler;
```

## Parameters

- `completionHandler`: A closure that you call to supply the web app’s information to the system.

<a id="Overview"></a>

## Overview

Add information about the web app to a [SFAddToHomeScreenInfo](../sfaddtohomescreeninfo.md) object that you create, and pass it to the completion handler.

The system only calls this method in browser apps that include an alternative browser engine. If you implement this method, then the system doesn’t call your implementation of [getWebAppManifestWithCompletionHandler:](getwebappmanifest%28completionhandler_%29.md).

## See Also

### Providing information about a web app to the system

- [SFAddToHomeScreenInfo](../sfaddtohomescreeninfo.md): A class that provides information about a web app that someone adds to their Home Screen.
- [getWebAppManifestWithCompletionHandler:](getwebappmanifest%28completionhandler_%29.md): Deprecated. Provides the web app’s manifest to the system, if the bookmark represents a web app.
