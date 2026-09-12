> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:indentationlevelforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:indentationlevelforrowat:))

# tableView(\_:indentationLevelForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate to return the level of indentation for a row in a given section.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, indentationLevelForRowAt indexPath: IndexPath) -> Int
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path locating the row in `tableView`.

<a id="return-value"></a>

## Return Value

Returns the depth of the specified row to show its hierarchical position in the section.

## See Also

### Configuring rows for the table view

- [tableView(\_:willDisplay:forRowAt:)](tableview%28__willdisplay_forrowat_%29.md): Tells the delegate the table view is about to draw a cell for a particular row.
- [tableView(\_:shouldSpringLoadRowAt:with:)](tableview%28__shouldspringloadrowat_with_%29.md): Called to let you fine tune the spring-loading behavior of the rows in a table.

# tableView:indentationLevelForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate to return the level of indentation for a row in a given section.

## Declaration

```objectivec
- (NSInteger) tableView:(UITableView *) tableView indentationLevelForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view requesting this information.
- `indexPath`: An index path locating the row in `tableView`.

<a id="return-value"></a>

## Return Value

Returns the depth of the specified row to show its hierarchical position in the section.

## See Also

### Configuring rows for the table view

- [tableView:willDisplayCell:forRowAtIndexPath:](tableview%28__willdisplay_forrowat_%29.md): Tells the delegate the table view is about to draw a cell for a particular row.
- [tableView:shouldSpringLoadRowAtIndexPath:withContext:](tableview%28__shouldspringloadrowat_with_%29.md): Called to let you fine tune the spring-loading behavior of the rows in a table.
