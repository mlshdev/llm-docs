> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/notblockdevice](https://developer.apple.com/documentation/system/errno/notblockdevice)

# notBlockDevice

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Not a block device.

## Declaration

```swift
static var notBlockDevice: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted a block device operation on a nonblock device or file.

The corresponding C error is `ENOTBLK`.

## See Also

### Device Errors

- [deviceError](deviceerror.md): Device error.
- [devicePowerIsOff](devicepowerisoff.md): Device power is off.
- [inappropriateIOCTLForDevice](inappropriateioctlfordevice.md): Inappropriate control function.
- [ioError](ioerror.md): Input/output error.
- [noSuchAddressOrDevice](nosuchaddressordevice.md): No such device or address.
- [operationNotSupportedByDevice](operationnotsupportedbydevice.md): Operation not supported by device.
