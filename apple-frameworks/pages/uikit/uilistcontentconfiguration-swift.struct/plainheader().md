> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-swift.struct/plainheader()](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-swift.struct/plainheader())

# plainHeader()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS

Creates the default configuration you use to style a header in a plain list.

## Declaration

```swift
static func plainHeader() -> UIListContentConfiguration
```

<a id="return-value"></a>

## Return Value

The default configuration for a header in a plain list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the content and styling of a header in a table view or collection view list.

For an appearance consistent with system defaults, display your header in a table view or collection view list that you configure with one of the following enumeration cases:

- [UITableView.Style.plain](../uitableview/style-swift.enum/plain.md)
- [UICollectionLayoutListConfiguration.Appearance.plain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/plain.md)
- [UICollectionLayoutListConfiguration.Appearance.sidebarPlain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebarplain.md)

Configure the background of your header using one of the [UIBackgroundConfiguration](../uibackgroundconfiguration-swift.struct.md) options below. Match the background of your header to the corresponding table view or collection view styles as follows:

| Background configuration option | Matching table view or collection view styles |
| --- | --- |
| [listPlainHeaderFooter()](../uibackgroundconfiguration-swift.struct/listplainheaderfooter%28%29.md) | [UITableView.Style.plain](../uitableview/style-swift.enum/plain.md), [UICollectionLayoutListConfiguration.Appearance.plain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/plain.md), [UICollectionLayoutListConfiguration.Appearance.sidebarPlain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebarplain.md) |

## See Also

### Creating header and footer configurations

- [plainFooter()](plainfooter%28%29.md): Deprecated. Creates the default configuration you use to style a footer in a plain list.
- [groupedHeader()](groupedheader%28%29.md): Deprecated. Creates the default configuration you use to style a header in a grouped list.
- [groupedFooter()](groupedfooter%28%29.md): Deprecated. Creates the default configuration you use to style a footer in a grouped list.
- [prominentInsetGroupedHeader()](prominentinsetgroupedheader%28%29.md): Creates the default configuration you use to style a prominent header in an inset grouped list.
- [extraProminentInsetGroupedHeader()](extraprominentinsetgroupedheader%28%29.md): Creates the default configuration you use to style an extra prominent header in an inset grouped list.
- [sidebarHeader()](sidebarheader%28%29.md): Deprecated. Creates the default configuration you use to style a header in a sidebar list.
