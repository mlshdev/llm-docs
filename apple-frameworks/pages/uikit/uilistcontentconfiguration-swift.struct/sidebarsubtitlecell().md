> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/sidebarsubtitlecell()](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/sidebarsubtitlecell())

# sidebarSubtitleCell()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · visionOS

Creates the default configuration you use to style a cell that’s in a sidebar list and contains subtitle text.

## Declaration

```swift
static func sidebarSubtitleCell() -> UIListContentConfiguration
```

<a id="return-value"></a>

## Return Value

The default configuration for a cell that’s in a sidebar list and contains subtitle text.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the content and styling of a cell in a sidebar collection view list. When you apply this configuration to a cell, the cell displays one primary label and one subtitle label below the primary label. Both labels resize automatically based on the length of the text you provide and the device’s Dynamic Type and accessibility settings.

For an appearance consistent with system defaults, display your cell in a sidebar collection view list that you configure with one of the following enumeration cases:

- [UICollectionLayoutListConfiguration.Appearance.sidebar](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebar.md)
- [UICollectionLayoutListConfiguration.Appearance.sidebarPlain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebarplain.md)

Configure the background of your cell using one of the [UIBackgroundConfiguration](../uibackgroundconfiguration-swift.struct.md) options below. Match the background of your cell to the corresponding table view or collection view styles as follows:

| Background configuration option | Matching table view or collection view styles |
| --- | --- |
| [listSidebarCell()](../uibackgroundconfiguration-swift.struct/listsidebarcell%28%29.md) | [UICollectionLayoutListConfiguration.Appearance.sidebar](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebar.md), [UICollectionLayoutListConfiguration.Appearance.sidebarPlain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebarplain.md) |

## See Also

### Creating default cell configurations

- [cell()](cell%28%29.md): Creates the default configuration you use to style a cell in a list.
- [subtitleCell()](subtitlecell%28%29.md): Creates the default configuration you use to style a cell that’s in a list and contains subtitle text.
- [valueCell()](valuecell%28%29.md): Creates the default configuration you use to style a cell that’s in a list and contains side-by-side value text.
- [sidebarCell()](sidebarcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a sidebar list.
- [accompaniedSidebarCell()](accompaniedsidebarcell%28%29.md): Creates the default configuration you use to style a cell in an accompanied sidebar list.
- [accompaniedSidebarSubtitleCell()](accompaniedsidebarsubtitlecell%28%29.md): Creates the default configuration you use to style a cell that’s in an accompanied sidebar list and contains subtitle text.
