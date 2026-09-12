> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/titlebarseparatorstyle](https://developer.apple.com/documentation/appkit/nswindow/titlebarseparatorstyle)

# titlebarSeparatorStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The type of separator that the app displays between the title bar and content of a window.

## Declaration

```swift
var titlebarSeparatorStyle: NSTitlebarSeparatorStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [NSTitlebarSeparatorStyle.automatic](../nstitlebarseparatorstyle/automatic.md). Changing this value overrides any preference by [NSSplitViewItem](../nssplitviewitem.md).

## See Also

### Managing Title Bars

- [standardWindowButton(\_:for:)](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton(\_:)](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindow.ToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.

# titlebarSeparatorStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The type of separator that the app displays between the title bar and content of a window.

## Declaration

```objectivec
@property NSTitlebarSeparatorStyle titlebarSeparatorStyle;
```

<a id="Discussion"></a>

## Discussion

The default value is [NSTitlebarSeparatorStyleAutomatic](../nstitlebarseparatorstyle/automatic.md). Changing this value overrides any preference by [NSSplitViewItem](../nssplitviewitem.md).

## See Also

### Managing Title Bars

- [standardWindowButton:forStyleMask:](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton:](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindowToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.
