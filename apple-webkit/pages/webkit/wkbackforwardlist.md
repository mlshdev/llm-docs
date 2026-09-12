> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkbackforwardlist](https://developer.apple.com/documentation/webkit/wkbackforwardlist)

# WKBackForwardList (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.

## Declaration

```swift
@MainActor class WKBackForwardList
```

<a id="overview"></a>

## Overview

Use a [WKBackForwardList](wkbackforwardlist.md) object to retrieve a web view’s previously loaded pages. Typically, you don’t create [WKBackForwardList](wkbackforwardlist.md) objects directly. Each web view creates one automatically and uses it to store the history of all loaded pages. Fetch this object from your web view’s [backForwardList](wkwebview/backforwardlist.md) property and use its contents to facilitate programmatic navigation.

## Topics

### Getting the Most Recent Items

- [backItem](wkbackforwardlist/backitem.md): The item immediately preceding the current item, if any.
- [currentItem](wkbackforwardlist/currentitem.md): The current item.
- [forwardItem](wkbackforwardlist/forwarditem.md): The item immediately following the current item, if any.

### Getting Specific Items in the List

- [item(at:)](wkbackforwardlist/item%28at_%29.md): Returns the item at the relative offset from the current item.

### Getting Sublists

- [backList](wkbackforwardlist/backlist.md): The array of items that precede the current item.
- [forwardList](wkbackforwardlist/forwardlist.md): The array of items that follow the current item.

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
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)

# WKBackForwardList (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.

## Declaration

```objectivec
@interface WKBackForwardList : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKBackForwardList](wkbackforwardlist.md) object to retrieve a web view’s previously loaded pages. Typically, you don’t create [WKBackForwardList](wkbackforwardlist.md) objects directly. Each web view creates one automatically and uses it to store the history of all loaded pages. Fetch this object from your web view’s [backForwardList](wkwebview/backforwardlist.md) property and use its contents to facilitate programmatic navigation.

## Topics

### Getting the Most Recent Items

- [backItem](wkbackforwardlist/backitem.md): The item immediately preceding the current item, if any.
- [currentItem](wkbackforwardlist/currentitem.md): The current item.
- [forwardItem](wkbackforwardlist/forwarditem.md): The item immediately following the current item, if any.

### Getting Specific Items in the List

- [itemAtIndex:](wkbackforwardlist/item%28at_%29.md): Returns the item at the relative offset from the current item.

### Getting Sublists

- [backList](wkbackforwardlist/backlist.md): The array of items that precede the current item.
- [forwardList](wkbackforwardlist/forwardlist.md): The array of items that follow the current item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Navigation

- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)
