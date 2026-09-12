> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/automaticdimension](https://developer.apple.com/documentation/uikit/uitableview/automaticdimension)

# automaticDimension (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A constant representing the default value for a given dimension.

## Declaration

```swift
class let automaticDimension: CGFloat
```

<a id="Discussion"></a>

## Discussion

Return this value from your table view’s delegate methods when you want the table view to choose a default value for the given dimension. For example, if you return this constant from [tableView(\_:heightForHeaderInSection:)](../uitableviewdelegate/tableview%28__heightforheaderinsection_%29.md) or [tableView(\_:heightForFooterInSection:)](../uitableviewdelegate/tableview%28__heightforfooterinsection_%29.md), the table view uses a height that fits the value returned from [tableView(\_:titleForHeaderInSection:)](../uitableviewdatasource/tableview%28__titleforheaderinsection_%29.md) or [tableView(\_:titleForFooterInSection:)](../uitableviewdatasource/tableview%28__titleforfooterinsection_%29.md), if the title is not `nil`.

## See Also

### Providing header, footer, and row heights

- [tableView(\_:heightForRowAt:)](../uitableviewdelegate/tableview%28__heightforrowat_%29.md): Asks the delegate for the height to use for a row in a specified location.
- [tableView(\_:heightForHeaderInSection:)](../uitableviewdelegate/tableview%28__heightforheaderinsection_%29.md): Asks the delegate for the height to use for the header of a particular section.
- [tableView(\_:heightForFooterInSection:)](../uitableviewdelegate/tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.

# UITableViewAutomaticDimension (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A constant representing the default value for a given dimension.

## Declaration

```objectivec
extern const CGFloat UITableViewAutomaticDimension;
```

<a id="Discussion"></a>

## Discussion

Return this value from your table view’s delegate methods when you want the table view to choose a default value for the given dimension. For example, if you return this constant from [tableView:heightForHeaderInSection:](../uitableviewdelegate/tableview%28__heightforheaderinsection_%29.md) or [tableView:heightForFooterInSection:](../uitableviewdelegate/tableview%28__heightforfooterinsection_%29.md), the table view uses a height that fits the value returned from [tableView:titleForHeaderInSection:](../uitableviewdatasource/tableview%28__titleforheaderinsection_%29.md) or [tableView:titleForFooterInSection:](../uitableviewdatasource/tableview%28__titleforfooterinsection_%29.md), if the title is not `nil`.

## See Also

### Providing header, footer, and row heights

- [tableView:heightForRowAtIndexPath:](../uitableviewdelegate/tableview%28__heightforrowat_%29.md): Asks the delegate for the height to use for a row in a specified location.
- [tableView:heightForHeaderInSection:](../uitableviewdelegate/tableview%28__heightforheaderinsection_%29.md): Asks the delegate for the height to use for the header of a particular section.
- [tableView:heightForFooterInSection:](../uitableviewdelegate/tableview%28__heightforfooterinsection_%29.md): Asks the delegate for the height to use for the footer of a particular section.
