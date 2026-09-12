> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/addwindowsitem(_:title:filename:)](https://developer.apple.com/documentation/appkit/nsapplication/addwindowsitem(_:title:filename:))

# addWindowsItem(\_:title:filename:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds an item to the Window menu for a given window.

## Declaration

```swift
func addWindowsItem(_ win: NSWindow, title string: String, filename isFilename: Bool)
```

## Parameters

- `win`: The window being added to the menu. If this window object already exists in the Window menu, this method has no effect.
- `string`: The string to display for the window’s menu item. How the string is interpreted is dependent on the value in the `isFilename` parameter.
- `isFilename`: If [false](https://developer.apple.com/documentation/swift/false), `aString` appears literally in the menu; otherwise, `aString` is assumed to be a converted pathname with the name of the file preceding the path (the way the `NSWindow` method [setTitleWithRepresentedFilename(\_:)](../nswindow/settitlewithrepresentedfilename%28__%29.md) shows a title)

<a id="Discussion"></a>

## Discussion

You rarely need to invoke this method directly because Cocoa places an item in the Window menu automatically whenever you set the title of an `NSWindow` object.

## See Also

### Related Documentation

- [title](../nswindow/title.md): The string that appears in the title bar of the window or the path to the represented file.

### Managing the Window Menu

- [windowsMenu](windowsmenu.md): The Window menu of the app.
- [changeWindowsItem(\_:title:filename:)](changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [removeWindowsItem(\_:)](removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
- [updateWindowsItem(\_:)](updatewindowsitem%28__%29.md): Updates the Window menu item for a given window to reflect the edited status of that window.

# addWindowsItem:title:filename: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds an item to the Window menu for a given window.

## Declaration

```objectivec
- (void) addWindowsItem:(NSWindow *) win title:(NSString *) string filename:(BOOL) isFilename;
```

## Parameters

- `win`: The window being added to the menu. If this window object already exists in the Window menu, this method has no effect.
- `string`: The string to display for the window’s menu item. How the string is interpreted is dependent on the value in the `isFilename` parameter.
- `isFilename`: If [false](https://developer.apple.com/documentation/swift/false), `aString` appears literally in the menu; otherwise, `aString` is assumed to be a converted pathname with the name of the file preceding the path (the way the `NSWindow` method [setTitleWithRepresentedFilename:](../nswindow/settitlewithrepresentedfilename%28__%29.md) shows a title)

<a id="Discussion"></a>

## Discussion

You rarely need to invoke this method directly because Cocoa places an item in the Window menu automatically whenever you set the title of an `NSWindow` object.

## See Also

### Related Documentation

- [title](../nswindow/title.md): The string that appears in the title bar of the window or the path to the represented file.

### Managing the Window Menu

- [windowsMenu](windowsmenu.md): The Window menu of the app.
- [changeWindowsItem:title:filename:](changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [removeWindowsItem:](removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
- [updateWindowsItem:](updatewindowsitem%28__%29.md): Updates the Window menu item for a given window to reflect the edited status of that window.
