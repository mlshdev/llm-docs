> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecellview/objectvalue](https://developer.apple.com/documentation/appkit/nstablecellview/objectvalue)

# objectValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The object that represents the cell data.

## Declaration

```swift
var objectValue: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

The `objectValue` is automatically set by the table when using bindings or is the object returned by the [NSTableViewDataSource](../nstableviewdatasource.md) protocol method [tableView(\_:objectValueFor:row:)](../nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md).

## See Also

### Related Documentation

- [tableView(\_:objectValueFor:row:)](../nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md): Called by the table view to return the data object associated with the specified row and column.
- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [Table View](../table-view.md): Display custom data in rows and columns.

# objectValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The object that represents the cell data.

## Declaration

```objectivec
@property (strong, nullable) id objectValue;
```

<a id="Discussion"></a>

## Discussion

The `objectValue` is automatically set by the table when using bindings or is the object returned by the [NSTableViewDataSource](../nstableviewdatasource.md) protocol method [tableView:objectValueForTableColumn:row:](../nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md).

## See Also

### Related Documentation

- [tableView:objectValueForTableColumn:row:](../nstableviewdatasource/tableview%28__objectvaluefor_row_%29.md): Called by the table view to return the data object associated with the specified row and column.
- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [Table View](../table-view.md): Display custom data in rows and columns.
