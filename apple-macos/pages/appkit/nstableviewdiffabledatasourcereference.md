> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference)

# NSTableViewDiffableDataSourceReference (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

The object you use to manage data and provide items for a table view.

## Declaration

```swift
class NSTableViewDiffableDataSourceReference<SectionIdentifierType, ItemIdentifierType> where SectionIdentifierType : AnyObject, ItemIdentifierType : AnyObject
```

<a id="overview"></a>

## Overview

> **Important**

>  If you’re working in a Swift codebase, always use [NSTableViewDiffableDataSource](nstableviewdiffabledatasource-c5gl.md) instead of `NSTableViewDiffableDataSourceReference`.

A *diffable data source* object is a specialized type of data source that works together with your table view object. It provides the behavior you need to manage updates to your table view’s data and UI in a simple, efficient way. It also conforms to the [NSTableViewDataSource](nstableviewdatasource.md) protocol.

To fill a table view with data:

1. Connect a diffable data source to your table view.
2. Implement a cell provider to configure your table view’s cells.
3. Generate the current state of the data.
4. Display the data in the UI.

To connect a diffable data source to a table view, you create the diffable data source using its [init(tableView:cellProvider:)](nstableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md) initializer, passing in the table view you want to associate with that data source. You also pass in a cell provider, where you configure each of your cells to determine how to display your data in the UI.

Then, you generate the current state of the data and display the data in the UI by constructing and applying a snapshot. For more information, see [NSDiffableDataSourceSnapshotReference](nsdiffabledatasourcesnapshotreference.md).

## Topics

### Creating a Diffable Data Source

- [init(tableView:cellProvider:)](nstableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.
- [NSTableViewDiffableDataSourceReferenceCellProvider](nstableviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.

### Creating Row and Section Views

- [rowViewProvider](nstableviewdiffabledatasourcereference/rowviewprovider.md): The closure that configures and returns the table view’s row views from the diffable data source.
- [sectionHeaderViewProvider](nstableviewdiffabledatasourcereference/sectionheaderviewprovider.md): The closure that configures and returns the table view’s section header views from the diffable data source.
- [NSTableViewDiffableDataSourceReferenceRowProvider](nstableviewdiffabledatasourcereferencerowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceReferenceSectionHeaderViewProvider](nstableviewdiffabledatasourcereferencesectionheaderviewprovider.md): A closure that configures and returns a section header view for a table view from its diffable data source.

### Identifying Items and Sections

- [itemIdentifier(forRow:)](nstableviewdiffabledatasourcereference/itemidentifier%28forrow_%29.md): Returns an identifier for the item at the specified row in the table view.
- [row(forItemIdentifier:)](nstableviewdiffabledatasourcereference/row%28foritemidentifier_%29.md): Returns a row for the item with the specified identifier in the table view.
- [sectionIdentifier(forRow:)](nstableviewdiffabledatasourcereference/sectionidentifier%28forrow_%29.md): Returns the identifier of the section containing the specified row in the snapshot.
- [row(forSectionIdentifier:)](nstableviewdiffabledatasourcereference/row%28forsectionidentifier_%29.md): Returns a row for the section with the specified identifier in the table view.

### Updating Data

- [snapshot()](nstableviewdiffabledatasourcereference/snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot(\_:animatingDifferences:)](nstableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
- [applySnapshot(\_:animatingDifferences:completion:)](nstableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [defaultRowAnimation](nstableviewdiffabledatasourcereference/defaultrowanimation.md): The default animation the UI uses to show differences between rows.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTableViewDataSource](nstableviewdatasource.md)

# NSTableViewDiffableDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

The object you use to manage data and provide items for a table view.

## Declaration

```objectivec
@interface NSTableViewDiffableDataSource : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  If you’re working in a Swift codebase, always use [NSTableViewDiffableDataSource](nstableviewdiffabledatasource-c5gl.md) instead of `NSTableViewDiffableDataSourceReference`.

A *diffable data source* object is a specialized type of data source that works together with your table view object. It provides the behavior you need to manage updates to your table view’s data and UI in a simple, efficient way. It also conforms to the [NSTableViewDataSource](nstableviewdatasource.md) protocol.

To fill a table view with data:

1. Connect a diffable data source to your table view.
2. Implement a cell provider to configure your table view’s cells.
3. Generate the current state of the data.
4. Display the data in the UI.

To connect a diffable data source to a table view, you create the diffable data source using its [initWithTableView:cellProvider:](nstableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md) initializer, passing in the table view you want to associate with that data source. You also pass in a cell provider, where you configure each of your cells to determine how to display your data in the UI.

Then, you generate the current state of the data and display the data in the UI by constructing and applying a snapshot. For more information, see [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md).

## Topics

### Creating a Diffable Data Source

- [initWithTableView:cellProvider:](nstableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.
- [NSTableViewDiffableDataSourceCellProvider](nstableviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.

### Creating Row and Section Views

- [rowViewProvider](nstableviewdiffabledatasourcereference/rowviewprovider.md): The closure that configures and returns the table view’s row views from the diffable data source.
- [sectionHeaderViewProvider](nstableviewdiffabledatasourcereference/sectionheaderviewprovider.md): The closure that configures and returns the table view’s section header views from the diffable data source.
- [NSTableViewDiffableDataSourceRowProvider](nstableviewdiffabledatasourcereferencerowprovider.md): A closure that configures and returns a row view for a table view from its diffable data source.
- [NSTableViewDiffableDataSourceSectionHeaderViewProvider](nstableviewdiffabledatasourcereferencesectionheaderviewprovider.md): A closure that configures and returns a section header view for a table view from its diffable data source.

### Identifying Items and Sections

- [itemIdentifierForRow:](nstableviewdiffabledatasourcereference/itemidentifier%28forrow_%29.md): Returns an identifier for the item at the specified row in the table view.
- [rowForItemIdentifier:](nstableviewdiffabledatasourcereference/row%28foritemidentifier_%29.md): Returns a row for the item with the specified identifier in the table view.
- [sectionIdentifierForRow:](nstableviewdiffabledatasourcereference/sectionidentifier%28forrow_%29.md): Returns the identifier of the section containing the specified row in the snapshot.
- [rowForSectionIdentifier:](nstableviewdiffabledatasourcereference/row%28forsectionidentifier_%29.md): Returns a row for the section with the specified identifier in the table view.

### Updating Data

- [snapshot](nstableviewdiffabledatasourcereference/snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot:animatingDifferences:](nstableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
- [applySnapshot:animatingDifferences:completion:](nstableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [defaultRowAnimation](nstableviewdiffabledatasourcereference/defaultrowanimation.md): The default animation the UI uses to show differences between rows.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSTableViewDataSource](nstableviewdatasource.md)

## See Also

### Management

- [NSTableViewDataSource](nstableviewdatasource.md): A set of methods that a table view uses to provide data to a table view and to allow the editing of the table view’s data source object.
- [NSTableViewDelegate](nstableviewdelegate.md): A set of optional methods you implement in a table view delegate to customize the behavior of the table view.
