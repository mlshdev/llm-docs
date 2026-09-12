> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/ioerror](https://developer.apple.com/documentation/system/errno/ioerror)

# ioError

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Input/output error.

## Declaration

```swift
static var ioError: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

Some physical input or output error occurred. This error isn’t reported until you attempt a subsequent operation on the same file descriptor, and the error may be lost (overwritten) by subsequent errors.

The corresponding C error is `EIO`.

## See Also

### Device Errors

- [deviceError](deviceerror.md): Device error.
- [devicePowerIsOff](devicepowerisoff.md): Device power is off.
- [inappropriateIOCTLForDevice](inappropriateioctlfordevice.md): Inappropriate control function.
- [noSuchAddressOrDevice](nosuchaddressordevice.md): No such device or address.
- [notBlockDevice](notblockdevice.md): Not a block device.
- [operationNotSupportedByDevice](operationnotsupportedbydevice.md): Operation not supported by device.
