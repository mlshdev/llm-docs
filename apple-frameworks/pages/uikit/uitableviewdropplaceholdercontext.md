> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropplaceholdercontext](https://developer.apple.com/documentation/uikit/uitableviewdropplaceholdercontext)

# UITableViewDropPlaceholderContext (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object for tracking a placeholder cell that you added to your table during a drop operation.

## Declaration

```swift
@MainActor protocol UITableViewDropPlaceholderContext : UIDragAnimating
```

<a id="overview"></a>

## Overview

Don’t create instances of this class yourself. Instead, call [drop(\_:to:)](uitableviewdropcoordinator/drop%28__to_%29-3znax.md) from your drop coordinator object. That method inserts a placeholder cell into the table and returns a [UITableViewDropPlaceholderContext](uitableviewdropplaceholdercontext.md) object for managing that placeholder.

When you’re ready to swap a placeholder cell for a cell with the actual data, call the [commitInsertion(dataSourceUpdates:)](uitableviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md) method of the context object. To remove the placeholder cell without providing a replacement, call [deletePlaceholder()](uitableviewdropplaceholdercontext/deleteplaceholder%28%29.md) instead.

## Topics

### Updating the placeholder cell

- [commitInsertion(dataSourceUpdates:)](uitableviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md): Exchanges the placeholder cell for a cell with the final content.

### Removing the placeholder cell

- [deletePlaceholder()](uitableviewdropplaceholdercontext/deleteplaceholder%28%29.md): Removes an unneeded placeholder cell from the table view.

### Getting the drag item

- [dragItem](uitableviewdropplaceholdercontext/dragitem.md): The drag item represented by the placeholder cell.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIDragAnimating](uidraganimating.md)

## See Also

### Placeholder cells

- [UITableViewDropPlaceholder](uitableviewdropplaceholder.md): A placeholder cell that supports customizing the drop preview parameters.
- [UITableViewPlaceholder](uitableviewplaceholder.md): An object that contains information about a placeholder cell being inserted into a table.

# UITableViewDropPlaceholderContext (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object for tracking a placeholder cell that you added to your table during a drop operation.

## Declaration

```objectivec
@protocol UITableViewDropPlaceholderContext <UIDragAnimating>
```

<a id="overview"></a>

## Overview

Don’t create instances of this class yourself. Instead, call [dropItem:toPlaceholder:](uitableviewdropcoordinator/drop%28__to_%29-3znax.md) from your drop coordinator object. That method inserts a placeholder cell into the table and returns a [UITableViewDropPlaceholderContext](uitableviewdropplaceholdercontext.md) object for managing that placeholder.

When you’re ready to swap a placeholder cell for a cell with the actual data, call the [commitInsertionWithDataSourceUpdates:](uitableviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md) method of the context object. To remove the placeholder cell without providing a replacement, call [deletePlaceholder](uitableviewdropplaceholdercontext/deleteplaceholder%28%29.md) instead.

## Topics

### Updating the placeholder cell

- [commitInsertionWithDataSourceUpdates:](uitableviewdropplaceholdercontext/commitinsertion%28datasourceupdates_%29.md): Exchanges the placeholder cell for a cell with the final content.

### Removing the placeholder cell

- [deletePlaceholder](uitableviewdropplaceholdercontext/deleteplaceholder%28%29.md): Removes an unneeded placeholder cell from the table view.

### Getting the drag item

- [dragItem](uitableviewdropplaceholdercontext/dragitem.md): The drag item represented by the placeholder cell.

## Relationships

### Inherits From

- [UIDragAnimating](uidraganimating.md)

## See Also

### Placeholder cells

- [UITableViewDropPlaceholder](uitableviewdropplaceholder.md): A placeholder cell that supports customizing the drop preview parameters.
- [UITableViewPlaceholder](uitableviewplaceholder.md): An object that contains information about a placeholder cell being inserted into a table.
