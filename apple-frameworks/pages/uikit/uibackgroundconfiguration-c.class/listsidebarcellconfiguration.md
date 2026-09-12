> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-c.class/listsidebarcellconfiguration](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-c.class/listsidebarcellconfiguration)

# listSidebarCellConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates the default configuration you use to style a cell in a sidebar list.

## Declaration

```objectivec
+ (instancetype) listSidebarCellConfiguration;
```

<a id="return-value"></a>

## Return Value

The default configuration for a cell in a sidebar list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the styling for the background of a cell in a list. When you apply this configuration to a cell, the background of the cell matches the system default styling for a cell in a sidebar collection view list, including highlighted and selected states.

For an appearance consistent with system defaults, use this background configuration for a cell in a collection view list that you configure with the [UICollectionLayoutListAppearanceSidebar](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearancesidebar.md) or [UICollectionLayoutListAppearanceSidebarPlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearancesidebarplain.md) enumeration case.

## See Also

### Creating cell background configurations

- [listPlainCellConfiguration](listplaincellconfiguration.md): Deprecated. Creates the default configuration you use to style a cell in a plain list.
- [listGroupedCellConfiguration](listgroupedcellconfiguration.md): Deprecated. Creates the default configuration you use to style a cell in a grouped list.
- [listAccompaniedSidebarCellConfiguration](listaccompaniedsidebarcellconfiguration.md): Creates the default configuration you use to style a cell in an accompanied sidebar list.
