> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/orderedindex](https://developer.apple.com/documentation/appkit/nswindow/orderedindex)

# orderedIndex (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The zero-based position of the window, based on its order from front to back among all visible application windows.

## Declaration

```swift
var orderedIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this property to an index that’s out of range, the system sets the position to the nearest value that’s in range.

## See Also

### Getting Information About Scripting Attributes

- [hasCloseBox](hasclosebox.md): A Boolean value that indicates if the window has a close box.
- [hasTitleBar](hastitlebar.md): A Boolean value that indicates if the window has a title bar.
- [isModalPanel](ismodalpanel.md): A Boolean value that indicates whether the window is a modal panel.
- [isFloatingPanel](isfloatingpanel.md): A Boolean value that indicates whether the window is a floating panel.
- [isZoomable](iszoomable.md): A Boolean value that indicates whether the window allows zooming.
- [isResizable](isresizable.md): A Boolean value that indicates if the user can resize the window.
- [isMiniaturizable](isminiaturizable.md): A Boolean value that indicates whether the window can minimize.

# orderedIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The zero-based position of the window, based on its order from front to back among all visible application windows.

## Declaration

```objectivec
@property NSInteger orderedIndex;
```

<a id="Discussion"></a>

## Discussion

If you set this property to an index that’s out of range, the system sets the position to the nearest value that’s in range.

## See Also

### Getting Information About Scripting Attributes

- [hasCloseBox](hasclosebox.md): A Boolean value that indicates if the window has a close box.
- [hasTitleBar](hastitlebar.md): A Boolean value that indicates if the window has a title bar.
- [modalPanel](ismodalpanel.md): A Boolean value that indicates whether the window is a modal panel.
- [floatingPanel](isfloatingpanel.md): A Boolean value that indicates whether the window is a floating panel.
- [zoomable](iszoomable.md): A Boolean value that indicates whether the window allows zooming.
- [resizable](isresizable.md): A Boolean value that indicates if the user can resize the window.
- [miniaturizable](isminiaturizable.md): A Boolean value that indicates whether the window can minimize.
