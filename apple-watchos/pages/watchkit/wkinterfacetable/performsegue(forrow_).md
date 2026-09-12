> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/performsegue(forrow:)](https://developer.apple.com/documentation/watchkit/wkinterfacetable/performsegue(forrow:))

# performSegue(forRow:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Performs the segue for the specified row.

## Declaration

```swift
func performSegue(forRow row: Int)
```

## Parameters

- `row`: The index of the row.

<a id="Discussion"></a>

## Discussion

This method lets you programmatically transition to a new interface controller. It triggers the segue defined in your storyboard file for the specified row controller.

While similar to the [WKInterfaceController](../wkinterfacecontroller.md) class’s [pushController(withName:context:)](../wkinterfacecontroller/pushcontroller%28withname_context_%29.md) method, this method supports Item Pagination . If Item Pagination is enabled, you must use this method when programmatically navigating through a table’s hierarchy. For more information on Item Pagination, see [Support Item Pagination](../wkinterfacetable.md#Support-Item-Pagination).

# performSegueForRow: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Performs the segue for the specified row.

## Declaration

```objectivec
- (void) performSegueForRow:(NSInteger) row;
```

## Parameters

- `row`: The index of the row.

<a id="Discussion"></a>

## Discussion

This method lets you programmatically transition to a new interface controller. It triggers the segue defined in your storyboard file for the specified row controller.

While similar to the [WKInterfaceController](../wkinterfacecontroller.md) class’s [pushControllerWithName:context:](../wkinterfacecontroller/pushcontroller%28withname_context_%29.md) method, this method supports Item Pagination . If Item Pagination is enabled, you must use this method when programmatically navigating through a table’s hierarchy. For more information on Item Pagination, see [Support Item Pagination](../wkinterfacetable.md#Support-Item-Pagination).
