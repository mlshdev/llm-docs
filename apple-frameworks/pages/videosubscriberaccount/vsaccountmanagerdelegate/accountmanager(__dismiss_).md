> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanagerdelegate/accountmanager(_:dismiss:)](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanagerdelegate/accountmanager(_:dismiss:))

# accountManager(\_:dismiss:) (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to dismiss an authentication view controller.

## Declaration

```swift
func accountManager(_ accountManager: VSAccountManager, dismiss viewController: UIViewController)
```

## Parameters

- `accountManager`: The account manager instance that requests to dismiss the authentication view controller.
- `viewController`: The view controller that your app must dismiss.

<a id="Discussion"></a>

## Discussion

The system calls this method when the `VideoSubscriberAccount` framework requires your app to dismiss an authentication view controller. You must use [dismiss(animated:completion:)](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) to dismiss the view controller before returning from this method.

# accountManager:dismissViewController: (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to dismiss an authentication view controller.

## Declaration

```objectivec
- (void) accountManager:(VSAccountManager *) accountManager dismissViewController:(UIViewController *) viewController;
```

## Parameters

- `accountManager`: The account manager instance that requests to dismiss the authentication view controller.
- `viewController`: The view controller that your app must dismiss.

<a id="Discussion"></a>

## Discussion

The system calls this method when the `VideoSubscriberAccount` framework requires your app to dismiss an authentication view controller. You must use [dismissViewControllerAnimated:completion:](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) to dismiss the view controller before returning from this method.
