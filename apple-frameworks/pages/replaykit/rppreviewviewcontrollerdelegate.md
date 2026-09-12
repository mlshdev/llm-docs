> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rppreviewviewcontrollerdelegate](https://developer.apple.com/documentation/replaykit/rppreviewviewcontrollerdelegate)

# RPPreviewViewControllerDelegate (Swift)

**Framework:** ReplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The protocol you implement to respond to changes to a screen-recording user interface.

> Use SCRecordingEditor instead

## Declaration

```swift
protocol RPPreviewViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use this class to respond to changes to a screen-recording user interface, represented by an [RPBroadcastActivityViewController](rpbroadcastactivityviewcontroller.md) object.

## Topics

### Dismissing the View Controller

- [previewControllerDidFinish(\_:)](rppreviewviewcontrollerdelegate/previewcontrollerdidfinish%28__%29.md): Deprecated. Indicates that the preview view controller is ready to be dismissed.
- [previewController(\_:didFinishWithActivityTypes:)](rppreviewviewcontrollerdelegate/previewcontroller%28__didfinishwithactivitytypes_%29.md): Deprecated. Indicates that the preview view controller is ready to be dismissed with associated activity types.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Displaying the Preview UI

- [mode](rppreviewviewcontroller/mode.md): Deprecated. The type of screen that appears when the view is presented.
- [RPPreviewViewControllerMode](rppreviewviewcontrollermode.md): The modes used to determine whether the preview view controller or the share screen appears when editing a replay.
- [previewControllerDelegate](rppreviewviewcontroller/previewcontrollerdelegate.md): Deprecated. The preview view controller’s delegate.

# RPPreviewViewControllerDelegate (Objective-C)

**Framework:** ReplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The protocol you implement to respond to changes to a screen-recording user interface.

> Use SCRecordingEditor instead

## Declaration

```objectivec
@protocol RPPreviewViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use this class to respond to changes to a screen-recording user interface, represented by an [RPBroadcastActivityViewController](rpbroadcastactivityviewcontroller.md) object.

## Topics

### Dismissing the View Controller

- [previewControllerDidFinish:](rppreviewviewcontrollerdelegate/previewcontrollerdidfinish%28__%29.md): Deprecated. Indicates that the preview view controller is ready to be dismissed.
- [previewController:didFinishWithActivityTypes:](rppreviewviewcontrollerdelegate/previewcontroller%28__didfinishwithactivitytypes_%29.md): Deprecated. Indicates that the preview view controller is ready to be dismissed with associated activity types.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Displaying the Preview UI

- [mode](rppreviewviewcontroller/mode.md): Deprecated. The type of screen that appears when the view is presented.
- [RPPreviewViewControllerMode](rppreviewviewcontrollermode.md): The modes used to determine whether the preview view controller or the share screen appears when editing a replay.
- [previewControllerDelegate](rppreviewviewcontroller/previewcontrollerdelegate.md): Deprecated. The preview view controller’s delegate.
