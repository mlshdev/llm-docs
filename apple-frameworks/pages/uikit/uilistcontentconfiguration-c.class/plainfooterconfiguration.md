> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentconfiguration-c.class/plainfooterconfiguration](https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-c.class/plainfooterconfiguration)

# plainFooterConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates the default configuration you use to style a footer in a plain list.

## Declaration

```objectivec
+ (instancetype) plainFooterConfiguration;
```

<a id="return-value"></a>

## Return Value

The default configuration for a footer in a plain list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the content and styling of a footer in a table view or collection view list.

For an appearance consistent with system defaults, display your footer in a table view or collection view list that you configure with one of the following enumeration cases:

- [UITableViewStylePlain](../uitableview/style-swift.enum/plain.md)
- [UICollectionLayoutListAppearancePlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearanceplain.md)
- [UICollectionLayoutListAppearanceSidebarPlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearancesidebarplain.md)

Configure the background of your footer using one of the [UIBackgroundConfiguration](../uibackgroundconfiguration-c.class.md) options below. Match the background of your footer to the corresponding table view or collection view styles as follows:

| Background configuration option | Matching table view or collection view styles |
| --- | --- |
| [listPlainHeaderFooterConfiguration](../uibackgroundconfiguration-c.class/listplainheaderfooterconfiguration.md) | [UITableViewStylePlain](../uitableview/style-swift.enum/plain.md), [UICollectionLayoutListAppearancePlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearanceplain.md), [UICollectionLayoutListAppearanceSidebarPlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearancesidebarplain.md) |

## See Also

### Creating header and footer configurations

- [plainHeaderConfiguration](plainheaderconfiguration.md): Deprecated. Creates the default configuration you use to style a header in a plain list.
- [groupedHeaderConfiguration](groupedheaderconfiguration.md): Deprecated. Creates the default configuration you use to style a header in a grouped list.
- [groupedFooterConfiguration](groupedfooterconfiguration.md): Deprecated. Creates the default configuration you use to style a footer in a grouped list.
- [prominentInsetGroupedHeaderConfiguration](prominentinsetgroupedheaderconfiguration.md): Creates the default configuration you use to style a prominent header in an inset grouped list.
- [extraProminentInsetGroupedHeaderConfiguration](extraprominentinsetgroupedheaderconfiguration.md): Creates the default configuration you use to style an extra prominent header in an inset grouped list.
- [sidebarHeaderConfiguration](sidebarheaderconfiguration.md): Deprecated. Creates the default configuration you use to style a header in a sidebar list.
