> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdelegate/tableview(_:didenddisplayingheaderview:forsection:)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/tableview(_:didenddisplayingheaderview:forsection:))

# tableView(\_:didEndDisplayingHeaderView:forSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the specified header view was removed from the table.

## Declaration

```swift
optional func tableView(_ tableView: UITableView, didEndDisplayingHeaderView view: UIView, forSection section: Int)
```

## Parameters

- `tableView`: The table view that removed the view.
- `view`: The header view that was removed.
- `section`: The index of the section that contained the header.

<a id="Discussion"></a>

## Discussion

Use this method to detect when a header view is removed from a table view, as opposed to monitoring the view itself to see when it appears or disappears.

## See Also

### Tracking the removal of views

- [tableView(\_:didEndDisplaying:forRowAt:)](tableview%28__didenddisplaying_forrowat_%29.md): Tells the delegate that the specified cell was removed from the table.
- [tableView(\_:didEndDisplayingFooterView:forSection:)](tableview%28__didenddisplayingfooterview_forsection_%29.md): Tells the delegate that the specified footer view was removed from the table.

# tableView:didEndDisplayingHeaderView:forSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the specified header view was removed from the table.

## Declaration

```objectivec
- (void) tableView:(UITableView *) tableView didEndDisplayingHeaderView:(UIView *) view forSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table view that removed the view.
- `view`: The header view that was removed.
- `section`: The index of the section that contained the header.

<a id="Discussion"></a>

## Discussion

Use this method to detect when a header view is removed from a table view, as opposed to monitoring the view itself to see when it appears or disappears.

## See Also

### Tracking the removal of views

- [tableView:didEndDisplayingCell:forRowAtIndexPath:](tableview%28__didenddisplaying_forrowat_%29.md): Tells the delegate that the specified cell was removed from the table.
- [tableView:didEndDisplayingFooterView:forSection:](tableview%28__didenddisplayingfooterview_forsection_%29.md): Tells the delegate that the specified footer view was removed from the table.
