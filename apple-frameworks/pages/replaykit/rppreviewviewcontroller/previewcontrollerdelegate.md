> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rppreviewviewcontroller/previewcontrollerdelegate](https://developer.apple.com/documentation/replaykit/rppreviewviewcontroller/previewcontrollerdelegate)

# previewControllerDelegate (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The preview view controller’s delegate.

> Use SCRecordingEditor instead

## Declaration

```swift
weak var previewControllerDelegate: (any RPPreviewViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Before displaying the preview view controller, your app must set a delegate in order to respond to changes in the view controller. Implement the methods described in [RPPreviewViewControllerDelegate](../rppreviewviewcontrollerdelegate.md).

## See Also

### Displaying the Preview UI

- [mode](mode.md): Deprecated. The type of screen that appears when the view is presented.
- [RPPreviewViewControllerMode](../rppreviewviewcontrollermode.md): The modes used to determine whether the preview view controller or the share screen appears when editing a replay.
- [RPPreviewViewControllerDelegate](../rppreviewviewcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes to a screen-recording user interface.

# previewControllerDelegate (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The preview view controller’s delegate.

> Use SCRecordingEditor instead

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<RPPreviewViewControllerDelegate> previewControllerDelegate;
```

<a id="Discussion"></a>

## Discussion

Before displaying the preview view controller, your app must set a delegate in order to respond to changes in the view controller. Implement the methods described in [RPPreviewViewControllerDelegate](../rppreviewviewcontrollerdelegate.md).

## See Also

### Displaying the Preview UI

- [mode](mode.md): Deprecated. The type of screen that appears when the view is presented.
- [RPPreviewViewControllerMode](../rppreviewviewcontrollermode.md): The modes used to determine whether the preview view controller or the share screen appears when editing a replay.
- [RPPreviewViewControllerDelegate](../rppreviewviewcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes to a screen-recording user interface.
