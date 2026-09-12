> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/tableview(_:caneditrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/tableview(_:caneditrowat:))

# tableView(\_:canEditRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the data source to verify that the given row is editable.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table-view object requesting this information.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the row indicated by `indexPath` is editable; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The method permits the data source to exclude individual rows from being treated as editable. Editable rows display the insertion or deletion control in their cells. If this method isn’t implemented, all rows are assumed to be editable. Rows that aren’t editable ignore the [editingStyle](../uitableviewcell/editingstyle-swift.property.md) property of a `UITableViewCell` object and do no indentation for the deletion or insertion control. Rows that are editable, but that don’t want to have an insertion or remove control shown, can return [UITableViewCell.EditingStyle.none](../uitableviewcell/editingstyle-swift.enum/none.md) from the [tableView(\_:editingStyleForRowAt:)](../uitableviewdelegate/tableview%28__editingstyleforrowat_%29.md) delegate method.

## See Also

### Inserting or deleting table rows

- [tableView(\_:commit:forRowAt:)](tableview%28__commit_forrowat_%29.md): Asks the data source to commit the insertion or deletion of a specified row.

# tableView:canEditRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the data source to verify that the given row is editable.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView canEditRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table-view object requesting this information.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the row indicated by `indexPath` is editable; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The method permits the data source to exclude individual rows from being treated as editable. Editable rows display the insertion or deletion control in their cells. If this method isn’t implemented, all rows are assumed to be editable. Rows that aren’t editable ignore the [editingStyle](../uitableviewcell/editingstyle-swift.property.md) property of a `UITableViewCell` object and do no indentation for the deletion or insertion control. Rows that are editable, but that don’t want to have an insertion or remove control shown, can return [UITableViewCellEditingStyleNone](../uitableviewcell/editingstyle-swift.enum/none.md) from the [tableView:editingStyleForRowAtIndexPath:](../uitableviewdelegate/tableview%28__editingstyleforrowat_%29.md) delegate method.

## See Also

### Inserting or deleting table rows

- [tableView:commitEditingStyle:forRowAtIndexPath:](tableview%28__commit_forrowat_%29.md): Asks the data source to commit the insertion or deletion of a specified row.
