> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/titlebarseparatorstyle](https://developer.apple.com/documentation/appkit/nssplitviewitem/titlebarseparatorstyle)

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

To apply this value, you must associate the item’s view with its own title bar section. The default value is [NSTitlebarSeparatorStyle.automatic](../nstitlebarseparatorstyle/automatic.md). The containing window’s preference can override this preference.

## See Also

### Customizing appearance

- [allowsFullHeightLayout](allowsfullheightlayout.md): A Boolean value that indicates whether full-height sidebars appear in the window after you set a style mask.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.

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

To apply this value, you must associate the item’s view with its own title bar section. The default value is [NSTitlebarSeparatorStyleAutomatic](../nstitlebarseparatorstyle/automatic.md). The containing window’s preference can override this preference.

## See Also

### Customizing appearance

- [allowsFullHeightLayout](allowsfullheightlayout.md): A Boolean value that indicates whether full-height sidebars appear in the window after you set a style mask.
- [NSTitlebarSeparatorStyle](../nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
