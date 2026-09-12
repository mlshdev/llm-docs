> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkbackforwardlistitem](https://developer.apple.com/documentation/webkit/wkbackforwardlistitem)

# WKBackForwardListItem (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A representation of a webpage that the web view previously visited.

## Declaration

```swift
@MainActor class WKBackForwardListItem
```

<a id="overview"></a>

## Overview

Use a [WKBackForwardListItem](wkbackforwardlistitem.md) object to get information about previously visited webpages. This object identifies the page’s title and URL. It also identifes the URL that requested the webpage.

You don’t create [WKBackForwardListItem](wkbackforwardlistitem.md) objects directly. Instead, a [WKBackForwardList](wkbackforwardlist.md) object creates them in conjunction with its associated web view when the web view loads new pages.

## Topics

### Getting the Page-Specific Information

- [title](wkbackforwardlistitem/title.md): The title of the webpage this item represents.
- [url](wkbackforwardlistitem/url.md): The URL of the webpage this item represents.

### Getting the Requesting Page

- [initialURL](wkbackforwardlistitem/initialurl.md): The source URL that originally asked the web view to load this page.

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
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)

# WKBackForwardListItem (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A representation of a webpage that the web view previously visited.

## Declaration

```objectivec
@interface WKBackForwardListItem : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKBackForwardListItem](wkbackforwardlistitem.md) object to get information about previously visited webpages. This object identifies the page’s title and URL. It also identifes the URL that requested the webpage.

You don’t create [WKBackForwardListItem](wkbackforwardlistitem.md) objects directly. Instead, a [WKBackForwardList](wkbackforwardlist.md) object creates them in conjunction with its associated web view when the web view loads new pages.

## Topics

### Getting the Page-Specific Information

- [title](wkbackforwardlistitem/title.md): The title of the webpage this item represents.
- [URL](wkbackforwardlistitem/url.md): The URL of the webpage this item represents.

### Getting the Requesting Page

- [initialURL](wkbackforwardlistitem/initialurl.md): The source URL that originally asked the web view to load this page.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Navigation

- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)
