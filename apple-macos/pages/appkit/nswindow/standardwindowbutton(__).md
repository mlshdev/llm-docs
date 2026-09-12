> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/standardwindowbutton(_:)](https://developer.apple.com/documentation/appkit/nswindow/standardwindowbutton(_:))

# standardWindowButton(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window button of a given window button kind in the window’s view hierarchy.

## Declaration

```swift
func standardWindowButton(_ b: NSWindow.ButtonType) -> NSButton?
```

## Parameters

- `b`: The type of standard window button to return.

<a id="return-value"></a>

## Return Value

Window button in the window’s view hierarchy of the type identified by `b`; `nil` when such button is not in the window’s view hierarchy.

## See Also

### Managing Title Bars

- [standardWindowButton(\_:for:)](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindow.ToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.

# standardWindowButton: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window button of a given window button kind in the window’s view hierarchy.

## Declaration

```objectivec
- (NSButton *) standardWindowButton:(NSWindowButton) b;
```

## Parameters

- `b`: The type of standard window button to return.

<a id="return-value"></a>

## Return Value

Window button in the window’s view hierarchy of the type identified by `b`; `nil` when such button is not in the window’s view hierarchy.

## See Also

### Managing Title Bars

- [standardWindowButton:forStyleMask:](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindowToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.
