> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtabgroup/addwindow(_:)](https://developer.apple.com/documentation/appkit/nswindowtabgroup/addwindow(_:))

# addWindow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Adds a window to the tab group.

## Declaration

```swift
func addWindow(_ window: NSWindow)
```

## Parameters

- `window`: The window to append to the tab group.

<a id="Discussion"></a>

## Discussion

This method appends the window to the end of the tab group. If the window is already a member of another tab group, it is first removed from that group.

## See Also

### Managing Tabbed Windows

- [windows](windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [selectedWindow](selectedwindow.md): The selected, or frontmost, window in the tab group.
- [insertWindow(\_:at:)](insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
- [removeWindow(\_:)](removewindow%28__%29.md): Removes a window from the tab group.

# addWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Adds a window to the tab group.

## Declaration

```objectivec
- (void) addWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window to append to the tab group.

<a id="Discussion"></a>

## Discussion

This method appends the window to the end of the tab group. If the window is already a member of another tab group, it is first removed from that group.

## See Also

### Managing Tabbed Windows

- [windows](windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [selectedWindow](selectedwindow.md): The selected, or frontmost, window in the tab group.
- [insertWindow:atIndex:](insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
- [removeWindow:](removewindow%28__%29.md): Removes a window from the tab group.
