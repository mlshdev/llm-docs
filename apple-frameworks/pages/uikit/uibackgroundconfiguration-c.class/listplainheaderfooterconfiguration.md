> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-c.class/listplainheaderfooterconfiguration](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-c.class/listplainheaderfooterconfiguration)

# listPlainHeaderFooterConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates the default configuration you use to style a plain list header or footer.

## Declaration

```objectivec
+ (instancetype) listPlainHeaderFooterConfiguration;
```

<a id="return-value"></a>

## Return Value

The default configuration for a plain list header or footer.

<a id="discussion"></a>

## Discussion

> **Deprecated**

> Use [listHeader()](../uibackgroundconfiguration-swift.struct/listheader%28%29.md) or [listFooter()](../uibackgroundconfiguration-swift.struct/listfooter%28%29.md) instead.

Create this configuration to update the styling for the background of a header or footer in a table view or collection view list. When you apply this configuration, the background of the header or footer matches the system default styling for a header or footer in a plain list.

For an appearance consistent with system defaults, use this background configuration for a header or footer in these contexts:

- A table view that you configure with the [UITableViewStylePlain](../uitableview/style-swift.enum/plain.md) enumeration case.
- A collection view list that you configure with the [UICollectionLayoutListAppearancePlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearanceplain.md) or [UICollectionLayoutListAppearanceSidebarPlain](../uicollectionlayoutlistappearance/uicollectionlayoutlistappearancesidebarplain.md) enumeration cases.

## See Also

### Creating header and footer background configurations

- [listGroupedHeaderFooterConfiguration](listgroupedheaderfooterconfiguration.md): Deprecated. Creates the default configuration you use to style a grouped list header or footer.
- [listSidebarHeaderConfiguration](listsidebarheaderconfiguration.md): Deprecated. Creates the default configuration you use to style a sidebar list header.
