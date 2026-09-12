> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/deviceerror](https://developer.apple.com/documentation/system/errno/deviceerror)

# deviceError

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Device error.

## Declaration

```swift
static var deviceError: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A device error has occurred; for example, a printer running out of paper.

The corresponding C error is `EDEVERR`.

## See Also

### Device Errors

- [devicePowerIsOff](devicepowerisoff.md): Device power is off.
- [inappropriateIOCTLForDevice](inappropriateioctlfordevice.md): Inappropriate control function.
- [ioError](ioerror.md): Input/output error.
- [noSuchAddressOrDevice](nosuchaddressordevice.md): No such device or address.
- [notBlockDevice](notblockdevice.md): Not a block device.
- [operationNotSupportedByDevice](operationnotsupportedbydevice.md): Operation not supported by device.
