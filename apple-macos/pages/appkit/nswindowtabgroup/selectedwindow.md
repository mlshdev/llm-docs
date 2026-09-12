> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtabgroup/selectedwindow](https://developer.apple.com/documentation/appkit/nswindowtabgroup/selectedwindow)

# selectedWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The selected, or frontmost, window in the tab group.

## Declaration

```swift
weak var selectedWindow: NSWindow? { get set }
```

<a id="Discussion"></a>

## Discussion

This property returns the currently selected window within the tabbed window group. Setting this property visually changes the selected tab.

> **Important**

>  This property raises an exception if set to a window that is not already a member of the tab group.

You can monitor this property for changes using key-value observing.

## See Also

### Managing Tabbed Windows

- [windows](windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [addWindow(\_:)](addwindow%28__%29.md): Adds a window to the tab group.
- [insertWindow(\_:at:)](insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
- [removeWindow(\_:)](removewindow%28__%29.md): Removes a window from the tab group.

# selectedWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The selected, or frontmost, window in the tab group.

## Declaration

```objectivec
@property (weak) NSWindow * selectedWindow;
```

<a id="Discussion"></a>

## Discussion

This property returns the currently selected window within the tabbed window group. Setting this property visually changes the selected tab.

> **Important**

>  This property raises an exception if set to a window that is not already a member of the tab group.

You can monitor this property for changes using key-value observing.

## See Also

### Managing Tabbed Windows

- [windows](windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [addWindow:](addwindow%28__%29.md): Adds a window to the tab group.
- [insertWindow:atIndex:](insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
- [removeWindow:](removewindow%28__%29.md): Removes a window from the tab group.
