> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/titlebarappearstransparent](https://developer.apple.com/documentation/appkit/nswindow/titlebarappearstransparent)

# titlebarAppearsTransparent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the title bar draws its background.

## Declaration

```swift
var titlebarAppearsTransparent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the title bar does not draw its background, which allows all content underneath it to show through. It only makes sense to set this property to [true](https://developer.apple.com/documentation/swift/true) when [NSFullSizeContentViewWindowMask](../nsfullsizecontentviewwindowmask.md) is also set.

## See Also

### Managing Title Bars

- [standardWindowButton(\_:for:)](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton(\_:)](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindow.ToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.

# titlebarAppearsTransparent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the title bar draws its background.

## Declaration

```objectivec
@property BOOL titlebarAppearsTransparent;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the title bar does not draw its background, which allows all content underneath it to show through. It only makes sense to set this property to [true](https://developer.apple.com/documentation/swift/true) when [NSFullSizeContentViewWindowMask](../nsfullsizecontentviewwindowmask.md) is also set.

## See Also

### Managing Title Bars

- [standardWindowButton:forStyleMask:](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton:](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindowToolbarStyle](toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.
