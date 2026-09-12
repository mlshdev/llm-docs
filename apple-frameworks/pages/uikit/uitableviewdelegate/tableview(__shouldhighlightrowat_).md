> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:shouldhighlightrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:shouldhighlightrowat:))

# tableView(\_:shouldHighlightRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate if the specified row should be highlighted.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, shouldHighlightRowAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table view that is making this request.
- `indexPath`: The index path of the row being highlighted.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the row should be highlighted or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

As touch events arrive, the table view highlights rows in anticipation of the user selecting them. As it processes those touch events, the table view calls this method to ask your delegate if a given cell should be highlighted. Your delegate can implement this method and use it to prevent the highlighting of a row when another row is already selected or when other relevant criteria occur.

If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing table view highlights

- [tableView(\_:didHighlightRowAt:)](tableview%28__didhighlightrowat_%29.md): Tells the delegate that the specified row was highlighted.
- [tableView(\_:didUnhighlightRowAt:)](tableview%28__didunhighlightrowat_%29.md): Tells the delegate that the highlight was removed from the row at the specified index path.

# tableView:shouldHighlightRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if the specified row should be highlighted.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView shouldHighlightRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view that is making this request.
- `indexPath`: The index path of the row being highlighted.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the row should be highlighted or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

As touch events arrive, the table view highlights rows in anticipation of the user selecting them. As it processes those touch events, the table view calls this method to ask your delegate if a given cell should be highlighted. Your delegate can implement this method and use it to prevent the highlighting of a row when another row is already selected or when other relevant criteria occur.

If you do not implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing table view highlights

- [tableView:didHighlightRowAtIndexPath:](tableview%28__didhighlightrowat_%29.md): Tells the delegate that the specified row was highlighted.
- [tableView:didUnhighlightRowAtIndexPath:](tableview%28__didunhighlightrowat_%29.md): Tells the delegate that the highlight was removed from the row at the specified index path.
