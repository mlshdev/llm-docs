> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/toolbarstyle-swift.enum](https://developer.apple.com/documentation/appkit/nswindow/toolbarstyle-swift.enum)

# NSWindow.ToolbarStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Styles that determine the appearance and location of the toolbar in relation to the title bar.

## Declaration

```swift
enum ToolbarStyle
```

## Topics

### Styles

- [NSWindow.ToolbarStyle.automatic](toolbarstyle-swift.enum/automatic.md): A style indicating that the system determines the toolbar’s appearance and location.
- [NSWindow.ToolbarStyle.expanded](toolbarstyle-swift.enum/expanded.md): A style indicating that the toolbar appears below the window title.
- [NSWindow.ToolbarStyle.preference](toolbarstyle-swift.enum/preference.md): A style indicating that the toolbar appears below the window title with toolbar items centered in the toolbar.
- [NSWindow.ToolbarStyle.unified](toolbarstyle-swift.enum/unified.md): A style indicating that the toolbar appears next to the window title.
- [NSWindow.ToolbarStyle.unifiedCompact](toolbarstyle-swift.enum/unifiedcompact.md): A style indicating that the toolbar appears next to the window title and with reduced margins to allow more focus on the window’s contents.

### Initializers

- [init(rawValue:)](toolbarstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Title Bars

- [standardWindowButton(\_:for:)](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton(\_:)](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.

# NSWindowToolbarStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Styles that determine the appearance and location of the toolbar in relation to the title bar.

## Declaration

```objectivec
enum NSWindowToolbarStyle : NSInteger;
```

## Topics

### Styles

- [NSWindowToolbarStyleAutomatic](toolbarstyle-swift.enum/automatic.md): A style indicating that the system determines the toolbar’s appearance and location.
- [NSWindowToolbarStyleExpanded](toolbarstyle-swift.enum/expanded.md): A style indicating that the toolbar appears below the window title.
- [NSWindowToolbarStylePreference](toolbarstyle-swift.enum/preference.md): A style indicating that the toolbar appears below the window title with toolbar items centered in the toolbar.
- [NSWindowToolbarStyleUnified](toolbarstyle-swift.enum/unified.md): A style indicating that the toolbar appears next to the window title.
- [NSWindowToolbarStyleUnifiedCompact](toolbarstyle-swift.enum/unifiedcompact.md): A style indicating that the toolbar appears next to the window title and with reduced margins to allow more focus on the window’s contents.

## See Also

### Managing Title Bars

- [standardWindowButton:forStyleMask:](standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton:](standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.
