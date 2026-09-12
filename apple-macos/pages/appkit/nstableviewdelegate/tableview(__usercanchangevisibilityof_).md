> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:usercanchangevisibilityof:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:usercanchangevisibilityof:))

# tableView(\_:userCanChangeVisibilityOf:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Asks the delegate to verify that the user can change the given column’s visibility.

## Declaration

```swift
optional func tableView(_ tableView: NSTableView, userCanChangeVisibilityOf column: NSTableColumn) -> Bool
```

## Parameters

- `tableView`: The table view object requesting this information.
- `column`: The table column affected by the visibility change.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can change the visibility of the column; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method to enable the table view to provide a menu that allows users to show or hide table columns.

To change a column’s visibility, ensure the column has a title. Further, setting the [menu](../nsresponder/menu.md) property on the table view [headerView](../nstableview/headerview.md) or, subclassing [NSTableHeaderView](../nstableheaderview.md) and overriding the [menu](../nsresponder/menu.md) property also prevents the column visibility from changing.

## See Also

### Showing and hiding columns

- [tableView(\_:userDidChangeVisibilityOf:)](tableview%28__userdidchangevisibilityof_%29.md): Tells the delegate that the user changed the visibility of one or more table columns.

# tableView:userCanChangeVisibilityOfTableColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Asks the delegate to verify that the user can change the given column’s visibility.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView userCanChangeVisibilityOfTableColumn:(NSTableColumn *) column;
```

## Parameters

- `tableView`: The table view object requesting this information.
- `column`: The table column affected by the visibility change.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can change the visibility of the column; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method to enable the table view to provide a menu that allows users to show or hide table columns.

To change a column’s visibility, ensure the column has a title. Further, setting the [menu](../nsresponder/menu.md) property on the table view [headerView](../nstableview/headerview.md) or, subclassing [NSTableHeaderView](../nstableheaderview.md) and overriding the [menu](../nsresponder/menu.md) property also prevents the column visibility from changing.

## See Also

### Showing and hiding columns

- [tableView:userDidChangeVisibilityOfTableColumns:](tableview%28__userdidchangevisibilityof_%29.md): Tells the delegate that the user changed the visibility of one or more table columns.
