> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/init(device:)](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/init(device:))

# init(device:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Creates an input for the specified capture device.

## Declaration

```swift
init(device: AVCaptureDevice) throws
```

## Parameters

- `device`: A device from which to capture media.

# initWithDevice:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Creates an input for the specified capture device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(AVCaptureDevice *) device error:(NSError **) outError;
```

## Parameters

- `device`: A device from which to capture media.
- `outError`: An error pointer. If an error occurs during initialization, the system populates it with an error object that describes the failure.

## See Also

### Creating an input

- [deviceInputWithDevice:error:](deviceinputwithdevice_error_.md): Returns a new input for the specified capture device.
