> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtabgroup/windows](https://developer.apple.com/documentation/appkit/nswindowtabgroup/windows)

# windows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A collection of the windows that are currently grouped together by this window tab group.

## Declaration

```swift
var windows: [NSWindow] { get }
```

<a id="Discussion"></a>

## Discussion

The order of this array corresponds to the visual order of the tabs in this tab group, arranged from the leading edge of the tab bar to the trailing edge. You can monitor this property for changes using key-value observing.

## See Also

### Managing Tabbed Windows

- [selectedWindow](selectedwindow.md): The selected, or frontmost, window in the tab group.
- [addWindow(\_:)](addwindow%28__%29.md): Adds a window to the tab group.
- [insertWindow(\_:at:)](insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
- [removeWindow(\_:)](removewindow%28__%29.md): Removes a window from the tab group.

# windows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A collection of the windows that are currently grouped together by this window tab group.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSWindow *> * windows;
```

<a id="Discussion"></a>

## Discussion

The order of this array corresponds to the visual order of the tabs in this tab group, arranged from the leading edge of the tab bar to the trailing edge. You can monitor this property for changes using key-value observing.

## See Also

### Managing Tabbed Windows

- [selectedWindow](selectedwindow.md): The selected, or frontmost, window in the tab group.
- [addWindow:](addwindow%28__%29.md): Adds a window to the tab group.
- [insertWindow:atIndex:](insertwindow%28__at_%29.md): Inserts a window at a specific location within the tab group.
- [removeWindow:](removewindow%28__%29.md): Removes a window from the tab group.
