> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtabgroup/removewindow(_:)](https://developer.apple.com/documentation/appkit/nswindowtabgroup/removewindow(_:))

# removeWindow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Removes a window from the tab group.

## Declaration

```swift
func removeWindow(_ window: NSWindow)
```

## Parameters

- `window`: The window to remove from the tab group. This window must already be a member of the tab group.

  Raises an `NSInternalInconsistencyException` if the window is not a member of the tab group.

<a id="Discussion"></a>

## Discussion

You can use [removeWindow(\_:)](removewindow%28__%29.md) to explicitly remove a window from the tab group. Windows are implicity removed from their associated tab groups when they order out.

## See Also

### Managing Tabbed Windows

- [windows](windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [selectedWindow](selectedwindow.md): The selected, or frontmost, window in the tab group.
- [addWindow(\_:)](addwindow%28__%29.md): Adds a window to the tab group.
- [insertWindow(\_:at:)](insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.

# removeWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Removes a window from the tab group.

## Declaration

```objectivec
- (void) removeWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window to remove from the tab group. This window must already be a member of the tab group.

  Raises an `NSInternalInconsistencyException` if the window is not a member of the tab group.

<a id="Discussion"></a>

## Discussion

You can use [removeWindow:](removewindow%28__%29.md) to explicitly remove a window from the tab group. Windows are implicity removed from their associated tab groups when they order out.

## See Also

### Managing Tabbed Windows

- [windows](windows.md): A collection of the windows that are currently grouped together by this window tab group.
- [selectedWindow](selectedwindow.md): The selected, or frontmost, window in the tab group.
- [addWindow:](addwindow%28__%29.md): Adds a window to the tab group.
- [insertWindow:atIndex:](insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
