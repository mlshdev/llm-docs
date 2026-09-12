> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/windowsmenu](https://developer.apple.com/documentation/appkit/nsapplication/windowsmenu)

# windowsMenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The Window menu of the app.

## Declaration

```swift
var windowsMenu: NSMenu? { get set }
```

<a id="return-value"></a>

## Return Value

The window menu or `nil` if such a menu does not exist or has not yet been created.

<a id="Discussion"></a>

## Discussion

This property contains the app’s Window menu or `nil` if such a menu does not yet exist or has not yet been created. You can use this property to specify the Window menu for your app.

## See Also

### Managing the Window Menu

- [addWindowsItem(\_:title:filename:)](addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [changeWindowsItem(\_:title:filename:)](changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [removeWindowsItem(\_:)](removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
- [updateWindowsItem(\_:)](updatewindowsitem%28__%29.md): Updates the Window menu item for a given window to reflect the edited status of that window.

# windowsMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The Window menu of the app.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * windowsMenu;
```

<a id="return-value"></a>

## Return Value

The window menu or `nil` if such a menu does not exist or has not yet been created.

<a id="Discussion"></a>

## Discussion

This property contains the app’s Window menu or `nil` if such a menu does not yet exist or has not yet been created. You can use this property to specify the Window menu for your app.

## See Also

### Managing the Window Menu

- [addWindowsItem:title:filename:](addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [changeWindowsItem:title:filename:](changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [removeWindowsItem:](removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
- [updateWindowsItem:](updatewindowsitem%28__%29.md): Updates the Window menu item for a given window to reflect the edited status of that window.
