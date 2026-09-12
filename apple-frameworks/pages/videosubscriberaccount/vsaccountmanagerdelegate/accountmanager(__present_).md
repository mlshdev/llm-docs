> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanagerdelegate/accountmanager(_:present:)](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanagerdelegate/accountmanager(_:present:))

# accountManager(\_:present:) (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to present an authentication view controller.

## Declaration

```swift
func accountManager(_ accountManager: VSAccountManager, present viewController: UIViewController)
```

## Parameters

- `accountManager`: The account manager instance that requests the authentication view controller.
- `viewController`: The view controller your app must present to the user.

<a id="Discussion"></a>

## Discussion

The system calls this method when the `VideoSubscriberAccount` framework requires your app to present an authentication view controller. You must use [present(\_:animated:completion:)](../../uikit/uiviewcontroller/present%28__animated_completion_%29.md) to present the view controller before returning from this method.

# accountManager:presentViewController: (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to present an authentication view controller.

## Declaration

```objectivec
- (void) accountManager:(VSAccountManager *) accountManager presentViewController:(UIViewController *) viewController;
```

## Parameters

- `accountManager`: The account manager instance that requests the authentication view controller.
- `viewController`: The view controller your app must present to the user.

<a id="Discussion"></a>

## Discussion

The system calls this method when the `VideoSubscriberAccount` framework requires your app to present an authentication view controller. You must use [presentViewController:animated:completion:](../../uikit/uiviewcontroller/present%28__animated_completion_%29.md) to present the view controller before returning from this method.
