> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uititlebar/titlevisibility](https://developer.apple.com/documentation/uikit/uititlebar/titlevisibility)

# titleVisibility (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

A value that indicates the visibility of the title.

## Declaration

```swift
var titleVisibility: UITitlebarTitleVisibility { get set }
```

## Mentioned In

- [Removing the title bar in your Mac app built with Mac Catalyst](../removing-the-title-bar-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

Setting the title visibility to [UITitlebarTitleVisibility.hidden](../uititlebartitlevisibility/hidden.md) hides only the title displayed in the title bar, not the title bar itself. To remove the title bar from the window, set [titleVisibility](titlevisibility.md) to [UITitlebarTitleVisibility.hidden](../uititlebartitlevisibility/hidden.md) and [toolbar](toolbar.md) to `nil`.

This property defaults to [UITitlebarTitleVisibility.visible](../uititlebartitlevisibility/visible.md).

## See Also

### Configuring the title bar

- [separatorStyle](separatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [UITitlebarSeparatorStyle](../uititlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [UITitlebarTitleVisibility](../uititlebartitlevisibility.md): States that determine visibility of the title in the title bar.
- [representedURL](representedurl.md): A URL of the file or resource represented in the window.

# titleVisibility (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

A value that indicates the visibility of the title.

## Declaration

```objectivec
@property UITitlebarTitleVisibility titleVisibility;
```

## Mentioned In

- [Removing the title bar in your Mac app built with Mac Catalyst](../removing-the-title-bar-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

Setting the title visibility to [UITitlebarTitleVisibilityHidden](../uititlebartitlevisibility/hidden.md) hides only the title displayed in the title bar, not the title bar itself. To remove the title bar from the window, set [titleVisibility](titlevisibility.md) to [UITitlebarTitleVisibilityHidden](../uititlebartitlevisibility/hidden.md) and [toolbar](toolbar.md) to `nil`.

This property defaults to [UITitlebarTitleVisibilityVisible](../uititlebartitlevisibility/visible.md).

## See Also

### Configuring the title bar

- [separatorStyle](separatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [UITitlebarSeparatorStyle](../uititlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [UITitlebarTitleVisibility](../uititlebartitlevisibility.md): States that determine visibility of the title in the title bar.
- [representedURL](representedurl.md): A URL of the file or resource represented in the window.
