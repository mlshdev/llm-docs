> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/hide(_:)](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/hide(_:))

# hide(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Dismisses the view controller in the specified column of the split view interface.

## Declaration

```swift
func hide(_ column: UISplitViewController.Column)
```

## Parameters

- `column`: The corresponding column of the split view interface to hide. See [UISplitViewController.Column](column.md) for values.

<a id="Discussion"></a>

## Discussion

When you call this method, the split view interface transitions to the closest display mode available for the current split behavior where the specified column is hidden.

This method does not support hiding the [UISplitViewController.Column.secondary](column/secondary.md) column.

After you call this method, you can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Displaying the child view controllers

- [show(\_:)](show%28__%29.md): Presents the view controller in the specified column of the split view interface.
- [isShowing(\_:)](isshowing%28__%29.md): A Boolean value that indicates whether the split view interface is showing the specified column.
- [show(\_:sender:)](show%28__sender_%29.md): Presents the specified view controller as the primary view controller in the split view interface.
- [showDetailViewController(\_:sender:)](showdetailviewcontroller%28__sender_%29.md): Presents the specified view controller as the secondary view controller of the split view interface.

# hideColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Dismisses the view controller in the specified column of the split view interface.

## Declaration

```objectivec
- (void) hideColumn:(UISplitViewControllerColumn) column;
```

## Parameters

- `column`: The corresponding column of the split view interface to hide. See [UISplitViewControllerColumn](column.md) for values.

<a id="Discussion"></a>

## Discussion

When you call this method, the split view interface transitions to the closest display mode available for the current split behavior where the specified column is hidden.

This method does not support hiding the [UISplitViewControllerColumnSecondary](column/secondary.md) column.

After you call this method, you can use the split view controller’s [transitionCoordinator](../uiviewcontroller/transitioncoordinator.md) to coordinate any of your animations alongside the transition animation.

## See Also

### Displaying the child view controllers

- [showColumn:](show%28__%29.md): Presents the view controller in the specified column of the split view interface.
- [isShowingColumn:](isshowing%28__%29.md): A Boolean value that indicates whether the split view interface is showing the specified column.
- [showViewController:sender:](show%28__sender_%29.md): Presents the specified view controller as the primary view controller in the split view interface.
- [showDetailViewController:sender:](showdetailviewcontroller%28__sender_%29.md): Presents the specified view controller as the secondary view controller of the split view interface.
