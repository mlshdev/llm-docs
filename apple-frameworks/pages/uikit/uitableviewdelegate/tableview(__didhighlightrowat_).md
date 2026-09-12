> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:didhighlightrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:didhighlightrowat:))

# tableView(\_:didHighlightRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the specified row was highlighted.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, didHighlightRowAt indexPath: IndexPath)
```

## Parameters

- `tableView`: The table view that highlighted the cell.
- `indexPath`: The index path of the row that was highlighted.

## See Also

### Managing table view highlights

- [tableView(\_:shouldHighlightRowAt:)](tableview%28__shouldhighlightrowat_%29.md): Asks the delegate if the specified row should be highlighted.
- [tableView(\_:didUnhighlightRowAt:)](tableview%28__didunhighlightrowat_%29.md): Tells the delegate that the highlight was removed from the row at the specified index path.

# tableView:didHighlightRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the specified row was highlighted.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView didHighlightRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view that highlighted the cell.
- `indexPath`: The index path of the row that was highlighted.

## See Also

### Managing table view highlights

- [tableView:shouldHighlightRowAtIndexPath:](tableview%28__shouldhighlightrowat_%29.md): Asks the delegate if the specified row should be highlighted.
- [tableView:didUnhighlightRowAtIndexPath:](tableview%28__didunhighlightrowat_%29.md): Tells the delegate that the highlight was removed from the row at the specified index path.
