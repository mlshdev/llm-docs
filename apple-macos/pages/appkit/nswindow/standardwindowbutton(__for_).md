> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/standardwindowbutton(_:for:)](https://developer.apple.com/documentation/appkit/nswindow/standardwindowbutton(_:for:))

# standardWindowButton(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a new instance of a given standard window button, sized appropriately for a given window style.

## Declaration

```swift
class func standardWindowButton(_ b: NSWindow.ButtonType, for styleMask: NSWindow.StyleMask) -> NSButton?
```

## Parameters

- `b`: The type of standard window button to return.
- `styleMask`: The window style for which `b` is to be sized. See [NSWindow.StyleMask](stylemask-swift.struct.md)  for the list of allowable values.

<a id="return-value"></a>

## Return Value

The new window button of the type identified by `b`; `nil` when no such button type exists.

<a id="Discussion"></a>

## Discussion

The caller is responsible for adding the button to the view hierarchy and for setting the target to be the window.

## See Also

### Managing Title Bars

- [standardWindowButton(\_:)](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindow.ToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.

# standardWindowButton:forStyleMask: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a new instance of a given standard window button, sized appropriately for a given window style.

## Declaration

```objectivec
+ (NSButton *) standardWindowButton:(NSWindowButton) b forStyleMask:(NSWindowStyleMask) styleMask;
```

## Parameters

- `b`: The type of standard window button to return.
- `styleMask`: The window style for which `b` is to be sized. See [NSWindowStyleMask](stylemask-swift.struct.md)  for the list of allowable values.

<a id="return-value"></a>

## Return Value

The new window button of the type identified by `b`; `nil` when no such button type exists.

<a id="Discussion"></a>

## Discussion

The caller is responsible for adding the button to the view hierarchy and for setting the target to be the window.

## See Also

### Managing Title Bars

- [standardWindowButton:](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindowToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.
