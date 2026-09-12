> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataextension](https://developer.apple.com/documentation/browserkit/bebrowserdataextension)

# BEBrowserDataExtension (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that transfers browser extension information between browsers.

## Declaration

```swift
class BEBrowserDataExtension
```

<a id="overview"></a>

## Overview

This class represents an extension with its identifying metadata, including display name, developer information, and App Store identifier. The identifier allows browsers to help people discover and install equivalent extensions when transferring browsing data.

## Topics

### Creating an extension

- [init(displayName:developerName:identifier:storeIdentifier:)](bebrowserdataextension/init%28displayname_developername_identifier_storeidentifier_%29.md): Initializes an extension with its identifying information and App Store reference.

### Accessing extension metadata

- [developerName](bebrowserdataextension/developername.md): An extension developer’s name.
- [displayName](bebrowserdataextension/displayname.md): An extension’s localized display name.
- [identifier](bebrowserdataextension/identifier.md): A unique identifier for an extension.
- [storeIdentifier](bebrowserdataextension/storeidentifier.md): An identifier that locates the extension in the App Store.

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
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserData](bebrowserdata.md): A representation of browsing data from a source browser app.

# BEBrowserDataExtension (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that transfers browser extension information between browsers.

## Declaration

```objectivec
@interface BEBrowserDataExtension : BEBrowserData
```

<a id="overview"></a>

## Overview

This class represents an extension with its identifying metadata, including display name, developer information, and App Store identifier. The identifier allows browsers to help people discover and install equivalent extensions when transferring browsing data.

## Topics

### Creating an extension

- [initWithDisplayName:developerName:identifier:storeIdentifier:](bebrowserdataextension/init%28displayname_developername_identifier_storeidentifier_%29.md): Initializes an extension with its identifying information and App Store reference.

### Accessing extension metadata

- [developerName](bebrowserdataextension/developername.md): An extension developer’s name.
- [displayName](bebrowserdataextension/displayname.md): An extension’s localized display name.
- [identifier](bebrowserdataextension/identifier.md): A unique identifier for an extension.
- [storeIdentifier](bebrowserdataextension/storeidentifier.md): An identifier that locates the extension in the App Store.

## Relationships

### Inherits From

- [BEBrowserData](bebrowserdata.md)

## See Also

### Browser data

- [BEBrowserDataHistoryVisit](bebrowserdatahistoryvisit.md): A class that transfers page visit history between browsers.
- [BEBrowserDataBookmark](bebrowserdatabookmark.md): A class that transfers bookmark information between browsers.
- [BEBrowserDataReadingListItem](bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserData](bebrowserdata.md): A representation of browsing data from a source browser app.
