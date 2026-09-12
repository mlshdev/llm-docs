> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/removewindowsitem(_:)](https://developer.apple.com/documentation/appkit/nsapplication/removewindowsitem(_:))

# removeWindowsItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the Window menu item for a given window.

## Declaration

```swift
func removeWindowsItem(_ win: NSWindow)
```

## Parameters

- `win`: The window whose menu item is to be removed.

<a id="Discussion"></a>

## Discussion

This method doesn’t prevent the item from being automatically added again. Use the [isExcludedFromWindowsMenu](../nswindow/isexcludedfromwindowsmenu.md) method of [NSWindow](../nswindow.md) if you want the item to remain excluded from the Window menu.

## See Also

### Managing the Window Menu

- [windowsMenu](windowsmenu.md): The Window menu of the app.
- [addWindowsItem(\_:title:filename:)](addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [changeWindowsItem(\_:title:filename:)](changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [updateWindowsItem(\_:)](updatewindowsitem%28__%29.md): Updates the Window menu item for a given window to reflect the edited status of that window.

# removeWindowsItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the Window menu item for a given window.

## Declaration

```objectivec
- (void) removeWindowsItem:(NSWindow *) win;
```

## Parameters

- `win`: The window whose menu item is to be removed.

<a id="Discussion"></a>

## Discussion

This method doesn’t prevent the item from being automatically added again. Use the [excludedFromWindowsMenu](../nswindow/isexcludedfromwindowsmenu.md) method of [NSWindow](../nswindow.md) if you want the item to remain excluded from the Window menu.

## See Also

### Managing the Window Menu

- [windowsMenu](windowsmenu.md): The Window menu of the app.
- [addWindowsItem:title:filename:](addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [changeWindowsItem:title:filename:](changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [updateWindowsItem:](updatewindowsitem%28__%29.md): Updates the Window menu item for a given window to reflect the edited status of that window.
