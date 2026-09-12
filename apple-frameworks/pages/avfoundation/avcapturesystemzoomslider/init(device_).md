> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesystemzoomslider/init(device:)](https://developer.apple.com/documentation/avfoundation/avcapturesystemzoomslider/init(device:))

# init(device:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a slider to control the video zoom factor of a capture device.

## Declaration

```swift
init(device: AVCaptureDevice)
```

## Parameters

- `device`: The capture device to control.

<a id="Discussion"></a>

## Discussion

You can only create a zoom slider with a device that support’s setting its [videoZoomFactor](../avcapturedevice/videozoomfactor.md) property value.

## See Also

### Creating a zoom slider

- [init(device:action:)](init%28device_action_%29.md): Creates a slider to control the zoom level of the specified capture device with an action to respond to zoom changes.

# initWithDevice: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Creates a slider to control the video zoom factor of a capture device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(AVCaptureDevice *) device;
```

## Parameters

- `device`: The capture device to control.

<a id="Discussion"></a>

## Discussion

You can only create a zoom slider with a device that support’s setting its [videoZoomFactor](../avcapturedevice/videozoomfactor.md) property value.

## See Also

### Creating a zoom slider

- [initWithDevice:action:](init%28device_action_%29.md): Creates a slider to control the zoom level of the specified capture device with an action to respond to zoom changes.
