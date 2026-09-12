> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uititlebar/representedurl](https://developer.apple.com/documentation/uikit/uititlebar/representedurl)

# representedURL (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

A URL of the file or resource represented in the window.

## Declaration

```swift
var representedURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The window shows a documentation icon in the title bar when this property isn’t `nil` and the URL has a non-empty path. If the URL represents a filename or other resource with a known icon, the window displays that icon as the document icon; otherwise, the window displays a default document icon.

When the windows displays a document icon, a pop-up menu is also available by Command-clicking the area containing the icon and title. The pop-up menu displays the path components of the URL.

If [representedURL](representedurl.md) is `nil` or the URL path is empty, the document icon and pop-up menu aren’t available.

## See Also

### Configuring the title bar

- [separatorStyle](separatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [UITitlebarSeparatorStyle](../uititlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [titleVisibility](titlevisibility.md): A value that indicates the visibility of the title.
- [UITitlebarTitleVisibility](../uititlebartitlevisibility.md): States that determine visibility of the title in the title bar.

# representedURL (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

A URL of the file or resource represented in the window.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * representedURL;
```

<a id="Discussion"></a>

## Discussion

The window shows a documentation icon in the title bar when this property isn’t `nil` and the URL has a non-empty path. If the URL represents a filename or other resource with a known icon, the window displays that icon as the document icon; otherwise, the window displays a default document icon.

When the windows displays a document icon, a pop-up menu is also available by Command-clicking the area containing the icon and title. The pop-up menu displays the path components of the URL.

If [representedURL](representedurl.md) is `nil` or the URL path is empty, the document icon and pop-up menu aren’t available.

## See Also

### Configuring the title bar

- [separatorStyle](separatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [UITitlebarSeparatorStyle](../uititlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [titleVisibility](titlevisibility.md): A value that indicates the visibility of the title.
- [UITitlebarTitleVisibility](../uititlebartitlevisibility.md): States that determine visibility of the title in the title bar.
