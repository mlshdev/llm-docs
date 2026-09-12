> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigation](https://developer.apple.com/documentation/webkit/wknavigation)

# WKNavigation (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that tracks the loading progress of a webpage.

## Declaration

```swift
@MainActor class WKNavigation
```

<a id="overview"></a>

## Overview

A [WKNavigation](wknavigation.md) object uniquely identifies a load request for a webpage. When you ask a web view to load content or navigate to a page, the web view returns a [WKNavigation](wknavigation.md) object that identifies your request. As the load operation progresses, the web view reports progress of that operation to various methods of its navigation delegate, passing them the matching [WKNavigation](wknavigation.md) object.

## Topics

### Getting the Content Mode

- [effectiveContentMode](wknavigation/effectivecontentmode.md): The content mode WebKit uses to load the webpage.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Navigation

- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)

# WKNavigation (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that tracks the loading progress of a webpage.

## Declaration

```objectivec
@interface WKNavigation : NSObject
```

<a id="overview"></a>

## Overview

A [WKNavigation](wknavigation.md) object uniquely identifies a load request for a webpage. When you ask a web view to load content or navigate to a page, the web view returns a [WKNavigation](wknavigation.md) object that identifies your request. As the load operation progresses, the web view reports progress of that operation to various methods of its navigation delegate, passing them the matching [WKNavigation](wknavigation.md) object.

## Topics

### Getting the Content Mode

- [effectiveContentMode](wknavigation/effectivecontentmode.md): The content mode WebKit uses to load the webpage.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Navigation

- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)
