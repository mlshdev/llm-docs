> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/inappropriateioctlfordevice](https://developer.apple.com/documentation/system/errno/inappropriateioctlfordevice)

# inappropriateIOCTLForDevice

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Inappropriate control function.

## Declaration

```swift
static var inappropriateIOCTLForDevice: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted a control function that can’t be performed on the specified file or device. For information about control functions, see `ioctl(2)`.

The corresponding C error is `ENOTTY`.

## See Also

### Device Errors

- [deviceError](deviceerror.md): Device error.
- [devicePowerIsOff](devicepowerisoff.md): Device power is off.
- [ioError](ioerror.md): Input/output error.
- [noSuchAddressOrDevice](nosuchaddressordevice.md): No such device or address.
- [notBlockDevice](notblockdevice.md): Not a block device.
- [operationNotSupportedByDevice](operationnotsupportedbydevice.md): Operation not supported by device.
