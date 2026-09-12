> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/viewcontroller(for:)](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/viewcontroller(for:))

# viewController(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the view controller associated with the specified column of the split view interface.

## Declaration

```swift
func viewController(for column: UISplitViewController.Column) -> UIViewController?
```

## Parameters

- `column`: The corresponding column of the split view interface. See [UISplitViewController.Column](column.md) for values.

<a id="return-value"></a>

## Return Value

The corresponding child view controller object.

<a id="Discussion"></a>

## Discussion

This method doesn’t apply to classic split view controllers with a [style](style-swift.property.md) of [UISplitViewController.Style.unspecified](style-swift.enum/unspecified.md). For a classic split view controller, instead use the [viewControllers](viewcontrollers.md) property to get the view controllers in the split view interface.

## See Also

### Managing the child view controllers

- [UISplitViewController.Column](column.md): Constants that describe the columns within the split view interface.
- [setViewController(\_:for:)](setviewcontroller%28__for_%29.md): Presents the provided view controller in the specified column of the split view interface.
- [viewControllers](viewcontrollers.md): The array of view controllers the split view controller manages.

# viewControllerForColumn: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the view controller associated with the specified column of the split view interface.

## Declaration

```objectivec
- (UIViewController *) viewControllerForColumn:(UISplitViewControllerColumn) column;
```

## Parameters

- `column`: The corresponding column of the split view interface. See [UISplitViewControllerColumn](column.md) for values.

<a id="return-value"></a>

## Return Value

The corresponding child view controller object.

<a id="Discussion"></a>

## Discussion

This method doesn’t apply to classic split view controllers with a [style](style-swift.property.md) of [UISplitViewControllerStyleUnspecified](style-swift.enum/unspecified.md). For a classic split view controller, instead use the [viewControllers](viewcontrollers.md) property to get the view controllers in the split view interface.

## See Also

### Managing the child view controllers

- [UISplitViewControllerColumn](column.md): Constants that describe the columns within the split view interface.
- [setViewController:forColumn:](setviewcontroller%28__for_%29.md): Presents the provided view controller in the specified column of the split view interface.
- [viewControllers](viewcontrollers.md): The array of view controllers the split view controller manages.
