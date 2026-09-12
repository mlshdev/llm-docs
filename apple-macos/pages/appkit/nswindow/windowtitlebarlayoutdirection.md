> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/windowtitlebarlayoutdirection](https://developer.apple.com/documentation/appkit/nswindow/windowtitlebarlayoutdirection)

# windowTitlebarLayoutDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The direction the window’s title bar lays text out, either left to right or right to left.

## Declaration

```swift
var windowTitlebarLayoutDirection: NSUserInterfaceLayoutDirection { get }
```

<a id="Discussion"></a>

## Discussion

The layout direction of the window title bar includes the standard window buttons (close, minimize, maximize) and the title for the window. In general, this returns [NSUserInterfaceLayoutDirection.rightToLeft](../nsuserinterfacelayoutdirection/righttoleft.md) if the primary system language is right to left. The layout direction may be right to left even in applications that don’t have a right to left language localization. Refer to this value if the application uses [titlebarAppearsTransparent](titlebarappearstransparent.md) and places controls under the title bar.

## See Also

### Managing Title Bars

- [standardWindowButton(\_:for:)](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton(\_:)](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindow.ToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.

# windowTitlebarLayoutDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The direction the window’s title bar lays text out, either left to right or right to left.

## Declaration

```objectivec
@property (readonly) NSUserInterfaceLayoutDirection windowTitlebarLayoutDirection;
```

<a id="Discussion"></a>

## Discussion

The layout direction of the window title bar includes the standard window buttons (close, minimize, maximize) and the title for the window. In general, this returns [NSUserInterfaceLayoutDirectionRightToLeft](../nsuserinterfacelayoutdirection/righttoleft.md) if the primary system language is right to left. The layout direction may be right to left even in applications that don’t have a right to left language localization. Refer to this value if the application uses [titlebarAppearsTransparent](titlebarappearstransparent.md) and places controls under the title bar.

## See Also

### Managing Title Bars

- [standardWindowButton:forStyleMask:](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton:](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindowToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
