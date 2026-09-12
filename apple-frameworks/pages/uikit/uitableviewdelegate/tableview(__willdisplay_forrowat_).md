> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:willdisplay:forrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:willdisplay:forrowat:))

# tableView(\_:willDisplay:forRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate the table view is about to draw a cell for a particular row.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath)
```

## Parameters

- `tableView`: The table view informing the delegate of this impending event.
- `cell`: A cell that `tableView` is going to use when drawing the row.
- `indexPath`: An index path locating the row in `tableView`.

<a id="Discussion"></a>

## Discussion

A table view sends this message to its delegate just before it uses `cell` to draw a row, thereby permitting the delegate to customize the cell object before it is displayed. This method gives the delegate a chance to override state-based properties set earlier by the table view, such as selection and background color. After the delegate returns, the table view sets only the alpha and frame properties, and then only when animating rows as they slide in or out.

## See Also

### Related Documentation

- [tableView(\_:cellForRowAt:)](../uitableviewdatasource/tableview%28__cellforrowat_%29.md): Asks the data source for a cell to insert in a particular location of the table view.
- [prepareForReuse()](../uitableviewcell/prepareforreuse%28%29.md): Prepares a reusable cell for reuse by the table view’s delegate.

### Configuring rows for the table view

- [tableView(\_:indentationLevelForRowAt:)](tableview%28__indentationlevelforrowat_%29.md): Asks the delegate to return the level of indentation for a row in a given section.
- [tableView(\_:shouldSpringLoadRowAt:with:)](tableview%28__shouldspringloadrowat_with_%29.md): Called to let you fine tune the spring-loading behavior of the rows in a table.

# tableView:willDisplayCell:forRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate the table view is about to draw a cell for a particular row.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView willDisplayCell:(UITableViewCell *) cell forRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view informing the delegate of this impending event.
- `cell`: A cell that `tableView` is going to use when drawing the row.
- `indexPath`: An index path locating the row in `tableView`.

<a id="Discussion"></a>

## Discussion

A table view sends this message to its delegate just before it uses `cell` to draw a row, thereby permitting the delegate to customize the cell object before it is displayed. This method gives the delegate a chance to override state-based properties set earlier by the table view, such as selection and background color. After the delegate returns, the table view sets only the alpha and frame properties, and then only when animating rows as they slide in or out.

## See Also

### Related Documentation

- [tableView:cellForRowAtIndexPath:](../uitableviewdatasource/tableview%28__cellforrowat_%29.md): Asks the data source for a cell to insert in a particular location of the table view.
- [prepareForReuse](../uitableviewcell/prepareforreuse%28%29.md): Prepares a reusable cell for reuse by the table view’s delegate.

### Configuring rows for the table view

- [tableView:indentationLevelForRowAtIndexPath:](tableview%28__indentationlevelforrowat_%29.md): Asks the delegate to return the level of indentation for a row in a given section.
- [tableView:shouldSpringLoadRowAtIndexPath:withContext:](tableview%28__shouldspringloadrowat_with_%29.md): Called to let you fine tune the spring-loading behavior of the rows in a table.
