> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccelerometerdelegate](https://developer.apple.com/documentation/uikit/uiaccelerometerdelegate)

# UIAccelerometerDelegate

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Protocol

The interface for receiving acceleration-related data from the system.

> Use the [Core Motion](../coremotion.md) framework instead.

## Declaration

```objectivec
@protocol UIAccelerometerDelegate <NSObject>
```

## Topics

### Responding to acceleration events

- [accelerometer:didAccelerate:](uiaccelerometerdelegate/accelerometer_didaccelerate_.md): Deprecated. Delivers the latest acceleration data to the delegate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIAlertViewDelegate](uialertviewdelegate.md): Deprecated. The interface for the delegate of an alert view object.
- [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md): Deprecated. The interface for the delegate of a popover controller object.
- [UISearchDisplayDelegate](uisearchdisplaydelegate.md): Deprecated. The interface for the delegate of a search display controller.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.
