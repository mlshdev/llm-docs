> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/arrangeinfront(_:)](https://developer.apple.com/documentation/appkit/nsapplication/arrangeinfront(_:))

# arrangeInFront(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Arranges windows listed in the Window menu in front of all other windows.

## Declaration

```swift
func arrangeInFront(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

Windows associated with the app but not listed in the Window menu are not ordered to the front.

## See Also

### Related Documentation

- [addWindowsItem(\_:title:filename:)](addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [removeWindowsItem(\_:)](removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
- [makeKeyAndOrderFront(\_:)](../nswindow/makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

### Managing Window Layers

- [preventWindowOrdering()](preventwindowordering%28%29.md): Suppresses the usual window ordering in handling the most recent mouse-down event.

# arrangeInFront: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Arranges windows listed in the Window menu in front of all other windows.

## Declaration

```objectivec
- (void) arrangeInFront:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

Windows associated with the app but not listed in the Window menu are not ordered to the front.

## See Also

### Related Documentation

- [addWindowsItem:title:filename:](addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [removeWindowsItem:](removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
- [makeKeyAndOrderFront:](../nswindow/makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

### Managing Window Layers

- [preventWindowOrdering](preventwindowordering%28%29.md): Suppresses the usual window ordering in handling the most recent mouse-down event.
