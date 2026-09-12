> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/viewcontrollers](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/viewcontrollers)

# viewControllers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The array of view controllers the split view controller manages.

## Declaration

```swift
var viewControllers: [UIViewController] { get set }
```

<a id="Discussion"></a>

## Discussion

When the split view interface is expanded, this property contains two or three view controllers depending on the interface’s [style](style-swift.property.md). The first view controller in the array is the primary view controller. It’s followed by the supplementary (if present) and then the secondary view controller.

When the split view interface is collapsed, this property contains only one view controller. If a view controller is set for the [UISplitViewController.Column.compact](column/compact.md) column, this property contains that view controller. Otherwise, this property contains the primary view controller.

In a column-style split view controller, it’s recommended that you set the child view controllers using the [setViewController(\_:for:)](setviewcontroller%28__for_%29.md) method and get them using the [viewController(for:)](viewcontroller%28for_%29.md) method.

In a classic split view controller, you can use this property to assign the primary and secondary view controllers that you want to display initially. After the split view controller is onscreen, you can use this property to get the view controllers in the split view interface. After you assign the initial view controllers, it’s better to set the child view controllers using the [show(\_:sender:)](show%28__sender_%29.md) and [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md) methods. Although you can still change the view controllers in this property directly, you should do so only if you manually manage your app’s view controller transitions.

## See Also

### Related Documentation

- [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md): Presents the specified view controller as the secondary view controller of the split view interface.
- [show(\_:sender:)](show%28__sender_%29.md): Presents the specified view controller as the primary view controller in the split view interface.

### Managing the child view controllers

- [UISplitViewController.Column](column.md): Constants that describe the columns within the split view interface.
- [setViewController(\_:for:)](setviewcontroller%28__for_%29.md): Presents the provided view controller in the specified column of the split view interface.
- [viewController(for:)](viewcontroller%28for_%29.md): Returns the view controller associated with the specified column of the split view interface.

# viewControllers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The array of view controllers the split view controller manages.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<__kindof UIViewController *> * viewControllers;
```

<a id="Discussion"></a>

## Discussion

When the split view interface is expanded, this property contains two or three view controllers depending on the interface’s [style](style-swift.property.md). The first view controller in the array is the primary view controller. It’s followed by the supplementary (if present) and then the secondary view controller.

When the split view interface is collapsed, this property contains only one view controller. If a view controller is set for the [UISplitViewControllerColumnCompact](column/compact.md) column, this property contains that view controller. Otherwise, this property contains the primary view controller.

In a column-style split view controller, it’s recommended that you set the child view controllers using the [setViewController:forColumn:](setviewcontroller%28__for_%29.md) method and get them using the [viewControllerForColumn:](viewcontroller%28for_%29.md) method.

In a classic split view controller, you can use this property to assign the primary and secondary view controllers that you want to display initially. After the split view controller is onscreen, you can use this property to get the view controllers in the split view interface. After you assign the initial view controllers, it’s better to set the child view controllers using the [showViewController:sender:](show%28__sender_%29.md) and [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md) methods. Although you can still change the view controllers in this property directly, you should do so only if you manually manage your app’s view controller transitions.

## See Also

### Related Documentation

- [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md): Presents the specified view controller as the secondary view controller of the split view interface.
- [showViewController:sender:](show%28__sender_%29.md): Presents the specified view controller as the primary view controller in the split view interface.

### Managing the child view controllers

- [UISplitViewControllerColumn](column.md): Constants that describe the columns within the split view interface.
- [setViewController:forColumn:](setviewcontroller%28__for_%29.md): Presents the provided view controller in the specified column of the split view interface.
- [viewControllerForColumn:](viewcontroller%28for_%29.md): Returns the view controller associated with the specified column of the split view interface.
