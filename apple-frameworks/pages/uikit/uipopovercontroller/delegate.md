> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/delegate](https://developer.apple.com/documentation/uikit/uipopovercontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The delegate you want to receive popover controller messages.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
weak var delegate: (any UIPopoverControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The popover controller uses its delegate to determine whether it should dismiss the popover and provides a notification when such an event occurs. For more information about the methods you can implement in your delegate, see [UIPopoverControllerDelegate](../uipopovercontrollerdelegate.md).

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The delegate you want to receive popover controller messages.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPopoverControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The popover controller uses its delegate to determine whether it should dismiss the popover and provides a notification when such an event occurs. For more information about the methods you can implement in your delegate, see [UIPopoverControllerDelegate](../uipopovercontrollerdelegate.md).
