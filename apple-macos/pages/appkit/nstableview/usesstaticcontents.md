> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/usesstaticcontents](https://developer.apple.com/documentation/appkit/nstableview/usesstaticcontents)

# usesStaticContents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the table uses static data.

## Declaration

```swift
var usesStaticContents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A static table does not rely on a data source to provide the number of rows. A static table view’s contents are set at design time and can be changed programmatically as needed. Typically, you do not change the contents of a static table view after setting them.

In Xcode, any rows you add to a static table are saved in the corresponding nib or storyboard file and loaded with the rest of the table at runtime. You can add table rows programmatically to a static table view using the [insertRows(at:withAnimation:)](insertrows%28at_withanimation_%29.md) method. When adding rows programmatically, your table view delegate must implement the [tableView(\_:viewFor:row:)](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) method to provide the corresponding view for any new rows. You can also remove rows at any time using the [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md) method.

> **Note**

>  A table with static contents must be an [NSView](../nsview.md)-based table view.

## See Also

### Managing the Table’s Data

- [dataSource](datasource.md): The object that provides the data displayed by the table view.
- [reloadData()](reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
- [reloadData(forRowIndexes:columnIndexes:)](reloaddata%28forrowindexes_columnindexes_%29.md): Reloads the data for only the specified rows and columns.

# usesStaticContents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the table uses static data.

## Declaration

```objectivec
@property BOOL usesStaticContents;
```

<a id="Discussion"></a>

## Discussion

A static table does not rely on a data source to provide the number of rows. A static table view’s contents are set at design time and can be changed programmatically as needed. Typically, you do not change the contents of a static table view after setting them.

In Xcode, any rows you add to a static table are saved in the corresponding nib or storyboard file and loaded with the rest of the table at runtime. You can add table rows programmatically to a static table view using the [insertRowsAtIndexes:withAnimation:](insertrows%28at_withanimation_%29.md) method. When adding rows programmatically, your table view delegate must implement the [tableView:viewForTableColumn:row:](../nstableviewdelegate/tableview%28__viewfor_row_%29.md) method to provide the corresponding view for any new rows. You can also remove rows at any time using the [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md) method.

> **Note**

>  A table with static contents must be an [NSView](../nsview.md)-based table view.

## See Also

### Managing the Table’s Data

- [dataSource](datasource.md): The object that provides the data displayed by the table view.
- [reloadData](reloaddata%28%29.md): Marks the table view as needing redisplay, so it will reload the data for visible cells and draw the new values.
- [reloadDataForRowIndexes:columnIndexes:](reloaddata%28forrowindexes_columnindexes_%29.md): Reloads the data for only the specified rows and columns.
