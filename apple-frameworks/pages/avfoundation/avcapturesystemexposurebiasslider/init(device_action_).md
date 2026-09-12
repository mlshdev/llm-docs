> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesystemexposurebiasslider/init(device:action:)](https://developer.apple.com/documentation/avfoundation/avcapturesystemexposurebiasslider/init(device:action:))

# init(device:action:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a slider to control the exposure bias of the specified capture device with an action to respond to exposure bias changes.

## Declaration

```swift
init(device: AVCaptureDevice, action: @escaping @MainActor @Sendable (Float) -> Void)
```

## Parameters

- `device`: The capture device to control.
- `action`: An action the system calls on the main actor to handle changes to the device’s [exposureTargetBias](../avcapturedevice/exposuretargetbias.md) property.

<a id="Discussion"></a>

## Discussion

The system only calls the specified action when the exposure bias slider changes the device’s [videoZoomFactor](../avcapturedevice/videozoomfactor.md) property value. If you need to react to other sources of changes to the exposure target bias, use key-value observation instead.

> **Important**

>  Don’t change the capture device’s exposure target bias when the system calls the action.

## See Also

### Creating an exposure bias slider

- [init(device:)](init%28device_%29.md): Creates a slider to control the exposure bias of the specified capture device.

# initWithDevice:action: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a slider to control the exposure bias of the specified capture device with an action to respond to exposure bias changes.

## Declaration

```objectivec
- (instancetype) initWithDevice:(AVCaptureDevice *) device action:(void (^)(float)) action;
```

## Parameters

- `device`: The capture device to control.
- `action`: An action the system calls on the main actor to handle changes to the device’s [exposureTargetBias](../avcapturedevice/exposuretargetbias.md) property.

<a id="Discussion"></a>

## Discussion

The system only calls the specified action when the exposure bias slider changes the device’s [videoZoomFactor](../avcapturedevice/videozoomfactor.md) property value. If you need to react to other sources of changes to the exposure target bias, use key-value observation instead.

> **Important**

>  Don’t change the capture device’s exposure target bias when the system calls the action.

## See Also

### Creating an exposure bias slider

- [initWithDevice:](init%28device_%29.md): Creates a slider to control the exposure bias of the specified capture device.
