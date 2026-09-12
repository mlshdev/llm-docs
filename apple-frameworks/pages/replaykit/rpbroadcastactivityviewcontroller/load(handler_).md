> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastactivityviewcontroller/load(handler:)](https://developer.apple.com/documentation/replaykit/rpbroadcastactivityviewcontroller/load(handler:))

# load(handler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Loads a broadcast activity view controller.

> No longer supported

## Declaration

```swift
class func load(handler: @escaping (RPBroadcastActivityViewController?, (any Error)?) -> Void)
```

## Parameters

- `handler`: A block that is called after the view controller is loaded.

  - **`broadcastActivityViewController`**: The `RPBroadcastActivityViewController` to be presented.
  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes specific to ReplayKit.

<a id="Discussion"></a>

## Discussion

Present the view controller using [present(\_:animated:completion:)](../../uikit/uiviewcontroller/present%28__animated_completion_%29.md). Dismiss the view controller when the delegate’s [broadcastActivityViewController(\_:didFinishWith:error:)](../rpbroadcastactivityviewcontrollerdelegate/broadcastactivityviewcontroller%28__didfinishwith_error_%29.md) method is called.

> **Note**

>  On the iPad, the default presentation style for view controllers is a popover. For an instance of `RPBroadcastActivityViewController` to present properly on iPad, insure the popover presentation controller’s [sourceRect](../../uikit/uipopoverpresentationcontroller/sourcerect.md) and [sourceView](../../uikit/uipopoverpresentationcontroller/sourceview.md) are configured.

## See Also

### Presenting the Broadcast Activity UI

- [load(withPreferredExtension:handler:)](load%28withpreferredextension_handler_%29.md): Deprecated. Loads a broadcast activity view controller with a preferred extension.

# loadBroadcastActivityViewControllerWithHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Loads a broadcast activity view controller.

> No longer supported

## Declaration

```objectivec
+ (void) loadBroadcastActivityViewControllerWithHandler:(void (^)(RPBroadcastActivityViewController *broadcastActivityViewController, NSError *error)) handler;
```

## Parameters

- `handler`: A block that is called after the view controller is loaded.

  - **`broadcastActivityViewController`**: The `RPBroadcastActivityViewController` to be presented.
  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes specific to ReplayKit.

<a id="Discussion"></a>

## Discussion

Present the view controller using [presentViewController:animated:completion:](../../uikit/uiviewcontroller/present%28__animated_completion_%29.md). Dismiss the view controller when the delegate’s [broadcastActivityViewController:didFinishWithBroadcastController:error:](../rpbroadcastactivityviewcontrollerdelegate/broadcastactivityviewcontroller%28__didfinishwith_error_%29.md) method is called.

> **Note**

>  On the iPad, the default presentation style for view controllers is a popover. For an instance of `RPBroadcastActivityViewController` to present properly on iPad, insure the popover presentation controller’s [sourceRect](../../uikit/uipopoverpresentationcontroller/sourcerect.md) and [sourceView](../../uikit/uipopoverpresentationcontroller/sourceview.md) are configured.

## See Also

### Presenting the Broadcast Activity UI

- [loadBroadcastActivityViewControllerWithPreferredExtension:handler:](load%28withpreferredextension_handler_%29.md): Deprecated. Loads a broadcast activity view controller with a preferred extension.
