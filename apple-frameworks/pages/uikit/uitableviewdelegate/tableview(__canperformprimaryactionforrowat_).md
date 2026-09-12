> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:canperformprimaryactionforrowat:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:canperformprimaryactionforrowat:))

# tableView(\_:canPerformPrimaryActionForRowAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Asks the delegate whether to perform a primary action for the row at the specified index path.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, canPerformPrimaryActionForRowAt indexPath: IndexPath) -> Bool
```

## Parameters

- `tableView`: The table view object asking whether to perform a primary action.
- `indexPath`: The index path of the row.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the primary action can be performed; otherwise, [false](https://developer.apple.com/documentation/swift/false). If you don’t implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true) when the table view isn’t in an editing state, and [false](https://developer.apple.com/documentation/swift/false) when it is.

<a id="Discussion"></a>

## Discussion

Primary actions allow you to distinguish between a distinct user action and a change in selection (like a focus change or other indirect selection change). A primary action occurs when a person selects a single row without extending an existing selection.

UIKit calls this method before [tableView(\_:performPrimaryActionForRowAt:)](tableview%28__performprimaryactionforrowat_%29.md).

## See Also

### Performing primary actions

- [tableView(\_:performPrimaryActionForRowAt:)](tableview%28__performprimaryactionforrowat_%29.md): Tells the delegate to perform the primary action for the row at the specified index path.

# tableView:canPerformPrimaryActionForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Asks the delegate whether to perform a primary action for the row at the specified index path.

## Declaration

```objectivec
- (BOOL) tableView:(UITableView *) tableView canPerformPrimaryActionForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `tableView`: The table view object asking whether to perform a primary action.
- `indexPath`: The index path of the row.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the primary action can be performed; otherwise, [false](https://developer.apple.com/documentation/swift/false). If you don’t implement this method, the default return value is [true](https://developer.apple.com/documentation/swift/true) when the table view isn’t in an editing state, and [false](https://developer.apple.com/documentation/swift/false) when it is.

<a id="Discussion"></a>

## Discussion

Primary actions allow you to distinguish between a distinct user action and a change in selection (like a focus change or other indirect selection change). A primary action occurs when a person selects a single row without extending an existing selection.

UIKit calls this method before [tableView:performPrimaryActionForRowAtIndexPath:](tableview%28__performprimaryactionforrowat_%29.md).

## See Also

### Performing primary actions

- [tableView:performPrimaryActionForRowAtIndexPath:](tableview%28__performprimaryactionforrowat_%29.md): Tells the delegate to perform the primary action for the row at the specified index path.
