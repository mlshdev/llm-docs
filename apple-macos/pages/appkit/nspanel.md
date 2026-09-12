> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspanel](https://developer.apple.com/documentation/appkit/nspanel)

# NSPanel (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A special kind of window that typically performs a function that is auxiliary to the main window.

## Declaration

```swift
@MainActor class NSPanel
```

<a id="overview"></a>

## Overview

For details about how panels work (especially to find out how their behavior differs from window behavior), see [How Panels Work](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Concepts/UsingPanels.html#//apple_ref/doc/uid/20000224).

## Topics

### Configuring Panels

- [isFloatingPanel](nspanel/isfloatingpanel.md): A Boolean value that indicates whether the receiver is a floating panel.
- [becomesKeyOnlyIfNeeded](nspanel/becomeskeyonlyifneeded.md): A Boolean value that indicates whether the receiver becomes the key window only when needed.
- [worksWhenModal](nspanel/workswhenmodal.md): A Boolean value that indicates whether the panel receives keyboard and mouse events even when some other window is being run modally.

### Constants

- [Alert Panel Return Values](alert-panel-return-values.md): These constants define values returned by the [NSRunAlertPanel](nsrunalertpanel.md) function and by the `NSApplication` method [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md) when the modal session is run with an `NSPanel` provided by the [NSGetAlertPanel](nsgetalertpanel.md) function.
- [Modal Panel Return Values](modal-panel-return-values.md): These constants define the possible return values for such methods as the `runModal...` methods of the [NSOpenPanel](nsopenpanel.md) class, which tell which button (OK or Cancel) the user has clicked on an open panel.
- [Style Masks](style-masks.md): Constants that specify panel styles.

## Relationships

### Inherits From

- [NSWindow](nswindow.md)

### Inherited By

- [NSColorPanel](nscolorpanel.md)
- [NSFontPanel](nsfontpanel.md)
- [NSSavePanel](nssavepanel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Windows

- [NSWindow](nswindow.md): A window that an app displays on the screen.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
- [NSWindowTab](nswindowtab.md): A tab associated with a window that is part of a tabbing group.
- [NSWindowTabGroup](nswindowtabgroup.md): A group of windows that display together as a single tabbed window.

# NSPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A special kind of window that typically performs a function that is auxiliary to the main window.

## Declaration

```objectivec
@interface NSPanel : NSWindow
```

<a id="overview"></a>

## Overview

For details about how panels work (especially to find out how their behavior differs from window behavior), see [How Panels Work](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Concepts/UsingPanels.html#//apple_ref/doc/uid/20000224).

## Topics

### Configuring Panels

- [floatingPanel](nspanel/isfloatingpanel.md): A Boolean value that indicates whether the receiver is a floating panel.
- [becomesKeyOnlyIfNeeded](nspanel/becomeskeyonlyifneeded.md): A Boolean value that indicates whether the receiver becomes the key window only when needed.
- [worksWhenModal](nspanel/workswhenmodal.md): A Boolean value that indicates whether the panel receives keyboard and mouse events even when some other window is being run modally.

### Constants

- [Alert Panel Return Values](alert-panel-return-values.md): These constants define values returned by the [NSRunAlertPanel](nsrunalertpanel.md) function and by the `NSApplication` method [runModalSession:](nsapplication/runmodalsession%28__%29.md) when the modal session is run with an `NSPanel` provided by the [NSGetAlertPanel](nsgetalertpanel.md) function.
- [Modal Panel Return Values](modal-panel-return-values.md): These constants define the possible return values for such methods as the `runModal...` methods of the [NSOpenPanel](nsopenpanel.md) class, which tell which button (OK or Cancel) the user has clicked on an open panel.
- [Style Masks](style-masks.md): Constants that specify panel styles.

## Relationships

### Inherits From

- [NSWindow](nswindow.md)

### Inherited By

- [NSColorPanel](nscolorpanel.md)
- [NSFontPanel](nsfontpanel.md)
- [NSSavePanel](nssavepanel.md)

## See Also

### Windows

- [NSWindow](nswindow.md): A window that an app displays on the screen.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
- [NSWindowTab](nswindowtab.md): A tab associated with a window that is part of a tabbing group.
- [NSWindowTabGroup](nswindowtabgroup.md): A group of windows that display together as a single tabbed window.
