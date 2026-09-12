> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rppreviewviewcontrollerdelegate/previewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/replaykit/rppreviewviewcontrollerdelegate/previewcontrollerdidfinish(_:))

# previewControllerDidFinish(\_:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the preview view controller is ready to be dismissed.

> Use SCRecordingEditor instead

## Declaration

```swift
optional func previewControllerDidFinish(_ previewController: RPPreviewViewController)
```

## Parameters

- `previewController`: The preview view controller to be dismissed.

<a id="Discussion"></a>

## Discussion

When the user is finished making changes to a screen recording, your app is responsible for dismissing the view controller representing the user interface. Call [dismiss(animated:completion:)](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) after getting the message to dismiss the preview view controller.

## See Also

### Dismissing the View Controller

- [previewController(\_:didFinishWithActivityTypes:)](previewcontroller%28__didfinishwithactivitytypes_%29.md): Deprecated. Indicates that the preview view controller is ready to be dismissed with associated activity types.

# previewControllerDidFinish: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the preview view controller is ready to be dismissed.

> Use SCRecordingEditor instead

## Declaration

```objectivec
- (void) previewControllerDidFinish:(RPPreviewViewController *) previewController;
```

## Parameters

- `previewController`: The preview view controller to be dismissed.

<a id="Discussion"></a>

## Discussion

When the user is finished making changes to a screen recording, your app is responsible for dismissing the view controller representing the user interface. Call [dismissViewControllerAnimated:completion:](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) after getting the message to dismiss the preview view controller.

## See Also

### Dismissing the View Controller

- [previewController:didFinishWithActivityTypes:](previewcontroller%28__didfinishwithactivitytypes_%29.md): Deprecated. Indicates that the preview view controller is ready to be dismissed with associated activity types.
