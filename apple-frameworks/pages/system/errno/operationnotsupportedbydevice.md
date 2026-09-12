> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/operationnotsupportedbydevice](https://developer.apple.com/documentation/system/errno/operationnotsupportedbydevice)

# operationNotSupportedByDevice

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Operation not supported by device.

## Declaration

```swift
static var operationNotSupportedByDevice: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted to apply an inappropriate function to a device; for example, trying to read a write-only device such as a printer.

The corresponding C error is `ENODEV`.

## See Also

### Device Errors

- [deviceError](deviceerror.md): Device error.
- [devicePowerIsOff](devicepowerisoff.md): Device power is off.
- [inappropriateIOCTLForDevice](inappropriateioctlfordevice.md): Inappropriate control function.
- [ioError](ioerror.md): Input/output error.
- [noSuchAddressOrDevice](nosuchaddressordevice.md): No such device or address.
- [notBlockDevice](notblockdevice.md): Not a block device.
