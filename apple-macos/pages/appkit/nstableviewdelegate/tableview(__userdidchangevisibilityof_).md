> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdelegate/tableview(_:userdidchangevisibilityof:)](https://developer.apple.com/documentation/appkit/nstableviewdelegate/tableview(_:userdidchangevisibilityof:))

# tableView(\_:userDidChangeVisibilityOf:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Tells the delegate that the user changed the visibility of one or more table columns.

## Declaration

```swift
optional func tableView(_ tableView: NSTableView, userDidChangeVisibilityOf columns: [NSTableColumn])
```

## Parameters

- `tableView`: The table view object requesting this information.
- `columns`: The table columns affected by the visibility change.

## See Also

### Showing and hiding columns

- [tableView(\_:userCanChangeVisibilityOf:)](tableview%28__usercanchangevisibilityof_%29.md): Asks the delegate to verify that the user can change the given column’s visibility.

# tableView:userDidChangeVisibilityOfTableColumns: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Tells the delegate that the user changed the visibility of one or more table columns.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView userDidChangeVisibilityOfTableColumns:(NSArray<NSTableColumn *> *) columns;
```

## Parameters

- `tableView`: The table view object requesting this information.
- `columns`: The table columns affected by the visibility change.

## See Also

### Showing and hiding columns

- [tableView:userCanChangeVisibilityOfTableColumn:](tableview%28__usercanchangevisibilityof_%29.md): Asks the delegate to verify that the user can change the given column’s visibility.
