> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/isvideostabilizationmodesupported(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isvideostabilizationmodesupported(_:))

# isVideoStabilizationModeSupported(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports a given video stabilization mode.

## Declaration

```swift
func isVideoStabilizationModeSupported(_ videoStabilizationMode: AVCaptureVideoStabilizationMode) -> Bool
```

## Parameters

- `videoStabilizationMode`: The stabilization mode to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if video stabilization is supported; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining video stabilization support

- [AVCaptureVideoStabilizationMode](../../avcapturevideostabilizationmode.md): An enumeration of video stabilization modes that capture devices and formats support.

# isVideoStabilizationModeSupported: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports a given video stabilization mode.

## Declaration

```objectivec
- (BOOL) isVideoStabilizationModeSupported:(AVCaptureVideoStabilizationMode) videoStabilizationMode;
```

## Parameters

- `videoStabilizationMode`: The stabilization mode to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if video stabilization is supported; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining video stabilization support

- [AVCaptureVideoStabilizationMode](../../avcapturevideostabilizationmode.md): An enumeration of video stabilization modes that capture devices and formats support.
