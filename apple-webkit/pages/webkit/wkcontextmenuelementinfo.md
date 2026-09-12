> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontextmenuelementinfo](https://developer.apple.com/documentation/webkit/wkcontextmenuelementinfo)

# WKContextMenuElementInfo (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that contains information about a link the user clicked in a webpage, and which you use to configure a context menu for that link.

## Declaration

```swift
@MainActor class WKContextMenuElementInfo
```

<a id="overview"></a>

## Overview

A [WKContextMenuElementInfo](wkcontextmenuelementinfo.md) object contains the URL of a link in the web view’s content. You don’t create instances of this class directly. Instead, the web view creates them and passes them to the methods of its associated [WKUIDelegate](wkuidelegate.md) object when the user interacts with the link. In your delegate method implementations, use the URL in this object to determine how to configure the contextual menu.

## Topics

### Getting the Element Information

- [linkURL](wkcontextmenuelementinfo/linkurl.md): The URL of the link that the user clicked.

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

# WKContextMenuElementInfo (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that contains information about a link the user clicked in a webpage, and which you use to configure a context menu for that link.

## Declaration

```objectivec
@interface WKContextMenuElementInfo : NSObject
```

<a id="overview"></a>

## Overview

A [WKContextMenuElementInfo](wkcontextmenuelementinfo.md) object contains the URL of a link in the web view’s content. You don’t create instances of this class directly. Instead, the web view creates them and passes them to the methods of its associated [WKUIDelegate](wkuidelegate.md) object when the user interacts with the link. In your delegate method implementations, use the URL in this object to determine how to configure the contextual menu.

## Topics

### Getting the Element Information

- [linkURL](wkcontextmenuelementinfo/linkurl.md): The URL of the link that the user clicked.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
