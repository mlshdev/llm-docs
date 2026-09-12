> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontrollerdelegate/browserviewcontrollerwascancelled(_:)](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontrollerdelegate/browserviewcontrollerwascancelled(_:))

# browserViewControllerWasCancelled(\_:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when the user cancels the browser view controller.

> Use Network Framework instead

## Declaration

```swift
func browserViewControllerWasCancelled(_ browserViewController: MCBrowserViewController)
```

## Parameters

- `browserViewController`: The browser view controller that was canceled.

<a id="Discussion"></a>

## Discussion

This call is intended to inform your app that the view controller has been dismissed because the user canceled the discovery process and is no longer interested in creating a communication session.

When your app receives this delegate method call, your app must call [dismiss(animated:completion:)](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) to dismiss the view controller. Then, your app should handle the cancelation in whatever way is appropriate for your app, and then resume any UI updates that it may have temporarily suspended while the view controller was onscreen.

## See Also

### User Action Notifications

- [browserViewControllerDidFinish(\_:)](browserviewcontrollerdidfinish%28__%29.md): Deprecated. Called when the browser view controller is dismissed with peers connected in a session.

# browserViewControllerWasCancelled: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when the user cancels the browser view controller.

> Use Network Framework instead

## Declaration

```objectivec
- (void) browserViewControllerWasCancelled:(MCBrowserViewController *) browserViewController;
```

## Parameters

- `browserViewController`: The browser view controller that was canceled.

<a id="Discussion"></a>

## Discussion

This call is intended to inform your app that the view controller has been dismissed because the user canceled the discovery process and is no longer interested in creating a communication session.

When your app receives this delegate method call, your app must call [dismissViewControllerAnimated:completion:](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) to dismiss the view controller. Then, your app should handle the cancelation in whatever way is appropriate for your app, and then resume any UI updates that it may have temporarily suspended while the view controller was onscreen.

## See Also

### User Action Notifications

- [browserViewControllerDidFinish:](browserviewcontrollerdidfinish%28__%29.md): Deprecated. Called when the browser view controller is dismissed with peers connected in a session.
