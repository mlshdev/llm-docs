> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesystemzoomslider/init(device:action:)](https://developer.apple.com/documentation/avfoundation/avcapturesystemzoomslider/init(device:action:))

# init(device:action:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a slider to control the zoom level of the specified capture device with an action to respond to zoom changes.

## Declaration

```swift
init(device: AVCaptureDevice, action: @escaping @MainActor @Sendable (CGFloat) -> Void)
```

## Parameters

- `device`: The capture device to control.
- `action`: An action the system calls on the main actor to respond to changes to the device’s [videoZoomFactor](../avcapturedevice/videozoomfactor.md) property.

<a id="Discussion"></a>

## Discussion

The system calls the specified action only when the zoom slider changes the device’s [videoZoomFactor](../avcapturedevice/videozoomfactor.md) property value. If your app needs to react to other sources of video zoom factor changes like [ramp(toVideoZoomFactor:withRate:)](../avcapturedevice/ramp%28tovideozoomfactor_withrate_%29.md), use key-value observation instead.

> **Important**

>  Don’t change the capture device’s video zoom factor when the system calls the action.

## See Also

### Creating a zoom slider

- [init(device:)](init%28device_%29.md): Creates a slider to control the video zoom factor of a capture device.

# initWithDevice:action: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a slider to control the zoom level of the specified capture device with an action to respond to zoom changes.

## Declaration

```objectivec
- (instancetype) initWithDevice:(AVCaptureDevice *) device action:(void (^)(double)) action;
```

## Parameters

- `device`: The capture device to control.
- `action`: An action the system calls on the main actor to respond to changes to the device’s [videoZoomFactor](../avcapturedevice/videozoomfactor.md) property.

<a id="Discussion"></a>

## Discussion

The system calls the specified action only when the zoom slider changes the device’s [videoZoomFactor](../avcapturedevice/videozoomfactor.md) property value. If your app needs to react to other sources of video zoom factor changes like [rampToVideoZoomFactor:withRate:](../avcapturedevice/ramp%28tovideozoomfactor_withrate_%29.md), use key-value observation instead.

> **Important**

>  Don’t change the capture device’s video zoom factor when the system calls the action.

## See Also

### Creating a zoom slider

- [initWithDevice:](init%28device_%29.md): Creates a slider to control the video zoom factor of a capture device.
