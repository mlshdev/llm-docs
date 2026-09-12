> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationaction](https://developer.apple.com/documentation/webkit/wknavigationaction)

# WKNavigationAction (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that contains information about an action that causes navigation to occur.

## Declaration

```swift
@MainActor class WKNavigationAction
```

<a id="overview"></a>

## Overview

Use a [WKNavigationAction](wknavigationaction.md) object to make policy decisions about whether to allow navigation within your app’s web view. You don’t create [WKNavigationAction](wknavigationaction.md) objects directly. Instead, the web view creates them and delivers them to the appropriate delegate objects. Use the methods of your delegate to analyze the action and determine whether to allow the resulting navigation to occur.

## Topics

### Getting the navigation type

- [navigationType](wknavigationaction/navigationtype.md): The type of action that triggered the navigation.
- [WKNavigationType](wknavigationtype.md): The type of action that triggered the navigation.

### Inspecting navigation information

- [request](wknavigationaction/request.md): The URL request object associated with the navigation action.
- [sourceFrame](wknavigationaction/sourceframe.md): The frame that requested the navigation.
- [targetFrame](wknavigationaction/targetframe.md): The frame in which to display the new content.
- [shouldPerformDownload](wknavigationaction/shouldperformdownload.md): A Boolean value that indicates whether the web content provided an attribute that indicates a download.

### Inspecting user actions

- [buttonNumber](wknavigationaction/buttonnumber.md): The number of the mouse button that caused the navigation request.
- [modifierFlags](wknavigationaction/modifierflags.md): The modifier keys that were pressed at the time of the navigation request.

### Instance Properties

- [isContentRuleListRedirect](wknavigationaction/iscontentrulelistredirect.md)
- [mainFrameNavigation](wknavigationaction/mainframenavigation.md)

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
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)

# WKNavigationAction (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that contains information about an action that causes navigation to occur.

## Declaration

```objectivec
@interface WKNavigationAction : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKNavigationAction](wknavigationaction.md) object to make policy decisions about whether to allow navigation within your app’s web view. You don’t create [WKNavigationAction](wknavigationaction.md) objects directly. Instead, the web view creates them and delivers them to the appropriate delegate objects. Use the methods of your delegate to analyze the action and determine whether to allow the resulting navigation to occur.

## Topics

### Getting the navigation type

- [navigationType](wknavigationaction/navigationtype.md): The type of action that triggered the navigation.
- [WKNavigationType](wknavigationtype.md): The type of action that triggered the navigation.

### Inspecting navigation information

- [request](wknavigationaction/request.md): The URL request object associated with the navigation action.
- [sourceFrame](wknavigationaction/sourceframe.md): The frame that requested the navigation.
- [targetFrame](wknavigationaction/targetframe.md): The frame in which to display the new content.
- [shouldPerformDownload](wknavigationaction/shouldperformdownload.md): A Boolean value that indicates whether the web content provided an attribute that indicates a download.

### Inspecting user actions

- [buttonNumber](wknavigationaction/buttonnumber.md): The number of the mouse button that caused the navigation request.
- [modifierFlags](wknavigationaction/modifierflags.md): The modifier keys that were pressed at the time of the navigation request.

### Instance Properties

- [isContentRuleListRedirect](wknavigationaction/iscontentrulelistredirect.md)
- [mainFrameNavigation](wknavigationaction/mainframenavigation.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Navigation

- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)
