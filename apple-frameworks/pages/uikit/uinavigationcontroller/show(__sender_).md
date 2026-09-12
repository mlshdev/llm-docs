> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/show(_:sender:)](https://developer.apple.com/documentation/uikit/uinavigationcontroller/show(_:sender:))

# show(\_:sender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Presents the specified view controller in the navigation interface.

## Declaration

```swift
func show(_ vc: UIViewController, sender: Any?)
```

## Parameters

- `vc`: The view controller to display.
- `sender`: The object that made the request to show the view controller.

<a id="Discussion"></a>

## Discussion

This method pushes `vc` onto the navigation stack in a similar way as the [pushViewController(\_:animated:)](pushviewcontroller%28__animated_%29.md) method. You can call this method directly if you want but typically this method is called from elsewhere in the view controller hierarchy when a new view controller needs to be shown.

The Show segue uses this method to display a new view controller.

# showViewController:sender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Presents the specified view controller in the navigation interface.

## Declaration

```objectivec
- (void) showViewController:(UIViewController *) vc sender:(id) sender;
```

## Parameters

- `vc`: The view controller to display.
- `sender`: The object that made the request to show the view controller.

<a id="Discussion"></a>

## Discussion

This method pushes `vc` onto the navigation stack in a similar way as the [pushViewController:animated:](pushviewcontroller%28__animated_%29.md) method. You can call this method directly if you want but typically this method is called from elsewhere in the view controller hierarchy when a new view controller needs to be shown.

The Show segue uses this method to display a new view controller.
