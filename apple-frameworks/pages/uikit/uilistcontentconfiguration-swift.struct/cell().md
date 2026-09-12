> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/cell()](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/cell())

# cell()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates the default configuration you use to style a cell in a list.

## Declaration

```swift
static func cell() -> UIListContentConfiguration
```

<a id="return-value"></a>

## Return Value

The default configuration for a cell in a list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the content and styling of a cell in a list. When you apply this configuration to a cell, the cell displays one label, which resizes automatically based on the length of the text you provide and the device’s Dynamic Type and accessibility settings.

For an appearance consistent with system defaults, display your cell in a table view or collection view list that you configure with one of the following enumeration cases:

- [UITableView.Style.plain](../uitableview/style-swift.enum/plain.md)
- [UITableView.Style.grouped](../uitableview/style-swift.enum/grouped.md)
- [UITableView.Style.insetGrouped](../uitableview/style-swift.enum/insetgrouped.md)
- [UICollectionLayoutListConfiguration.Appearance.plain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/plain.md)
- [UICollectionLayoutListConfiguration.Appearance.grouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/grouped.md)
- [UICollectionLayoutListConfiguration.Appearance.insetGrouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/insetgrouped.md)

Configure the background of your cell using one of the [UIBackgroundConfiguration](../uibackgroundconfiguration-swift.struct.md) options below. Match the background of your cell to the corresponding table view or collection view styles as follows:

| Background configuration option | Matching table view or collection view styles |
| --- | --- |
| [listPlainCell()](../uibackgroundconfiguration-swift.struct/listplaincell%28%29.md) | [UITableView.Style.plain](../uitableview/style-swift.enum/plain.md), [UICollectionLayoutListConfiguration.Appearance.plain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/plain.md) |
| [listGroupedCell()](../uibackgroundconfiguration-swift.struct/listgroupedcell%28%29.md) | [UITableView.Style.grouped](../uitableview/style-swift.enum/grouped.md), [UITableView.Style.insetGrouped](../uitableview/style-swift.enum/insetgrouped.md), [UICollectionLayoutListConfiguration.Appearance.grouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/grouped.md), [UICollectionLayoutListConfiguration.Appearance.insetGrouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/insetgrouped.md) |

## See Also

### Creating default cell configurations

- [subtitleCell()](subtitlecell%28%29.md): Creates the default configuration you use to style a cell that’s in a list and contains subtitle text.
- [valueCell()](valuecell%28%29.md): Creates the default configuration you use to style a cell that’s in a list and contains side-by-side value text.
- [sidebarCell()](sidebarcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a sidebar list.
- [sidebarSubtitleCell()](sidebarsubtitlecell%28%29.md): Deprecated. Creates the default configuration you use to style a cell that’s in a sidebar list and contains subtitle text.
- [accompaniedSidebarCell()](accompaniedsidebarcell%28%29.md): Creates the default configuration you use to style a cell in an accompanied sidebar list.
- [accompaniedSidebarSubtitleCell()](accompaniedsidebarsubtitlecell%28%29.md): Creates the default configuration you use to style a cell that’s in an accompanied sidebar list and contains subtitle text.
