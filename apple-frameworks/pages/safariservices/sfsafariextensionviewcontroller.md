> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionviewcontroller](https://developer.apple.com/documentation/safariservices/sfsafariextensionviewcontroller)

# SFSafariExtensionViewController (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

The view controller for a popover associated with your app extension.

## Declaration

```swift
class SFSafariExtensionViewController
```

## Mentioned In

- [Adjusting settings for a toolbar item](adjusting-settings-for-a-toolbar-item.md)

<a id="overview"></a>

## Overview

If your toolbar item has a popover, your popover view controller should be a subclass of this class. As with other macOS development, typically you want to add your own outlets and actions to the view controller, and provide an XIB file for its user interface.

Your view controller’s contents must use Auto Layout.

## Topics

### Instance Methods

- [dismissPopover()](sfsafariextensionviewcontroller/dismisspopover%28%29.md)

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

## See Also

### Contextual menu and toolbar items

- [Using contextual menu and toolbar item keys](using-contextual-menu-and-toolbar-item-keys.md): Learn about adding contextual menu items and toolbar items to a Safari app extension with information property list keys.
- [Adjusting settings for a toolbar item](adjusting-settings-for-a-toolbar-item.md): Customize a toolbar item for your Safari app extension.
- [Adjusting settings for contextual menu items](adjusting-settings-for-contextual-menu-items.md): Customize contextual menu items for your Safari app extension.
- [SFSafariToolbarItem](sfsafaritoolbaritem.md): A proxy for a Safari app extension toolbar item in a Safari window.

# SFSafariExtensionViewController (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

The view controller for a popover associated with your app extension.

## Declaration

```objectivec
@interface SFSafariExtensionViewController : NSViewController
```

## Mentioned In

- [Adjusting settings for a toolbar item](adjusting-settings-for-a-toolbar-item.md)

<a id="overview"></a>

## Overview

If your toolbar item has a popover, your popover view controller should be a subclass of this class. As with other macOS development, typically you want to add your own outlets and actions to the view controller, and provide an XIB file for its user interface.

Your view controller’s contents must use Auto Layout.

## Topics

### Instance Methods

- [dismissPopover](sfsafariextensionviewcontroller/dismisspopover%28%29.md)

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)

## See Also

### Contextual menu and toolbar items

- [Using contextual menu and toolbar item keys](using-contextual-menu-and-toolbar-item-keys.md): Learn about adding contextual menu items and toolbar items to a Safari app extension with information property list keys.
- [Adjusting settings for a toolbar item](adjusting-settings-for-a-toolbar-item.md): Customize a toolbar item for your Safari app extension.
- [Adjusting settings for contextual menu items](adjusting-settings-for-contextual-menu-items.md): Customize contextual menu items for your Safari app extension.
- [SFSafariToolbarItem](sfsafaritoolbaritem.md): A proxy for a Safari app extension toolbar item in a Safari window.
