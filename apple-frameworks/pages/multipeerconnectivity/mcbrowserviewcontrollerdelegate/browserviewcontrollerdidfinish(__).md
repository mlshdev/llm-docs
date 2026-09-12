> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontrollerdelegate/browserviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontrollerdelegate/browserviewcontrollerdidfinish(_:))

# browserViewControllerDidFinish(\_:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when the browser view controller is dismissed with peers connected in a session.

> Use Network Framework instead

## Declaration

```swift
func browserViewControllerDidFinish(_ browserViewController: MCBrowserViewController)
```

## Parameters

- `browserViewController`: The view controller that was dismissed.

<a id="Discussion"></a>

## Discussion

This call is intended to inform your app that the user has connected with nearby peers in a session and that the browser view controller has been dismissed. Upon receiving this delegate method call, your app must call [dismiss(animated:completion:)](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) to dismiss the view controller. Your app can also begin sending data to any connected peers, and should resume any UI updates that it may have temporarily suspended while the view controller was onscreen.

## See Also

### User Action Notifications

- [browserViewControllerWasCancelled(\_:)](browserviewcontrollerwascancelled%28__%29.md): Deprecated. Called when the user cancels the browser view controller.

# browserViewControllerDidFinish: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Called when the browser view controller is dismissed with peers connected in a session.

> Use Network Framework instead

## Declaration

```objectivec
- (void) browserViewControllerDidFinish:(MCBrowserViewController *) browserViewController;
```

## Parameters

- `browserViewController`: The view controller that was dismissed.

<a id="Discussion"></a>

## Discussion

This call is intended to inform your app that the user has connected with nearby peers in a session and that the browser view controller has been dismissed. Upon receiving this delegate method call, your app must call [dismissViewControllerAnimated:completion:](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) to dismiss the view controller. Your app can also begin sending data to any connected peers, and should resume any UI updates that it may have temporarily suspended while the view controller was onscreen.

## See Also

### User Action Notifications

- [browserViewControllerWasCancelled:](browserviewcontrollerwascancelled%28__%29.md): Deprecated. Called when the user cancels the browser view controller.
