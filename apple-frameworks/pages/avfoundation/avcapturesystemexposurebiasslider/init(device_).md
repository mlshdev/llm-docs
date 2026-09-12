> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesystemexposurebiasslider/init(device:)](https://developer.apple.com/documentation/avfoundation/avcapturesystemexposurebiasslider/init(device:))

# init(device:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a slider to control the exposure bias of the specified capture device.

## Declaration

```swift
init(device: AVCaptureDevice)
```

## Parameters

- `device`: The capture device to control.

<a id="Discussion"></a>

## Discussion

You can only create an exposure bias slider with a device that support’s setting its [exposureTargetBias](../avcapturedevice/exposuretargetbias.md) property value.

## See Also

### Creating an exposure bias slider

- [init(device:action:)](init%28device_action_%29.md): Creates a slider to control the exposure bias of the specified capture device with an action to respond to exposure bias changes.

# initWithDevice: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a slider to control the exposure bias of the specified capture device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(AVCaptureDevice *) device;
```

## Parameters

- `device`: The capture device to control.

<a id="Discussion"></a>

## Discussion

You can only create an exposure bias slider with a device that support’s setting its [exposureTargetBias](../avcapturedevice/exposuretargetbias.md) property value.

## See Also

### Creating an exposure bias slider

- [initWithDevice:action:](init%28device_action_%29.md): Creates a slider to control the exposure bias of the specified capture device with an action to respond to exposure bias changes.
