> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/delegate](https://developer.apple.com/documentation/uikit/uitableview/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that acts as the delegate of the table view.

## Declaration

```swift
weak var delegate: (any UITableViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UITableViewDelegate](../uitableviewdelegate.md) protocol. The delegate isn’t retained.

## See Also

### Related Documentation

- [dataSource](datasource.md): The object that acts as the data source of the table view.

### Managing interactions with the table

- [UITableViewDelegate](../uitableviewdelegate.md): Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that acts as the delegate of the table view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITableViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UITableViewDelegate](../uitableviewdelegate.md) protocol. The delegate isn’t retained.

## See Also

### Related Documentation

- [dataSource](datasource.md): The object that acts as the data source of the table view.

### Managing interactions with the table

- [UITableViewDelegate](../uitableviewdelegate.md): Methods for managing selections, configuring section headers and footers, deleting and reordering cells, and performing other actions in a table view.
