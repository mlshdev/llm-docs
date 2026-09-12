> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-c.class/prominentinsetgroupedheaderconfiguration](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-c.class/prominentinsetgroupedheaderconfiguration)

# prominentInsetGroupedHeaderConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates the default configuration you use to style a prominent header in an inset grouped list.

## Declaration

```objectivec
+ (instancetype) prominentInsetGroupedHeaderConfiguration;
```

<a id="return-value"></a>

## Return Value

The default configuration for a prominent header in an inset grouped list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the content and styling of a header in a table view or collection view list.

For an appearance consistent with system defaults, display your header in a table view or collection view list that you configure with one of the following enumeration cases:

- [UITableViewStyleInsetGrouped](../uitableview/style-swift.enum/insetgrouped.md)
- [UICollectionLayoutListAppearanceInsetGrouped](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearanceinsetgrouped.md)

Configure the background of your header using one of the [UIBackgroundConfiguration](../uibackgroundconfiguration-c.class.md) options below. Match the background of your header to the corresponding table view or collection view styles as follows:

| Background configuration option | Matching table view or collection view styles |
| --- | --- |
| [listGroupedHeaderFooterConfiguration](../uibackgroundconfiguration-c.class/listgroupedheaderfooterconfiguration.md) | [UITableViewStyleInsetGrouped](../uitableview/style-swift.enum/insetgrouped.md), [UICollectionLayoutListAppearanceInsetGrouped](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearanceinsetgrouped.md) |

## See Also

### Creating header and footer configurations

- [plainHeaderConfiguration](plainheaderconfiguration.md): Deprecated. Creates the default configuration you use to style a header in a plain list.
- [plainFooterConfiguration](plainfooterconfiguration.md): Deprecated. Creates the default configuration you use to style a footer in a plain list.
- [groupedHeaderConfiguration](groupedheaderconfiguration.md): Deprecated. Creates the default configuration you use to style a header in a grouped list.
- [groupedFooterConfiguration](groupedfooterconfiguration.md): Deprecated. Creates the default configuration you use to style a footer in a grouped list.
- [extraProminentInsetGroupedHeaderConfiguration](extraprominentinsetgroupedheaderconfiguration.md): Creates the default configuration you use to style an extra prominent header in an inset grouped list.
- [sidebarHeaderConfiguration](sidebarheaderconfiguration.md): Deprecated. Creates the default configuration you use to style a header in a sidebar list.
