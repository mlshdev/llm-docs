> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasourceprefetching/tableview(_:cancelprefetchingforrowsat:)](https://developer.apple.com/documentation/uikit/uitableviewdatasourceprefetching/tableview(_:cancelprefetchingforrowsat:))

# tableView(\_:cancelPrefetchingForRowsAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Cancels a previously triggered data prefetch request.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, cancelPrefetchingForRowsAt indexPaths: [IndexPath])
```

## Parameters

- `tableView`: The table view issuing the cancellation of the prefetch request.
- `indexPaths`: The index paths of the items for which the data is no longer required.

<a id="Discussion"></a>

## Discussion

The table view calls this method on the main queue to cancel prefetch requests for cells that are no longer needed. Use this method to cancel operations initiated by a previous call to [tableView(\_:prefetchRowsAt:)](tableview%28__prefetchrowsat_%29.md).

For information about how to cancel an asynchronous data loading task, see [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091).

## See Also

### Fetching the row data

- [tableView(\_:prefetchRowsAt:)](tableview%28__prefetchrowsat_%29.md): Instructs your prefetch data source object to begin preparing data for the cells at the supplied index paths.

# tableView:cancelPrefetchingForRowsAtIndexPaths: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Cancels a previously triggered data prefetch request.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView cancelPrefetchingForRowsAtIndexPaths:(NSArray<NSIndexPath *> *) indexPaths;
```

## Parameters

- `tableView`: The table view issuing the cancellation of the prefetch request.
- `indexPaths`: The index paths of the items for which the data is no longer required.

<a id="Discussion"></a>

## Discussion

The table view calls this method on the main queue to cancel prefetch requests for cells that are no longer needed. Use this method to cancel operations initiated by a previous call to [tableView:prefetchRowsAtIndexPaths:](tableview%28__prefetchrowsat_%29.md).

For information about how to cancel an asynchronous data loading task, see [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091).

## See Also

### Fetching the row data

- [tableView:prefetchRowsAtIndexPaths:](tableview%28__prefetchrowsat_%29.md): Instructs your prefetch data source object to begin preparing data for the cells at the supplied index paths.
