> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/sectionheaderviewprovider](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/sectionheaderviewprovider)

# sectionHeaderViewProvider (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The closure that configures and returns the table view’s section header views from the diffable data source.

## Declaration

```swift
var sectionHeaderViewProvider: NSTableViewDiffableDataSourceReferenceSectionHeaderViewProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

This property replaces the [tableView(\_:viewFor:row:)](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) method for group rows when the `tableColumn` parameter in [tableView(\_:viewFor:row:)](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) would be `nil`. Setting this property means the table view never invokes its delegate’s [tableView(\_:isGroupRow:)](../nstableviewdelegate/tableview%28__isgrouprow_%29.md) method. Instead, it uses the current snapshot’s sections.

## See Also

### Creating Row and Section Views

- [rowViewProvider](rowviewprovider.md): The closure that configures and returns the table view’s row views from the diffable data source.
- [NSTableViewDiffableDataSourceReferenceRowProvider](../nstableviewdiffabledatasourcereferencerowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceReferenceSectionHeaderViewProvider](../nstableviewdiffabledatasourcereferencesectionheaderviewprovider.md): A closure that configures and returns a section header view for a table view from its diffable data source.

# sectionHeaderViewProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The closure that configures and returns the table view’s section header views from the diffable data source.

## Declaration

```objectivec
@property (copy, nullable) NSTableViewDiffableDataSourceSectionHeaderViewProvider sectionHeaderViewProvider;
```

<a id="Discussion"></a>

## Discussion

This property replaces the [tableView:viewForTableColumn:row:](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) method for group rows when the `tableColumn` parameter in [tableView:viewForTableColumn:row:](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) would be `nil`. Setting this property means the table view never invokes its delegate’s [tableView:isGroupRow:](../nstableviewdelegate/tableview%28__isgrouprow_%29.md) method. Instead, it uses the current snapshot’s sections.

## See Also

### Creating Row and Section Views

- [rowViewProvider](rowviewprovider.md): The closure that configures and returns the table view’s row views from the diffable data source.
- [NSTableViewDiffableDataSourceRowProvider](../nstableviewdiffabledatasourcereferencerowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceSectionHeaderViewProvider](../nstableviewdiffabledatasourcereferencesectionheaderviewprovider.md): A closure that configures and returns a section header view for a table view from its diffable data source.
