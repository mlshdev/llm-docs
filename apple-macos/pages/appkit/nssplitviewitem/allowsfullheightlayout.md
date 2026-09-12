> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/allowsfullheightlayout](https://developer.apple.com/documentation/appkit/nssplitviewitem/allowsfullheightlayout)

# allowsFullHeightLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether full-height sidebars appear in the window after you set a style mask.

## Declaration

```swift
var allowsFullHeightLayout: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property only applies to [NSSplitViewItem.Behavior.sidebar](behavior-swift.enum/sidebar.md) and [NSSplitViewItem.Behavior.inspector](behavior-swift.enum/inspector.md). The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Customizing appearance

- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.

# allowsFullHeightLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether full-height sidebars appear in the window after you set a style mask.

## Declaration

```objectivec
@property BOOL allowsFullHeightLayout;
```

<a id="Discussion"></a>

## Discussion

This property only applies to [NSSplitViewItemBehaviorSidebar](behavior-swift.enum/sidebar.md) and [NSSplitViewItemBehaviorInspector](behavior-swift.enum/inspector.md). The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Customizing appearance

- [titlebarSeparatorStyle](titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
