> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtabgroup](https://developer.apple.com/documentation/appkit/nswindowtabgroup)

# NSWindowTabGroup (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A group of windows that display together as a single tabbed window.

## Declaration

```swift
class NSWindowTabGroup
```

<a id="overview"></a>

## Overview

AppKit automatically creates instances of [NSWindowTabGroup](nswindowtabgroup.md) to reflect the tabbing state of your windows. You can access a window’s current tab group using the [tabGroup](nswindow/tabgroup.md) property.

## Topics

### Checking the Group Identifier

- [identifier](nswindowtabgroup/identifier.md): The unique identifier for a tabbed window group.

### Configuring the Tab User Interface

- [isOverviewVisible](nswindowtabgroup/isoverviewvisible.md): A Boolean value indicating if the tab overview is currently displayed.
- [isTabBarVisible](nswindowtabgroup/istabbarvisible.md): A Boolean value indicating whether the tabbed window group currently displays a tab bar.

### Managing Tabbed Windows

- [windows](nswindowtabgroup/windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [selectedWindow](nswindowtabgroup/selectedwindow.md): The selected, or frontmost, window in the tab group.
- [addWindow(\_:)](nswindowtabgroup/addwindow%28__%29.md): Adds a window to the tab group.
- [insertWindow(\_:at:)](nswindowtabgroup/insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
- [removeWindow(\_:)](nswindowtabgroup/removewindow%28__%29.md): Removes a window from the tab group.

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

- [tabGroup](nswindow/tabgroup.md): A group of windows that display together as a tab group.

### Windows

- [NSWindow](nswindow.md): A window that an app displays on the screen.
- [NSPanel](nspanel.md): A special kind of window that typically performs a function that is auxiliary to the main window.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
- [NSWindowTab](nswindowtab.md): A tab associated with a window that is part of a tabbing group.

# NSWindowTabGroup (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A group of windows that display together as a single tabbed window.

## Declaration

```objectivec
@interface NSWindowTabGroup : NSObject
```

<a id="overview"></a>

## Overview

AppKit automatically creates instances of [NSWindowTabGroup](nswindowtabgroup.md) to reflect the tabbing state of your windows. You can access a window’s current tab group using the [tabGroup](nswindow/tabgroup.md) property.

## Topics

### Checking the Group Identifier

- [identifier](nswindowtabgroup/identifier.md): The unique identifier for a tabbed window group.

### Configuring the Tab User Interface

- [overviewVisible](nswindowtabgroup/isoverviewvisible.md): A Boolean value indicating if the tab overview is currently displayed.
- [tabBarVisible](nswindowtabgroup/istabbarvisible.md): A Boolean value indicating whether the tabbed window group currently displays a tab bar.

### Managing Tabbed Windows

- [windows](nswindowtabgroup/windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [selectedWindow](nswindowtabgroup/selectedwindow.md): The selected, or frontmost, window in the tab group.
- [addWindow:](nswindowtabgroup/addwindow%28__%29.md): Adds a window to the tab group.
- [insertWindow:atIndex:](nswindowtabgroup/insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
- [removeWindow:](nswindowtabgroup/removewindow%28__%29.md): Removes a window from the tab group.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [tabGroup](nswindow/tabgroup.md): A group of windows that display together as a tab group.

### Windows

- [NSWindow](nswindow.md): A window that an app displays on the screen.
- [NSPanel](nspanel.md): A special kind of window that typically performs a function that is auxiliary to the main window.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
- [NSWindowTab](nswindowtab.md): A tab associated with a window that is part of a tabbing group.
