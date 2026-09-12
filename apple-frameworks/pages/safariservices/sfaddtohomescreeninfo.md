> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfaddtohomescreeninfo](https://developer.apple.com/documentation/safariservices/sfaddtohomescreeninfo)

# SFAddToHomeScreenInfo (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · visionOS 2.2+

A class that provides information about a web app that someone adds to their Home Screen.

## Declaration

```swift
class SFAddToHomeScreenInfo
```

<a id="Overview"></a>

## Overview

Create an instance of `SFAddToHomeScreenInfo` in your [getHomeScreenWebAppInfo(completionHandler:)](sfaddtohomescreenactivityitem/gethomescreenwebappinfo%28completionhandler_%29.md) implementation. Configure the object with the web app’s manifest and the cookies your browser uses with the web app, then pass the object to the method’s completion handler.

## Topics

### Creating an information object

- [init(manifest:)](sfaddtohomescreeninfo/init%28manifest_%29.md): Initializes a Home Screen information object with the supplied web app manifest.

### Information about a web app

- [manifest](sfaddtohomescreeninfo/manifest.md)
- [websiteCookies](sfaddtohomescreeninfo/websitecookies.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Providing information about a web app to the system

- [getHomeScreenWebAppInfo(completionHandler:)](sfaddtohomescreenactivityitem/gethomescreenwebappinfo%28completionhandler_%29.md): Provides information about a web app to the system.
- [getWebAppManifest(completionHandler:)](sfaddtohomescreenactivityitem/getwebappmanifest%28completionhandler_%29.md): Deprecated. Provides the web app’s manifest to the system, if the bookmark represents a web app.

# SFAddToHomeScreenInfo (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · visionOS 2.2+

A class that provides information about a web app that someone adds to their Home Screen.

## Declaration

```objectivec
@interface SFAddToHomeScreenInfo : NSObject
```

<a id="Overview"></a>

## Overview

Create an instance of `SFAddToHomeScreenInfo` in your [getHomeScreenWebAppInfoWithCompletionHandler:](sfaddtohomescreenactivityitem/gethomescreenwebappinfo%28completionhandler_%29.md) implementation. Configure the object with the web app’s manifest and the cookies your browser uses with the web app, then pass the object to the method’s completion handler.

## Topics

### Creating an information object

- [initWithManifest:](sfaddtohomescreeninfo/init%28manifest_%29.md): Initializes a Home Screen information object with the supplied web app manifest.

### Information about a web app

- [manifest](sfaddtohomescreeninfo/manifest.md)
- [websiteCookies](sfaddtohomescreeninfo/websitecookies.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Providing information about a web app to the system

- [getHomeScreenWebAppInfoWithCompletionHandler:](sfaddtohomescreenactivityitem/gethomescreenwebappinfo%28completionhandler_%29.md): Provides information about a web app to the system.
- [getWebAppManifestWithCompletionHandler:](sfaddtohomescreenactivityitem/getwebappmanifest%28completionhandler_%29.md): Deprecated. Provides the web app’s manifest to the system, if the bookmark represents a web app.
