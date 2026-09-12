> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersynccontroller](https://developer.apple.com/documentation/findersync/fifindersynccontroller)

# FIFinderSyncController (Swift)

**Framework:** Finder Sync  
**Kind:** Class  
**Availability:** macOS 10.10+

A controller that acts as a bridge between your Finder Sync extension and the Finder itself.

## Declaration

```swift
class FIFinderSyncController
```

<a id="overview"></a>

## Overview

Use the Finder Sync controller to configure your extension, to set badges on items in the Finder’s window, and to get a list of selected and targeted items.

## Topics

### Managing the Finder Sync Controller

- [default()](fifindersynccontroller/default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](fifindersynccontroller/directoryurls.md): The directories managed by this extension.
- [selectedItemURLs()](fifindersynccontroller/selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier(\_:for:)](fifindersynccontroller/setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage(\_:label:forBadgeIdentifier:)](fifindersynccontroller/setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL()](fifindersynccontroller/targetedurl%28%29.md): Returns the URL of the Finder’s current target.

### Instance Methods

- [lastUsedDateForItem(with:)](fifindersynccontroller/lastuseddateforitem%28with_%29.md)
- [setLastUsedDate(\_:forItemWith:completion:)](fifindersynccontroller/setlastuseddate%28__foritemwith_completion_%29.md)
- [setTagData(\_:forItemWith:completion:)](fifindersynccontroller/settagdata%28__foritemwith_completion_%29.md)
- [tagDataForItem(with:)](fifindersynccontroller/tagdataforitem%28with_%29.md)

### Type Properties

- [isExtensionEnabled](fifindersynccontroller/isextensionenabled.md)

### Type Methods

- [showExtensionManagementInterface()](fifindersynccontroller/showextensionmanagementinterface%28%29.md)

## Relationships

### Inherits From

- [NSExtensionContext](https://developer.apple.com/documentation/foundation/nsextensioncontext)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [FIFinderSync](fifindersync-swift.class.md): A type to subclass to add badges, custom shortcut menus, and toolbar buttons to the Finder.

# FIFinderSyncController (Objective-C)

**Framework:** Finder Sync  
**Kind:** Class  
**Availability:** macOS 10.10+

A controller that acts as a bridge between your Finder Sync extension and the Finder itself.

## Declaration

```objectivec
@interface FIFinderSyncController : NSExtensionContext
```

<a id="overview"></a>

## Overview

Use the Finder Sync controller to configure your extension, to set badges on items in the Finder’s window, and to get a list of selected and targeted items.

## Topics

### Managing the Finder Sync Controller

- [defaultController](fifindersynccontroller/default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](fifindersynccontroller/directoryurls.md): The directories managed by this extension.
- [selectedItemURLs](fifindersynccontroller/selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier:forURL:](fifindersynccontroller/setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage:label:forBadgeIdentifier:](fifindersynccontroller/setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL](fifindersynccontroller/targetedurl%28%29.md): Returns the URL of the Finder’s current target.

### Instance Methods

- [lastUsedDateForItemWithURL:](fifindersynccontroller/lastuseddateforitem%28with_%29.md)
- [setLastUsedDate:forItemWithURL:completion:](fifindersynccontroller/setlastuseddate%28__foritemwith_completion_%29.md)
- [setTagData:forItemWithURL:completion:](fifindersynccontroller/settagdata%28__foritemwith_completion_%29.md)
- [tagDataForItemWithURL:](fifindersynccontroller/tagdataforitem%28with_%29.md)

### Type Properties

- [extensionEnabled](fifindersynccontroller/isextensionenabled.md)

### Type Methods

- [showExtensionManagementInterface](fifindersynccontroller/showextensionmanagementinterface%28%29.md)

## Relationships

### Inherits From

- [NSExtensionContext](https://developer.apple.com/documentation/foundation/nsextensioncontext)

## See Also

### Classes

- [FIFinderSync](fifindersync-swift.class.md): A type to subclass to add badges, custom shortcut menus, and toolbar buttons to the Finder.
