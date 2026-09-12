> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdata](https://developer.apple.com/documentation/browserkit/bebrowserdata)

# BEBrowserData (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A representation of browsing data from a source browser app.

## Declaration

```swift
class BEBrowserData
```

<a id="overview"></a>

## Overview

This class describes the source of browsing data that transfers between browsers. It identifies the browser that data originates from by providing its bundle ID and localized display name.

## Topics

### Creating a representation of browser data

- [init(coder:)](bebrowserdata/init%28coder_%29.md): Initializes browser data from a decoder.
- [init(sourceApplicationBundleIdentifier:sourceApplicationLocalizedName:)](bebrowserdata/init%28sourceapplicationbundleidentifier_sourceapplicationlocalizedname_%29.md): Initializes browser data with the source app’s identifier and display name.

### Identifying the source browser app

- [sourceApplicationBundleIdentifier](bebrowserdata/sourceapplicationbundleidentifier.md): The source browser app’s bundle identifier.
- [sourceApplicationLocalizedName](bebrowserdata/sourceapplicationlocalizedname.md): The source browser app’s localized name.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [BEBrowserDataBookmark](bebrowserdatabookmark.md)
- [BEBrowserDataExtension](bebrowserdataextension.md)
- [BEBrowserDataHistoryVisit](bebrowserdatahistoryvisit.md)
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Browser data

- [BEBrowserDataHistoryVisit](bebrowserdatahistoryvisit.md): A class that transfers page visit history between browsers.
- [BEBrowserDataBookmark](bebrowserdatabookmark.md): A class that transfers bookmark information between browsers.
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserDataExtension](bebrowserdataextension.md): A class that transfers browser extension information between browsers.

# BEBrowserData (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A representation of browsing data from a source browser app.

## Declaration

```objectivec
@interface BEBrowserData : NSObject
```

<a id="overview"></a>

## Overview

This class describes the source of browsing data that transfers between browsers. It identifies the browser that data originates from by providing its bundle ID and localized display name.

## Topics

### Creating a representation of browser data

- [initWithSourceApplicationBundleIdentifier:sourceApplicationLocalizedName:](bebrowserdata/init%28sourceapplicationbundleidentifier_sourceapplicationlocalizedname_%29.md): Initializes browser data with the source app’s identifier and display name.

### Identifying the source browser app

- [sourceApplicationBundleIdentifier](bebrowserdata/sourceapplicationbundleidentifier.md): The source browser app’s bundle identifier.
- [sourceApplicationLocalizedName](bebrowserdata/sourceapplicationlocalizedname.md): The source browser app’s localized name.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [BEBrowserDataBookmark](bebrowserdatabookmark.md)
- [BEBrowserDataExtension](bebrowserdataextension.md)
- [BEBrowserDataHistoryVisit](bebrowserdatahistoryvisit.md)
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Browser data

- [BEBrowserDataHistoryVisit](bebrowserdatahistoryvisit.md): A class that transfers page visit history between browsers.
- [BEBrowserDataBookmark](bebrowserdatabookmark.md): A class that transfers bookmark information between browsers.
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserDataExtension](bebrowserdataextension.md): A class that transfers browser extension information between browsers.
