> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/window-list-option-constants](https://developer.apple.com/documentation/coregraphics/window-list-option-constants)

# Window List Option Constants (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

Specifies which windows in the current user session to include in a generated list.

<a id="overview"></a>

## Overview

The [optionIncludingWindow](cgwindowlistoption/optionincludingwindow.md) and [excludeDesktopElements](cgwindowlistoption/excludedesktopelements.md) constants may be combined with the other constants by adding (or ORing) them together and passing the resulting value to the appropriate function.

These constants let you retrieve windows in the current user session only. You cannot use them to retrieve windows from other active user sessions running on the system.

## Topics

### Constants

- [optionAll](cgwindowlistoption/optionall.md)
- [optionOnScreenOnly](cgwindowlistoption/optiononscreenonly.md)
- [optionOnScreenAboveWindow](cgwindowlistoption/optiononscreenabovewindow.md)
- [optionOnScreenBelowWindow](cgwindowlistoption/optiononscreenbelowwindow.md)
- [optionIncludingWindow](cgwindowlistoption/optionincludingwindow.md)
- [excludeDesktopElements](cgwindowlistoption/excludedesktopelements.md)

## See Also

### Constants

- [Window Sharing Constants](window-sharing-constants.md): Specifies whether and how windows are shared between applications.
- [Backing Store Types](backing-store-types.md): Specifies how the window device buffers drawing commands.
- [Window Image Types](window-image-types.md): Specifies the options for capturing an image of a window.
- [CGWindowID Encoding Type](cgwindowid-encoding-type.md): Defines the encoding type for window IDs.
- [Null Window](null-window.md): Defines a guaranteed invalid window ID.
- [Window Sharing Encoding Type](window-sharing-encoding-type.md): Defines the encoding type for window sharing values.
- [Window Backing Encoding Type](window-backing-encoding-type.md): Defines the encoding type for window backing types.
- [Required Window List Keys](required-window-list-keys.md): The keys that are guaranteed to be available in a window’s information dictionary.
- [Optional Window List Keys](optional-window-list-keys.md): The keys that may optionally be available inside a window’s information dictionary.

# Window List Option Constants (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

Specifies which windows in the current user session to include in a generated list.

<a id="overview"></a>

## Overview

The [kCGWindowListOptionIncludingWindow](cgwindowlistoption/optionincludingwindow.md) and [kCGWindowListExcludeDesktopElements](cgwindowlistoption/excludedesktopelements.md) constants may be combined with the other constants by adding (or ORing) them together and passing the resulting value to the appropriate function.

These constants let you retrieve windows in the current user session only. You cannot use them to retrieve windows from other active user sessions running on the system.

## Topics

### Constants

- [kCGWindowListOptionAll](cgwindowlistoption/optionall.md)
- [kCGWindowListOptionOnScreenOnly](cgwindowlistoption/optiononscreenonly.md)
- [kCGWindowListOptionOnScreenAboveWindow](cgwindowlistoption/optiononscreenabovewindow.md)
- [kCGWindowListOptionOnScreenBelowWindow](cgwindowlistoption/optiononscreenbelowwindow.md)
- [kCGWindowListOptionIncludingWindow](cgwindowlistoption/optionincludingwindow.md)
- [kCGWindowListExcludeDesktopElements](cgwindowlistoption/excludedesktopelements.md)

## See Also

### Constants

- [Window Sharing Constants](window-sharing-constants.md): Specifies whether and how windows are shared between applications.
- [Backing Store Types](backing-store-types.md): Specifies how the window device buffers drawing commands.
- [Window Image Types](window-image-types.md): Specifies the options for capturing an image of a window.
- [CGWindowID Encoding Type](cgwindowid-encoding-type.md): Defines the encoding type for window IDs.
- [Null Window](null-window.md): Defines a guaranteed invalid window ID.
- [Window Sharing Encoding Type](window-sharing-encoding-type.md): Defines the encoding type for window sharing values.
- [Window Backing Encoding Type](window-backing-encoding-type.md): Defines the encoding type for window backing types.
- [Required Window List Keys](required-window-list-keys.md): The keys that are guaranteed to be available in a window’s information dictionary.
- [Optional Window List Keys](optional-window-list-keys.md): The keys that may optionally be available inside a window’s information dictionary.
