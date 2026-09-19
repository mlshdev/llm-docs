> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/isexposuremodesupported(_:)

# isExposureModeSupported(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether a device supports the specified exposure mode.

## Declaration

```swift
func isExposureModeSupported(_ exposureMode: AVCaptureDevice.ExposureMode) -> Bool
```

## Parameters

- `exposureMode`: An exposure mode to query.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `exposureMode` is supported; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the exposure mode

- [exposureMode](exposuremode-swift.property.md): The exposure mode for the device.
- [AVCaptureDevice.ExposureMode](exposuremode-swift.enum.md): Constants that specify the exposure mode of a capture device.

# isExposureModeSupported: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether a device supports the specified exposure mode.

## Declaration

```objectivec
- (BOOL) isExposureModeSupported:(AVCaptureExposureMode) exposureMode;
```

## Parameters

- `exposureMode`: An exposure mode to query.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `exposureMode` is supported; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the exposure mode

- [exposureMode](exposuremode-swift.property.md): The exposure mode for the device.
- [AVCaptureExposureMode](exposuremode-swift.enum.md): Constants that specify the exposure mode of a capture device.
