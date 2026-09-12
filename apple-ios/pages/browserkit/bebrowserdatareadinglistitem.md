> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdatareadinglistitem](https://developer.apple.com/documentation/browserkit/bebrowserdatareadinglistitem)

# BEBrowserDataReadingListItem (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that transfers reading list data between browsers.

## Declaration

```swift
class BEBrowserDataReadingListItem
```

<a id="overview"></a>

## Overview

This class represents an article or webpage in a reading list, including a URL, a title, and the date the item was last opened.

## Topics

### Creating a reading list item

- [init(title:url:dateOfLastVisit:)](bebrowserdatareadinglistitem/init%28title_url_dateoflastvisit_%29.md): Initializes a reading list item with the given content and access metadata.

### Accessing item properties

- [dateOfLastVisit](bebrowserdatareadinglistitem/dateoflastvisit.md): The date of the person’s last visit.
- [title](bebrowserdatareadinglistitem/title.md): A localized title for a reading list item.
- [url](bebrowserdatareadinglistitem/url.md): A URL for the reading list item.

## Relationships

### Inherits From

- [BEBrowserData](bebrowserdata.md)

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
- [BEBrowserDataExtension](bebrowserdataextension.md): A class that transfers browser extension information between browsers.
- [BEBrowserData](bebrowserdata.md): A representation of browsing data from a source browser app.

# BEBrowserDataReadingListItem (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that transfers reading list data between browsers.

## Declaration

```objectivec
@interface BEBrowserDataReadingListItem : BEBrowserData
```

<a id="overview"></a>

## Overview

This class represents an article or webpage in a reading list, including a URL, a title, and the date the item was last opened.

## Topics

### Creating a reading list item

- [initWithTitle:url:dateOfLastVisit:](bebrowserdatareadinglistitem/init%28title_url_dateoflastvisit_%29.md): Initializes a reading list item with the given content and access metadata.

### Accessing item properties

- [dateOfLastVisit](bebrowserdatareadinglistitem/dateoflastvisit.md): The date of the person’s last visit.
- [title](bebrowserdatareadinglistitem/title.md): A localized title for a reading list item.
- [url](bebrowserdatareadinglistitem/url.md): A URL for the reading list item.

## Relationships

### Inherits From

- [BEBrowserData](bebrowserdata.md)

## See Also

### Browser data

- [BEBrowserDataHistoryVisit](bebrowserdatahistoryvisit.md): A class that transfers page visit history between browsers.
- [BEBrowserDataBookmark](bebrowserdatabookmark.md): A class that transfers bookmark information between browsers.
- [BEBrowserDataExtension](bebrowserdataextension.md): A class that transfers browser extension information between browsers.
- [BEBrowserData](bebrowserdata.md): A representation of browsing data from a source browser app.
