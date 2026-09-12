> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/iswhitebalancemodesupported(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/iswhitebalancemodesupported(_:))

# isWhiteBalanceModeSupported(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether the device supports the specified white balance mode.

## Declaration

```swift
func isWhiteBalanceModeSupported(_ whiteBalanceMode: AVCaptureDevice.WhiteBalanceMode) -> Bool
```

## Parameters

- `whiteBalanceMode`: A white balance mode to use.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the white balance mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring automatic white balance

- [whiteBalanceMode](whitebalancemode-swift.property.md): The current white balance mode.
- [AVCaptureDevice.WhiteBalanceMode](whitebalancemode-swift.enum.md): Constants to specify the white balance mode of a capture device.

# isWhiteBalanceModeSupported: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether the device supports the specified white balance mode.

## Declaration

```objectivec
- (BOOL) isWhiteBalanceModeSupported:(AVCaptureWhiteBalanceMode) whiteBalanceMode;
```

## Parameters

- `whiteBalanceMode`: A white balance mode to use.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the white balance mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring automatic white balance

- [whiteBalanceMode](whitebalancemode-swift.property.md): The current white balance mode.
- [AVCaptureWhiteBalanceMode](whitebalancemode-swift.enum.md): Constants to specify the white balance mode of a capture device.
