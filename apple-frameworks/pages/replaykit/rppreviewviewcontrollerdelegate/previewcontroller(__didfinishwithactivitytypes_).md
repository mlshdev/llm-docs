> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rppreviewviewcontrollerdelegate/previewcontroller(_:didfinishwithactivitytypes:)](https://developer.apple.com/documentation/replaykit/rppreviewviewcontrollerdelegate/previewcontroller(_:didfinishwithactivitytypes:))

# previewController(\_:didFinishWithActivityTypes:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the preview view controller is ready to be dismissed with associated activity types.

> Use SCRecordingEditor instead

## Declaration

```swift
optional func previewController(_ previewController: RPPreviewViewController, didFinishWithActivityTypes activityTypes: Set<String>)
```

## Parameters

- `previewController`: The preview view controller to be dismissed.
- `activityTypes`: A set of activity types as listed in [UIActivity](../../uikit/uiactivity.md).

<a id="Discussion"></a>

## Discussion

When the user is finished making changes to a screen recording, your app is responsible for dismissing the view controller representing the user interface. Call [dismiss(animated:completion:)](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) after getting the message to dismiss the preview view controller.

## See Also

### Dismissing the View Controller

- [previewControllerDidFinish(\_:)](previewcontrollerdidfinish%28__%29.md): Deprecated. Indicates that the preview view controller is ready to be dismissed.

# previewController:didFinishWithActivityTypes: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the preview view controller is ready to be dismissed with associated activity types.

> Use SCRecordingEditor instead

## Declaration

```objectivec
- (void) previewController:(RPPreviewViewController *) previewController didFinishWithActivityTypes:(NSSet<NSString *> *) activityTypes;
```

## Parameters

- `previewController`: The preview view controller to be dismissed.
- `activityTypes`: A set of activity types as listed in [UIActivity](../../uikit/uiactivity.md).

<a id="Discussion"></a>

## Discussion

When the user is finished making changes to a screen recording, your app is responsible for dismissing the view controller representing the user interface. Call [dismissViewControllerAnimated:completion:](../../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) after getting the message to dismiss the preview view controller.

## See Also

### Dismissing the View Controller

- [previewControllerDidFinish:](previewcontrollerdidfinish%28__%29.md): Deprecated. Indicates that the preview view controller is ready to be dismissed.
