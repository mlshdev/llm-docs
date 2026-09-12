> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarplacement/windowtoolbar](https://developer.apple.com/documentation/swiftui/toolbarplacement/windowtoolbar)

# windowToolbar

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 13.0+

The placement for the containing window’s toolbar, sometimes referred to as the titlebar.

## Declaration

```swift
static var windowToolbar: ToolbarPlacement { get }
```

<a id="discussion"></a>

## Discussion

When hidden using [toolbarVisibility(\_:for:)](../view/toolbarvisibility%28__for_%29.md), this hides the entire window toolbar, including the title and “traffic light” window controls. To remove the custom toolbar item content only, use [automatic](automatic.md).

Use [toolbarBackground(\_:for:)](../view/toolbarbackground%28__for_%29.md) to hide the background of the window toolbar.

## See Also

### Getting placements

- [automatic](automatic.md): The primary toolbar.
- [accessoryBar(id:)](accessorybar%28id_%29.md): Creates a unique accessory bar placement.
- [bottomBar](bottombar.md): The bottom toolbar of an app.
- [bottomOrnament](bottomornament.md): The bottom ornament of an app.
- [navigationBar](navigationbar.md): The navigation bar of an app.
- [tabBar](tabbar.md): The tab bar of an app.
