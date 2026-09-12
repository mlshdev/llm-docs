> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtabgroup/insertwindow(_:at:)](https://developer.apple.com/documentation/appkit/nswindowtabgroup/insertwindow(_:at:))

# insertWindow(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Inserts a window at a specific location within the tab group.

## Declaration

```swift
func insertWindow(_ window: NSWindow, at index: Int)
```

## Parameters

- `window`: The window to insert into the tab group.
- `index`: The location in the tab group at which to insert window. This value must not be negative, and must not be greater than the number of windows in the tab group.

  Raises an `NSInternalInconsistencyException` if the index is negative or larger than the number of tabs in the group.

<a id="Discussion"></a>

## Discussion

Inserts the window at the specified location within the tab group. If the window is already a member of another tab group, it is first removed from that group.

## See Also

### Managing Tabbed Windows

- [windows](windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [selectedWindow](selectedwindow.md): The selected, or frontmost, window in the tab group.
- [addWindow(\_:)](addwindow%28__%29.md): Adds a window to the tab group.
- [removeWindow(\_:)](removewindow%28__%29.md): Removes a window from the tab group.

# insertWindow:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Inserts a window at a specific location within the tab group.

## Declaration

```objectivec
- (void) insertWindow:(NSWindow *) window atIndex:(NSInteger) index;
```

## Parameters

- `window`: The window to insert into the tab group.
- `index`: The location in the tab group at which to insert window. This value must not be negative, and must not be greater than the number of windows in the tab group.

  Raises an `NSInternalInconsistencyException` if the index is negative or larger than the number of tabs in the group.

<a id="Discussion"></a>

## Discussion

Inserts the window at the specified location within the tab group. If the window is already a member of another tab group, it is first removed from that group.

## See Also

### Managing Tabbed Windows

- [windows](windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [selectedWindow](selectedwindow.md): The selected, or frontmost, window in the tab group.
- [addWindow:](addwindow%28__%29.md): Adds a window to the tab group.
- [removeWindow:](removewindow%28__%29.md): Removes a window from the tab group.
