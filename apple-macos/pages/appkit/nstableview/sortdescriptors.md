> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/sortdescriptors](https://developer.apple.com/documentation/appkit/nstableview/sortdescriptors)

# sortDescriptors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table view’s sort descriptors.

## Declaration

```swift
var sortDescriptors: [NSSortDescriptor] { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSSortDescriptor](https://developer.apple.com/documentation/foundation/nssortdescriptor) objects. A table column is considered sortable if it has a sort descriptor that specifies the sorting direction, a key to sort by, and a selector defining how to sort. Changing the value of this property may have the side effect of calling the [tableView(\_:sortDescriptorsDidChange:)](../nstableviewdatasource/tableview%28__sortdescriptorsdidchange_%29.md) method on the table view’s data source.

The contents of this property are archived and persisted along with other column information if autosave is enabled for the table.

# sortDescriptors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table view’s sort descriptors.

## Declaration

```objectivec
@property (copy) NSArray<NSSortDescriptor *> * sortDescriptors;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSSortDescriptor](https://developer.apple.com/documentation/foundation/nssortdescriptor) objects. A table column is considered sortable if it has a sort descriptor that specifies the sorting direction, a key to sort by, and a selector defining how to sort. Changing the value of this property may have the side effect of calling the [tableView:sortDescriptorsDidChange:](../nstableviewdatasource/tableview%28__sortdescriptorsdidchange_%29.md) method on the table view’s data source.

The contents of this property are archived and persisted along with other column information if autosave is enabled for the table.
