> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritoolbaritem](https://developer.apple.com/documentation/safariservices/sfsafaritoolbaritem)

# SFSafariToolbarItem (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for a Safari app extension toolbar item in a Safari window.

## Declaration

```swift
class SFSafariToolbarItem
```

<a id="overview"></a>

## Overview

Your app extension only uses this object when it wants to explicitly set the toolbar item state. Typically, other state changes occur automatically. Safari calls [validateToolbarItem(in:validationHandler:)](sfsafariextensionhandling/validatetoolbaritem%28in_validationhandler_%29.md) on your app extension handler when changes, such as navigation to a webpage, could affect the state of the toolbar item.

## Topics

### Controlling Toolbar Items

- [setEnabled(\_:withBadgeText:)](sfsafaritoolbaritem/setenabled%28__withbadgetext_%29.md): Deprecated. Sets the enabled state and the badge text for the toolbar item.
- [setBadgeText(\_:)](sfsafaritoolbaritem/setbadgetext%28__%29.md): Sets the badge text for the toolbar item.
- [setEnabled(\_:)](sfsafaritoolbaritem/setenabled%28__%29.md): Sets whether the toolbar item is enabled.
- [setImage(\_:)](sfsafaritoolbaritem/setimage%28__%29.md): Sets the image displayed in the toolbar button.
- [setLabel(\_:)](sfsafaritoolbaritem/setlabel%28__%29.md)

### Instance Methods

- [showPopover()](sfsafaritoolbaritem/showpopover%28%29.md)

### Initializers

- [init(coder:)](sfsafaritoolbaritem/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contextual menu and toolbar items

- [Using contextual menu and toolbar item keys](using-contextual-menu-and-toolbar-item-keys.md): Learn about adding contextual menu items and toolbar items to a Safari app extension with information property list keys.
- [Adjusting settings for a toolbar item](adjusting-settings-for-a-toolbar-item.md): Customize a toolbar item for your Safari app extension.
- [Adjusting settings for contextual menu items](adjusting-settings-for-contextual-menu-items.md): Customize contextual menu items for your Safari app extension.
- [SFSafariExtensionViewController](sfsafariextensionviewcontroller.md): The view controller for a popover associated with your app extension.

# SFSafariToolbarItem (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

A proxy for a Safari app extension toolbar item in a Safari window.

## Declaration

```objectivec
@interface SFSafariToolbarItem : NSObject
```

<a id="overview"></a>

## Overview

Your app extension only uses this object when it wants to explicitly set the toolbar item state. Typically, other state changes occur automatically. Safari calls [validateToolbarItemInWindow:validationHandler:](sfsafariextensionhandling/validatetoolbaritem%28in_validationhandler_%29.md) on your app extension handler when changes, such as navigation to a webpage, could affect the state of the toolbar item.

## Topics

### Controlling Toolbar Items

- [setEnabled:withBadgeText:](sfsafaritoolbaritem/setenabled%28__withbadgetext_%29.md): Deprecated. Sets the enabled state and the badge text for the toolbar item.
- [setBadgeText:](sfsafaritoolbaritem/setbadgetext%28__%29.md): Sets the badge text for the toolbar item.
- [setEnabled:](sfsafaritoolbaritem/setenabled%28__%29.md): Sets whether the toolbar item is enabled.
- [setImage:](sfsafaritoolbaritem/setimage%28__%29.md): Sets the image displayed in the toolbar button.
- [setLabel:](sfsafaritoolbaritem/setlabel%28__%29.md)

### Instance Methods

- [showPopover](sfsafaritoolbaritem/showpopover%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contextual menu and toolbar items

- [Using contextual menu and toolbar item keys](using-contextual-menu-and-toolbar-item-keys.md): Learn about adding contextual menu items and toolbar items to a Safari app extension with information property list keys.
- [Adjusting settings for a toolbar item](adjusting-settings-for-a-toolbar-item.md): Customize a toolbar item for your Safari app extension.
- [Adjusting settings for contextual menu items](adjusting-settings-for-contextual-menu-items.md): Customize contextual menu items for your Safari app extension.
- [SFSafariExtensionViewController](sfsafariextensionviewcontroller.md): The view controller for a popover associated with your app extension.
