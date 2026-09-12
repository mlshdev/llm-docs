> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkforminfo](https://developer.apple.com/documentation/webkit/wkforminfo)

# WKFormInfo (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
@MainActor class WKFormInfo
```

<a id="overview"></a>

## Overview

A WKFormInfo object contains information about an in-progress form submission happening in a WKWebView

An instance of this class is a transient, data-only object; it does not uniquely identify a form across multiple delegate method calls.

## Topics

### Instance Properties

- [formValues](wkforminfo/formvalues.md)
- [httpMethod](wkforminfo/httpmethod.md)
- [sourceFrame](wkforminfo/sourceframe.md)
- [submissionURL](wkforminfo/submissionurl.md)
- [targetFrame](wkforminfo/targetframe.md)

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
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.

# WKFormInfo (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface WKFormInfo : NSObject
```

<a id="overview"></a>

## Overview

A WKFormInfo object contains information about an in-progress form submission happening in a WKWebView

An instance of this class is a transient, data-only object; it does not uniquely identify a form across multiple delegate method calls.

## Topics

### Instance Properties

- [formValues](wkforminfo/formvalues.md)
- [httpMethod](wkforminfo/httpmethod.md)
- [sourceFrame](wkforminfo/sourceframe.md)
- [submissionURL](wkforminfo/submissionurl.md)
- [targetFrame](wkforminfo/targetframe.md)

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
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
