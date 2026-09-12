> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/tableview(_:canmoverowat:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/tableview(_:canmoverowat:))

# tableView(\_:canMoveRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the data source whether a given row can move to another location in the table view.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, canMoveRowAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table-view object requesting this information.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the row can be moved; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method allows the data source to specify that the reordering control for the specified row not be shown. By default, the reordering control is shown if the data source implements the [tableView(\_:moveRowAt:to:)](tableview%28__moverowat_to_%29.md) method.

## See Also

### Reordering table rows

- [tableView(\_:moveRowAt:to:)](tableview%28__moverowat_to_%29.md): Tells the data source to move a row at a specific location in the table view to another location.

# tableView:canMoveRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the data source whether a given row can move to another location in the table view.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView canMoveRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table-view object requesting this information.
- `indexPath`: An index path locating a row in `tableView`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the row can be moved; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method allows the data source to specify that the reordering control for the specified row not be shown. By default, the reordering control is shown if the data source implements the [tableView:moveRowAtIndexPath:toIndexPath:](tableview%28__moverowat_to_%29.md) method.

## See Also

### Reordering table rows

- [tableView:moveRowAtIndexPath:toIndexPath:](tableview%28__moverowat_to_%29.md): Tells the data source to move a row at a specific location in the table view to another location.
