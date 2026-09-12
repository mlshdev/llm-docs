> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-c.class/listgroupedcellconfiguration](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-c.class/listgroupedcellconfiguration)

# listGroupedCellConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates the default configuration you use to style a cell in a grouped list.

## Declaration

```objectivec
+ (instancetype) listGroupedCellConfiguration;
```

<a id="return-value"></a>

## Return Value

The default configuration for a cell in a grouped list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the styling for the background of a cell in a list. When you apply this configuration to a cell, the background of the cell matches the system default styling for a grouped cell, including highlighted and selected states.

For an appearance consistent with system defaults, use this background configuration for a cell in these contexts:

- A table view that you configure with the [UITableViewStyleGrouped](../uitableview/style-swift.enum/grouped.md) or [UITableViewStyleInsetGrouped](../uitableview/style-swift.enum/insetgrouped.md) enumeration case.
- A a collection view list that you configure with the [UICollectionLayoutListAppearanceGrouped](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearancegrouped.md) or [UICollectionLayoutListAppearanceInsetGrouped](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearanceinsetgrouped.md) enumeration case.

## See Also

### Creating cell background configurations

- [listPlainCellConfiguration](listplaincellconfiguration.md): Deprecated. Creates the default configuration you use to style a cell in a plain list.
- [listSidebarCellConfiguration](listsidebarcellconfiguration.md): Deprecated. Creates the default configuration you use to style a cell in a sidebar list.
- [listAccompaniedSidebarCellConfiguration](listaccompaniedsidebarcellconfiguration.md): Creates the default configuration you use to style a cell in an accompanied sidebar list.
