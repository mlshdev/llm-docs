> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-swift.struct/listplaincell()](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-swift.struct/listplaincell())

# listPlainCell()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS

Creates the default configuration you use to style a cell in a plain list.

## Declaration

```swift
static func listPlainCell() -> UIBackgroundConfiguration
```

<a id="return-value"></a>

## Return Value

The default configuration for a cell in a plain list.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the styling for the background of a cell in a list. When you apply this configuration to a cell, the background of the cell matches the system default styling for a plain cell, including styling for highlighted and selected states.

For an appearance consistent with system defaults, use this background configuration for a cell in these contexts:

- A table view that you configure with the [UITableView.Style.plain](../uitableview/style-swift.enum/plain.md) enumeration case.
- A collection view list that you configure with the [UICollectionLayoutListConfiguration.Appearance.plain](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/plain.md) enumeration case.

## See Also

### Creating cell background configurations

- [listGroupedCell()](listgroupedcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a grouped list.
- [listSidebarCell()](listsidebarcell%28%29.md): Deprecated. Creates the default configuration you use to style a cell in a sidebar list.
- [listAccompaniedSidebarCell()](listaccompaniedsidebarcell%28%29.md): Creates the default configuration you use to style a cell in an accompanied sidebar list.
