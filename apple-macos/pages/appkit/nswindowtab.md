> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtab](https://developer.apple.com/documentation/appkit/nswindowtab)

# NSWindowTab (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A tab associated with a window that is part of a tabbing group.

## Declaration

```swift
class NSWindowTab
```

<a id="overview"></a>

## Overview

[NSWindowTab](nswindowtab.md) describes the way a window displays as part of a tabbed window group. The properties of [NSWindowTab](nswindowtab.md) are configurable at any time, but only take effect when the associated [NSWindow](nswindow.md) displays in a tab.

AppKit automatically creates an instance of [NSWindowTab](nswindowtab.md) for each [NSWindow](nswindow.md). You can access a window’s tab object using the [tab](nswindow/tab.md) property.

## Topics

### Customizing the Title

- [title](nswindowtab/title.md): The title for the window tab.
- [attributedTitle](nswindowtab/attributedtitle.md): The title for the window tab, specified as an attributed string.

### Customizing the Tooltip

- [toolTip](nswindowtab/tooltip.md): The tooltip for this window tab.

### Adding an Accessory View

- [accessoryView](nswindowtab/accessoryview.md): An optional accessory view for the tab.

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

### Related Documentation

- [tabbingIdentifier](nswindow/tabbingidentifier-swift.property.md): A value that allows a group of related windows.

### Windows

- [NSWindow](nswindow.md): A window that an app displays on the screen.
- [NSPanel](nspanel.md): A special kind of window that typically performs a function that is auxiliary to the main window.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
- [NSWindowTabGroup](nswindowtabgroup.md): A group of windows that display together as a single tabbed window.

# NSWindowTab (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A tab associated with a window that is part of a tabbing group.

## Declaration

```objectivec
@interface NSWindowTab : NSObject
```

<a id="overview"></a>

## Overview

[NSWindowTab](nswindowtab.md) describes the way a window displays as part of a tabbed window group. The properties of [NSWindowTab](nswindowtab.md) are configurable at any time, but only take effect when the associated [NSWindow](nswindow.md) displays in a tab.

AppKit automatically creates an instance of [NSWindowTab](nswindowtab.md) for each [NSWindow](nswindow.md). You can access a window’s tab object using the [tab](nswindow/tab.md) property.

## Topics

### Customizing the Title

- [title](nswindowtab/title.md): The title for the window tab.
- [attributedTitle](nswindowtab/attributedtitle.md): The title for the window tab, specified as an attributed string.

### Customizing the Tooltip

- [toolTip](nswindowtab/tooltip.md): The tooltip for this window tab.

### Adding an Accessory View

- [accessoryView](nswindowtab/accessoryview.md): An optional accessory view for the tab.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [tabbingIdentifier](nswindow/tabbingidentifier-swift.property.md): A value that allows a group of related windows.

### Windows

- [NSWindow](nswindow.md): A window that an app displays on the screen.
- [NSPanel](nspanel.md): A special kind of window that typically performs a function that is auxiliary to the main window.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
- [NSWindowTabGroup](nswindowtabgroup.md): A group of windows that display together as a single tabbed window.
