> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdatasource/tableview(_:sortdescriptorsdidchange:)](https://developer.apple.com/documentation/appkit/nstableviewdatasource/tableview(_:sortdescriptorsdidchange:))

# tableView(\_:sortDescriptorsDidChange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called by `aTableView` to indicate that sorting may need to be done.

## Declaration

```swift
@MainActor optional func tableView(_ tableView: NSTableView, sortDescriptorsDidChange oldDescriptors: [NSSortDescriptor])
```

## Parameters

- `tableView`: The table view that sent the message.
- `oldDescriptors`: An array that contains the previous descriptors.

<a id="Discussion"></a>

## Discussion

The data source typically sorts and reloads the data, and adjusts the selections accordingly. If you need to know the current sort descriptors and the data source doesn’t manage them itself, you can get the current sort descriptors by sending `aTableView` a [sortDescriptors](../nstableview/sortdescriptors.md) message.

# tableView:sortDescriptorsDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called by `aTableView` to indicate that sorting may need to be done.

## Declaration

```objectivec
- (void) tableView:(NSTableView *) tableView sortDescriptorsDidChange:(NSArray<NSSortDescriptor *> *) oldDescriptors;
```

## Parameters

- `tableView`: The table view that sent the message.
- `oldDescriptors`: An array that contains the previous descriptors.

<a id="Discussion"></a>

## Discussion

The data source typically sorts and reloads the data, and adjusts the selections accordingly. If you need to know the current sort descriptors and the data source doesn’t manage them itself, you can get the current sort descriptors by sending `aTableView` a [sortDescriptors](../nstableview/sortdescriptors.md) message.
