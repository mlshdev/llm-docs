> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/tablefooterview](https://developer.apple.com/documentation/uikit/uitableview/tablefooterview)

# tableFooterView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that displays below the table’s content.

## Declaration

```swift
var tableFooterView: UIView? { get set }
```

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify a footer view for your entire table. The footer view is the last item to appear in the table’s view’s scrolling content, and it’s separate from the footer views you add to individual sections. The default value of this property is `nil`.

When assigning a view to this property, set the height of your view to a nonzero value. The table view respects only the height of your view’s frame rectangle; it adjusts the width of your footer view automatically to match the table view’s width.

## See Also

### Related Documentation

- [sectionFooterHeight](sectionfooterheight.md): The height of section footers in the table view.

### Configuring the table’s appearance

- [style](style-swift.property.md): The style of the table view.
- [UITableView.Style](style-swift.enum.md): Constants for the table view styles.
- [tableHeaderView](tableheaderview.md): The view that displays above the table’s content.
- [backgroundView](backgroundview.md): The background view of the table view.

# tableFooterView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that displays below the table’s content.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * tableFooterView;
```

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify a footer view for your entire table. The footer view is the last item to appear in the table’s view’s scrolling content, and it’s separate from the footer views you add to individual sections. The default value of this property is `nil`.

When assigning a view to this property, set the height of your view to a nonzero value. The table view respects only the height of your view’s frame rectangle; it adjusts the width of your footer view automatically to match the table view’s width.

## See Also

### Related Documentation

- [sectionFooterHeight](sectionfooterheight.md): The height of section footers in the table view.

### Configuring the table’s appearance

- [style](style-swift.property.md): The style of the table view.
- [UITableViewStyle](style-swift.enum.md): Constants for the table view styles.
- [tableHeaderView](tableheaderview.md): The view that displays above the table’s content.
- [backgroundView](backgroundview.md): The background view of the table view.
