> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:pasteboardwriterforrow:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:pasteboardwriterforrow:))

# tableView(\_:pasteboardWriterForRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Called to allow the table to support multiple item dragging.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, pasteboardWriterForRow row: Int) -> (any NSPasteboardWriting)?
```

## Parameters

- `tableView`: The table view.
- `row`: The row.

<a id="return-value"></a>

## Return Value

Returns an instance of [NSPasteboardItem](../nspasteboarditem.md) or a custom object that implements the [NSPasteboardWriting](../nspasteboardwriting.md) protocol. Returning `nil` excludes the row from being dragged.

<a id="Discussion"></a>

## Discussion

This method is required for multi-image dragging.

If this method is implemented, then [tableView(\_:writeRowsWith:to:)](tableview%28__writerowswith_to_%29.md) will not be called.

# tableView:pasteboardWriterForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Called to allow the table to support multiple item dragging.

## Declaration

```objectivec
- (id<NSPasteboardWriting>) tableView:(NSTableView *) tableView pasteboardWriterForRow:(NSInteger) row;
```

## Parameters

- `tableView`: The table view.
- `row`: The row.

<a id="return-value"></a>

## Return Value

Returns an instance of [NSPasteboardItem](../nspasteboarditem.md) or a custom object that implements the [NSPasteboardWriting](../nspasteboardwriting.md) protocol. Returning `nil` excludes the row from being dragged.

<a id="Discussion"></a>

## Discussion

This method is required for multi-image dragging.

If this method is implemented, then [tableView:writeRowsWithIndexes:toPasteboard:](tableview%28__writerowswith_to_%29.md) will not be called.
