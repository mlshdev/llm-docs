> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasourcereference](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasourcereference)

# UITableViewDiffableDataSourceReference (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The object you use to manage data and provide cells for a table view.

## Declaration

```swift
@MainActor class UITableViewDiffableDataSourceReference
```

<a id="overview"></a>

## Overview

> **Important**

> If you’re working in a Swift codebase, always use [UITableViewDiffableDataSource](uitableviewdiffabledatasource-2euir.md) instead.

A *diffable data source* object is a specialized type of data source that works together with your table view object. It provides the behavior you need to manage updates to your table view’s data and UI in a simple, efficient way. It also conforms to the [UITableViewDataSource](uitableviewdatasource.md) protocol and provides implementations for all of the protocol’s methods.

To fill a table view with data:

1. Connect a diffable data source to your table view.
2. Implement a cell provider to configure your table view’s cells.
3. Generate the current state of the data.
4. Display the data in the UI.

To connect a diffable data source to a table view, you create the diffable data source using its [init(tableView:cellProvider:)](uitableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md) initializer, passing in the table view you want to associate with that data source. You also pass in a cell provider, where you configure each of your cells to determine how to display your data in the UI.

```swift
self.dataSource = [[UITableViewDiffableDataSource alloc] initWithTableView:self.tableView cellProvider:^UITableViewCell *(UITableView *tableView, NSIndexPath *indexPath, id itemIdentifier) {
    // configure and return cell
}];
```

Then, you generate the current state of the data and display the data in the UI by constructing and applying a snapshot. For more information, see [NSDiffableDataSourceSnapshotReference](nsdiffabledatasourcesnapshotreference.md).

> **Important**

>  Do not change the [dataSource](uitableview/datasource.md) on the table view after you configure it with a diffable data source. If the table view needs a new data source after you configure it initially, create and configure a new table view and diffable data source.

## Topics

### Creating a diffable data source

- [init(tableView:cellProvider:)](uitableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.
- [UITableViewDiffableDataSourceReferenceCellProvider](uitableviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.

### Identifying items

- [itemIdentifier(for:)](uitableviewdiffabledatasourcereference/itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the table view.
- [indexPath(forItemIdentifier:)](uitableviewdiffabledatasourcereference/indexpath%28foritemidentifier_%29.md): Returns an index path for the item with the specified identifier in the table view.

### Identifying sections

- [sectionIdentifier(for:)](uitableviewdiffabledatasourcereference/sectionidentifier%28for_%29.md): Returns an identifier for the section at the index you specify in the table view.
- [index(forSectionIdentifier:)](uitableviewdiffabledatasourcereference/index%28forsectionidentifier_%29.md): Returns an index for the section with the identifier you specify in the table view.

### Updating data

- [snapshot()](uitableviewdiffabledatasourcereference/snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot(\_:animatingDifferences:)](uitableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [applySnapshot(\_:animatingDifferences:completion:)](uitableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshot(usingReloadData:)](uitableviewdiffabledatasourcereference/applysnapshot%28usingreloaddata_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshot(usingReloadData:completion:)](uitableviewdiffabledatasourcereference/applysnapshot%28usingreloaddata_completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.
- [defaultRowAnimation](uitableviewdiffabledatasourcereference/defaultrowanimation.md): The default type of animation to use when inserting or deleting rows.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UITableViewDataSource](uitableviewdatasource.md)

# UITableViewDiffableDataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The object you use to manage data and provide cells for a table view.

## Declaration

```objectivec
@interface UITableViewDiffableDataSource : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

> If you’re working in a Swift codebase, always use [UITableViewDiffableDataSource](uitableviewdiffabledatasource-2euir.md) instead.

A *diffable data source* object is a specialized type of data source that works together with your table view object. It provides the behavior you need to manage updates to your table view’s data and UI in a simple, efficient way. It also conforms to the [UITableViewDataSource](uitableviewdatasource.md) protocol and provides implementations for all of the protocol’s methods.

To fill a table view with data:

1. Connect a diffable data source to your table view.
2. Implement a cell provider to configure your table view’s cells.
3. Generate the current state of the data.
4. Display the data in the UI.

To connect a diffable data source to a table view, you create the diffable data source using its [initWithTableView:cellProvider:](uitableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md) initializer, passing in the table view you want to associate with that data source. You also pass in a cell provider, where you configure each of your cells to determine how to display your data in the UI.

```swift
self.dataSource = [[UITableViewDiffableDataSource alloc] initWithTableView:self.tableView cellProvider:^UITableViewCell *(UITableView *tableView, NSIndexPath *indexPath, id itemIdentifier) {
    // configure and return cell
}];
```

Then, you generate the current state of the data and display the data in the UI by constructing and applying a snapshot. For more information, see [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md).

> **Important**

>  Do not change the [dataSource](uitableview/datasource.md) on the table view after you configure it with a diffable data source. If the table view needs a new data source after you configure it initially, create and configure a new table view and diffable data source.

## Topics

### Creating a diffable data source

- [initWithTableView:cellProvider:](uitableviewdiffabledatasourcereference/init%28tableview_cellprovider_%29.md): Creates a diffable data source with the specified cell provider, and connects it to the specified table view.
- [UITableViewDiffableDataSourceCellProvider](uitableviewdiffabledatasourcereferencecellprovider.md): A closure that configures and returns a cell for a table view from its diffable data source.

### Identifying items

- [itemIdentifierForIndexPath:](uitableviewdiffabledatasourcereference/itemidentifier%28for_%29.md): Returns an identifier for the item at the specified index path in the table view.
- [indexPathForItemIdentifier:](uitableviewdiffabledatasourcereference/indexpath%28foritemidentifier_%29.md): Returns an index path for the item with the specified identifier in the table view.

### Identifying sections

- [sectionIdentifierForIndex:](uitableviewdiffabledatasourcereference/sectionidentifier%28for_%29.md): Returns an identifier for the section at the index you specify in the table view.
- [indexForSectionIdentifier:](uitableviewdiffabledatasourcereference/index%28forsectionidentifier_%29.md): Returns an index for the section with the identifier you specify in the table view.

### Updating data

- [snapshot](uitableviewdiffabledatasourcereference/snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot:animatingDifferences:](uitableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [applySnapshot:animatingDifferences:completion:](uitableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshotUsingReloadData:](uitableviewdiffabledatasourcereference/applysnapshot%28usingreloaddata_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshotUsingReloadData:completion:](uitableviewdiffabledatasourcereference/applysnapshot%28usingreloaddata_completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.
- [defaultRowAnimation](uitableviewdiffabledatasourcereference/defaultrowanimation.md): The default type of animation to use when inserting or deleting rows.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UITableViewDataSource](uitableviewdatasource.md)

## See Also

### Data

- [Filling a table with data](filling-a-table-with-data.md): Create and configure cells for your table dynamically using a data source object, or provide them statically from your storyboard.
- [UITableViewDataSource](uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md): A representation of the state of the data in a view at a specific point in time.
- [UILocalizedIndexedCollation](uilocalizedindexedcollation.md): An object that organizes, sorts, and localizes the data for a table view that has a section index.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UIRefreshControl](uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
