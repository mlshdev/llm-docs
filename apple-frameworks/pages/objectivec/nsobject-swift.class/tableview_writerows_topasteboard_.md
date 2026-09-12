> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/tableview:writerows:topasteboard:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/tableview:writerows:topasteboard:)

# tableView:writeRows:toPasteboard:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Writes the specified rows to the specified pasteboard.

> This method has been deprecated. You should implement [tableView:writeRowsWithIndexes:toPasteboard:](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview%28_:writerowswith:to:%29) instead.

## Declaration

```objectivec
- (BOOL) tableView:(NSTableView *) tableView writeRows:(NSArray *) rows toPasteboard:(NSPasteboard *) pboard;
```

## Parameters

- `tableView`: The table view.
- `rows`: An array of row indexes.
- `pboard`: The pasteboard.

<a id="return-value"></a>

## Return Value

Return [YES](../yes.md) to allow the drag: otherwise [NO](../no.md) to refuse the drag.

<a id="Discussion"></a>

## Discussion

Invoked by `aTableView` after it has been determined that a drag should begin, but before the drag has been started. To refuse the drag, return [NO](../no.md). To start a drag, return [YES](../yes.md) and place the drag data onto `pboard` (data, owner, and so on). The drag image and other drag-related information will be set up and provided by the table view once this call returns with [YES](../yes.md). `rows` is the list of row numbers that will be participating in the drag.
