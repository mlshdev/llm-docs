> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-swift.struct/listgroupedheaderfooter()](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-swift.struct/listgroupedheaderfooter())

# listGroupedHeaderFooter()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS

Creates the default configuration you use to style a grouped list header or footer.

> Use [listHeader()](listheader%28%29.md) or [listFooter()](listfooter%28%29.md) instead.

## Declaration

```swift
static func listGroupedHeaderFooter() -> UIBackgroundConfiguration
```

<a id="return-value"></a>

## Return Value

The default configuration for a grouped list header or footer.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the styling for the background of a header or footer in a table view or collection view list. When you apply this configuration, the background of the header or footer matches the system default styling for a header or footer in a grouped list.

For an appearance consistent with system defaults, use this background configuration for a header or footer in these contexts:

- A table view that you configure with the [UITableView.Style.grouped](../uitableview/style-swift.enum/grouped.md) or [UITableView.Style.insetGrouped](../uitableview/style-swift.enum/insetgrouped.md) enumeration cases.
- A a collection view list that you configure with the [UICollectionLayoutListConfiguration.Appearance.grouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/grouped.md) or [UICollectionLayoutListConfiguration.Appearance.insetGrouped](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/insetgrouped.md) enumeration cases.

## See Also

### Creating header and footer background configurations

- [listPlainHeaderFooter()](listplainheaderfooter%28%29.md): Deprecated. Creates the default configuration you use to style a plain list header or footer.
- [listSidebarHeader()](listsidebarheader%28%29.md): Deprecated. Creates the default configuration you use to style a sidebar list header.
