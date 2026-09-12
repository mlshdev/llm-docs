> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdatabookmark](https://developer.apple.com/documentation/browserkit/bebrowserdatabookmark)

# BEBrowserDataBookmark (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that transfers bookmark information between browsers.

## Declaration

```swift
class BEBrowserDataBookmark
```

<a id="overview"></a>

## Overview

This class represents a single bookmark or bookmark folder with its associated metadata including title, URL, and relationship to other bookmarks. Bookmarks reside in a folder structure according to the [parentIdentifier](bebrowserdatabookmark/parentidentifier.md) property.

## Topics

### Creating a bookmark

- [init(isFolder:title:identifier:url:parentIdentifier:)](bebrowserdatabookmark/init%28isfolder_title_identifier_url_parentidentifier_%29.md): Creates a bookmark.

### Accessing bookmark properties

- [identifier](bebrowserdatabookmark/identifier.md): A unique identifier for a bookmark.
- [isFolder](bebrowserdatabookmark/isfolder.md): A Boolean value that indicates whether a bookmark represents a folder.
- [title](bebrowserdatabookmark/title.md): A localized title for a bookmark.
- [url](bebrowserdatabookmark/url.md): A URL to which a bookmark points.

### Managing bookmark hierarchy

- [parentIdentifier](bebrowserdatabookmark/parentidentifier.md): A string that identifies the bookmark’s parent folder.

### Initializers

- [init(asFolder:title:identifier:url:parentIdentifier:)](bebrowserdatabookmark/init%28asfolder_title_identifier_url_parentidentifier_%29.md)

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
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserDataExtension](bebrowserdataextension.md): A class that transfers browser extension information between browsers.
- [BEBrowserData](bebrowserdata.md): A representation of browsing data from a source browser app.

# BEBrowserDataBookmark (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that transfers bookmark information between browsers.

## Declaration

```objectivec
@interface BEBrowserDataBookmark : BEBrowserData
```

<a id="overview"></a>

## Overview

This class represents a single bookmark or bookmark folder with its associated metadata including title, URL, and relationship to other bookmarks. Bookmarks reside in a folder structure according to the [parentIdentifier](bebrowserdatabookmark/parentidentifier.md) property.

## Topics

### Creating a bookmark

- [initAsFolder:title:identifier:url:parentIdentifier:](bebrowserdatabookmark/init%28isfolder_title_identifier_url_parentidentifier_%29.md): Creates a bookmark.

### Accessing bookmark properties

- [identifier](bebrowserdatabookmark/identifier.md): A unique identifier for a bookmark.
- [isFolder](bebrowserdatabookmark/isfolder.md): A Boolean value that indicates whether a bookmark represents a folder.
- [title](bebrowserdatabookmark/title.md): A localized title for a bookmark.
- [url](bebrowserdatabookmark/url.md): A URL to which a bookmark points.

### Managing bookmark hierarchy

- [parentIdentifier](bebrowserdatabookmark/parentidentifier.md): A string that identifies the bookmark’s parent folder.

## Relationships

### Inherits From

- [BEBrowserData](bebrowserdata.md)

## See Also

### Browser data

- [BEBrowserDataHistoryVisit](bebrowserdatahistoryvisit.md): A class that transfers page visit history between browsers.
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserDataExtension](bebrowserdataextension.md): A class that transfers browser extension information between browsers.
- [BEBrowserData](bebrowserdata.md): A representation of browsing data from a source browser app.
