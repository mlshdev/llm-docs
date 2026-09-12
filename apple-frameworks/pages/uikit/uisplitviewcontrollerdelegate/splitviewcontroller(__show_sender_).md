> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:show:sender:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:show:sender:))

# splitViewController(\_:show:sender:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if it will do the work of displaying a view controller in the primary position of the split view interface.

## Declaration

```swift
optional func splitViewController(_ splitViewController: UISplitViewController, show vc: UIViewController, sender: Any?) -> Bool
```

## Parameters

- `splitViewController`: The split view controller whose primary view controller is being updated.
- `vc`: The view controller being displayed in the primary position.
- `sender`: The object that made the request.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you handled the presentation of the view controller, or [false](https://developer.apple.com/documentation/swift/false) if you want the split view controller to do it.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When its [show(\_:sender:)](../uisplitviewcontroller/show%28__sender_%29.md) method is called, the split view controller calls this method to see if your delegate will handle the presentation of the specified view controller. If you implement this method and your implementation returns [true](https://developer.apple.com/documentation/swift/true), you are responsible for presenting the specified view controller in the primary position of the split view interface. The split view controller does nothing more to try to show the view controller.

If you don’t implement this method or if your implementation returns [false](https://developer.apple.com/documentation/swift/false), the split view controller presents the view controller.

## See Also

### Overriding the presentation behavior

- [splitViewController(\_:showDetail:sender:)](splitviewcontroller%28__showdetail_sender_%29.md): Asks the delegate if it will do the work of displaying a view controller in the secondary position of the split view interface.

# splitViewController:showViewController:sender: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if it will do the work of displaying a view controller in the primary position of the split view interface.

## Declaration

```objectivec
- (BOOL) splitViewController:(UISplitViewController *) splitViewController showViewController:(UIViewController *) vc sender:(id) sender;
```

## Parameters

- `splitViewController`: The split view controller whose primary view controller is being updated.
- `vc`: The view controller being displayed in the primary position.
- `sender`: The object that made the request.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you handled the presentation of the view controller, or [false](https://developer.apple.com/documentation/swift/false) if you want the split view controller to do it.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

When its [showViewController:sender:](../uisplitviewcontroller/show%28__sender_%29.md) method is called, the split view controller calls this method to see if your delegate will handle the presentation of the specified view controller. If you implement this method and your implementation returns [true](https://developer.apple.com/documentation/swift/true), you are responsible for presenting the specified view controller in the primary position of the split view interface. The split view controller does nothing more to try to show the view controller.

If you don’t implement this method or if your implementation returns [false](https://developer.apple.com/documentation/swift/false), the split view controller presents the view controller.

## See Also

### Overriding the presentation behavior

- [splitViewController:showDetailViewController:sender:](splitviewcontroller%28__showdetail_sender_%29.md): Asks the delegate if it will do the work of displaying a view controller in the secondary position of the split view interface.
