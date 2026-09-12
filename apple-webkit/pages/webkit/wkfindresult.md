> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkfindresult](https://developer.apple.com/documentation/webkit/wkfindresult)

# WKFindResult (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

An object that contains the results of searching the web view’s contents.

## Declaration

```swift
@MainActor class WKFindResult
```

<a id="overview"></a>

## Overview

When you perform a search using the methods of [WKWebView](wkwebview.md), the web view creates a [WKFindResult](wkfindresult.md) object and delivers it to your completion handler. You don’t create instances of this class directly. Use the objects that the web view provides to determine whether it found a match for the content.

## Topics

### Getting the Search Result

- [matchFound](wkfindresult/matchfound.md): A Boolean value that indicates whether the web view found a match during the search.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Page-level search

- [WKFindConfiguration](wkfindconfiguration.md): The configuration parameters to use when searching the contents of the web view.

# WKFindResult (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

An object that contains the results of searching the web view’s contents.

## Declaration

```objectivec
@interface WKFindResult : NSObject
```

<a id="overview"></a>

## Overview

When you perform a search using the methods of [WKWebView](wkwebview.md), the web view creates a [WKFindResult](wkfindresult.md) object and delivers it to your completion handler. You don’t create instances of this class directly. Use the objects that the web view provides to determine whether it found a match for the content.

## Topics

### Getting the Search Result

- [matchFound](wkfindresult/matchfound.md): A Boolean value that indicates whether the web view found a match during the search.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Page-level search

- [WKFindConfiguration](wkfindconfiguration.md): The configuration parameters to use when searching the contents of the web view.
