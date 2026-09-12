> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/backgroundview](https://developer.apple.com/documentation/uikit/uitableview/backgroundview)

# backgroundView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background view of the table view.

## Declaration

```swift
var backgroundView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a background view to change the color behind your table’s sections and rows. The default value of this property is `nil`.

When you assign a view to this property, the table view automatically resizes that view to match its own bounds. Your background view appears behind all cells, header views, and footer views and doesn’t scroll with the rest of the table’s content.

## See Also

### Configuring the table’s appearance

- [style](style-swift.property.md): The style of the table view.
- [UITableView.Style](style-swift.enum.md): Constants for the table view styles.
- [tableHeaderView](tableheaderview.md): The view that displays above the table’s content.
- [tableFooterView](tablefooterview.md): The view that displays below the table’s content.

# backgroundView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background view of the table view.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * backgroundView;
```

<a id="Discussion"></a>

## Discussion

Assign a background view to change the color behind your table’s sections and rows. The default value of this property is `nil`.

When you assign a view to this property, the table view automatically resizes that view to match its own bounds. Your background view appears behind all cells, header views, and footer views and doesn’t scroll with the rest of the table’s content.

## See Also

### Configuring the table’s appearance

- [style](style-swift.property.md): The style of the table view.
- [UITableViewStyle](style-swift.enum.md): Constants for the table view styles.
- [tableHeaderView](tableheaderview.md): The view that displays above the table’s content.
- [tableFooterView](tablefooterview.md): The view that displays below the table’s content.
