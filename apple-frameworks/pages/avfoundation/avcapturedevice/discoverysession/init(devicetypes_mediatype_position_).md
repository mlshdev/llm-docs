> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/discoverysession/init(devicetypes:mediatype:position:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/discoverysession/init(devicetypes:mediatype:position:))

# init(deviceTypes:mediaType:position:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

Creates a discovery session that finds devices that match the specified criteria.

## Declaration

```swift
convenience init(deviceTypes: [AVCaptureDevice.DeviceType], mediaType: AVMediaType?, position: AVCaptureDevice.Position)
```

## Parameters

- `deviceTypes`: A list of device types to search for, such as [builtInWideAngleCamera](../devicetype-swift.struct/builtinwideanglecamera.md) and [builtInMicrophone](../devicetype-swift.struct/builtinmicrophone.md). The array must contain at least one valid [AVCaptureDevice.DeviceType](../devicetype-swift.struct.md) value.
- `mediaType`: The media type to capture, such as [video](../../avmediatype/video.md) or [audio](../../avmediatype/audio.md). Pass `nil` to search for devices regardless of supported media types.
- `position`: The position of capture device to search for, relative to system hardware (front- or back-facing). Pass [AVCaptureDevice.Position.unspecified](../position-swift.enum/unspecified.md) to search for devices regardless of position.

<a id="return-value"></a>

## Return Value

A new discovery session.

<a id="Discussion"></a>

## Discussion

After creating a discovery session, query its [devices](devices.md) property to examine matching devices and choose one for capture.

# discoverySessionWithDeviceTypes:mediaType:position: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

Creates a discovery session that finds devices that match the specified criteria.

## Declaration

```objectivec
+ (instancetype) discoverySessionWithDeviceTypes:(NSArray<NSString *> *) deviceTypes mediaType:(AVMediaType) mediaType position:(AVCaptureDevicePosition) position;
```

## Parameters

- `deviceTypes`: A list of device types to search for, such as [AVCaptureDeviceTypeBuiltInWideAngleCamera](../devicetype-swift.struct/builtinwideanglecamera.md) and [AVCaptureDeviceTypeBuiltInMicrophone](../devicetype-swift.struct/builtinmicrophone.md). The array must contain at least one valid [AVCaptureDeviceType](../devicetype-swift.struct.md) value.
- `mediaType`: The media type to capture, such as [AVMediaTypeVideo](../../avmediatype/video.md) or [AVMediaTypeAudio](../../avmediatype/audio.md). Pass `nil` to search for devices regardless of supported media types.
- `position`: The position of capture device to search for, relative to system hardware (front- or back-facing). Pass [AVCaptureDevicePositionUnspecified](../position-swift.enum/unspecified.md) to search for devices regardless of position.

<a id="return-value"></a>

## Return Value

A new discovery session.

<a id="Discussion"></a>

## Discussion

After creating a discovery session, query its [devices](devices.md) property to examine matching devices and choose one for capture.
