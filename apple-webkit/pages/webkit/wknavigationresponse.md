> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationresponse](https://developer.apple.com/documentation/webkit/wknavigationresponse)

# WKNavigationResponse (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.

## Declaration

```swift
@MainActor class WKNavigationResponse
```

<a id="overview"></a>

## Overview

Use a [WKNavigationResponse](wknavigationresponse.md) object to make policy decisions about whether to allow navigation within your app’s web view. You don’t create [WKNavigationResponse](wknavigationresponse.md) objects directly. Instead, the web view creates them and delivers them to the appropriate delegate objects. Use the methods of your delegate to analyze the response and determine whether to allow the resulting navigation to occur.

## Topics

### Getting the Response Details

- [response](wknavigationresponse/response.md): The frame’s response.

### Getting Additional Response Information

- [canShowMIMEType](wknavigationresponse/canshowmimetype.md): A Boolean value that indicates whether WebKit is capable of displaying the response’s MIME type natively.
- [isForMainFrame](wknavigationresponse/isformainframe.md): A Boolean value that indicates whether the response targets the web view’s main frame.

### Instance Properties

- [mainFrameNavigation](wknavigationresponse/mainframenavigation.md)

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
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKFormInfo](wkforminfo.md)

# WKNavigationResponse (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.

## Declaration

```objectivec
@interface WKNavigationResponse : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKNavigationResponse](wknavigationresponse.md) object to make policy decisions about whether to allow navigation within your app’s web view. You don’t create [WKNavigationResponse](wknavigationresponse.md) objects directly. Instead, the web view creates them and delivers them to the appropriate delegate objects. Use the methods of your delegate to analyze the response and determine whether to allow the resulting navigation to occur.

## Topics

### Getting the Response Details

- [response](wknavigationresponse/response.md): The frame’s response.

### Getting Additional Response Information

- [canShowMIMEType](wknavigationresponse/canshowmimetype.md): A Boolean value that indicates whether WebKit is capable of displaying the response’s MIME type natively.
- [forMainFrame](wknavigationresponse/isformainframe.md): A Boolean value that indicates whether the response targets the web view’s main frame.

### Instance Properties

- [mainFrameNavigation](wknavigationresponse/mainframenavigation.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Navigation

- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKFormInfo](wkforminfo.md)
