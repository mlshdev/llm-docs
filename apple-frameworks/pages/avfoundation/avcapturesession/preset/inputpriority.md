> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/preset/inputpriority](https://developer.apple.com/documentation/avfoundation/avcapturesession/preset/inputpriority)

# inputPriority (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A preset that doesn’t specify audio and video output settings for a capture session.

## Declaration

```swift
static let inputPriority: AVCaptureSession.Preset
```

<a id="Discussion"></a>

## Discussion

To enable capture settings not supported by any session presets (such as high frame rate), change the value of the [activeFormat](../../avcapturedevice/activeformat.md) property on the appropriate capture device. When you change the device’s format, the session preset automatically changes to this value, indicating that the [AVCaptureSession](../../avcapturesession.md) object has relinquished responsibility for configuring its inputs and outputs. (Instead, the capture device’s active format dictates the quality of service level provided at the outputs). To return to automatic configuration, use the session’s [sessionPreset](../sessionpreset.md) property to choose another preset.

# AVCaptureSessionPresetInputPriority (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A preset that doesn’t specify audio and video output settings for a capture session.

## Declaration

```objectivec
extern AVCaptureSessionPreset const AVCaptureSessionPresetInputPriority;
```

<a id="Discussion"></a>

## Discussion

To enable capture settings not supported by any session presets (such as high frame rate), change the value of the [activeFormat](../../avcapturedevice/activeformat.md) property on the appropriate capture device. When you change the device’s format, the session preset automatically changes to this value, indicating that the [AVCaptureSession](../../avcapturesession.md) object has relinquished responsibility for configuring its inputs and outputs. (Instead, the capture device’s active format dictates the quality of service level provided at the outputs). To return to automatic configuration, use the session’s [sessionPreset](../sessionpreset.md) property to choose another preset.
