> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isminiaturizable](https://developer.apple.com/documentation/appkit/nswindow/isminiaturizable)

# isMiniaturizable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window can minimize.

## Declaration

```swift
var isMiniaturizable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value coding compliant.

## See Also

### Getting Information About Scripting Attributes

- [hasCloseBox](hasclosebox.md): A Boolean value that indicates if the window has a close box.
- [hasTitleBar](hastitlebar.md): A Boolean value that indicates if the window has a title bar.
- [isModalPanel](ismodalpanel.md): A Boolean value that indicates whether the window is a modal panel.
- [isFloatingPanel](isfloatingpanel.md): A Boolean value that indicates whether the window is a floating panel.
- [isZoomable](iszoomable.md): A Boolean value that indicates whether the window allows zooming.
- [isResizable](isresizable.md): A Boolean value that indicates if the user can resize the window.
- [orderedIndex](orderedindex.md): The zero-based position of the window, based on its order from front to back among all visible application windows.

# miniaturizable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window can minimize.

## Declaration

```objectivec
@property (readonly, getter=isMiniaturizable) BOOL miniaturizable;
```

<a id="Discussion"></a>

## Discussion

This property is key-value coding compliant.

## See Also

### Getting Information About Scripting Attributes

- [hasCloseBox](hasclosebox.md): A Boolean value that indicates if the window has a close box.
- [hasTitleBar](hastitlebar.md): A Boolean value that indicates if the window has a title bar.
- [modalPanel](ismodalpanel.md): A Boolean value that indicates whether the window is a modal panel.
- [floatingPanel](isfloatingpanel.md): A Boolean value that indicates whether the window is a floating panel.
- [zoomable](iszoomable.md): A Boolean value that indicates whether the window allows zooming.
- [resizable](isresizable.md): A Boolean value that indicates if the user can resize the window.
- [orderedIndex](orderedindex.md): The zero-based position of the window, based on its order from front to back among all visible application windows.
