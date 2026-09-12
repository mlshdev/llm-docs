> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/nosuchaddressordevice](https://developer.apple.com/documentation/system/errno/nosuchaddressordevice)

# noSuchAddressOrDevice

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

No such device or address.

## Declaration

```swift
static var noSuchAddressOrDevice: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

Input or output on a special file referred to a device that didn’t exist, or made a request beyond the limits of the device. This error may also occur when, for example, a tape drive isn’t online or when there isn’t a disk pack loaded on a drive.

The corresponding C error is `ENXIO`.

## See Also

### Device Errors

- [deviceError](deviceerror.md): Device error.
- [devicePowerIsOff](devicepowerisoff.md): Device power is off.
- [inappropriateIOCTLForDevice](inappropriateioctlfordevice.md): Inappropriate control function.
- [ioError](ioerror.md): Input/output error.
- [notBlockDevice](notblockdevice.md): Not a block device.
- [operationNotSupportedByDevice](operationnotsupportedbydevice.md): Operation not supported by device.
