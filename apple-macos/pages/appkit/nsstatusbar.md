> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusbar](https://developer.apple.com/documentation/appkit/nsstatusbar)

# NSStatusBar (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages a collection of status items displayed within the system-wide menu bar.

## Declaration

```swift
class NSStatusBar
```

<a id="overview"></a>

## Overview

A status item (an instance of [NSStatusItem](nsstatusitem.md)) can be displayed with text or an icon, can provide a menu and a target-action message when clicked, or can be a fully customized view that you create. Use status items sparingly and only if the alternatives (such as a Dock menu, preference pane, or status window) are not suitable. Because there is limited space in which to display status items, status items are not guaranteed to be available at all times. For this reason, do not rely on them being available and always provide a user preference for hiding your application’s status items to free up space in the menu bar.

## Topics

### Getting the System-Wide Instance

- [system](nsstatusbar/system.md): Returns the system-wide status bar located in the menu bar.

### Managing Status items

- [statusItem(withLength:)](nsstatusbar/statusitem%28withlength_%29.md): Returns a newly created status item that has been allotted a specified space within the status bar.
- [removeStatusItem(\_:)](nsstatusbar/removestatusitem%28__%29.md): Removes the specified status item from the receiver.

### Getting Status-Bar Attributes

- [isVertical](nsstatusbar/isvertical.md): A Boolean value indicating whether the status bar has a vertical orientation.
- [thickness](nsstatusbar/thickness.md): The thickness of the status bar, in pixels.

### Constants

- [Status Bar Item Length](status-bar-item-length.md): Constants used by the [statusItem(withLength:)](nsstatusbar/statusitem%28withlength_%29.md) method.

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

## See Also

### Menu Bar Items

- [NSStatusItem](nsstatusitem.md): An individual element displayed in the system menu bar.
- [NSStatusBarButton](nsstatusbarbutton.md): The appearance and behavior of an item in the systemwide menu bar.

# NSStatusBar (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages a collection of status items displayed within the system-wide menu bar.

## Declaration

```objectivec
@interface NSStatusBar : NSObject
```

<a id="overview"></a>

## Overview

A status item (an instance of [NSStatusItem](nsstatusitem.md)) can be displayed with text or an icon, can provide a menu and a target-action message when clicked, or can be a fully customized view that you create. Use status items sparingly and only if the alternatives (such as a Dock menu, preference pane, or status window) are not suitable. Because there is limited space in which to display status items, status items are not guaranteed to be available at all times. For this reason, do not rely on them being available and always provide a user preference for hiding your application’s status items to free up space in the menu bar.

## Topics

### Getting the System-Wide Instance

- [systemStatusBar](nsstatusbar/system.md): Returns the system-wide status bar located in the menu bar.

### Managing Status items

- [statusItemWithLength:](nsstatusbar/statusitem%28withlength_%29.md): Returns a newly created status item that has been allotted a specified space within the status bar.
- [removeStatusItem:](nsstatusbar/removestatusitem%28__%29.md): Removes the specified status item from the receiver.

### Getting Status-Bar Attributes

- [vertical](nsstatusbar/isvertical.md): A Boolean value indicating whether the status bar has a vertical orientation.
- [thickness](nsstatusbar/thickness.md): The thickness of the status bar, in pixels.

### Constants

- [Status Bar Item Length](status-bar-item-length.md): Constants used by the [statusItemWithLength:](nsstatusbar/statusitem%28withlength_%29.md) method.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Menu Bar Items

- [NSStatusItem](nsstatusitem.md): An individual element displayed in the system menu bar.
- [NSStatusBarButton](nsstatusbarbutton.md): The appearance and behavior of an item in the systemwide menu bar.
