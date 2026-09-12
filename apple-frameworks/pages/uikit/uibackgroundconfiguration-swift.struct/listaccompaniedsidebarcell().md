> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-swift.struct/listaccompaniedsidebarcell()](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-swift.struct/listaccompaniedsidebarcell())

# listAccompaniedSidebarCell()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Creates the default configuration you use to style a cell in an accompanied sidebar list.

## Declaration

```swift
static func listAccompaniedSidebarCell() -> UIBackgroundConfiguration
```

<a id="return-value"></a>

## Return Value

The default configuration for a cell in an accompanied sidebar list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the styling for the background of a cell in a list. When you apply this configuration to a cell, the background of the cell matches the system default styling for a cell in an accompanied sidebar collection view list, including styling for highlighted and selected states. An accompanied sidebar collection view list is a list that’s in the primary column of a split view controller, accompanied by another list in the split view controller’s supplementary column.

For an appearance consistent with system defaults, use this background configuration for a cell in an accompanied sidebar collection view list that you configure with the [UICollectionLayoutListConfiguration.Appearance.sidebar](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebar.md) or [UICollectionLayoutListConfiguration.Appearance.sidebarPlain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebarplain.md) enumeration case.

## See Also

### Creating cell background configurations

- [listPlainCell()](listplaincell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a plain list.
- [listGroupedCell()](listgroupedcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a grouped list.
- [listSidebarCell()](listsidebarcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a sidebar list.
