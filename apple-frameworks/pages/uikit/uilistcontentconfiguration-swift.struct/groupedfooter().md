> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/groupedfooter()](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/groupedfooter())

# groupedFooter()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS

Creates the default configuration you use to style a footer in a grouped list.

## Declaration

```swift
static func groupedFooter() -> UIListContentConfiguration
```

<a id="return-value"></a>

## Return Value

The default configuration for a footer in a grouped list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the content and styling of a footer in a table view or collection view list.

For an appearance consistent with system defaults, display your footer in a table view or collection view list that you configure with one of the following enumeration cases:

- [UITableView.Style.grouped](../uitableview/style-swift.enum/grouped.md)
- [UITableView.Style.insetGrouped](../uitableview/style-swift.enum/insetgrouped.md)
- [UICollectionLayoutListConfiguration.Appearance.grouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/grouped.md)
- [UICollectionLayoutListConfiguration.Appearance.insetGrouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/insetgrouped.md)

Configure the background of your footer using one of the [UIBackgroundConfiguration](../uibackgroundconfiguration-swift.struct.md) options below. Match the background of your footer to the corresponding table view or collection view styles as follows:

| Background configuration option | Matching table view or collection view styles |
| --- | --- |
| [listGroupedHeaderFooter()](../uibackgroundconfiguration-swift.struct/listgroupedheaderfooter%28%29.md) | [UITableView.Style.grouped](../uitableview/style-swift.enum/grouped.md), [UITableView.Style.insetGrouped](../uitableview/style-swift.enum/insetgrouped.md), [UICollectionLayoutListConfiguration.Appearance.grouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/grouped.md), [UICollectionLayoutListConfiguration.Appearance.insetGrouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/insetgrouped.md) |

## See Also

### Creating header and footer configurations

- [plainHeader()](plainheader%28%29.md): Deprecated. Creates the default configuration you use to style a header in a plain list.
- [plainFooter()](plainfooter%28%29.md): Deprecated. Creates the default configuration you use to style a footer in a plain list.
- [groupedHeader()](groupedheader%28%29.md): Deprecated. Creates the default configuration you use to style a header in a grouped list.
- [prominentInsetGroupedHeader()](prominentinsetgroupedheader%28%29.md): Creates the default configuration you use to style a prominent header in an inset grouped list.
- [extraProminentInsetGroupedHeader()](extraprominentinsetgroupedheader%28%29.md): Creates the default configuration you use to style an extra prominent header in an inset grouped list.
- [sidebarHeader()](sidebarheader%28%29.md): Deprecated. Creates the default configuration you use to style a header in a sidebar list.
