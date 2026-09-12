> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/updatewindowsitem(_:)](https://developer.apple.com/documentation/appkit/nsapplication/updatewindowsitem(_:))

# updateWindowsItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Updates the Window menu item for a given window to reflect the edited status of that window.

## Declaration

```swift
func updateWindowsItem(_ win: NSWindow)
```

## Parameters

- `win`: The window whose menu item is to be updated.

<a id="Discussion"></a>

## Discussion

You rarely need to invoke this method because it is invoked automatically when the edit status of an [NSWindow](../nswindow.md) object is set.

## See Also

### Related Documentation

- [isDocumentEdited](../nswindow/isdocumentedited.md): A Boolean value that indicates whether the window’s document has been edited.

### Managing the Window Menu

- [windowsMenu](windowsmenu.md): The Window menu of the app.
- [addWindowsItem(\_:title:filename:)](addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [changeWindowsItem(\_:title:filename:)](changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [removeWindowsItem(\_:)](removewindowsitem%28__%29.md): Removes the Window menu item for a given window.

# updateWindowsItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Updates the Window menu item for a given window to reflect the edited status of that window.

## Declaration

```objectivec
- (void) updateWindowsItem:(NSWindow *) win;
```

## Parameters

- `win`: The window whose menu item is to be updated.

<a id="Discussion"></a>

## Discussion

You rarely need to invoke this method because it is invoked automatically when the edit status of an [NSWindow](../nswindow.md) object is set.

## See Also

### Related Documentation

- [documentEdited](../nswindow/isdocumentedited.md): A Boolean value that indicates whether the window’s document has been edited.

### Managing the Window Menu

- [windowsMenu](windowsmenu.md): The Window menu of the app.
- [addWindowsItem:title:filename:](addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [changeWindowsItem:title:filename:](changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [removeWindowsItem:](removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
