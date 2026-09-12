> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:didunhighlightrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:didunhighlightrowat:))

# tableView(\_:didUnhighlightRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that the highlight was removed from the row at the specified index path.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, didUnhighlightRowAt indexPath: IndexPath)
```

## Parameters

- `tableView`: The table view that removed the highlight from the cell.
- `indexPath`: The index path of the row that had its highlight removed.

## See Also

### Managing table view highlights

- [tableView(\_:shouldHighlightRowAt:)](tableview%28__shouldhighlightrowat_%29.md): Asks the delegate if the specified row should be highlighted.
- [tableView(\_:didHighlightRowAt:)](tableview%28__didhighlightrowat_%29.md): Tells the delegate that the specified row was highlighted.

# tableView:didUnhighlightRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the highlight was removed from the row at the specified index path.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView didUnhighlightRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view that removed the highlight from the cell.
- `indexPath`: The index path of the row that had its highlight removed.

## See Also

### Managing table view highlights

- [tableView:shouldHighlightRowAtIndexPath:](tableview%28__shouldhighlightrowat_%29.md): Asks the delegate if the specified row should be highlighted.
- [tableView:didHighlightRowAtIndexPath:](tableview%28__didhighlightrowat_%29.md): Tells the delegate that the specified row was highlighted.
