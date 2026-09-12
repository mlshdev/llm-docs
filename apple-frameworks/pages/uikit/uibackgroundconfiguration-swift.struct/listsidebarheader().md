> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-swift.struct/listsidebarheader()](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-swift.struct/listsidebarheader())

# listSidebarHeader()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · visionOS

Creates the default configuration you use to style a sidebar list header.

> Use [listHeader()](listheader%28%29.md) or [listFooter()](listfooter%28%29.md) instead.

## Declaration

```swift
static func listSidebarHeader() -> UIBackgroundConfiguration
```

<a id="return-value"></a>

## Return Value

The default configuration for a sidebar list header.

<a id="Discussion"></a>

## Discussion

Create this configuration to update the styling for the background of a header or footer in a table view or collection view list. When you apply this configuration, the background of the header or footer matches the system default styling for a header or footer in a sidebar list.

For an appearance consistent with system defaults, use this background configuration for a header or footer in a collection view list that you configure with the [UICollectionLayoutListConfiguration.Appearance.sidebar](../uicollectionlayoutlistconfiguration-swift.struct/appearance-swift.enum/sidebar.md) enumeration case.

## See Also

### Creating header and footer background configurations

- [listPlainHeaderFooter()](listplainheaderfooter%28%29.md): Deprecated. Creates the default configuration you use to style a plain list header or footer.
- [listGroupedHeaderFooter()](listgroupedheaderfooter%28%29.md): Deprecated. Creates the default configuration you use to style a grouped list header or footer.
