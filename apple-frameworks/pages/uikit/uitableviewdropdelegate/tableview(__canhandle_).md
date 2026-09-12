> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropdelegate/tableview(_:canhandle:)](https://developer.apple.com/documentation/uikit/uitableviewdropdelegate/tableview(_:canhandle:))

# tableView(\_:canHandle:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks your delegate whether it can accept the specified type of data.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, canHandle session: any UIDropSession) -> Bool
```

## Parameters

- `tableView`: The table view that’s attempting to handle the drop.
- `session`: The drop session object containing information about the data being dragged.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the table view can accept the dragged data, or [false](https://developer.apple.com/documentation/swift/false) if it can’t.

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

Implement this method when you want to dynamically determine whether to accept dropped data in your table view. In your implementation, check the type of the dragged data and return a Boolean value indicating whether you can accept the drop. For example, you might call the [hasItemsConforming(toTypeIdentifiers:)](../uidragdropsession/hasitemsconforming%28totypeidentifiers_%29.md) method of the session object to determine whether it contains data that your app can accept.

If you don’t implement this method, the table view assumes a return value of [true](https://developer.apple.com/documentation/swift/true). If you return [false](https://developer.apple.com/documentation/swift/false) from this method, the table view doesn’t call any more methods of your drop delegate for the given session.

# tableView:canHandleDropSession: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks your delegate whether it can accept the specified type of data.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView canHandleDropSession:(id<UIDropSession>) session;
```

## Parameters

- `tableView`: The table view that’s attempting to handle the drop.
- `session`: The drop session object containing information about the data being dragged.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the table view can accept the dragged data, or [false](https://developer.apple.com/documentation/swift/false) if it can’t.

## Mentioned In

- [Supporting drag and drop in table views](../supporting-drag-and-drop-in-table-views.md)

<a id="Discussion"></a>

## Discussion

Implement this method when you want to dynamically determine whether to accept dropped data in your table view. In your implementation, check the type of the dragged data and return a Boolean value indicating whether you can accept the drop. For example, you might call the [hasItemsConformingToTypeIdentifiers:](../uidragdropsession/hasitemsconforming%28totypeidentifiers_%29.md) method of the session object to determine whether it contains data that your app can accept.

If you don’t implement this method, the table view assumes a return value of [true](https://developer.apple.com/documentation/swift/true). If you return [false](https://developer.apple.com/documentation/swift/false) from this method, the table view doesn’t call any more methods of your drop delegate for the given session.
