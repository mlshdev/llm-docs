> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcontroller/init(style:)](https://developer.apple.com/documentation/uikit/uitableviewcontroller/init(style:))

# init(style:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a table view controller to manage a table view of a given style.

## Declaration

```swift
init(style: UITableView.Style)
```

## Parameters

- `style`: A constant that specifies the style of table view that the controller object is to manage ([UITableView.Style.plain](../uitableview/style-swift.enum/plain.md) or [UITableView.Style.grouped](../uitableview/style-swift.enum/grouped.md)).

<a id="return-value"></a>

## Return Value

An initialized [UITableViewController](../uitableviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

If you use the standard `init` method to initialize a [UITableViewController](../uitableviewcontroller.md) object, a table view in the plain style is created.

## See Also

### Creating a table view controller

- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Creates a table view controller with the nib file in the specified bundle.
- [init(coder:)](init%28coder_%29.md): Creates a table view controller from data in an unarchiver.

# initWithStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a table view controller to manage a table view of a given style.

## Declaration

```objectivec
- (instancetype) initWithStyle:(UITableViewStyle) style;
```

## Parameters

- `style`: A constant that specifies the style of table view that the controller object is to manage ([UITableViewStylePlain](../uitableview/style-swift.enum/plain.md) or [UITableViewStyleGrouped](../uitableview/style-swift.enum/grouped.md)).

<a id="return-value"></a>

## Return Value

An initialized [UITableViewController](../uitableviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

If you use the standard `init` method to initialize a [UITableViewController](../uitableviewcontroller.md) object, a table view in the plain style is created.

## See Also

### Creating a table view controller

- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Creates a table view controller with the nib file in the specified bundle.
- [initWithCoder:](init%28coder_%29.md): Creates a table view controller from data in an unarchiver.
