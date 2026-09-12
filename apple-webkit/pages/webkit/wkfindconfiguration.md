> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkfindconfiguration](https://developer.apple.com/documentation/webkit/wkfindconfiguration)

# WKFindConfiguration (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

The configuration parameters to use when searching the contents of the web view.

## Declaration

```swift
@MainActor class WKFindConfiguration
```

<a id="overview"></a>

## Overview

Create a [WKFindConfiguration](wkfindconfiguration.md) object and configure its attributes to specify how to perform searches within the web view’s contents. To initiate a search, call the appropriate method of [WKWebView](wkwebview.md) and pass this object along with the search string.

## Topics

### Configuring the Search Parameters

- [backwards](wkfindconfiguration/backwards.md): A Boolean value that indicates the search direction, relative to the current selection.
- [caseSensitive](wkfindconfiguration/casesensitive.md): A Boolean value that indicates whether to consider case when matching the search string.
- [wraps](wkfindconfiguration/wraps.md): A Boolean value that indicates whether the search wraps around to the other side of the page.

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

### Related Documentation

- [find(\_:configuration:completionHandler:)](wkwebview/find%28__configuration_completionhandler_%29.md): Searches for the specified string in the web view’s content.

### Page-level search

- [WKFindResult](wkfindresult.md): An object that contains the results of searching the web view’s contents.

# WKFindConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

The configuration parameters to use when searching the contents of the web view.

## Declaration

```objectivec
@interface WKFindConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Create a [WKFindConfiguration](wkfindconfiguration.md) object and configure its attributes to specify how to perform searches within the web view’s contents. To initiate a search, call the appropriate method of [WKWebView](wkwebview.md) and pass this object along with the search string.

## Topics

### Configuring the Search Parameters

- [backwards](wkfindconfiguration/backwards.md): A Boolean value that indicates the search direction, relative to the current selection.
- [caseSensitive](wkfindconfiguration/casesensitive.md): A Boolean value that indicates whether to consider case when matching the search string.
- [wraps](wkfindconfiguration/wraps.md): A Boolean value that indicates whether the search wraps around to the other side of the page.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [findString:withConfiguration:completionHandler:](wkwebview/findstring_withconfiguration_completionhandler_.md): Searches for the specified string in the web view’s content.

### Page-level search

- [WKFindResult](wkfindresult.md): An object that contains the results of searching the web view’s contents.
